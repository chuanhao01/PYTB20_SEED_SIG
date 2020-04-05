import "package:flutter/material.dart";
import "package:youthforchrist/widgets/form.dart";
class Profile extends StatefulWidget {
  @override
  _ProfileState createState() => _ProfileState();
}

class _ProfileState extends State<Profile> {
  @override
  Widget build(BuildContext context) {
    Map<String, String> data = ModalRoute.of(context).settings.arguments;
    return Scaffold(
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
                      data["full name"],
                      style: TextStyle(
                          fontSize: 18.0,
                          fontWeight: FontWeight.w500,
                          color: Colors.white
                      ),
                    )),
              ),
              ListTile(
                enabled: false,
                leading: Icon(
                    Icons.account_circle
                ),
                title: Text(
                    "My Profile",
                    style: TextStyle(
                        color: Colors.blueAccent[700],
                        fontWeight: FontWeight.bold
                    )
                ),

              ),
              ListTile(
                  onTap: (){
                    Navigator.popUntil(context, ModalRoute.withName("/events"));
                  },
                  leading: Icon(
                      Icons.event
                  ),
                  title: Text("Events")

              ),
              Container(
                decoration:  BoxDecoration(
                    border: Border(top:BorderSide(color: Colors.grey[300]))
                ),
                alignment: Alignment.bottomLeft,
                child: ListTile(
                  onTap: (){
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
        body: Formy(profile: true,initialValue: data,),
    );
  }
}
