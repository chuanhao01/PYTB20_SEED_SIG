import "package:flutter/material.dart";
import "package:flutter_secure_storage/flutter_secure_storage.dart";

class Login extends StatefulWidget {
  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<Login> {
  RegExp regex = new RegExp(r"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
      caseSensitive: false, multiLine: false);
  final  _email = GlobalKey<FormState>();
  bool disableButton = true;
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
                        decoration: InputDecoration(
                            border: OutlineInputBorder(borderRadius: BorderRadius.circular(8.0)), labelText: "Email:"),
                        validator: (value) {
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
                    Container(
                      height: 40.0,
                      width: 150.0,
                      child: RaisedButton(
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(8),
                        ),
                        color: Colors.blueAccent,
                        onPressed: () {
                          if(_email.currentState.validate()) {
                            Navigator.pushReplacementNamed(context, "/events");
                          }
                        },
                        child: Text(
                          "Login",
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 18
                          ),
                        ),
                      ),
                    )
                  ],
                ),
              ),
              Container(
                margin: EdgeInsets.fromLTRB(0, 20, 0, 0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Text(
                      "Don't have an account yet? ",
                    ),
                    GestureDetector(
                      onTap: () {
                        Navigator.pushReplacementNamed(context, "/register");
                      },
                      child: Text(
                        "Sign up!",
                        style: TextStyle(
                            color: Colors.blueAccent,
                            decoration: TextDecoration.underline),
                      ),
                    )
                  ],
                ),
              ),
            ])));
  }
}