
import 'dart:convert';

import "package:flutter/material.dart";
import "package:flutter_spinkit/flutter_spinkit.dart";
import 'package:http/http.dart';
import 'package:progress_dialog/progress_dialog.dart';
import "package:youthforchrist/services/networkboi.dart";
import "package:uni_links/uni_links.dart";
import 'package:youthforchrist/services/storage.dart';
class Loading extends StatefulWidget {
  @override
  _LoadingState createState() => _LoadingState();
}




class _LoadingState extends State<Loading> {
  Future<List> getEvents()async{
    ProgressDialog loading = new ProgressDialog(context);
    HttpSlave slave = new HttpSlave(cookies: true);
    loading.style(
      message: "Loading events",
      borderRadius: 8.0,
      backgroundColor: Colors.white,
      progressWidget: CircularProgressIndicator(),
      elevation: 10.0,
      insetAnimCurve: Curves.easeInOut,

    );
    loading.show();
    Response response = await slave.getMethod("get")("http://192.168.43.22:8000/api/events");
    loading.hide();
    if(response != null){
      if(response.statusCode == 500){
        return null;
      }
      else if(response.statusCode == 200){
        slave.checkCookies(response);
        return jsonDecode(response.body);
      }
    }
    else{
      return  null;
    }

  }
  void pingServer(context)async{
    bool bang = await HttpSlave().isAlive();
    if (bang){
      SecureStorage storage = new SecureStorage();
      try{
        storage.get("access_token");
        storage.get("refresh_token");
        List details = await getEvents();
        if(details == null){
          Scaffold.of(context).showSnackBar(new SnackBar(content: Text("An error occured")));
        }
        else{
          Navigator.pushReplacementNamed(context, "/events",arguments: {"details":details,"email":""});
        }
      }catch (Error){
        Navigator.of(context).pushReplacementNamed("/login");
      }

    }
  }
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    pingServer(context);

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
