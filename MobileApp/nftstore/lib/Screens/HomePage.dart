import 'package:flutter/material.dart';
import 'package:nftstore/Providers/Datafunction.dart';
import 'package:velocity_x/velocity_x.dart';
import '../Widgets/Card.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var textTheme = Theme.of(context).textTheme.headline2.copyWith(
      shadows: <Shadow>[
        Shadow(
          offset: Offset(10.0, 10.0),
          blurRadius: 8.0,
          color: Colors.orange,
        ),
      ],
    );
    Mystore data = VxState.store;
    final animals = data.animals;
    final arts = data.arts;
    final nature = data.nature;
    final space = data.space;

    return VStack([
      VxBox(
          child: VStack(
        [
          "ARTS"
              .richText
              .textStyle(textTheme)
              .make()
              .shimmer(primaryColor: Colors.orange)
              .px(10)
              .onTap(() {
            context.vxNav.push(Uri(path: '/list'), params: ['ARTS', arts]);
          }),
          ListView.builder(
              scrollDirection: Axis.horizontal,
              itemCount: arts.length,
              itemBuilder: (context, index) => CardWidget(
                          price: arts[index].price,
                          stock: arts[index].qty,
                          title: arts[index].title,
                          url: arts[index].url)
                      .onTap(() {
                    context.vxNav.push(Uri(path: '/buy'), params: arts[index]);
                  })).expand()
        ],
        alignment: MainAxisAlignment.spaceEvenly,
        axisSize: MainAxisSize.max,
      )).height(context.percentHeight * 40).make(),
      VxBox(
          child: VStack(
        [
          "ANIMALS"
              .richText
              .textStyle(textTheme)
              .make()
              .shimmer(primaryColor: Colors.orange)
              .px(10)
              .onTap(() {
            context.vxNav
                .push(Uri(path: '/list'), params: ['ANIMALS', animals]);
          }),
          ListView.builder(
              scrollDirection: Axis.horizontal,
              itemCount: animals.length,
              itemBuilder: (context, index) => CardWidget(
                          price: animals[index].price,
                          stock: animals[index].qty,
                          title: animals[index].title,
                          url: animals[index].url)
                      .onTap(() {
                    context.vxNav
                        .push(Uri(path: '/buy'), params: animals[index]);
                  })).expand()
        ],
        alignment: MainAxisAlignment.spaceEvenly,
        axisSize: MainAxisSize.max,
      )).height(context.percentHeight * 40).make(),
      VxBox(
          child: VStack(
        [
          "NATURE"
              .richText
              .textStyle(textTheme)
              .make()
              .shimmer(primaryColor: Colors.orange)
              .px(10)
              .onTap(() {
            context.vxNav.push(Uri(path: '/list'), params: ['NATURE', nature]);
          }),
          ListView.builder(
              scrollDirection: Axis.horizontal,
              itemCount: nature.length,
              itemBuilder: (context, index) => CardWidget(
                          price: nature[index].price,
                          stock: nature[index].qty,
                          title: nature[index].title,
                          url: nature[index].url)
                      .onTap(() {
                    context.vxNav
                        .push(Uri(path: '/buy'), params: nature[index]);
                  })).expand()
        ],
        alignment: MainAxisAlignment.spaceEvenly,
        axisSize: MainAxisSize.max,
      )).height(context.percentHeight * 40).make(),
      VxBox(
          child: VStack(
        [
          "SPACE"
              .richText
              .textStyle(textTheme)
              .make()
              .shimmer(primaryColor: Colors.orange)
              .px(10)
              .onTap(() {
            context.vxNav.push(Uri(path: '/list'), params: ['SPACE', space]);
          }),
          ListView.builder(
              scrollDirection: Axis.horizontal,
              itemCount: space.length,
              itemBuilder: (context, index) => CardWidget(
                          price: space[index].price,
                          stock: space[index].qty,
                          title: space[index].title,
                          url: space[index].url)
                      .onTap(() {
                    context.vxNav.push(Uri(path: '/buy'), params: space[index]);
                  })).expand()
        ],
        alignment: MainAxisAlignment.spaceEvenly,
        axisSize: MainAxisSize.max,
      )).height(context.percentHeight * 40).make(),
    ]).scrollVertical(physics: AlwaysScrollableScrollPhysics());
  }
}
