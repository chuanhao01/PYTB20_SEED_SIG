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

  void login()async{
    String text = _snacks.text;
    Response response = slave.getMethod("get")(text);
    if(response.statusCode == 200){
      slave.checkCookies(response);
      Navigator.of(context).pushReplacementNamed("/");
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
