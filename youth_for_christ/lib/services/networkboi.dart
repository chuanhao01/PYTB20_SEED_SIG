import 'dart:async';
import 'dart:convert';
import 'dart:core';
import 'dart:io';
import "package:http/http.dart" as http;
import 'package:youthforchrist/services/storage.dart';

class HttpSlave {
  SecureStorage storageSlave = new SecureStorage();
  bool cookies = false;
  HttpSlave({this.cookies});
  Future<bool> isAlive() async {
    final result = await InternetAddress.lookup("google.com");
    print(result);
    if (result.isNotEmpty && result[0].rawAddress.isNotEmpty) {
      return true;
    } else {
      return false;
    }
  }

  Function getMethod(String purpose){
    Map<String, Function> method = {
      "post": _post,
      "get": _get,
      "delete": _delete,
      "put": _put,
    };
    return method[purpose];
  }

  Future<http.Response> _post(String url, Map<String, String> data) async {
    Map<String, String> cookie = {};
    if(cookies){
      String access_token = await storageSlave.get("access_token");
      String refresh_token  = await storageSlave.get("refresh_token");
      cookie["access_token"] = access_token;
      cookie["refresh_token"] = refresh_token;
    }
    return http
        .post(url,
            headers: {
              HttpHeaders.contentTypeHeader:
                  'application/x-www-form-urlencoded',
              HttpHeaders.acceptHeader: '*',
              "cookie" : cookie.toString()
            },
            body: data)
        .timeout(Duration(seconds: 10), onTimeout: () {
      return null;
    });
  }

  Future<http.Response> _get(String url) async {
    Map<String, String> cookie = {};
    if(cookies){
      String access_token = await storageSlave.get("access_token");
      String refresh_token  = await storageSlave.get("refresh_token");
      cookie["access_token"] = access_token;
      cookie["refresh_token"] = refresh_token;
    }
    return http.get(url,headers: <String, String>{"cookie":cookie.toString()} ).timeout(Duration(seconds: 10), onTimeout: () {
      return null;
    });
  }

  Future<http.Response> _delete(String url) async {
    Map<String, String> cookie = {};
    if(cookies){
      String access_token = await storageSlave.get("access_token");
      String refresh_token  = await storageSlave.get("refresh_token");
      cookie["access_token"] = access_token;
      cookie["refresh_token"] = refresh_token;
    }
    return http.delete(
      url,
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
        "cookie" : cookie.toString()
      },
    ).timeout(Duration(seconds: 10), onTimeout: () {
      return null;
    });
  }

  Future<http.Response> _put(String url, Map<String, String> data) async {
    Map<String, String> cookie = {};
    if(cookies){
      String access_token = await storageSlave.get("access_token");
      String refresh_token  = await storageSlave.get("refresh_token");
      cookie["access_token"] = access_token;
      cookie["refresh_token"] = refresh_token;
    }
    return http
        .put(url,
            headers: <String, String>{
              "Content-Type": "application/json",
              "cookie" : cookie.toString()
            },
            body: jsonEncode(data))
        .timeout(Duration(seconds: 10), onTimeout: () {
      return null;
    });
  }
  void checkCookies(http.Response response){
    if(response.headers["set-cookie"] != null){
        Map<String,String> cookies = jsonDecode(response.headers["set-cookie"]);
        _setCookies(cookies);
    }
  }
  void _setCookies(Map<String, String> cookies){
    cookies.forEach((key,value){
      storageSlave.edit(value, key);
    });
  }
}
