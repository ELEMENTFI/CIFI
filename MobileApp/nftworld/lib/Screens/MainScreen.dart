import 'dart:async';

import 'package:flutter/material.dart';
import '../Providers/Datafunction.dart';
import '../Widgets/Button.dart';
import 'package:velocity_x/velocity_x.dart';
import 'ListScreen.dart';
import 'LoginScreen.dart';

class MainPage extends StatefulWidget {
  @override
  _MainPageState createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {
  int index = 0;

  changeindex(int cindex, store) {
    setState(() {
      index = cindex;
    });
    store.search == false ? Search(false) : Search(true);
  }

  @override
  void initState() {
    super.initState();
    print('p');
    Initial();
    Mydatas();
    delay();
    Login.controller6.clear();
    Login.controller7.clear();
  }

  delay() async {
    Timer(Duration(seconds: 5), () {
      print('lo');
      BuyedNft();
    });
  }

  @override
  Widget build(BuildContext context) {
    VxState.watch(context, on: [Initial]);
    Mystore data = VxState.store;
    var alldata = data.nftdatas;
    var mydata = data.mydata;
    var byeddata = data.buyednft;
    var theme = Theme.of(context);

    return Scaffold(
      backgroundColor: theme.primaryColor,
      body: (index == 0)
          ? ListScreen(
              data: alldata,
              id: index,
              empttext: 'NO NFT AVAILABLE',
            )
          : (index == 1)
              ? ListScreen(
                  data: mydata,
                  id: index,
                  empttext: 'NO NFT AVAILABLE CREATE SOME',
                )
              : ListScreen(
                  data: byeddata,
                  id: index,
                  empttext: 'NO NFT AVAILABLE BUY SOME',
                ),
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(
              Icons.functions_sharp,
              color: Colors.white,
            ),
            label: 'Explore',
          ),
          BottomNavigationBarItem(
            icon: Icon(
              Icons.store_rounded,
              color: Colors.white,
            ),
            label: 'My Items',
          ),
          BottomNavigationBarItem(
            icon: Icon(
              Icons.storage,
              color: Colors.white,
            ),
            label: 'byed nft',
          ),
        ],
        currentIndex: index,
        selectedItemColor: theme.accentColor,
        showSelectedLabels: true,
        showUnselectedLabels: false,
        onTap: (ci) => changeindex(ci, data),
        backgroundColor: theme.primaryColor,
      ),
      floatingActionButton: (index == 1)
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
