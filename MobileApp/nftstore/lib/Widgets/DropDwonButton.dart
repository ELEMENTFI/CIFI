import 'package:flutter/material.dart';
import '../Screens/NFT.dart';
import 'package:velocity_x/velocity_x.dart';

class DropButon extends StatefulWidget {
  @override
  _DropButonState createState() => _DropButonState();
}

class _DropButonState extends State<DropButon> {
  String value;
  List<String> list = [];

  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);
    return DropdownButton<String>(
      focusColor: Colors.white,
      value: value,
      underline: VxBox().color(theme.primaryColor).make(),
      style: theme.textTheme.headline2,
      iconEnabledColor: theme.accentColor,
      items: <String>['', 'ETH', 'BNP', 'ALGOREN']
          .map<DropdownMenuItem<String>>((String value) {
        return DropdownMenuItem<String>(
          value: value,
          child: Text(
            value,
          ),
        );
      }).toList(),
      hint: Text(
        "",
        style: theme.textTheme.headline2,
      ),
      onChanged: (String newvalue) {
        setState(() {
          NFTCreation.controller9.text = newvalue;
        });
      },
    );
  }
}
