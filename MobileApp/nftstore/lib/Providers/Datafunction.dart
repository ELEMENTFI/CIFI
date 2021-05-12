import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_database/firebase_database.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:velocity_x/velocity_x.dart';

class Nftdatas {
  final nftname;
  final price;
  final owner;
  final qty;
  final url;
  final title;
  final popular;
  final desc;
  final symbol;
  final catagory;
  Nftdatas({
    @required this.nftname,
    @required this.price,
    @required this.owner,
    @required this.qty,
    @required this.url,
    @required this.title,
    @required this.popular,
    @required this.desc,
    @required this.symbol,
    this.catagory,
  });
}

class Auth {
  final username;
  final password;

  Auth({@required this.username, @required this.password});
}

class Logindata {
  final email;
  final phone;
  final username;
  final password;

  Logindata(
      {@required this.email,
      @required this.phone,
      @required this.username,
      @required this.password});
}

class Mystore extends VxStore {
  List<Nftdatas> animals = [];
  List<Nftdatas> space = [];
  List<Nftdatas> nature = [];
  List<Nftdatas> arts = [];
  List<Nftdatas> mydata = [];
  List<String> nftname = [];
  bool sign = false;
  bool r = false;
  var repeat;
  String username;
}

class Initial extends VxMutation<Mystore> {
  final ref = FirebaseDatabase.instance.reference();
  final auth = FirebaseAuth.instance;
  final fs = FirebaseFirestore.instance;
  final user;

  Initial(this.user);
  @override
  perform() async {
    try {
      if (store.nftname.isNotEmpty) {
        ref.child('NFTNAME').once().then((nftname) {
          for (var i = 0; i <= store.nftname.length; i++) {
            print(i.toString() + 'i');
            store.repeat =
                store.nftname.where((element) => element == nftname.value[i]);
            if (store.repeat != null)
              store.r = true;
            else
              store.r = false;
          }
        });
      }
      if (store.r == false) {
        fs.collection('User').doc(user).get().then((value) {
          store.username = value['user_name'];
        }).then((_) {
          ref.child('count').once().then((count) {
            var i = count.value;

            ref.child('NFTNAME').once().then((nftname) {
              for (int j = 1; j <= i; j++) {
                print('w1' + j.toString());
                if (store.r == false)
                  store.nftname.add(nftname.value[j].toString());
              }
            }).then((_) {
              for (int k = 0; k < i; k++) {
                print(k.toString() + 'k');
                ref.child('NFT').child(store.nftname[k]).once().then((result) {
                  var cathegory = result.value['Catagory'];
                  switch (cathegory.toString()) {
                    case 'animal':
                      store.animals.add(Nftdatas(
                        nftname: store.nftname[k],
                        price: result.value['Price'],
                        owner: result.value['Owner'],
                        qty: result.value['Qty'],
                        url: result.value['Image_url'],
                        title: result.value['Title'],
                        popular: result.value['Popular'],
                        desc: result.value['Discription'],
                        symbol: result.value['Nft_Symbol'],
                      ));
                      break;
                    case 'nature':
                      store.nature.add(Nftdatas(
                        nftname: store.nftname[k],
                        price: result.value['Price'],
                        owner: result.value['Owner'],
                        qty: result.value['Qty'],
                        url: result.value['Image_url'],
                        title: result.value['Title'],
                        popular: result.value['Popular'],
                        desc: result.value['Discription'],
                        symbol: result.value['Nft_Symbol'],
                      ));
                      break;
                    case 'arts':
                      store.arts.add(Nftdatas(
                        nftname: store.nftname[k],
                        price: result.value['Price'],
                        owner: result.value['Owner'],
                        qty: result.value['Qty'],
                        url: result.value['Image_url'],
                        title: result.value['Title'],
                        popular: result.value['Popular'],
                        desc: result.value['Discription'],
                        symbol: result.value['Nft_Symbol'],
                      ));
                      break;
                    case 'space':
                      store.space.add(Nftdatas(
                        nftname: store.nftname[k],
                        price: result.value['Price'],
                        owner: result.value['Owner'],
                        qty: result.value['Qty'],
                        url: result.value['Image_url'],
                        title: result.value['Title'],
                        popular: result.value['Popular'],
                        desc: result.value['Discription'],
                        symbol: result.value['Nft_Symbol'],
                      ));
                      break;
                    default:
                  }
                });
              }
            });
          });
        });
      }
    } catch (e) {
      print(e);
    }
  }
}

class Authstate extends VxMutation<Mystore> {
  @override
  perform() {
    store.sign = !store.sign;
  }
}

class Mydata extends VxMutation<Mystore> {
  final ref = FirebaseDatabase.instance.reference();
  final auth = FirebaseAuth.instance;
  final fs = FirebaseFirestore.instance;
  @override
  perform() async {
    try {
      if (store.nftname.isNotEmpty) {
        ref.child('NFTNAME').once().then((nftname) {
          for (var i = 0; i <= store.nftname.length; i++) {
            print(i.toString() + 'i');
            store.repeat =
                store.nftname.where((element) => element == nftname.value[i]);
            if (store.repeat != null)
              store.r = true;
            else
              store.r = false;
          }
        });
      }
      if (store.r == false) {
        fs.collection('User').doc(auth.currentUser.email).get().then((value) {
          store.username = value['user_name'];
        }).then((_) {
          ref.child('count').once().then((count) {
            var i = count.value;

            ref.child('NFTNAME').once().then((nftname) {
              for (int j = 1; j <= i; j++) {
                store.nftname.add(nftname.value[j].toString());
              }
            }).then((_) {
              for (int k = 0; k < i; k++) {
                ref.child('NFT').child(store.nftname[k]).once().then((result) {
                  if (result.value['Owner'] == store.username)
                    store.mydata.add(Nftdatas(
                      nftname: store.nftname[k],
                      price: result.value['Price'],
                      owner: result.value['Owner'],
                      qty: result.value['Qty'],
                      url: result.value['Image_url'],
                      title: result.value['Title'],
                      popular: result.value['Popular'],
                      desc: result.value['Discription'],
                      symbol: result.value['Nft_Symbol'],
                    ));
                });
              }
            });
          });
        });
      }
    } catch (e) {
      print(e);
    }
  }
}
