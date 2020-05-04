import "package:flutter_secure_storage/flutter_secure_storage.dart";

class SecureStorage extends FlutterSecureStorage{
  final List<String> personal = ["nric","dob","fullname","contact_num","email"];
  final List<String> details = ["cookie","refresh_cookie"];
  String detail;

  Future<String> get(String what){
    return this.read(key: what);
  }
  Future<Map<String,String>> getDetails(){
      return this.readAll();
  }
  void edit(String cookie,String type)async{
   this.write(key: type, value: cookie);
    this.getDetails();
  }

}