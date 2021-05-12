import 'dart:async';

import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:nftstore/Providers/Datafunction.dart';
import 'package:nftstore/Screens/splashscreen.dart';
import 'package:nftstore/Widgets/Button.dart';
import 'LoginScreen.dart';
import 'Myitems.dart';
import '../Screens/HomePage.dart';
import '../Screens/TopSellers.dart';

class MainPage extends StatefulWidget {
  final BuildContext ctx;

  const MainPage({Key key, @required this.ctx}) : super(key: key);
  
  @override
  _MainPageState createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {
  int index = 0;

  changeindex(int cindex) {
    setState(() {
      index = cindex;
      print(cindex);
    });
  }

  @override
  void initState() {
    super.initState();
    print('s1');
    Initial(FirebaseAuth.instance.currentUser.email);
    Login.controller6.clear();
    Login.controller7.clear();
    Timer(Duration(seconds: 2), splash);
  }

  splash() {
    Navigator.push(
        widget.ctx, MaterialPageRoute(builder: (context) => SplashScreen()));
  }

  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);
    final auth = FirebaseAuth.instance;
    return Scaffold(
      backgroundColor: theme.primaryColor,
      appBar: AppBar(
        actions: [
          IconButton(
            icon: Icon(
              Icons.settings_power,
              color: theme.accentColor,
            ),
            onPressed: () => auth.signOut(),
          ),
        ],
      ),
      body: (index == 0)
          ? HomePage()
          : (index == 1)
              ? TopSellers()
              : NFT(),
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(
              Icons.home,
              color: Colors.blue,
            ),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(
              Icons.school,
              color: Colors.blue,
            ),
            label: 'Top Sellers',
          ),
          BottomNavigationBarItem(
            icon: Icon(
              Icons.storage,
              color: Colors.blue,
            ),
            label: 'My Items',
          ),
        ],
        currentIndex: index,
        selectedItemColor: theme.accentColor,
        showSelectedLabels: true,
        showUnselectedLabels: false,
        onTap: changeindex,
        backgroundColor: theme.primaryColor,
      ),
      floatingActionButton: (index == 2)
          ? Button(
              label: 'CREATE',
              id: 5,
              navname: '/nft',
            )
          : null,
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
    );
  }
}
