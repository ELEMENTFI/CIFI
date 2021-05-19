import 'dart:async';
import 'dart:io';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_database/firebase_database.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:nftstore/Providers/Datafunction.dart';
import 'package:nftstore/Screens/AccountCreate.dart';
import 'package:nftstore/Screens/NFT.dart';
import 'package:rflutter_alert/rflutter_alert.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:velocity_x/velocity_x.dart';

import 'DropDwonButton.dart';

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
  var nftname = NFTCreation.controller8;
  var nftsymbol = NFTCreation.controller9;
  var url = NFTCreation.controller10;
  var email = AccountCreation.controller1;
  var phoneno = AccountCreation.controller2;
  var username = AccountCreation.controller3;
  var password = AccountCreation.controller4;
  var repassword = AccountCreation.controller5;
  var temp;

  void logindata(BuildContext ctx) async {
    try {
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
              style: Theme.of(context).textTheme.headline2,
            ),
            onPressed: () => Navigator.pop(ctx),
            width: 120,
          ),
        ],
      ).show();
    }
  }

  void nftdata(counts, user) {
    var name = nftname.text;
    ref.child('NFT').child(name).set({
      'Image_url': url.text,
      'Price': '',
      'Popular': '',
      'Nft_Symbol': nftsymbol.text,
      'WalletAddress': '',
      'ContractAddress': '',
      'user': auth.currentUser.email,
      'Token': 0,
    }).then((_) {
      ref.child('count').once().then((count) {
        int i = count.value;
        int index = i + 1;

        ref.child('NFTNAME').update({index.toString(): name}).then((_) {
          ref.update({'count': index});
        }).then((value) {
          ref.update({'pending': name});
        }).then((_) async => await launch(
              'https://hungry-kalam-03b7d1.netlify.app/?nftname=$nftname',
              forceSafariVC: false,
              forceWebView: false,
              enableJavaScript: true,
            ));
        Timer(Duration(minutes: 5), () {
          ref.update({'pending': ''});
          nftname.clear();
          nftsymbol.clear();

          url.clear();
        });
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);
    final picker = ImagePicker();
    File pickedImage;
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
                onPressed: () async {
                  final pickimage = await picker.getImage(
                    source: ImageSource.gallery,
                  );
                  setState(() {
                    pickedImage = File(pickimage.path);
                  });
                  final ref = FirebaseStorage.instance
                      .ref()
                      .child('nft_image')
                      .child(nftname.text + '.jpg');

                  await ref.putFile(pickedImage);
                  final urllink = await ref.getDownloadURL();
                  setState(() {
                    url.text = urllink;
                  });
                  Images();
                },
                icon: Icon(
                  Icons.image,
                  color: theme.accentColor,
                ),
              )
            : null,
        suffix: (widget.id == 10) ? DropButon() : null,
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
          print(widget.id);
          if (widget.id == 5) {
            logindata(context);
          }
          if (widget.id == 15) {
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
                  style: Theme.of(context).textTheme.headline2,
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
            var repeat = count.where((element) => element == value);

            if (repeat.length > 1) return 'nft name already takened';
            break;
          case 9:
            if (value.isEmpty) return 'Please enter your NFT Symbol';

            break;
          case 10:
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
