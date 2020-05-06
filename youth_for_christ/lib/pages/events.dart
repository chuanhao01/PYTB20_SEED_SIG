import 'dart:convert';

import "package:flutter/material.dart";
import 'package:http/http.dart';
import 'package:search_page/search_page.dart';
import 'package:youthforchrist/services/storage.dart';
import "package:youthforchrist/widgets/eventCard.dart";
import 'package:intl/date_symbol_data_local.dart';
import "package:youthforchrist/services/networkboi.dart";
class Events extends StatefulWidget {
  @override
  _EventsState createState() => _EventsState();
}

class _EventsState extends State<Events> {
  HttpSlave slave  = new HttpSlave();
  String username;
  String mode = "all";
  Map<String, List> details;
  List<EventCard> events;
  @override
  void initState(){
    // TODO: implement initState
    super.initState();
    initializeDateFormatting();
  }

  @override
  Widget build(BuildContext context) {
    details = details != null ? details: ModalRoute.of(context).settings.arguments;
    List eventsList = details[mode];
    List<EventCard> events = [];
    eventsList.forEach((element) {
      events.add(EventCard(id:element["id"],title: element["title"],date: DateTime.fromMillisecondsSinceEpoch(element["event_date"]*1000),description: element["description"],attended: details["yes"].indexOf(element) != -1,));

    });
    username = username != null
        ? username
        : details["email"];
    return  Scaffold(
      appBar: AppBar(
        title: Text("Events"),
        backgroundColor: Colors.blueAccent[700],
        actions: <Widget>[
          IconButton(icon: Icon(Icons.search), onPressed:(){ showSearch(context: this.context, delegate: SearchPage(builder: (event)=> event, filter: (event)=>[event.title], items: events, searchLabel: "Search Events!", failure: Center(child: Text("No results found. Please check your spelling and try again"),)));}),
          PopupMenuButton(icon: Icon(Icons.filter_list),itemBuilder: (context)=>[
            PopupMenuItem(child: Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: <Widget>[
                Radio(value: "all", groupValue: mode,activeColor: Colors.blueAccent[700], onChanged: (value)=>{
                  setState((){
                    mode = value;
                  })
                  
                }),
                SizedBox(width: 10,),
                Text("View all events!")
            ],)),
             PopupMenuItem(child: Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: <Widget>[
                Radio(value: "yes", groupValue: mode,activeColor: Colors.blueAccent[700], onChanged: (value)=>{
                  setState((){
                    mode = value;
                  })
                  
                }),
                SizedBox(width: 10,),
                Text("View resgistered events!")
            ],)),
             PopupMenuItem(child: Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: <Widget>[
                Radio(value: "no", groupValue: mode,activeColor: Colors.blueAccent[700], onChanged: (value)=>{
                  setState((){
                    mode = value;
                  })
                  
                }),
                SizedBox(width: 10,),
                Text("View Unresgistered events!")
            ],))
          ],)
        ],
      ),
      drawer: Drawer(
        elevation: 15.0,
        child: ListView(
          padding: EdgeInsets.all(0),
          children: <Widget>[
            DrawerHeader(
              decoration: BoxDecoration(
                color:Colors.blueAccent[700],
              ),
              child: Align(
                  alignment: FractionalOffset.bottomLeft,
                  child: Text(
                      username,
                      style: TextStyle(
                        fontSize: 18.0,
                        fontWeight: FontWeight.w500,
                        color: Colors.white
                      ),
                  )),
            ),
            ListTile(
              onTap: ()async{
                Response response = await slave.getMethod("get")("http://192.168.43.22:8000/api/users/u");
                if (response == null){
                  final SnackBar snackBar = SnackBar(
                    content: Text(
                        "Connection timeout, please check your internet connection!"),
                    action: SnackBarAction(
                      label: "Undo",
                      onPressed: () {
                        print("Hello world!");
                      },
                    ),
                    duration: Duration(seconds: 1, milliseconds: 500),
                  );
                  Navigator.of(context, rootNavigator: true)
                      .pop("dialog");
                  Scaffold.of(context).showSnackBar(snackBar);
                }
                else if(response.statusCode == 200){
                  slave.checkCookies(response);
                  Map<String, dynamic> data = jsonDecode(response.body);
                  Navigator.pushNamed(context, "/profile",arguments: data);
                }

              },
              leading: Icon(
                Icons.account_circle
              ),
              title: Text("My Profile")

            ),
            ListTile(
              enabled: false,
                leading: Icon(
                    Icons.event
                ),
                title: Text(
                    "Events",
                  style: TextStyle(
                    color: Colors.blueAccent[700],
                    fontWeight: FontWeight.bold
                  )
                ),

            ),
            Container(
              decoration:  BoxDecoration(
                border: Border(top:BorderSide(color: Colors.grey[300]))
              ),
              alignment: Alignment.bottomLeft,
              child: ListTile(
                onTap: ()async{
                  Navigator.pushNamed(context, "/settings");
                },
                leading: Icon(
                    Icons.settings
                ),
                title: Text(
                    "Settings",
                ),
              ),
            )
          ],
        ),
      ),
      body:ListView.builder(
        itemCount: events.length,
        itemBuilder: (context,index){
          return events[index];
        },
      )
    );
  }
}