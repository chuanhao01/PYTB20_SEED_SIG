import "package:flutter/material.dart";
import 'package:intl/intl.dart';
import 'package:intl_phone_number_input/intl_phone_number_input.dart';

class DateOrPhone extends StatefulWidget {
  TextEditingController  controller;
  bool phone;
  String initialValue;
  DateOrPhone({this.controller,this.phone,this.initialValue});

  @override
  _DateOrPhoneState createState() => _DateOrPhoneState();
}

class _DateOrPhoneState extends State<DateOrPhone> {
  DateTime bday = DateTime.now();

  Future<DateTime> selectDate(BuildContext context) async {
    final DateTime bday = await showDatePicker(
        context: context,
        initialDate: DateTime(DateTime.now().year, DateTime.now().month),
        firstDate: DateTime(1901, 1),
        lastDate: DateTime(DateTime.now().year, DateTime.now().month));
    return bday;
  }
  @override
  Widget build(BuildContext context) {
    if(widget.initialValue !=""){
      widget.controller.text = widget.initialValue;
    }
    return Container(
      decoration: BoxDecoration(
        border: Border.all(color: Colors.grey[500]),
        borderRadius: BorderRadius.circular(8.0),
      ),
      margin: EdgeInsets.fromLTRB(0, 0, 0, 35),
      width: 350,
      child: Padding(
        padding:
        const EdgeInsets.symmetric(vertical: 0, horizontal: 16),
        child:widget.phone? InternationalPhoneNumberInput(
          initialCountry2LetterCode: "SG",
          textFieldController: widget.controller,
          isEnabled: true,
          autoValidate: true,
          formatInput: true,
          onInputValidated: (bool value) {},
          onInputChanged: (PhoneNumber value) {},
        ): Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Container(
              width: 268,
              child: TextFormField(
                controller: widget.controller,
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
                    bday = await selectDate(context);
                    widget.controller.text =
                        DateFormat.yMd("en-SG").format(bday).toString();
                  } catch (e) {
                    bday = DateTime.now();
                    widget.controller.text = bday.toString().substring(0, 11);
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
    );
  }
}
