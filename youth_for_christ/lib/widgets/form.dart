import "package:flutter/material.dart";
import 'package:intl/intl.dart';
import "package:youthforchrist/services/storage.dart";
import "package:youthforchrist/widgets/textfield.dart";
import "package:youthforchrist/widgets/date.dart";
import "package:youthforchrist/services/storage.dart";

class Formy extends StatefulWidget {
  DateTime bday;
  bool profile;
  Map<String, String> initialValue;
  Formy({this.bday,this.profile,this.initialValue});
  @override
  _FormyState createState() => _FormyState();
}

class _FormyState extends State<Formy> {
  DateTime bday;
  TextEditingController _nric = TextEditingController();
  TextEditingController _date = TextEditingController();
  TextEditingController _fullName = TextEditingController();
  TextEditingController _phonenumber = TextEditingController();
  TextEditingController _email = TextEditingController();
  GlobalKey<FormState> _form = GlobalKey<FormState>();



  Function validator (bool nric,bool email) {
    if (nric){
      return (value){
        if (!RegExp(r"^[stfg]\d{7}[a-z]", caseSensitive: false).hasMatch(value)) {
          return "Please enter a valid NRIC!";
        }
        return null;
      };
    }
    else if(email){
      return (value){
        if (!RegExp( r"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", caseSensitive: false).hasMatch(value)) {
          return "Please enter a valid NRIC!";
        }
        return null;
      };
    }
    else{
      return (value){
        if(value == "") {
          return "Please fill in this field!";
        }
        return null;
      };
    }

  }
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    SecureStorage _storage = new SecureStorage();
    return Form(
        key: _form,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            TextForm(
              label: "NRIC: ",
              validator: validator(true,false),
              controller: _nric,
              initialValue: widget.profile? widget.initialValue["nric"]:"",
            ),
            DateOrPhone(controller: _date,phone: false,initialValue: widget.profile? widget.initialValue["bday"]: DateFormat.yMd("en-SG").format(DateTime.now()).toString(),),
            TextForm(
              label: "Full name: ",
              validator: validator(false, false),
              controller: _fullName,
              initialValue: widget.profile? widget.initialValue["full name"]:"",
            ),
            DateOrPhone(controller: _phonenumber, phone: true,initialValue: widget.profile? widget.initialValue["phone number"]:"",),
            TextForm(label: "Email: ", validator: validator(false, true),controller: _email,initialValue: widget.profile? widget.initialValue["email"]:"",),
            Container(
              height: 40.0,
              width: 150.0,
              child: RaisedButton(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(8),
                ),
                color: Colors.blueAccent,
                onPressed: () {
                  if (_form.currentState.validate()) {
                    List<String> everything = [
                      _nric.text,
                      _date.text,
                      _fullName.text,
                      _phonenumber.text,
                      _email.text
                    ];
                    Map<String, String> details = {};
                    int i = 0;
                    _storage.personal.forEach((element) {
                      details[element] = everything[i];
                      i++;
                    });
                    _storage.edit(details);
                    Navigator.pushReplacementNamed(context, "/login");
                  }
                },
                child: Text(
                  "Sign up!",
                  style: TextStyle(color: Colors.white, fontSize: 18),
                ),
              ),
            ),
          ],
        ));
  }
}
