import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class EventCard extends StatelessWidget{
  String title;
  DateTime date;
  String description;
  String location;
  bool attended;
  EventCard({this.title,this.date,this.description,this.location,this.attended});
  Widget build(BuildContext context){
    return Card(
      child: ListTile(
        onTap: (){
          Navigator.pushReplacementNamed(context, "/description",arguments: {
            "title": title,
            "date": date,
            "description": description,
            "location": location,
            "attended": attended
          });
        },
        title: Text(title),
        subtitle:Text("${DateFormat.yMMMd("en-SG").format(date).toString()}@$location"),
      )
    );
  }
}