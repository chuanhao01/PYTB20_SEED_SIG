import "package:flutter/material.dart";
import 'package:intl/intl.dart';


class Description extends StatelessWidget {
  String title;
  DateTime date;
  String description;
  String location;
  bool attended;
  Description({this.title,this.date,this.description,this.location,this.attended});
  GlobalKey<ScaffoldState> _scaffold = GlobalKey<ScaffoldState>();
  @override
  Widget build(BuildContext context) {
//    data =  data.isNotEmpty ? data : ModalRoute.of(context).settings.arguments;
    String text = attended ? "unregister" : "register";
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
              Text("Event: $title"),
              Text("Date: ${DateFormat.yMMMd("en-SG").format(date).toString()}"),
              Text("Location: $location"),
              Text("Description: $description}"),
              Container(
                height: 40.0,
                width: 150.0,
                child: RaisedButton(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8),
                  ),
                  color: Colors.blueAccent,
                  onPressed: () {
                    showDialog(
                        context: context,
                        barrierDismissible: false,
                        builder: (BuildContext context){
                          return AlertDialog(
                            title: Text("Confirm"),
                            content: Text("Sign up for event?"),
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
                                      content: Text("Sign up complete!"),
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
                          );
                        }
                    );
                  },
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