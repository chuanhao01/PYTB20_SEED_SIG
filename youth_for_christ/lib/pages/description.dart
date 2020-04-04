import "package:flutter/material.dart";
import 'package:intl/intl.dart';


class Description extends StatelessWidget {
  GlobalKey<ScaffoldState> _scaffold = GlobalKey<ScaffoldState>();
  Map data = {};
  Function ShowDialog(context, bool signedUp){
    return (){showDialog( context: context,
        barrierDismissible: false,
        builder: (BuildContext context){
          return AlertDialog(
            title: Text("Confirm"),
            content: signedUp? Text("Sign up for event?"): Text("Deregister for event?") ,
            actions: <Widget>[
              FlatButton(
                child: Text("No"),
                onPressed: (){
                  Navigator.of(context,rootNavigator: true).pop("dialog");
                },
              ),
              FlatButton(
                child: Text("Yes"),
                onPressed: (){
                  final SnackBar snackBar = SnackBar(
                      content: signedUp? Text("Sign up complete!"): Text("Deregister complete!"),
                      action: SnackBarAction(
                        label: "Undo",
                        onPressed: (){print("Hello world!");},
                      )
                  );
                  Navigator.of(context,rootNavigator: true).pop("dialog");
                  Navigator.pop(context, snackBar);


                },
              )
            ],
          );});};}

  @override
  Widget build(BuildContext context) {
    data =  data.isNotEmpty ? data : ModalRoute.of(context).settings.arguments;
    String text = data["attended"] ? "unregister" : "register";
    Function presssed = data["attended"] ? ShowDialog(context, true) : ShowDialog(context, false);
    return Scaffold(
        key: _scaffold,
        appBar: AppBar(
          title: Text("Events"),
          backgroundColor: Colors.blueAccent[700],
        ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(16.0,0,0,0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Text("Event: ${data["title"]}"),
              Text("Date: ${DateFormat.yMMMd("en-SG").format(data["date"]).toString()}"),
              Text("Location: ${data["location"]}"),
              Text("Description: ${data["description"]}"),
              Container(
                height: 40.0,
                width: 150.0,
                child: RaisedButton(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8),
                  ),
                  color: Colors.blueAccent,
                  onPressed: presssed,
                  child: Text(
                    text,
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
      )
    );
  }
}