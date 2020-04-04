import 'dart:io';

import "package:flutter/material.dart";
import 'package:youthforchrist/services/storage.dart';
import "package:youthforchrist/widgets/eventCard.dart";
import 'package:intl/date_symbol_data_local.dart';
class Events extends StatefulWidget {
  @override
  _EventsState createState() => _EventsState();
}

class _EventsState extends State<Events> {
  static String garbage = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl nunc mi ipsum faucibus vitae. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Vulputate sapien nec sagittis aliquam. Tortor dignissim convallis aenean et. Diam vel quam elementum pulvinar etiam non quam. Vel fringilla est ullamcorper eget nulla facilisi etiam. Cursus turpis massa tincidunt dui ut. Imperdiet nulla malesuada pellentesque elit. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Id aliquet lectus proin nibh nisl. Eget nunc lobortis mattis aliquam faucibus. Sem et tortor consequat id porta nibh venenatis cras. At urna condimentum mattis pellentesque id.Ipsum dolor sit amet consectetur. Penatibus et magnis dis parturient montes. Venenatis cras sed felis eget velit aliquet. Rhoncus dolor purus non enim praesent elementum facilisis. Massa ultricies mi quis hendrerit dolor. Ridiculus mus mauris vitae ultricies leo integer. Turpis massa sed elementum tempus egestas sed sed. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. Elit at imperdiet dui accumsan sit amet. Rutrum quisque non tellus orci. Volutpat ac tincidunt vitae semper. Odio euismod lacinia at quis risus. Eget nulla facilisi etiam dignissim. Ultrices in iaculis nunc sed. Arcu risus quis varius quam quisque id diam vel quam. Nunc mattis enim ut tellus elementum sagittis. Lorem mollis aliquam ut porttitor leo a diam. Elit ut aliquam purus sit amet.";
  List<EventCard> events = [
    EventCard(title: "item 1",date: new DateTime(2020,DateTime.september,9), description: garbage,location: "City Hall",attended: false,),
    EventCard(title: "item 1",date: new DateTime(2020,DateTime.august,9), description: garbage,location: "Floating Platform@Marina Bay",attended: true,),
    EventCard(title: "item 1",date: new DateTime(2020,DateTime.january,23), description: garbage,location: "Marina Bay Sands",attended: false,),
    EventCard(title: "item 1",date: new DateTime(2020,DateTime.february,9), description: garbage,location: "Dover Poly",attended: false,),
    EventCard(title: "item 1",date: new DateTime(2020,DateTime.september,9), description: garbage,location: "City Hall",attended: true,),
    EventCard(title: "item 1",date: new DateTime(2020,DateTime.september,9), description: garbage,location: "Fort Canning Park",attended: false,),
    EventCard(title: "item 1",date: new DateTime(2020,DateTime.september,9), description: garbage,location: "Malaysia",attended: true,),
  ];
  SecureStorage _storage  = new SecureStorage();
  Map<String, String> username = {};
  @override
  void initState(){
    // TODO: implement initState
    super.initState();
    initializeDateFormatting();


  }
  @override
  Widget build(BuildContext context) {
    username = username.isNotEmpty
        ? username
        : ModalRoute.of(context).settings.arguments;
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
                      username["full name"],
                      style: TextStyle(
                        fontSize: 18.0,
                        fontWeight: FontWeight.w500,
                        color: Colors.white
                      ),
                  )),
            ),
            ListTile(
              onTap: ()async{
                Map<String, String> details = await _storage.getDetails();
                Navigator.pushNamed(context, "/profile",arguments: details);
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
                  String details = await _storage.get("settings");
                  Navigator.pushNamed(context, "/profile",arguments: details);
                },
                leading: Icon(
                    Icons.settings
                ),
                title: Text(
                    "Events",
                    style: TextStyle(
                        color: Colors.blueAccent[700],
                        fontWeight: FontWeight.bold
                    )
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
