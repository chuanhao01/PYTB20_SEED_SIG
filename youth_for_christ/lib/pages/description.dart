import "package:flutter/material.dart";
class Description extends StatelessWidget {
  Map data = {};
  @override
  Widget build(BuildContext context) {
    data =  data.isNotEmpty ? data : ModalRoute.of(context).settings.arguments;
    return Scaffold(
      body: Center(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(16.0,0,0,0),
          child: Column(
            children: <Widget>[
              Row(
                children: <Widget>[
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      Text("Event: ${data["title"]}"),
                      Text("Date: ${da}")
                    ],
                  )
                ]
                ,
              )
            ],
          ),
        ),
      )
    );
  }
}
{

}