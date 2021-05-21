import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import '../Providers/Datafunction.dart';
import '../Widgets/Card.dart';
import 'package:velocity_x/velocity_x.dart';

class ListScreen extends StatelessWidget {
  final id;
  final data;
  const ListScreen({Key key, @required this.data, @required this.id})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);
    final auth = FirebaseAuth.instance;
    Mystore store = VxState.store;
    return Scaffold(
        backgroundColor: theme.primaryColor,
        appBar: AppBar(
          actions: [
            IconButton(
                icon: Icon(
                  Icons.logout,
                  color: theme.accentColor,
                ),
                onPressed: () {
                  auth.signOut();

                  store.nftname.clear();
                  store.nftdatas.clear();
                  store.mydata.clear();
                  store.username = '';
                  store.count = 0;
                }),
          ],
        ),
        body: RefreshIndicator(
            onRefresh: () {
              return Future.delayed(Duration(seconds: 3), () {
                print('re');
                store.mydata.clear();

                Initial();
              });
            },
            child: (data.isEmpty)
                ? "NO NFT AVAILABLE"
                    .richText
                    .textStyle(theme.textTheme.headline2.copyWith(fontSize: 18))
                    .makeCentered()
                    .shimmer()
                : ListView.builder(
                    itemCount: data.length,
                    itemBuilder: (context, index) => CardWidget(
                          price: data[index].price,
                          nftname: data[index].nftname,
                          nftsymbol: data[index].symbol,
                          url: data[index].url,
                          list: true,
                        ).p(30).onTap(() => context.vxNav.push(
                              Uri(path: '/buy'),
                              params: [data, id, index],
                            )))));
  }
}
