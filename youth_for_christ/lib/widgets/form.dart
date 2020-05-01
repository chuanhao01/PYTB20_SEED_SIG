import "package:flutter/material.dart";
import 'package:http/http.dart';
import 'package:intl/intl.dart';
import 'package:progress_dialog/progress_dialog.dart';
import "package:youthforchrist/services/storage.dart";
import 'package:youthforchrist/widgets/buttons.dart';
import "package:youthforchrist/widgets/textfield.dart";
import "package:youthforchrist/widgets/date.dart";
import "package:youthforchrist/services/networkboi.dart";

class Formy extends StatefulWidget {
  DateTime bday;
  bool profile;
  Map<String, String> initialValue;
  Formy({this.bday,this.profile,this.initialValue});
  HttpSlave slave = new HttpSlave();
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
  SecureStorage _storage = new SecureStorage();

  register()async{
    ProgressDialog loading = new ProgressDialog(context);
    loading.style(
      message: widget.profile? "Updating profile":"Registering",
      borderRadius: 8.0,
      backgroundColor: Colors.white,
      progressWidget: CircularProgressIndicator(),
      elevation: 10.0,
      insetAnimCurve: Curves.easeInOut,

    );
    if (_form.currentState.validate()) {
      _email.text = widget.profile? widget.initialValue["email"]: _email.text;
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
      String url = widget.profile? "http://192.168.1.7:8000/api/users/u": "http://192.168.1.7:8000/api/users";
      loading.show();
      Response response = widget.profile? await widget.slave.getMethod("put")(url,details) : await widget.slave.getMethod("post")(url,details);
      if (widget.profile){
        if(response == null){
          Scaffold.of(context).showSnackBar(new SnackBar(content: Text("Cannot connect to server! Please check your internet connection!")));
        }
        if (response.statusCode == 204){
          Navigator.pushReplacementNamed(context, "/profile",arguments: details);
        }
        else{
          Scaffold.of(context).showSnackBar(new SnackBar(content: Text("An error occured while processing the data")));
        }

      }
      else{
        if(response == null){
          Scaffold.of(context).showSnackBar(new SnackBar(content: Text("Cannot connect to server! Please check your internet connection!")));
        }
        if (response.statusCode == 201){
          Navigator.pushReplacementNamed(context, "/login");
        }
        else if(response.statusCode == 401){
          Scaffold.of(context).showSnackBar(new SnackBar(content: Text("Email already exists!!")));
        }
        else{
          Scaffold.of(context).showSnackBar(new SnackBar(content: Text("An error occured while processing the data")));
        }
      }
      loading.hide();
    }
  }
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
            DateOrPhone(controller: _date,phone: false,initialValue: widget.profile? widget.initialValue["dob"]: DateFormat.yMd("en-SG").format(DateTime.now()).toString(),),
            TextForm(
              label: "Full name: ",
              validator: validator(false, false),
              controller: _fullName,
              initialValue: widget.profile? widget.initialValue["fullname"]:"",
            ),
            DateOrPhone(controller: _phonenumber, phone: true,initialValue: widget.profile? widget.initialValue["contact_num"]:"",),
            widget.profile? SizedBox():TextForm(label: "Email: ", validator: validator(false, true),controller: _email,initialValue: widget.profile? widget.initialValue["email"]:"",),
            widget.profile? PrimaryButton(onPressed: register,text: "Save Changes",disabled: false,):PrimaryButton(onPressed: register,text: "Sign Up!",disabled: false,),

          ],
        ));
  }
}
