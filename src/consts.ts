export const mpath = "g:\\Projects\\Flutter\\a25\\lib\\features\\home\\presentation\\pages\\home_page.dart"


export const method = `


import '../../presentation/pages/home_page.dart';
import 'home_routes_constants.dart';

import 'dart:core';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';


List<RouteBase> getHomeRoutes() {
  return [

    GoRoute(
      name: HomeRoutes.second,
      path: HomeRoutes.secondPath,
      builder: (BuildContext context, state) {
        
      
      return SecondPage();
    
      }
  ),
  

    GoRoute(
      name: HomeRoutes.home,
      path: HomeRoutes.homePath,
      builder: (BuildContext context, state) => HomePage(),
    ),
  ];
}

`;