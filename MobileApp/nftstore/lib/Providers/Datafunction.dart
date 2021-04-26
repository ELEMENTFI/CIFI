import 'package:flutter/material.dart';
import 'package:velocity_x/velocity_x.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class Nftdatas {
  final nftname;
  final price;
  final owner;
  final qty;
  final url;
  final title;
  final popular;
  final desc;
  Nftdatas(
      {@required this.nftname,
      @required this.price,
      @required this.owner,
      @required this.qty,
      @required this.url,
      @required this.title,
      @required this.popular,
      @required this.desc});
}

class Mystore extends VxStore {
  List<Nftdatas> animals = [];
  List<Nftdatas> space = [];
  List<Nftdatas> nature = [];
  List<Nftdatas> arts = [];
  List<Nftdatas> mydata = [];
  List<String> nftname = [];
}

class Initial extends VxMutation<Mystore> {
  List temp1 = [];
  List temp2 = [];
  List temp3 = [];
  List temp4 = [];

  @override
  perform() async {
    final fstore = FirebaseFirestore.instance;
    print('work');
    try {
      fstore.collection('Nftname').doc('animallist').get().then((value) {
        var length = value.data().length;
        for (int i = 1; i <= length; i++) {
          temp1.add(value[i.toString()]);
          store.nftname.add(value[i.toString()]);
        }

        for (int i = 0; i < temp1.length; i++) {
          fstore
              .collection('Items')
              .doc('animals')
              .collection(temp1[i])
              .doc(temp1[i])
              .get()
              .then((value) {
            store.animals.add(Nftdatas(
              nftname: value['nftname'],
              price: value['price'],
              owner: value['owner'],
              qty: value['qty'],
              url: value['url'],
              title: value['title'],
              popular: value['popular'],
              desc: value['desc'],
            ));
          });
        }
      });

      fstore.collection('Nftname').doc('artslist').get().then((value) {
        var length = value.data().length;
        for (int i = 1; i <= length; i++) {
          temp2.add(value[i.toString()]);
          store.nftname.add(value[i.toString()]);
        }
        for (int i = 0; i < temp2.length; i++) {
          fstore
              .collection('Items')
              .doc('arts')
              .collection(temp2[i])
              .doc(temp2[i])
              .get()
              .then((value) {
            store.arts.add(Nftdatas(
              nftname: value['nftname'],
              price: value['price'],
              owner: value['owner'],
              qty: value['qty'],
              url: value['url'],
              title: value['title'],
              popular: value['popular'],
              desc: value['desc'],
            ));
          });
        }
      });

      fstore.collection('Nftname').doc('naturelist').get().then((value) {
        var length = value.data().length;
        for (int i = 1; i <= length; i++) {
          temp3.add(value[i.toString()]);
          store.nftname.add(value[i.toString()]);
        }
        for (int i = 0; i < temp3.length; i++) {
          fstore
              .collection('Items')
              .doc('nature')
              .collection(temp3[i])
              .doc(temp3[i])
              .get()
              .then((value) {
            store.nature.add(Nftdatas(
              nftname: value['nftname'],
              price: value['price'],
              owner: value['owner'],
              qty: value['qty'],
              url: value['url'],
              title: value['title'],
              popular: value['popular'],
              desc: value['desc'],
            ));
          });
        }
      });

      fstore.collection('Nftname').doc('spacelist').get().then((value) {
        var length = value.data().length;
        for (int i = 1; i <= length; i++) {
          temp4.add(value[i.toString()]);
          store.nftname.add(value[i.toString()]);
        }
        for (int i = 0; i < temp4.length; i++) {
          fstore
              .collection('Items')
              .doc('space')
              .collection(temp4[i])
              .doc(temp4[i])
              .get()
              .then((value) {
            store.space.add(Nftdatas(
              nftname: value['nftname'],
              price: value['price'],
              owner: value['owner'],
              qty: value['qty'],
              url: value['url'],
              title: value['title'],
              popular: value['popular'],
              desc: value['desc'],
            ));
          });
        }
      });
      fstore
          .collection('Myitems')
          .doc('shyam')
          .snapshots()
          .isEmpty
          .then((value) {
        if (value) {
          fstore
              .collection('Myitems')
              .doc('shyam')
              .get()
              .then((value) => store.space.add(Nftdatas(
                    nftname: value['nftname'],
                    price: value['price'],
                    owner: value['owner'],
                    qty: value['qty'],
                    url: value['url'],
                    title: value['title'],
                    popular: value['popular'],
                    desc: value['desc'],
                  )));
        }
      });
    } catch (e) {
      print(e);
    }
  }
}
