import 'package:flutter/material.dart';
import 'package:nftstore/Widgets/Card.dart';
import 'package:velocity_x/velocity_x.dart';

class ListScreen extends StatelessWidget {
  final index;
  final data;
  const ListScreen({Key key, @required this.data,@required this.index}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);
    return Scaffold(
        backgroundColor: theme.primaryColor,
        appBar: AppBar(
          title: 'name'.richText.textStyle(theme.textTheme.headline2).make(),
          centerTitle: true,
        ),
        body: (data.isEmpty)
            ? "NO NFT AVAILABLE"
                .richText
                .textStyle(theme.textTheme.headline2.copyWith(fontSize: 18))
                .makeCentered()
                .shimmer()
            : ListView.builder(
                itemCount: data.length,
                itemBuilder: (context, index) => CardWidget(
                      price: data[index].price,
                      nftname: data[index].nftname,
                      nftsymbol: data[index].symbol,
                      url: data[index].url,
                      list: true,
                    ).p(30)));
  }
}
