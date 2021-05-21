import 'package:firebase_database/firebase_database.dart';
import 'package:flutter/material.dart';
import 'package:nftstore/Providers/Datafunction.dart';
import '../Widgets/TextWidget.dart';
import 'package:rflutter_alert/rflutter_alert.dart';
import '../Widgets/Button.dart';

import 'package:velocity_x/velocity_x.dart';

class BuyerScreen extends StatefulWidget {
  final data;
  final id;
  final index;
  BuyerScreen(
      {Key key, @required this.data, @required this.id, @required this.index})
      : super(key: key);

  @override
  BuyerScreenState createState() => BuyerScreenState();
}

class BuyerScreenState extends State<BuyerScreen> {
  static final databse = FirebaseDatabase.instance.reference();
  static TextEditingController c11 = TextEditingController();
  FocusNode f11 = FocusNode();
  static final scaffold1 = GlobalKey<ScaffoldState>();
  static var name;
  static var url;
  static var symbol;
  static var token;
  static var contract;
  static var wallet;
  static var user;
  @override
  void initState() {
    super.initState();
    print(widget.id);
    setState(() {
      name = widget.data[widget.index].nftname;
      url = widget.data[widget.index].url;
      symbol = widget.data[widget.index].symbol;
      token = widget.data[widget.index].tokenid;
      contract = widget.data[widget.index].contract;
      wallet = widget.data[widget.index].wallet;
      user = widget.data[widget.index].user;
    });
  }

  // ignore: unused_element
  static newupdate(store) {
    if (c11.text != '') {
      databse.child('NFT').child(name.toString()).update({
        'Image_url': url.toString(),
        'Price': c11.text,
        'Popular': '',
        'Nft_Symbol': symbol.toString(),
        'WalletAddress': wallet,
        'ContractAddress': contract,
        'user': user,
        'Token': token,
      }).then((value) {
        store.nftname.clear();
        store.nftdatas.clear();
        store.mydata.clear();
        store.username = '';
        store.count = 0;
        Initial();
        Alert(
          context: scaffold1.currentContext,
          type: AlertType.success,
          title: "SCUCCESS",
          desc: 'YOUR NFT UPDATED FOR SALE',
          buttons: [
            DialogButton(
              child: Text(
                "OK",
                style: Theme.of(scaffold1.currentContext).textTheme.headline2,
              ),
              onPressed: () => Navigator.pop(scaffold1.currentContext),
              width: 120,
            ),
          ],
        ).show();
      });
    } else {
      Alert(
        context: scaffold1.currentContext,
        type: AlertType.error,
        title: "ERROR",
        desc: 'PLEASE ENTER PRICE TO SALE YOUR NFT',
        buttons: [
          DialogButton(
            child: Text(
              "OK",
              style: Theme.of(scaffold1.currentContext).textTheme.headline2,
            ),
            onPressed: () => Navigator.pop(scaffold1.currentContext),
            width: 120,
          ),
        ],
      ).show();
    }
  }

  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);

    return Scaffold(
      key: scaffold1,
      appBar: AppBar(
        centerTitle: true,
        title: (widget.data[widget.index].nftname.toString())
            .richText
            .textStyle(theme.textTheme.headline1)
            .make(),
      ),
      backgroundColor: theme.primaryColor,
      body: ListView(children: [
        VxBox()
            .square(context.percentHeight * 20)
            .neumorphic(color: theme.cardColor, elevation: 5.0)
            .bgImage(DecorationImage(
              image: NetworkImage(widget.data[widget.index].url),
              fit: BoxFit.fill,
            ))
            .makeCentered()
            .p(10),
        (context.percentHeight * 10).heightBox,
        ListTile(
          title: "OWENER NAME"
              .richText
              .textStyle(theme.textTheme.headline1.copyWith(fontSize: 19))
              .make(),
          trailing: (widget.data[widget.index].user.toString())
              .richText
              .textStyle(theme.textTheme.headline2)
              .make(),
        ).p(10),
        ListTile(
          title: "SYMBOL"
              .richText
              .textStyle(theme.textTheme.headline1.copyWith(fontSize: 19))
              .make(),
          trailing: (widget.data[widget.index].symbol.toString())
              .richText
              .textStyle(theme.textTheme.headline2)
              .make(),
        ).p(10),
        ListTile(
          title: (widget.id == 1 && widget.data[widget.index].price == '')
              ? TextWidget(
                  label: 'PRICE',
                  prefix: false,
                  obsecure: false,
                  id: 11,
                  keybordtype: TextInputType.number,
                  controller: c11,
                  ctx: context,
                  focusnode: f11,
                  focusfun: (_) => f11.unfocus(),
                  action: TextInputAction.done,
                )
              : "PRICE"
                  .richText
                  .textStyle(theme.textTheme.headline1.copyWith(fontSize: 19))
                  .make()
                  .expand(),
          trailing: (widget.id == 1 && widget.data[widget.index].price == '')
              ? null
              : (widget.data[widget.index].price.toString())
                  .richText
                  .textStyle(theme.textTheme.headline2)
                  .make(),
        ).p(10),
        Button(
          label: (widget.id == 1 && widget.data[widget.index].price == '')
              ? 'SALE'
              : 'BUY',
          id: 7,
        ).centered()
      ]),
    );
  }
}
