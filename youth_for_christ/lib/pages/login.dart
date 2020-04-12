import 'dart:convert';

import "package:flutter/material.dart";
import "package:flutter_secure_storage/flutter_secure_storage.dart";
import 'package:progress_dialog/progress_dialog.dart';
import 'package:youthforchrist/services/storage.dart';
import 'package:youthforchrist/widgets/buttons.dart';
import "package:youthforchrist/services/networkboi.dart";
import "package:http/http.dart" as http;
class Login extends StatefulWidget {
  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<Login> {
  RegExp regex = new RegExp(r"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
      caseSensitive: false, multiLine: false);
  final  _email = GlobalKey<FormState>();
  TextEditingController _mail = TextEditingController();
  bool disableButton = true;
  SecureStorage _storage = new SecureStorage();
  HttpSlave slave = new HttpSlave();
  @override

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
    http.Response response = await slave.getMethod("get")("http://192.168.1.7:8000/api/events");
    loading.hide();
    if(response.statusCode == 500){
      return null;
    }
    else if(response.statusCode == 200){
      return jsonDecode(response.body);
    }
  }



  login()async{
    List details = await getEvents();
    if(details == null){
      Scaffold.of(context).showSnackBar(new SnackBar(content: Text("An error occured")));
    }
    else{
      Navigator.pushReplacementNamed(context, "/events",arguments: details);
    }


//    if(_email.currentState.validate()) {
//      Map<String, String> details = await _storage.getDetails();
//      if(details["email"] == username){
//        Navigator.pushReplacementNamed(context, "/events",arguments: details);
//      }
//      else{
//        showDialog(
//            context: context,
//            barrierDismissible: true,
//            child: AlertDialog(
//                title: Text("Warning"),
//                content: Text("Wrong email!"),
//                actions: <Widget>[
//                  FlatButton(
//                    onPressed: (){Navigator.of(context,rootNavigator: true).pop("dialog");},
//                    child: Text("Ok"),
//                  )
//                ]));
//      }
//
//    }
  }

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
                      style:
                          TextStyle(fontWeight: FontWeight.w600, fontSize: 38),
                    ),
                    Text(
                      "CHRIST",
                      style:
                          TextStyle(fontWeight: FontWeight.w300, fontSize: 38),
                    ),
                  ],
                ),
              ),
              Form(
                key: _email,
                child: Column(
                  children: <Widget>[
                    Container(
                      margin: EdgeInsets.fromLTRB(0, 0, 0, 20),
                      width: 350,
                      child: TextFormField(
                        controller: _mail,
                        decoration: InputDecoration(
                            border: OutlineInputBorder(borderRadius: BorderRadius.circular(8.0)), labelText: "Email:"),
                        validator: (value){
                          _email.currentState.reset();
                          if (value.isEmpty) {
                            return "Please fill in this field!";
                          } else if (!regex.hasMatch(value)) {
                            return "Please enter a valid email address!";
                          }
                          return null;
                        },
                      ),
                    ),
                    PrimaryButton(onPressed: login,text:"Login",disabled: false,),
                  ],
                ),
              ),
              Hyperlinks(text: "Don't have an account yet?",hyperlink: "Sign up!",page: "register",),
            ])));
  }
}