import "package:flutter/material.dart";

class TextForm extends StatefulWidget {
  String label;
  Function validator;
  bool date = false;
  bool phone = false;
  TextForm({this.label,this.validator,this.date,this.phone});
  @override
  _TextFormState createState() => _TextFormState(label: label,validator: validator,date:date,phone:phone);
}

class _TextFormState extends State<TextForm> {
  String label;
  Function validator;
  TextEditingController controller = TextEditingController();
  bool date;
  bool phone;

  _TextFormState({this.label,this.validator,this.date,this.phone});
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.fromLTRB(0, 0, 0, 35),
      width: 350,
      child: date? TextFormField(
        controller: controller,
        decoration: InputDecoration(
            border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8.0)),
            labelText: "NRIC:"),
        validator: validator,
      ),
    );
  }
}