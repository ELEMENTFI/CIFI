import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import '../Providers/Datafunction.dart';
import '../Widgets/Card.dart';
import 'package:velocity_x/velocity_x.dart';

// ignore: must_be_immutable
class ListScreen extends StatelessWidget {
  final id;
  final data;
  final empttext;
  ListScreen(
      {Key key,
      @required this.data,
      @required this.id,
      @required this.empttext})
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
                  store.buyednft.clear();
                  store.nftname.clear();
                  store.nftdatas.clear();
                  store.mydata.clear();
                  store.username = '';
                  store.count = 0;
                  print('loged out');
                }),
          ],
        ),
        body: RefreshIndicator(
            backgroundColor: theme.accentColor,
            color: theme.cardColor,
            onRefresh: () {
              return Future.delayed(Duration(seconds: 3), () {
                store.mydata.clear();
                store.buyednft.clear();
                Initial();
                BuyedNft();
              });
            },
            child: ListView.builder(
                itemCount: data.length == 0 ? 1 : data.length,
                itemBuilder: (context, index) {
                  if (data.length != 0) {
                    return CardWidget(
                      price: data[index].price.toString(),
                      nftname: data[index].nftname,
                      nftsymbol: data[index].symbol,
                      url: data[index].url,
                      list: true,
                    ).p(30).onTap(() => context.vxNav.push(
                          Uri(path: '/buy'),
                          params: [data, id, index],
                        ));
                  } else {
                    return (empttext.toString())
                        .richText
                        .textStyle(
                            theme.textTheme.headline2.copyWith(fontSize: 18))
                        .makeCentered()
                        .py(context.percentHeight * 35)
                        .shimmer();
                  }
                })));
  }
}
