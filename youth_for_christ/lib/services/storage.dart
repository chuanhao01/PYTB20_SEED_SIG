import "package:flutter_secure_storage/flutter_secure_storage.dart";

class SecureStorage extends FlutterSecureStorage{
  final List<String> personal = ["nric","bday","full name","phone number","email"];
  Map <String, String> details = {};

  Future<void> getDetails() async{
      this.details = await this.readAll();
  }
  void edit(Map<String, String> details)async{
    await details.forEach((key, value) {
      this.write(key: key, value: value);
    });
    this.getDetails();
  }

}