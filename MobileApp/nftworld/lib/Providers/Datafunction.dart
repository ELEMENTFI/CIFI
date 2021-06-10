import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_database/firebase_database.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:velocity_x/velocity_x.dart';

//blueprint for store NFT'S
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
  final setprice;
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
    @required this.setprice,
  });
}

//blue print for store Authentication details
class Auth {
  final username;
  final password;

  Auth({@required this.username, @required this.password});
}

//blue print for store userlogin details to update in database
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

//list and variable for statemanagement in app
class Mystore extends VxStore {
  List<Nftdatas> nftdatas = [];
  List<Nftdatas> mydata = [];
  List<Nftdatas> buyednft = [];
  List<String> nftname = [];
  bool image = false;
  bool sign = false;
  var count = 0;
  bool search = false;
  var start = 0;
  String username;
  bool called = false;
}

class Images extends VxMutation<Mystore> {
  @override
  perform() {
    store.image = !store.image;
  }
}

//fetch and store a public & own nfts in a list which is call first
class Initial extends VxMutation<Mystore> {
  final ref = FirebaseDatabase.instance.reference();
  final user = FirebaseAuth.instance.currentUser.email;
  final fs = FirebaseFirestore.instance;

  adddata(start, count) {
    for (int k = start; k < count; k++) {
      print('nft' + k.toString());
      ref.child('NFT').child(store.nftname[k]).once().then((result) {
        if ((result.value['Price'] != '')) {
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
              setprice: result.value['setPrice'],
            ),
          );
        }

        if (user.toString().contains('@')) {
          fs.collection('User').doc(user).get().then((value) {
            store.username = value['user_name'];
          });
        }
      });
    }
  }

  @override
  perform() async {
    try {
      ref.child('count').once().then((count) {
        int counts = count.value;
        if (store.nftname.isNotEmpty && store.nftname.length != counts) {
          print('called');
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
                    setprice: result.value['setPrice'],
                  ),
                );
              }
            });
          }
        }
        if (store.count == counts) {
          ref.child('NFTNAME').once().then((nftname) {
            if (store.nftname[counts - 1] != nftname.value[counts]) {
              store.nftname.add(nftname.value[counts]);
              adddata(counts - 1, counts - 1);
            }
          });
        }
        if (store.count == 0) {
          ref.child('NFTNAME').once().then((nftname) {
            for (int i = 0; i < counts; i++) {
              if (store.called == false) store.nftname.add(nftname.value[i]);
            }
            store.count = counts;
          }).then((_) {
            print(store.called);
            if (store.called == false) adddata(store.start, store.count);
            store.called = true;
            print(store.called);
          });
        }
      });
    } catch (e) {
      print(e);
    }
  }
}

class Mydatas extends VxMutation<Mystore> {
  final ref = FirebaseDatabase.instance.reference();
  @override
  perform() {
    for (int i = 0; i < store.nftname.length; i++) {
      ref.child('NFT').child(store.nftname[i]).once().then((result) {
        if ((result.value['user'] == store.username) &&
            (result.value['buyed'] == 'false')) {
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
              setprice: result.value['setPrice'],
            ),
          );
        }
      });
    }
  }
}

//fetch and store a user byed nfts in a list which is call second
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
              setprice: result.value['setPrice'],
            ),
          );
        }
      });
    }
  }
}

// check if user login or not in a app
class Authstate extends VxMutation<Mystore> {
  @override
  perform() {
    store.sign = !store.sign;
  }
}

//control searchbar function in app
class Search extends VxMutation<Mystore> {
  final bool change;
  Search(this.change);
  @override
  perform() {
    if (change == true) store.search = !store.search;
  }
}
