import 'dart:async';
import 'package:flutter/material.dart';
import 'package:nftworld/Providers/Datafunction.dart';
import 'package:splashscreen/splashscreen.dart';
import 'package:velocity_x/velocity_x.dart';

class Splash extends StatefulWidget {
  final navigation;
  const Splash({Key key, @required this.navigation}) : super(key: key);

  @override
  _SplashState createState() => _SplashState();
}

class _SplashState extends State<Splash> {
  @override
  void initState() {
    super.initState();
    if (widget.navigation == 2) {
      Userdetails();
      Initial();
      Mydatas();
      delay();
    }
  }

  delay() async {
    Timer(Duration(seconds: 5), () {
      BuyedNft();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SplashScreen(
        loaderColor: context.primaryColor,
        gradientBackground: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [
              context.primaryColor,
              Colors.orange[400],
            ]),
        seconds: 8,
        navigateAfterSeconds: widget.navigation == 1
            ? context.vxNav.push(Uri(path: '/login'))
            : context.vxNav.push(Uri(path: '/main')),
        image: Image(
          image: AssetImage('assets/splash.gif'),
        ),
        photoSize: 100.0,
      ),
    );
  }
}
