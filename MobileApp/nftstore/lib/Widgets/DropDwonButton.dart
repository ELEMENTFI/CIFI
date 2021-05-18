import 'package:flutter/material.dart';
import 'package:nftstore/Screens/NFT.dart';
import 'package:velocity_x/velocity_x.dart';

class DropButon extends StatefulWidget {
  @override
  _DropButonState createState() => _DropButonState();
}

class _DropButonState extends State<DropButon> {
  String value = '';
  List<String> list = ['ETH', 'BNP', 'ALGOREN'];

  @override
  Widget build(BuildContext context) {
    return DropdownButton<String>(
      underline: 2.widthBox,
      icon: Icon(
        Icons.arrow_drop_down_circle_sharp,
        color: Theme.of(context).accentColor,
      ),
      value: value,
      style: Theme.of(context).textTheme.headline2,
      onChanged: (String newValue) {
        setState(() {
          NFTCreation.controller10.text = newValue;
        });
      },
      items: <String>[...list].map<DropdownMenuItem<String>>((String value) {
        return DropdownMenuItem<String>(
          value: value,
          child: Text(value),
        );
      }).toList(),
    );
  }
}
