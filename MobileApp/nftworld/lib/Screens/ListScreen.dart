import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import '../Providers/Datafunction.dart';
import '../Widgets/Card.dart';
import 'package:velocity_x/velocity_x.dart';

// ignore: must_be_immutable
class ListScreen extends StatefulWidget {
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
  _ListScreenState createState() => _ListScreenState();
}

class _ListScreenState extends State<ListScreen> {
  List<Nftdatas> datas;
  List<Nftdatas> showdata;
  @override
  void initState() {
    super.initState();
    datas = widget.data;
    showdata = widget.data;
    print('li');
  }

  datachange() {
    setState(() {
      datas = widget.data;
      showdata = widget.data;
    });
  }

  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);
    final auth = FirebaseAuth.instance;
    Mystore store = VxState.store;
    if (widget.id != null && store.search == false) {
      datachange();
      print(widget.id);
    }
    return Scaffold(
        backgroundColor: theme.primaryColor,
        appBar: VxAppBar(
          searchBar: true,
          searchHintText: 'SEARCH NFT HERE...',
          searchTextStyle: theme.textTheme.headline2.copyWith(fontSize: 12),
          searchHintStyle: theme.textTheme.headline2.copyWith(fontSize: 12),
          onSubmitted: (_) {
            if (widget.id != 0) datachange();
          },
          onChanged: (value) {
            setState(() {
              try {
                store.search != false ? Search(false) : Search(true);
                showdata = datas
                    .where((element) => element.nftname.contains(value))
                    .toList();
              } catch (e) {
                print(e);
              }
            });
          },
          leading: IconButton(
              icon: Icon(
                Icons.logout,
                color: theme.cardColor,
              ),
              onPressed: () {
                auth.signOut();
                store.buyednft.clear();
                store.nftname.clear();
                store.nftdatas.clear();
                store.mydata.clear();
                store.count = 0;
                store.called = false;
                print(store.mydata.length);
              }),
        ),
        body: RefreshIndicator(
            backgroundColor: theme.accentColor,
            color: theme.cardColor,
            onRefresh: () {
              return Future.delayed(Duration(seconds: 3), () {
                if (widget.id == 0) {
                  Initial();
                }
                if (widget.id == 1) {
                  store.mydata.clear();
                  Mydatas();
                }
                if (widget.id == 2) {
                  store.buyednft.clear();
                  BuyedNft();
                }
              });
            },
            child: ListView.builder(
                itemCount: showdata.length == 0 ? 1 : showdata.length,
                itemBuilder: (context, index) {
                  if (showdata.length != 0) {
                    return CardWidget(
                      price: showdata[index].price.toString(),
                      nftname: showdata[index].nftname,
                      nftsymbol: showdata[index].symbol,
                      url: showdata[index].url,
                      list: true,
                    ).p(30).onTap(() => context.vxNav.push(
                          Uri(path: '/buy'),
                          params: [showdata, widget.id, index],
                        ));
                  } else {
                    return (widget.empttext.toString())
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
