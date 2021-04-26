import 'package:flutter/material.dart';
import 'package:nftstore/Widgets/Card.dart';
import 'package:velocity_x/velocity_x.dart';

class ListScreen extends StatelessWidget {
  final String name;
  final data;
  const ListScreen({Key key, @required this.name, @required this.data})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);
    return Scaffold(
        backgroundColor: theme.primaryColor,
        appBar: AppBar(
          title: name.richText.textStyle(theme.textTheme.headline2).make(),
          centerTitle: true,
        ),
        body: ListView.builder(
            itemCount: data.length,
            itemBuilder: (context, index) => CardWidget(
                  price: data[index].price,
                  stock: data[index].qty,
                  title: data[index].title,
                  url: data[index].url,
                  list: true,
                ).p(20)));
  }
}
