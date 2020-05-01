import "package:flutter/material.dart";
import "package:flutter_spinkit/flutter_spinkit.dart";
import "package:dart_ping/dart_ping.dart";
import "package:youthforchrist/services/networkboi.dart";
class Loading extends StatefulWidget {
  @override
  _LoadingState createState() => _LoadingState();
}

void pingServer(context)async{
  bool bang = await HttpSlave().isAlive();
  if (bang){
    Navigator.of(context).pushReplacementNamed("/login");
  }
}
class _LoadingState extends State<Loading> {
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
  }
  @override
  Widget build(BuildContext context) {
    pingServer(context);
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
                margin: EdgeInsets.fromLTRB(0, 0, 0, 15),
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
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Container(
                    margin: EdgeInsets.fromLTRB(0, 0, 10, 0),
                    child: SpinKitRing(
                      color: Colors.grey[500],
                      size: 40.0,
                      duration: Duration(milliseconds: 1000),
                    ),
                  ),
                  Text(
                    "Connecting to server",
                    style: TextStyle(
                      fontSize: 15,
                      color: Colors.grey[600]
                    ),
                  )
                ],
              ),
            ],
          ),
        ));
  }
}
