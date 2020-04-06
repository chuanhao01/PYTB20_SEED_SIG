import "package:flutter/material.dart";

class Titlee extends StatelessWidget {
  String text;
  Titlee({this.text});
  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.bottomLeft,
      child: Text(
        text,
        style: TextStyle(
            color: Colors.grey[700],
            fontWeight: FontWeight.w700,
            fontSize: 20
        ),
      ),
    );
  }
}

class Details extends StatelessWidget {
  String text;
  Details({this.text});
  @override
  Widget build(BuildContext context) {
    return Align(
      alignment:Alignment.bottomLeft,
      child: Text(
        text,
        style: TextStyle(
            color: Colors.grey,
            fontSize: 16
        ),
        textAlign: TextAlign.start,
      ),
    );
  }
}

class TitleDetails extends StatelessWidget {
  String title;
  String details;
  TitleDetails({this.title,this.details});
  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Titlee(text:title),
        SizedBox(height: 7),
        Details(text:details),
        SizedBox(height: 12),
      ],
    );
  }
}

