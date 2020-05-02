import "package:flutter/material.dart";
class Profile extends StatefulWidget {
  @override
  _ProfileState createState() => _ProfileState();
}

class _ProfileState extends State<Profile> {
  @override
  Widget build(BuildContext context) {
    Map<String, dynamic> data = ModalRoute.of(context).settings.arguments;
    print(data);
    List<String> keys = data.keys.toList();
    return Scaffold(
      appBar: AppBar(
        title: Text("My Profile"),
        backgroundColor: Colors.blueAccent[700],
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.edit),
            onPressed: (){
              Navigator.pushReplacementNamed(context, "/edit",arguments: data);
            },
          )
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
                      data["fullname"],
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
        body: Center(
            child: Column(
              children: <Widget>[
                ListView.builder(itemCount:keys.length,shrinkWrap: true,itemBuilder: (context,index){
                  String key  =  data.keys.elementAt(index);
                  return ListTile(
                    title: Text(key),
                    subtitle: Text(data[key]),
                  );
                }),
              ],
            )
        ),
    );
  }
}
