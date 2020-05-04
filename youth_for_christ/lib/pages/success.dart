import 'dart:convert';

import "package:flutter/material.dart";
import 'package:http/http.dart';
import 'package:progress_dialog/progress_dialog.dart';
import 'package:youthforchrist/services/networkboi.dart';
import 'package:youthforchrist/widgets/buttons.dart';

class Success extends StatefulWidget {
  @override
  _SuccessState createState() => _SuccessState();
}

class _SuccessState extends State<Success> {
  final GlobalKey<FormState> _cookie = new GlobalKey();
  TextEditingController _snacks = new TextEditingController();
  HttpSlave slave = new HttpSlave();

  Future<List> getEvents()async{
    ProgressDialog loading = new ProgressDialog(context);
    loading.style(
      message: "Loading events",
      borderRadius: 8.0,
      backgroundColor: Colors.white,
      progressWidget: CircularProgressIndicator(),
      elevation: 10.0,
      insetAnimCurve: Curves.easeInOut,

    );
    loading.show();
    Response response = await slave.getMethod("get")("http://192.168.43.22:8000/api/events");
    loading.hide();
    if(response != null){
      if(response.statusCode == 500){
        return null;
      }
      else if(response.statusCode == 200){
        return jsonDecode(response.body);
      }
    }
    else{
      return  null;
    }

  }

  void login()async{
    String text = _snacks.text;
    Response response = slave.getMethod("get")(text);
    if(response.statusCode == 200){

      List details = await getEvents();
      if(details == null){
        Scaffold.of(context).showSnackBar(new SnackBar(content: Text("An error occured")));
      }
      else{
        Navigator.pushReplacementNamed(context, "/events",arguments: {"details":details,"email":""});
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Center(
          child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text(
                  "SINGAPORE ",
                  style: TextStyle(fontWeight: FontWeight.w600, fontSize: 38),
                ),
                Text(
                  "YOUTH",
                  style: TextStyle(fontWeight: FontWeight.w300, fontSize: 38),
                ),
              ],
            ),
            Container(
              margin: EdgeInsets.fromLTRB(0, 0, 0, 20),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Text(
                    "FOR ",
                    style: TextStyle(fontWeight: FontWeight.w600, fontSize: 38),
                  ),
                  Text(
                    "CHRIST",
                    style: TextStyle(fontWeight: FontWeight.w300, fontSize: 38),
                  ),
                ],
              ),
            ),
                Text(
                  "An access code has been sent to your email for you to login! Please press on that link to complete the login process!",
                  style: TextStyle(fontWeight: FontWeight.w300, fontSize: 16),
                  textAlign: TextAlign.center,
                ),
                Form(
                  key: _cookie,
                  child: Column(
                    children: <Widget>[
                      Container(
                        margin: EdgeInsets.fromLTRB(0, 0, 0, 20),
                        width: 350,
                        child: TextFormField(
                          controller: _snacks,
                          decoration: InputDecoration(
                              border: OutlineInputBorder(borderRadius: BorderRadius.circular(8.0)), labelText: "Email:"),
                          validator: (value){
                            if (value.isEmpty) {
                              return "Please fill in this field!";
                            }
                            return null;
                          },
                        ),
                      ),
                      PrimaryButton(onPressed: login,text:"Login",disabled: false,),
                    ],
                  ),
                ),

          ])),
    );
  }
}
