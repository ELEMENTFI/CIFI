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
  final user;
  final symbol;
  final buyer;
  final buyeraddress;
  final buyername;
  Nftdatas({
    @required this.nftname,
    @required this.price,
    @required this.url,
    @required this.popular,
    @required this.symbol,
    @required this.wallet,
    @required this.contract,
    @required this.tokenid,
    @required this.user,
    @required this.buyer,
    @required this.buyeraddress,
    @required this.buyername,
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
  List<Nftdatas> buyednft = [];
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
  final user = FirebaseAuth.instance.currentUser.email;
  final fs = FirebaseFirestore.instance;

  adddata(start, count) {
    for (int k = start; k < count; k++) {
      print('nft' + k.toString());
      ref.child('NFT').child(store.nftname[k]).once().then((result) {
        if (result.value['Price'] != '') {
          store.nftdatas.add(
            Nftdatas(
              nftname: store.nftname[k],
              price: result.value['Price'],
              wallet: result.value['WalletAddress'],
              contract: result.value['ContractAddress'],
              url: result.value['Image_url'],
              popular: result.value['Popular'],
              symbol: result.value['Nft_Symbol'],
              tokenid: result.value['Token'],
              user: result.value['user'],
              buyer: result.value['buyed'],
              buyeraddress: result.value['buyedowner'],
              buyername: result.value['buyername'],
            ),
          );
        }

        if (user.toString().contains('@')) {
          fs.collection('User').doc(user).get().then((value) {
            store.username = value['user_name'];
          }).then((value) {
            if (result.value['user'] == store.username) {
              print('nftt' + k.toString());
              store.mydata.add(
                Nftdatas(
                  nftname: store.nftname[k],
                  price: result.value['Price'],
                  wallet: result.value['WalletAddress'],
                  contract: result.value['ContractAddress'],
                  url: result.value['Image_url'],
                  popular: result.value['Popular'],
                  symbol: result.value['Nft_Symbol'],
                  tokenid: result.value['Token'],
                  user: result.value['user'],
                  buyer: result.value['buyed'],
                  buyeraddress: result.value['buyedowner'],
                  buyername: result.value['buyername'],
                ),
              );
            }
          });
        }
      });
    }
  }

  @override
  perform() async {
    try {
      if (store.nftname.isNotEmpty) {
        print(store.nftname.length);
        for (int i = 0; i < store.nftname.length; i++) {
          ref.child('NFT').child(store.nftname[i]).once().then((result) {
            if (result.value['Price'] != '' &&
                store.nftdatas[i].nftname != store.nftname[i]) {
              store.nftdatas.add(
                Nftdatas(
                  nftname: store.nftname[i],
                  price: result.value['Price'],
                  wallet: result.value['WalletAddress'],
                  contract: result.value['ContractAddress'],
                  url: result.value['Image_url'],
                  popular: result.value['Popular'],
                  symbol: result.value['Nft_Symbol'],
                  tokenid: result.value['Token'],
                  user: result.value['user'],
                  buyer: result.value['buyed'],
                  buyeraddress: result.value['buyedowner'],
                  buyername: result.value['buyername'],
                ),
              );
            }
            if (result.value['user'] == store.username) {
              print('nftt' + i.toString());
              store.mydata.add(
                Nftdatas(
                  nftname: store.nftname[i],
                  price: result.value['Price'],
                  wallet: result.value['WalletAddress'],
                  contract: result.value['ContractAddress'],
                  url: result.value['Image_url'],
                  popular: result.value['Popular'],
                  symbol: result.value['Nft_Symbol'],
                  tokenid: result.value['Token'],
                  user: result.value['user'],
                  buyer: result.value['buyed'],
                  buyeraddress: result.value['buyedowner'],
                  buyername: result.value['buyername'],
                ),
              );
            }
          });
        }
      }
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

class BuyedNft extends VxMutation<Mystore> {
  final ref = FirebaseDatabase.instance.reference();
  @override
  perform() {
    for (int i = 0; i < store.nftname.length; i++) {
      ref.child('NFT').child(store.nftname[i]).once().then((result) {
        print('worked');
        if (result.value['buyername'] == store.username &&
            store.username.length > 0) {
          print(store.username);
          store.buyednft.add(
            Nftdatas(
              nftname: store.nftname[i],
              price: result.value['Price'],
              wallet: result.value['WalletAddress'],
              contract: result.value['ContractAddress'],
              url: result.value['Image_url'],
              popular: result.value['Popular'],
              symbol: result.value['Nft_Symbol'],
              tokenid: result.value['Token'],
              user: result.value['user'],
              buyer: result.value['buyed'],
              buyeraddress: result.value['buyedowner'],
              buyername: result.value['buyername'],
            ),
          );
        }
      });
    }
  }
}

class Authstate extends VxMutation<Mystore> {
  @override
  perform() {
    store.sign = !store.sign;
  }
}
