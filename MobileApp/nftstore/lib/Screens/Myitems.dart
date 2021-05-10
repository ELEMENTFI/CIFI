import 'dart:async';
import 'package:flutter/material.dart';
import '../Providers/Datafunction.dart';
import '../Widgets/Card.dart';
import 'package:velocity_x/velocity_x.dart';
import '../Widgets/Button.dart';

class NFT extends StatefulWidget {
  @override
  _NFTState createState() => _NFTState();
}

class _NFTState extends State<NFT> {
  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);
    Mystore mydatas = VxState.store;
    var data = mydatas.mydata;

    return RefreshIndicator(
      onRefresh: () {
        return Future.delayed(Duration(seconds: 3), () {
          Initial();
          Timer(Duration(seconds: 1), () {
            setState(() {
              data = mydatas.mydata;
            });
          });
        });
      },
      child: VStack([
        VxBox(
          child: VStack(
            [
              if (data.isNotEmpty)
                ListView.builder(
                    itemCount: data.length,
                    itemBuilder: (context, index) => CardWidget(
                        price: data[index].price,
                        stock: data[index].qty,
                        title: data[index].title,
                        url: data[index].url)).expand(),
              if (data.isEmpty || data.isNotEmpty)
                "you can create your NFT here and also you can see your created NFT here"
                    .richText
                    .textStyle(theme.textTheme.headline2
                        .copyWith(fontStyle: FontStyle.italic))
                    .makeCentered(),
              10.heightBox,
              Button(
                id: 5,
                label: 'CREATE',
                navname: '/nft',
              ).centered()
            ],
            alignment: MainAxisAlignment.center,
            axisSize: MainAxisSize.max,
          ),
        ).square(400).makeCentered().p(20)
      ]),
    );
  }
}
