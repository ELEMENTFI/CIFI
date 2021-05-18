import 'package:flutter/material.dart';
import 'package:nftstore/Providers/Datafunction.dart';
import 'package:velocity_x/velocity_x.dart';

class SplashScreen extends StatefulWidget {
  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  final skey = GlobalKey<ScaffoldState>();
  @override
  void initState() {
    super.initState();
    print('op');
    Initial('');
   
  }

  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);
    return Scaffold(
      key: skey,
      backgroundColor: theme.primaryColor,
      body: ZStack([
        VStack(
          [
            VxBox()
                .square(200)
                .bgImage(DecorationImage(
                    image: AssetImage('assets/splash.gif'), fit: BoxFit.fill))
                .makeCentered()
                .p(20)
          ],
          alignment: MainAxisAlignment.center,
          axisSize: MainAxisSize.max,
        )
      ]),
    );
  }
}
