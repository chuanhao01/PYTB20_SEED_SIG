import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:youthforchrist/pages/description.dart';

class EventCard extends StatelessWidget {
  String title;
  DateTime date;
  String description;
  String location;
  bool attended;
  Map<String, String> username = {};
  EventCard(
      {this.title, this.date, this.description, this.location, this.attended});
  Widget build(BuildContext context) {
    return Card(
        child: ListTile(
        onTap: () async {
          try {
            SnackBar _snackbar = await Navigator.push(
                context,
                MaterialPageRoute(
                    builder: (context) => Description(),
                    settings: RouteSettings(arguments: {
                      "title": title,
                      "date": date,
                      "description": description,
                      "location": location,
                      "attended": attended,
                    })));
            Scaffold.of(context).showSnackBar(_snackbar);
          } catch (e) {
            print("hello");
          }
        },
          title: Text(title),
          subtitle: Text(
          "${DateFormat.yMMMd("en-SG").format(date).toString()}@$location"),
    ));
  }
}
