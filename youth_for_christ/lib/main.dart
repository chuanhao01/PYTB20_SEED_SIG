import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import "package:youthforchrist/pages/loading.dart";
import 'package:youthforchrist/pages/login.dart';
import "package:youthforchrist/pages/events.dart";
import "package:youthforchrist/pages/register.dart";
import "package:youthforchrist/pages/description.dart";
import "package:youthforchrist/pages/profile.dart";
void main() {
  SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle(
    statusBarColor: Colors.transparent,
  ));
  runApp(MaterialApp(debugShowCheckedModeBanner: false, routes: {
    "/": (context) => Loading(),
    "/login": (context) => Login(),
//    "/settings": (context) => Settings(),
    "/description": (context) => Description(),
    "/events": (context) => Events(),
    "/register":(context) => Register(),
    "/profile": (context) => Profile()
  }));
}
