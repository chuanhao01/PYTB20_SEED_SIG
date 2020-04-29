import "package:flutter/material.dart";

class Success extends StatelessWidget {
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
                  "A link has been sent to your email for you to login! Please press on that link to complete the login process!",
                  style: TextStyle(fontWeight: FontWeight.w300, fontSize: 16),
                  textAlign: TextAlign.center,
                )
          ])),
    );
  }
}
