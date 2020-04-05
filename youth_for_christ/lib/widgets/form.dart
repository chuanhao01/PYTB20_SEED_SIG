import "package:flutter/material.dart";
import 'package:intl/date_symbol_data_local.dart';
import 'package:intl/intl.dart';
import 'package:intl_phone_number_input/intl_phone_number_input.dart';
import "package:youthforchrist/services/storage.dart";
import "package:youthforchrist/widgets/textfield.dart";

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

  Future<DateTime> selectDate(BuildContext context) async {
    final DateTime bday = await showDatePicker(
        context: context,
        initialDate: DateTime(DateTime.now().year, DateTime.now().month),
        firstDate: DateTime(1901, 1),
        lastDate: DateTime(DateTime.now().year, DateTime.now().month));
    return bday;
  }

  Function validator (bool nric,bool email) {
    return (value){
      if (nric) {
        if (!RegExp(r"^[stfg]\d{7}[a-z]", caseSensitive: false).hasMatch(value)) {
          return "Please enter a valid NRIC!";
        }
      } else if (email) {
        if (!RegExp(
            r"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            .hasMatch(value)) {
          return "Please enter a valid email address!";
        }
      } else if(value.isEmpty()) {
        return "Please fill in this field!";
      }
      return null;
    };

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
              label: "NRIC",
              validator: validator(true,false)
            ),
            Container(
              decoration: BoxDecoration(
                border: Border.all(color: Colors.grey[500]),
                borderRadius: BorderRadius.circular(8.0),
              ),
              margin: EdgeInsets.fromLTRB(0, 0, 0, 35),
              width: 350,
              child: Padding(
                padding:
                    const EdgeInsets.symmetric(vertical: 0, horizontal: 16),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Container(
                      width: 268,
                      child: TextFormField(
                        controller: _date,
                        enabled: false,
                        decoration: InputDecoration(labelText: "Date:"),
                        validator: (value) {
                          if (value.isEmpty) {
                            return "Please fill in this field!";
                          }
                          return null;
                        },
                      ),
                    ),
                    IconButton(
                        onPressed: () async {
                          try {
                            initializeDateFormatting();
                            bday = await selectDate(context);
                            _date.text =
                                DateFormat.yMd("en-SG").format(bday).toString();
                          } catch (e) {
                            bday = DateTime.now();
                            _date.text = bday.toString().substring(0, 11);
                          }
                          ;
                        },
                        icon: Icon(
                          Icons.arrow_drop_down,
                          size: 18,
                        )),
                  ],
                ),
              ),
            ),
            Container(
              margin: EdgeInsets.fromLTRB(0, 0, 0, 35),
              width: 350,
              child: TextFormField(
                controller: _fullName,
                decoration: InputDecoration(
                    border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(8.0)),
                    labelText: "Full name:"),
                validator: (value) {
                  if (value.isEmpty) {
                    return "Please fill in this field!";
                  }
                  return null;
                },
              ),
            ),
            Container(
              margin: EdgeInsets.fromLTRB(0, 0, 0, 35),
              width: 350,
              decoration: BoxDecoration(
                  border: Border.all(
                    color: Colors.grey[500],
                  ),
                  borderRadius: BorderRadius.circular(8.0)),
              child: Padding(
                padding:
                    const EdgeInsets.symmetric(horizontal: 16.0, vertical: 0.0),
                child: InternationalPhoneNumberInput(
                  initialCountry2LetterCode: "SG",
                  textFieldController: _phonenumber,
                  isEnabled: true,
                  autoValidate: true,
                  formatInput: true,
                  onInputValidated: (bool value) {},
                  onInputChanged: (PhoneNumber value) {},
                ),
              ),
            ),
            Container(
              margin: EdgeInsets.fromLTRB(0, 0, 0, 35),
              width: 350,
              child: TextFormField(
                controller: _email,
                decoration: InputDecoration(
                    border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(8.0)),
                    labelText: "Email:"),
                validator: (value) {
                  if (value.isEmpty) {
                    return "Please fill in this field!";
                  } else if (!RegExp(
                          r"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
                      .hasMatch(value)) {
                    _email.clear();
                    return "Please enter a valid email address!";
                  }
                  return null;
                },
              ),
            ),
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
