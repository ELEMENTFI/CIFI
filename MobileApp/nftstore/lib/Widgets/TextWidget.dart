import 'dart:async';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_database/firebase_database.dart';
import 'package:flutter/material.dart';
import 'package:rflutter_alert/rflutter_alert.dart';
import 'package:url_launcher/url_launcher.dart';
import '../Providers/Datafunction.dart';
import 'package:velocity_x/velocity_x.dart';

class TextWidget extends StatefulWidget {
  final label;
  final prefix;
  final obsecure;
  final keybordtype;
  final id;
  final controller;
  final ctx;
  const TextWidget({
    Key key,
    @required this.label,
    @required this.prefix,
    @required this.obsecure,
    @required this.id,
    @required this.keybordtype,
    @required this.controller,
    @required this.ctx,
  }) : super(key: key);

  @override
  TextWidgetState createState() => TextWidgetState();
}

class TextWidgetState extends State<TextWidget> {
  final fstore = FirebaseFirestore.instance;
  final ref = FirebaseDatabase.instance.reference();
  final auth = FirebaseAuth.instance;
  var temp;
  String catagoroy;
  Logindata data = Logindata(email: '', phone: '', username: '', password: '');
  Nftdatas data1 = Nftdatas(
    nftname: '',
    price: '',
    owner: '',
    qty: '',
    url: '',
    title: '',
    popular: '',
    desc: '',
    symbol: '',
    wallet: '',
    catagory: '',
  );

  void datasubmit(id, value, BuildContext ctx) async {
    try {
      
      if (id <= 5) {
        switch (id) {
          case 1:
            data = Logindata(
                email: value,
                phone: data.phone,
                username: data.username,
                password: data.password);
            break;
          case 2:
            data = Logindata(
                email: data.email,
                phone: value,
                username: data.username,
                password: data.password);
            break;
          case 3:
            data = Logindata(
                email: data.email,
                phone: data.phone,
                username: value,
                password: data.password);
            break;
          case 4:
            data = Logindata(
                email: data.email,
                phone: data.phone,
                username: data.username,
                password: value);
            break;
          default:
            data = Logindata(
                email: data.email,
                phone: data.phone,
                username: data.username,
                password: data.password);
        }
        if ((data.email != null) &&
            (data.phone != null) &&
            (data.username != null) &&
            (data.password != null)) {
          fstore.collection('User').doc(data.username).set({
            'email_id': data.email,
            'password': data.password,
            'phone_no': data.phone,
            'user_name': data.username,
          }).then((value) {
            auth.createUserWithEmailAndPassword(
                email: data.email, password: data.password);
          });
        }
      }
      if ((id > 7) && (id <= 15)) {
        switch (id) {
          case 8:
            data1 = Nftdatas(
              nftname: value,
              price: data1.price,
              owner: data1.owner,
              qty: data1.qty,
              url: data1.url,
              title: data1.title,
              popular: data1.popular,
              desc: data1.desc,
              symbol: data1.symbol,
              wallet: data1.wallet,
              catagory: data1.catagory,
            );
            break;
          case 9:
            data1 = Nftdatas(
              nftname: data1.nftname,
              price: data1.price,
              owner: data1.owner,
              qty: data1.qty,
              url: data1.url,
              title: data1.title,
              popular: data1.popular,
              desc: data1.desc,
              symbol: data1.symbol,
              wallet: value,
              catagory: data1.catagory,
            );
            break;
          case 10:
            data1 = Nftdatas(
              nftname: data1.nftname,
              price: data1.price,
              owner: data1.owner,
              qty: data1.qty,
              url: data1.url,
              title: data1.title,
              popular: data1.popular,
              desc: data1.desc,
              symbol: data1.symbol,
              wallet: value,
              catagory: data1.catagory,
            );
            break;
          case 11:
            data1 = Nftdatas(
              nftname: data1.nftname,
              price: value,
              owner: data1.owner,
              qty: data1.qty,
              url: data1.url,
              title: data1.title,
              popular: data1.popular,
              desc: data1.desc,
              symbol: data1.symbol,
              wallet: data1.wallet,
              catagory: data1.catagory,
            );
            break;
          case 12:
            data1 = Nftdatas(
              nftname: data1.nftname,
              price: data1.price,
              owner: data1.owner,
              qty: data1.qty,
              url: data1.url,
              title: value,
              popular: data1.popular,
              desc: data1.desc,
              symbol: data1.symbol,
              wallet: data1.wallet,
              catagory: data1.catagory,
            );
            break;
          case 13:
            data1 = Nftdatas(
              nftname: data1.nftname,
              price: data1.price,
              owner: data1.owner,
              qty: data1.qty,
              url: data1.url,
              title: data1.title,
              popular: data1.popular,
              desc: data1.desc,
              symbol: data1.symbol,
              wallet: data1.wallet,
              catagory: value,
            );
            break;
          case 14:
            data1 = Nftdatas(
              nftname: data1.nftname,
              price: data1.price,
              owner: data1.owner,
              qty: data1.qty,
              url: data1.url,
              title: data1.title,
              popular: data1.popular,
              desc: value,
              symbol: data1.symbol,
              wallet: data1.wallet,
              catagory: data1.catagory,
            );
            break;
          case 15:
            data1 = Nftdatas(
              nftname: data1.nftname,
              price: data1.price,
              owner: data1.owner,
              qty: data1.qty,
              url: value,
              title: data1.title,
              popular: data1.popular,
              desc: data1.desc,
              symbol: data1.symbol,
              wallet: data1.wallet,
              catagory: data1.catagory,
            );
            break;
          case 16:
            data1 = Nftdatas(
              nftname: data1.nftname,
              price: data1.price,
              owner: data1.owner,
              qty: data1.qty,
              url: data1.url,
              title: data1.title,
              popular: data1.popular,
              desc: data1.desc,
              symbol: value,
              wallet: data1.wallet,
              catagory: data1.catagory,
            );
            break;
          default:
            data1 = Nftdatas(
              nftname: data1.nftname,
              price: data1.price,
              owner: data1.owner,
              qty: data1.qty,
              url: data1.url,
              title: data1.title,
              popular: data1.popular,
              desc: data1.desc,
              symbol: data1.symbol,
              wallet: data1.wallet,
              catagory: data1.catagory,
            );
        }
        if ((data1.nftname != null) &&
            (data1.owner != null) &&
            (data1.popular != null) &&
            (data1.price != null) &&
            (data1.qty != null) &&
            (data1.symbol != null) &&
            (data1.title != null) &&
            (data1.url != null) &&
            (data1.wallet != null)) {
          ref.child('NFT').child(data1.nftname + data1.symbol).set({
            'Image_url': data1.url,
            'Qty': data1.qty,
            'Discription': data1.desc,
            'Price': data1.price,
            'Catagory': data1.catagory,
            'Popular': data1.popular,
            'Nft_Symbol': data1.nftname,
            'Owner': auth.currentUser,
            'Title': data1.title,
          }).then((_) {
            ref.child('count').once().then((count) {
              int i = count.value;
              int index = i + 1;
              ref.child('NFTNAME').update(
                  {index.toString(): data1.nftname + data1.symbol}).then((_) {
                ref.update({'count': index});
              }).then((value) {
                ref.update({'pending': data1.nftname + data1.symbol});
              }).then((_) async => await launch(
                    'https://hungry-kalam-03b7d1.netlify.app/',
                    forceSafariVC: false,
                    forceWebView: false,
                    enableJavaScript: true,
                  ));
              Timer(Duration(minutes: 5), () => ref.update({'pending': ''}));
            });
          });
        }
      }
    } catch (e) {
      Alert(
        context: ctx,
        type: AlertType.error,
        title: "ERROR",
        desc: e.toString(),
        buttons: [
          DialogButton(
            child: Text(
              "OK",
              style: TextStyle(color: Theme.of(ctx).accentColor, fontSize: 20),
            ),
            onPressed: () => Navigator.pop(ctx),
            width: 120,
          ),
        ],
      ).show();
    }
  }

  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);
    //Mystore store = VxState.store;
    return TextFormField(
      controller: widget.controller,
      decoration: InputDecoration(
        errorStyle: theme.textTheme.headline2
            .copyWith(fontSize: 10, fontStyle: FontStyle.italic),
        labelText: widget.label,
        labelStyle: theme.textTheme.headline2.copyWith(fontSize: 15),
        prefixIcon: widget.prefix
            ? IconButton(
                onPressed: () {},
                icon: Icon(
                  Icons.image,
                  color: theme.accentColor,
                ),
              )
            : null,
        enabledBorder: OutlineInputBorder(
            borderRadius: BorderRadius.all(Radius.circular(20.0)),
            borderSide: BorderSide(color: theme.accentColor, width: 2)),
      ),
      maxLines: widget.id == 13 ? 5 : 1,
      keyboardType: widget.keybordtype,
      style: theme.textTheme.headline1.copyWith(fontSize: 15),
      obscureText: widget.obsecure,
      onSaved: (value) => datasubmit(widget.id, value,widget.ctx),
      validator: (value) {
        switch (widget.id) {
          case 1:
            if (value.isEmpty ||
                !RegExp(r"^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+")
                    .hasMatch(value)) return 'In valid Email';
            break;
          case 2:
            if ((!RegExp(r'(^(?:[+0]9)?[0-9]{10,12}$)').hasMatch(value)))
              return 'In valid Phone no';
            break;
          case 3:
            if (value.isEmpty) return 'Please enter your User Name';
            break;
          case 4:
            if (value.isEmpty) return 'Please enter your Password';
            setState(() {
              temp = value;
            });
            break;
          case 5:
            if (temp != value) return 'Password not matched';
            break;
          case 6:
            if (value.isEmpty)
              return 'Please enter your Valid User Name or Email_Id';
            break;
          case 7:
            if (value.isEmpty) return 'Please enter your Password';
            break;
          case 8:
            if (value.isEmpty) return 'Please enter your NFT Name';
            break;
          case 9:
            if (value.isEmpty) return 'In vaild address';
            break;
          case 10:
            if (!RegExp(r"^[0-9]").hasMatch(value)) return 'Invalid QTY';
            break;
          case 11:
            if (!RegExp(r"^[0-9]").hasMatch(value)) return 'Invalid Price';
            break;
          case 12:
            if (value.isEmpty) return 'Invalid Title';
            break;
          case 14:
            if (value.isNotEmpty) {
              if (value.length > 50) return 'Please Enter Text Between 1 to 50';
            }
            break;
          case 15:
            if (value.isEmpty) return 'Please Enter URL';
            break;
          case 16:
            if (value.isEmpty) return 'Please enter your NFT Symbol';

            break;
          default:
            return null;
        }
        return null;
      },
    ).p(10);
  }
}
