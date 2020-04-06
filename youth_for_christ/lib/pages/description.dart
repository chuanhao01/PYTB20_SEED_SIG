import "package:flutter/material.dart";
import 'package:intl/intl.dart';
import "package:youthforchrist/widgets/buttons.dart";
import "package:youthforchrist/widgets/text.dart";

class Description extends StatelessWidget {
  GlobalKey<ScaffoldState> _scaffold = GlobalKey<ScaffoldState>();
  Map data = {};

  Function ShowDialog(context, bool signedUp) {
    if (signedUp){
    return(String value){ showDialog(
        context: context,
        barrierDismissible: false,
        builder: (BuildContext context) {
          return AlertDialog(
            title: Text("Confirm"),
            content: Text("Deregister for event?"),
            actions: <Widget>[
              FlatButton(
                child: Text("No"),
                onPressed: () {
                  Navigator.of(context, rootNavigator: true).pop("dialog");
                },
              ),
              FlatButton(
                child: Text("Yes"),
                onPressed: () {
                  final SnackBar snackBar = SnackBar(
                      content: Text("Deregister complete!"),
                      action: SnackBarAction(
                        label: "Undo",
                        onPressed: () {
                          print("Hello world!");
                        },
                      ),
                  duration: Duration(seconds:1,milliseconds: 500 ),);
                  Navigator.of(context, rootNavigator: true).pop("dialog");
                  Navigator.pop(context, snackBar);
                },
              )
            ],
          );
        });};}
    else{
      return(){ showDialog(
          context: context,
          barrierDismissible: false,
          builder: (BuildContext context) {
            return AlertDialog(
              title: Text("Confirm"),
              content: Text("Sign up for event?"),
              actions: <Widget>[
                FlatButton(
                  child: Text("No"),
                  onPressed: () {
                    Navigator.of(context, rootNavigator: true).pop("dialog");
                  },
                ),
                FlatButton(
                  child: Text("Yes"),
                  onPressed: () {
                    final SnackBar snackBar = SnackBar(
                        content: Text("Sign up complete!"),
                        action: SnackBarAction(
                          label: "Undo",
                          onPressed: () {
                            print("Hello world!");
                          },
                        ),
                      duration: Duration(seconds:1,milliseconds: 500 ),);
                    Navigator.of(context, rootNavigator: true).pop("dialog");
                    Navigator.pop(context, snackBar);
                  },
                )
              ],
            );
          });};
    }
  }

  @override
  Widget build(BuildContext context) {
    data = data.isNotEmpty ? data : ModalRoute.of(context).settings.arguments;

    Function presssed = data["attended"]
        ? ShowDialog(context, true)
        : ShowDialog(context, false);

    return Scaffold(
        key: _scaffold,
        appBar: AppBar(
          title: Text("Event Details"),
          backgroundColor: Colors.blueAccent[700],
        ),
        body: SingleChildScrollView(
            scrollDirection: Axis.vertical,
            padding: EdgeInsets.symmetric(vertical: 30.0, horizontal: 16.0),
            child: Column(
              children: <Widget>[
                Row(
                  children: <Widget>[
                    Expanded(
                      flex:7,
                      child: Text(
                        data["title"],
                        style: TextStyle(
                            fontWeight: FontWeight.bold, fontSize: 36.0),
                      ),
                    ),
                    Expanded(
                      flex: 4,
                      child: PrimaryButton(
                        disabled: data["attended"],
                        text: data["attended"]? "Registered!":"Register!",
                        onPressed: presssed,
                      ),
                    ),
                    data["attended"]?Expanded(
                        flex:1,
                        child:PopupMenuButton(
                            icon: Icon(Icons.arrow_drop_down),
                            color: Colors.blueAccent[700],
                            itemBuilder: (context)=>[
                              PopupMenuItem(
                                value: "Unregister",
                                child: Text("Unregister"),
                              ),
                            ],
                            onSelected: presssed
                        )
                    ):SizedBox(),
                  ],
                ),
                Divider(color: Colors.grey[300],thickness: 1.0,),
                SizedBox(height: 12,),
                TitleDetails(title: "Date", details:"${DateFormat.yMd("en-SG").format(data["date"]).toString()}  ${DateFormat.jm("en-SG").format(data["date"]).toString()}"),
                TitleDetails(title: "Location:",details: data["location"],),
                TitleDetails(title: "Description", details: data["description"],)


              ],
            )));
  }
}
