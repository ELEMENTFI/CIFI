import 'package:flutter/material.dart';
import 'package:velocity_x/velocity_x.dart';

class DropButon extends StatefulWidget {
  final qty;

  const DropButon({Key key, @required this.qty}) : super(key: key);

  @override
  _DropButonState createState() => _DropButonState();
}

class _DropButonState extends State<DropButon> {
  String value = '0';
  List<String> list = [];
  @override
  void initState() {
    super.initState();
    for (int i = 0; i <= int.parse(widget.qty); i++) {
      list.add(i.toString());
    }
  }

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
          value = newValue;
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
