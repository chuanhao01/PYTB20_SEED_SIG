import 'dart:async';
import 'dart:convert';
import 'dart:core';

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

  Future<http.Response> _post(String url, data) {
    return http.post(url,
        headers: <String, String>{
          "Content-Type": "application/json ; charset=UTF-8"
        },
        body: jsonEncode(data));
  }

  Future<http.Response> _get(String url) {
    return http.get(url);
  }

  Future<http.Response> _delete(String url) {
    return http.delete(url);
  }

  Future<http.Response> _put(String url, data) {
    return http.put(url,
        headers: <String, String>{
          "Content-Type": "application/json ; charset=UTF-8"
        },
        body: jsonEncode(data));
  }
}
