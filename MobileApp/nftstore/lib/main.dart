import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:firebase_core/firebase_core.dart';
import 'Providers/Datafunction.dart';
import 'package:velocity_x/velocity_x.dart';
import 'Screens/AccountCreate.dart';
import 'Screens/BuyerScreen.dart';
import 'Screens/ListScreen.dart';
import 'Screens/LoginScreen.dart';
import 'Screens/MainScreen.dart';
import 'Screens/NFT.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(VxState(store: Mystore(), child: MyApp()));
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  void initState() {
    super.initState();
    Initial();
  }

  final _routerDelegate = VxNavigator(
    notFoundPage: (uri, params) => MaterialPage(
      key: ValueKey('not-found-page'),
      child: Builder(
        builder: (context) => Scaffold(
          body: Center(
            child: Text('Page ${uri.path} not found'),
          ),
        ),
      ),
    ),
    routes: {
      '/': (uri, params) => MaterialPage(child: Login()),
      '/signin': (uri, params) => MaterialPage(child: AccountCreation()),
      '/nft': (uri, params) => MaterialPage(child: NFTCreation()),
      '/main': (uri, params) => MaterialPage(child: MainPage()),
      '/list': (uri, params) => MaterialPage(
              child: ListScreen(
            name: params[0],
            data: params[1],
          )),
      '/buy': (uri, params) => MaterialPage(
          child: BuyerScreen(
              //data: params,
              )),
    },
  );

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primaryColor: Colors.black,
        accentColor: Colors.blue,
        cardColor: Colors.white,
        textTheme: TextTheme(
          headline1: GoogleFonts.lora(
              fontSize: 25.0, fontWeight: FontWeight.bold, color: Colors.white),
          headline2: GoogleFonts.lora(
            fontSize: 20.0,
            fontWeight: FontWeight.w700,
            color: Colors.orange,
          ),
        ),
        buttonTheme: ButtonThemeData(
          buttonColor: Colors.blue,
          splashColor: Colors.yellowAccent,
          shape:
              RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
        ),
        appBarTheme: AppBarTheme(
          backgroundColor: Colors.black,
        ),
      ),
      routerDelegate: _routerDelegate,
      routeInformationParser: VxInformationParser(),
    );
  }
}
