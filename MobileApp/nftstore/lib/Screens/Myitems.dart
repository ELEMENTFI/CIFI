import 'dart:async';
import 'package:flutter/material.dart';
import '../Providers/Datafunction.dart';
import '../Widgets/Card.dart';
import 'package:velocity_x/velocity_x.dart';

class NFT extends StatefulWidget {
  @override
  _NFTState createState() => _NFTState();
}

class _NFTState extends State<NFT> {
  @override
  void initState() {
    super.initState();
    Mydata();
  }

  @override
  Widget build(BuildContext context) {
    VxState.watch(context, on: [Mydata]);

    Mystore mydatas = VxState.store;
    var data = mydatas.mydata;

    return RefreshIndicator(
      onRefresh: () {
        return Future.delayed(Duration(seconds: 3), () {
          Mydata();
        });
      },
      child: VStack(
        [
          if (data.isNotEmpty)
            VxBox(
              child: ListView.builder(
                  itemCount: data.length,
                  itemBuilder: (context, index) => CardWidget(
                      price: data[index].price,
                      stock: data[index].qty,
                      title: data[index].title,
                      url: data[index].url)).expand().p(10),
            ).square(500).makeCentered().expand(),
        ],
      ),
    );
  }
}
