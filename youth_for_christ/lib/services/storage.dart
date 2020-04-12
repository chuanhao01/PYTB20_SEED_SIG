import "package:flutter_secure_storage/flutter_secure_storage.dart";

class SecureStorage extends FlutterSecureStorage{
  final List<String> personal = ["nric","bday","fullname","contact_num","email"];
  Map <String, String> details = {};
  String detail;

  Future<String> get(String what){
    return this.read(key: what);
  }
  Future<Map<String,String>> getDetails(){
      return this.readAll();
  }
  void edit(Map<String, String> details)async{
    await details.forEach((key, value) {
      this.write(key: key, value: value);
    });
    this.getDetails();
  }

}