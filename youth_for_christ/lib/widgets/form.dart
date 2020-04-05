import "package:flutter/material.dart";
import 'package:intl/date_symbol_data_local.dart';
import 'package:intl/intl.dart';
import 'package:intl_phone_number_input/intl_phone_number_input.dart';
import "package:youthforchrist/services/storage.dart";
import "package:youthforchrist/widgets/textfield.dart";
import "package:youthforchrist/widgets/date.dart";

class Formy extends StatefulWidget {
  DateTime bday;
  Formy({this.bday});
  @override
  _FormyState createState() => _FormyState(bday: bday);
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

  _FormyState({this.bday});
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    SecureStorage _storage = new SecureStorage();
    _date.text = DateFormat.yMd("en-SG").format(bday).toString();
    return Form(
        key: _form,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            TextForm(
              label: "NRIC: ",
              validator: validator(true,false),
              controller: _nric,
            ),
            DateOrPhone(controller: _date,phone: false,),
            TextForm(
              label: "Full name: ",
              validator: validator(false, false),
              controller: _fullName,
            ),
            DateOrPhone(controller: _phonenumber, phone: true,),
            TextForm(label: "Email: ", validator: validator(false, true),controller: _email,),
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
