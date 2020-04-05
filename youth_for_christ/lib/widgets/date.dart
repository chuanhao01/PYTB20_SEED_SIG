import "package:flutter/material.dart";

class Date extends StatefulWidget {
  @override
  _DateState createState() => _DateState();
}

class _DateState extends State<Date> {
  TextEditingController controller = TextEditingController();
  DateTime bday = DateTime.now();
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding:
      const EdgeInsets.symmetric(vertical: 0, horizontal: 16),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Container(
            width: 268,
            child: TextFormField(
              controller: controller,
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
  }
}
