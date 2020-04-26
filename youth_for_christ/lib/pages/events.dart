import "package:flutter/material.dart";
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
  Map<String, dynamic> details;
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
    List<EventCard> events = [];
    details["details"].forEach((element) {
      events.add(EventCard(id:element["id"],title: element["title"],date: DateTime.fromMillisecondsSinceEpoch(element["event_date"]*1000),description: element["description"],));
    });
    username = username != null
        ? username
        : details["email"];
    return  Scaffold(
      appBar: AppBar(
        title: Text("Events"),
        backgroundColor: Colors.blueAccent[700],
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
                Navigator.pushNamed(context, "/profile");
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
