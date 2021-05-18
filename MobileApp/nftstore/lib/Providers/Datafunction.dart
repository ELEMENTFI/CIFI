import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_database/firebase_database.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:velocity_x/velocity_x.dart';

class Nftdatas {
  final nftname;
  final price;
  final wallet;
  final contract;
  final url;
  final tokenid;
  final popular;

  final symbol;

  Nftdatas({
    @required this.nftname,
    @required this.price,
    @required this.url,
    @required this.popular,
    @required this.symbol,
    @required this.wallet,
    @required this.contract,
    @required this.tokenid,
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
  List<Nftdatas> nftdatas = [];
  List<Nftdatas> mydata = [];
  List<String> nftname = [];
  bool image = false;
  bool sign = false;
  var count = 0;
  var start;
  String username;
}

class Images extends VxMutation<Mystore> {
  @override
  perform() {
    store.image = !store.image;
  }
}

class Initial extends VxMutation<Mystore> {
  final ref = FirebaseDatabase.instance.reference();
  final auth = FirebaseAuth.instance;
  final fs = FirebaseFirestore.instance;
  final user;

  Initial(this.user);

  adddata(start, count) {
    print(user);
    for (int k = start; k < count; k++) {
      ref.child('NFT').child(store.nftname[k]).once().then((result) {
        store.nftdatas.add(Nftdatas(
          nftname: store.nftname[k],
          price: result.value['Price'],
          wallet: result.value['WalletAddress'],
          contract: result.value['ContractAddress'],
          url: result.value['Image_url'],
          popular: result.value['Popular'],
          symbol: result.value['Nft_Symbol'],
          tokenid: result.value['Token'],
        ));

        if (user.toString().contains('@')) {
          print('u1');
          fs.collection('User').doc(user).get().then((value) {
            store.username = value['user_name'];
          }).then((value) {
            if (result.value['Owner'] == store.username) {
              store.mydata.add(Nftdatas(
          nftname: store.nftname[k],
          price: result.value['Price'],
          wallet: result.value['WalletAddress'],
          contract: result.value['ContractAddress'],
          url: result.value['Image_url'],
          popular: result.value['Popular'],
          symbol: result.value['Nft_Symbol'],
          tokenid: result.value['Token'],
        ));
            }
          });
        }
      });
    }
  }

  @override
  perform() async {
    try {
      ref.child('count').once().then((count) {
        var i = count.value;
        if (store.count == i) {
          ref.child('NFTNAME').once().then((nftname) {
            if (store.nftname[i - 1] != nftname.value[i]) {
              store.nftname.add(nftname.value[i]);
              adddata(i - 1, i - 1);
            }
          });
        }
        if (store.count != i) {
          var dif = i - store.count;
          store.count = i;
          var j = (store.count - dif) + 1;
          store.start = j - 1;
          print(j);
          print(store.count);
          ref.child('NFTNAME').once().then((nftname) {
            for (int i = j; i <= store.count; i++) {
              print(i);
              store.nftname.add(nftname.value[i]);
            }
          }).then((_) {
            adddata(store.start, store.count);
          });
        }
      });
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
