import "package:flutter/material.dart";
import 'package:intl/date_symbol_data_local.dart';
import "package:youthforchrist/widgets/buttons.dart";
import "package:youthforchrist/widgets/form.dart";

class Register extends StatefulWidget {
  @override
  _RegisterState createState() => _RegisterState();
}

class _RegisterState extends State<Register> {
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    initializeDateFormatting();
  }
  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: _onBackPressed,
      child: Scaffold(
          body: Center(
              child: SingleChildScrollView(
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
              margin: EdgeInsets.fromLTRB(0, 0, 0, 35),
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
            Formy(bday: DateTime.now(),),
            Hyperlinks(text: "Have an account already?",hyperlink: "Login!",page: "login",),
          ],
        ),
      ))),
    );
  }
  Future<bool> _onBackPressed(){
    Navigator.pushReplacementNamed(context, "/login");
  }
}
