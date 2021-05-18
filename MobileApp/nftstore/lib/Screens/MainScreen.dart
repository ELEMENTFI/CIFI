import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:nftstore/Providers/Datafunction.dart';
import 'package:nftstore/Widgets/Button.dart';
import 'package:velocity_x/velocity_x.dart';
import 'ListScreen.dart';
import 'LoginScreen.dart';


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
  void initState() {
    super.initState();
    print(FirebaseAuth.instance.currentUser.email);
    Login.controller6.clear();
    Login.controller7.clear();
  }

  @override
  Widget build(BuildContext context) {
    VxState.watch(context, on: [Initial]);
    Mystore data = VxState.store;
    var alldata = data.nftdatas;
    var topdata =
        data.nftdatas.filter((element) => element.popular == 'true').toList();
    var mydata = data.mydata;
    var theme = Theme.of(context);
    final auth = FirebaseAuth.instance;
    return Scaffold(
      backgroundColor: theme.primaryColor,
      appBar: AppBar(
        actions: [
          IconButton(
              icon: Icon(
                Icons.logout,
                color: theme.accentColor,
              ),
              onPressed: () => auth.signOut()),
        ],
      ),
      body: (index == 0)
          ? ListScreen(data: alldata,index: index,)
          : (index == 1)
              ? ListScreen(data: topdata,index: index,)
              : ListScreen(data: mydata,index: index,),
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
