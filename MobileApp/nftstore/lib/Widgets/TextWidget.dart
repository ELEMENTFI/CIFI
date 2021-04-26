import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:nftstore/Providers/Datafunction.dart';
import 'package:velocity_x/velocity_x.dart';

class TextWidget extends StatefulWidget {
  final label;
  final prefix;
  final obsecure;
  final keybordtype;
  final id;
  final controller;
  const TextWidget({
    Key key,
    @required this.label,
    @required this.prefix,
    @required this.obsecure,
    @required this.id,
    @required this.keybordtype,
    @required this.controller,
  }) : super(key: key);

  @override
  TextWidgetState createState() => TextWidgetState();
}

class TextWidgetState extends State<TextWidget> {
  final fstore = FirebaseFirestore.instance;
  var temp;
  String catagoroy;
  Nftdatas inputdata = Nftdatas(
    nftname: "",
    price: "",
    owner: "harshan",
    qty: "",
    url: "",
    title: "",
    popular: false,
    desc: "",
  );

  void datasubmit(id, value) async {
    switch (id) {
      case 9:
        inputdata = Nftdatas(
          nftname: value,
          price: inputdata.price,
          owner: inputdata.owner,
          qty: inputdata.qty,
          url: inputdata.url,
          title: inputdata.title,
          popular: inputdata.popular,
          desc: inputdata.desc,
        );
        break;
      case 10:
        inputdata = Nftdatas(
          nftname: inputdata.nftname,
          price: inputdata.price,
          owner: inputdata.owner,
          qty: value,
          url: inputdata.url,
          title: inputdata.title,
          popular: inputdata.popular,
          desc: inputdata.desc,
        );
        break;
      case 11:
        inputdata = Nftdatas(
          nftname: inputdata.nftname,
          price: value,
          owner: inputdata.owner,
          qty: inputdata.qty,
          url: inputdata.url,
          title: inputdata.title,
          popular: inputdata.popular,
          desc: inputdata.desc,
        );
        break;
      case 12:
        inputdata = Nftdatas(
            nftname: inputdata.nftname,
            price: inputdata.price,
            owner: inputdata.owner,
            qty: inputdata.qty,
            url: inputdata.url,
            title: value,
            popular: inputdata.popular,
            desc: inputdata.desc);
        break;
      case 13:
        catagoroy = value;
        break;
      case 14:
        inputdata = Nftdatas(
          nftname: inputdata.nftname,
          price: inputdata.price,
          owner: inputdata.owner,
          qty: inputdata.qty,
          url: inputdata.url,
          title: inputdata.title,
          popular: inputdata.popular,
          desc: value,
        );
        break;
      case 15:
        inputdata = Nftdatas(
          nftname: inputdata.nftname,
          price: inputdata.price,
          owner: inputdata.owner,
          qty: inputdata.qty,
          url: value,
          title: inputdata.title,
          popular: inputdata.popular,
          desc: inputdata.desc,
        );
        break;
      default:
    }
    if ((inputdata.nftname != null) &&
        (inputdata.price != null) &&
        (inputdata.owner != null) &&
        (inputdata.qty != null) &&
        (inputdata.url != null) &&
        (inputdata.title != null) &&
        (inputdata.popular != null) &&
        (inputdata.desc != null) &&
        (catagoroy != null)) {
      await fstore
          .collection('Myitems')
          .doc(inputdata.owner)
          .set({
            'nftname': inputdata.nftname,
            'owner': inputdata.owner,
            'price': inputdata.price,
            'qty': inputdata.qty,
            'title': inputdata.title,
            'url': inputdata.url,
            'desc': inputdata.desc,
            'popular': inputdata.popular,
            'catogory': catagoroy,
          })
          .then((value) async => await fstore
                  .collection('Items')
                  .doc(catagoroy)
                  .collection(inputdata.nftname)
                  .doc(inputdata.nftname)
                  .set({
                'nftname': inputdata.nftname,
                'owner': inputdata.owner,
                'price': inputdata.price,
                'qty': inputdata.qty,
                'title': inputdata.title,
                'url': inputdata.url,
                'desc': inputdata.desc,
                'popular': inputdata.popular,
              }))
          .then((value) async {
            final length = await fstore
                .collection('Nftname')
                .doc(catagoroy)
                .snapshots()
                .length;
            await fstore.collection('Nftname').doc(catagoroy).set({
              length.toString(): inputdata.nftname,
            });
          })
          .then((value) => Initial());
    }
  }

  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);
    Mystore store = VxState.store;
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
      onSaved: (_) {},
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
            if (value.isEmpty) return 'Please enter your User Name';
            break;
          case 7:
            if (value.isEmpty) return 'Please enter your Password';
            break;
          case 8:
            final nftname = store.nftname;
            if (value.isEmpty) return 'Please enter your NFT Name';
            if (!RegExp(r"^[a-zA-Z0-9.a-zA-Z0-9.!#$%&@'*+-/=?^_`{|}~]+[0-9]")
                .hasMatch(value)) return 'Please Enter valid Name(eg. lion@01)';
            final result = nftname.filter((element) => element == value);
            if (result.isNotEmpty) return 'Nft name is Already Takened';
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
            // if (value.isEmpty) return 'Please Enter URL';
            break;
          default:
            return null;
        }
        return null;
      },
    ).p(10);
  }
}
