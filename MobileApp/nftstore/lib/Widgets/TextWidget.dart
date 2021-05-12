import 'dart:async';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_database/firebase_database.dart';
import 'package:flutter/material.dart';
import 'package:nftstore/Providers/Datafunction.dart';
import 'package:nftstore/Screens/AccountCreate.dart';
import 'package:nftstore/Screens/NFT.dart';
import 'package:rflutter_alert/rflutter_alert.dart';
import 'package:url_launcher/url_launcher.dart';
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

  void logindata(BuildContext ctx) async {
    try {
      var email = AccountCreation.controller1;
      var phoneno = AccountCreation.controller2;
      var username = AccountCreation.controller3;
      var password = AccountCreation.controller4;
      var repassword = AccountCreation.controller5;
      final newuser = await auth.createUserWithEmailAndPassword(
          email: email.text, password: password.text);
      if (newuser != null) {
        await newuser.user.sendEmailVerification();
        await fstore.collection('email').doc(username.text).set({
          'email': email.text,
        }).then((value) {
          fstore.collection('User').doc(email.text).set({
            'email_id': email.text,
            'password': password.text,
            'phone_no': phoneno.text,
            'user_name': username.text,
          }).then((value) => context.vxNav.push(Uri(path: '/')));
        }).then((value) {
          email.clear();
          phoneno.clear();
          username.clear();
          password.clear();
          repassword.clear();
        });
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

  void nftdata(counts, user) {
    var nftname = NFTCreation.controller8;
    var nftsymbol = NFTCreation.controller9;
    var qty = NFTCreation.controller10;
    var price = NFTCreation.controller11;
    var title = NFTCreation.controller12;
    var catagory = NFTCreation.controller13;
    var discription = NFTCreation.controller14;
    var url = NFTCreation.controller15;
    var data =
        counts.where((element) => element == nftname.text + nftsymbol.text);
    ref.child('NFT').child(nftname.text + nftsymbol.text).set({
      'Image_url': url.text,
      'Qty': qty.text,
      'Discription': discription.text,
      'Price': price.text,
      'Catagory': catagory.text,
      'Popular': '',
      'Nft_Symbol': nftsymbol.text,
      'Owner': user,
      'Title': title.text,
    }).then((_) {
      ref.child('count').once().then((count) {
        int i = count.value;
        int index = i + 1;

        if (data == null)
          ref.child('NFTNAME').update(
              {index.toString(): nftname.text + nftsymbol.text}).then((_) {
            ref.update({'count': index});
          }).then((value) {
            if (data == null)
              ref.update({'pending': nftname.text + nftsymbol.text});
          }).then((_) async => await launch(
                'https://hungry-kalam-03b7d1.netlify.app/',
                forceSafariVC: false,
                forceWebView: false,
                enableJavaScript: true,
              ));
        Timer(Duration(minutes: 5), () {
          ref.update({'pending': ''});
          nftname.clear();
          nftsymbol.clear();
          qty.clear();
          discription.clear();
          price.clear();
          catagory.clear();
          title.clear();
          url.clear();
        });
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);
    Mystore stores = VxState.store;
    var count = stores.nftname;
    var user = stores.username;
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
      maxLines: widget.id == 14 ? 5 : 1,
      keyboardType: widget.keybordtype,
      style: theme.textTheme.headline1.copyWith(fontSize: 15),
      obscureText: widget.obsecure,
      onSaved: (value) async {
        try {
          if (widget.id == 5) {
            logindata(context);
          }
          if (widget.id == 16) {
            nftdata(count, user);
          }
        } catch (e) {
          Alert(
            context: context,
            type: AlertType.error,
            title: "ERROR",
            desc: e.toString(),
            buttons: [
              DialogButton(
                child: Text(
                  "OK",
                  style: TextStyle(
                      color: Theme.of(context).accentColor, fontSize: 20),
                ),
                onPressed: () => Navigator.pop(context),
                width: 120,
              ),
            ],
          ).show();
        }
      },
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
            if (value.isEmpty) return 'Please enter your NFT Symbol';

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
          default:
            return null;
        }
        return null;
      },
    ).p(10);
  }
}
