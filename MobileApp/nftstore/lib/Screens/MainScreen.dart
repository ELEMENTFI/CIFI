import 'package:flutter/material.dart';
import 'Myitems.dart';
import '../Screens/HomePage.dart';
import '../Screens/TopSellers.dart';

class MainPage extends StatefulWidget {
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
  Widget build(BuildContext context) {
    var theme = Theme.of(context);
    return Scaffold(
      backgroundColor: theme.primaryColor,
      appBar: AppBar(
        leading: IconButton(
          icon: Icon(
            Icons.menu,
            color: theme.accentColor,
          ),
          onPressed: () {},
        ),
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
    );
  }
}
