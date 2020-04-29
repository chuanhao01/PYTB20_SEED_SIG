import 'dart:async';
import 'dart:convert';
import 'dart:core';
import 'dart:io';
import "package:http/http.dart" as http;

class HttpSlave {
  Function getMethod(String purpose) {
    Map<String, Function> method = {
      "post": _post,
      "get": _get,
      "delete": _delete,
      "put": _put,
    };
    return method[purpose];
  }

  Future<http.Response> _post(String url, Map<String, String> data) async {
    return http.post(url,
        headers: {
          HttpHeaders.contentTypeHeader: 'application/x-www-form-urlencoded',
          HttpHeaders.acceptHeader: '*'
        },
        body: data);
  }

  Future<http.Response> _get(String url) async {
    return http.get(url);
  }

  Future<http.Response> _delete(String url) async {
    return http.delete(
      url,
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
    );
  }

  Future<http.Response> _put(String url, Map<String, String> data) async{
    return http.put(url,
        headers: <String, String>{
          "Content-Type": "application/json ; charset=UTF-8"
        },
        body: jsonEncode(data));
  }
}
