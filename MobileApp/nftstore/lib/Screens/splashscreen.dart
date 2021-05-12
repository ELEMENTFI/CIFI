import 'package:flutter/material.dart';
import 'package:velocity_x/velocity_x.dart';

class SplashScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ZStack([
        VStack(
          [
            VxBox()
                .square(400)
                .bgImage(DecorationImage(
                    image: AssetImage('assets/splash.gif'), fit: BoxFit.fill))
                .makeCentered()
          ],
        )
      ]),
    );
  }
}
