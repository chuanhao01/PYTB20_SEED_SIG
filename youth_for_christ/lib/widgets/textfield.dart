import "package:flutter/material.dart";

class TextForm extends StatefulWidget {
  String label;
  String initialValue;
  Function validator;
  TextEditingController controller;
  TextForm({this.label, this.validator, this.controller,this.initialValue});
  @override
  _TextFormState createState() => _TextFormState();
}

class _TextFormState extends State<TextForm> {
  @override
  Widget build(BuildContext context) {
    if(widget.initialValue != ""){
      widget.controller.text = widget.initialValue;
    }
    return Container(
      margin: EdgeInsets.fromLTRB(0, 0, 0, 35),
      width: 350,
      child: TextFormField(
              controller: widget.controller,
              decoration: InputDecoration(
                  border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(8.0)),
                  labelText: widget.label),
              validator: widget.validator,
            ),
    );
  }
}
