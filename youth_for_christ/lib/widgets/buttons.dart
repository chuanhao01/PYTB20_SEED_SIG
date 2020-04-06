import "package:flutter/material.dart";

class PrimaryButton extends StatelessWidget {
  Function onPressed;
  String text;
  bool disabled;
  PrimaryButton({this.onPressed, this.text,this.disabled});

  Widget build(BuildContext context) {
    return Container(
      height: 40.0,
      width: 150.0,
      child: RaisedButton(
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(8),
        ),
        color: Colors.blueAccent,
        disabledColor: Colors.blueAccent[100],
        onPressed: disabled? null: onPressed,
        child: Text(
          text,
          style: TextStyle(color: Colors.white, fontSize: 18),
        ),
      ),
    );
  }
}

class Hyperlinks extends StatelessWidget {
  String text;
  String hyperlink;
  String page;
  Hyperlinks({this.text,this.hyperlink,this.page});
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.fromLTRB(0, 20, 0, 0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Text(
            text
          ),
          GestureDetector(
            onTap: () {
              Navigator.pushReplacementNamed(context, "/$page");
            },
            child: Text(
              hyperlink,
              style: TextStyle(
                  color: Colors.blueAccent,
                  decoration: TextDecoration.underline),
            ),
          )
        ],
      ),
    );
  }
}
