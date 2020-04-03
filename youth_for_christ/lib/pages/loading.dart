import "package:flutter/material.dart";
import "package:flutter_spinkit/flutter_spinkit.dart";

class Loading extends StatefulWidget {
  @override
  _LoadingState createState() => _LoadingState();
}

void getData(context){
  Future.delayed(
    Duration(seconds: 2),
      (){
      Navigator.pushReplacementNamed(context, "/login");
      }
  );
}
class _LoadingState extends State<Loading> {
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    getData(context);
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
