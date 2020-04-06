import "package:flutter/material.dart";
import 'package:youthforchrist/widgets/form.dart';

class Edit extends StatefulWidget {
  @override
  _EditState createState() => _EditState();
}

class _EditState extends State<Edit> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blueAccent[700],
        title: Text("Edit Profile"),
      ),
      body: Center(
        child: Formy(profile:true,initialValue: ModalRoute.of(context).settings.arguments,),
      ),
    );
  }
}
