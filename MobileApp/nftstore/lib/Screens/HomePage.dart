import 'dart:async';

import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:nftstore/Providers/Datafunction.dart';
import 'package:velocity_x/velocity_x.dart';
import '../Widgets/Card.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
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
    VxState.watch(context, on: [Initial]);
    Mystore data = VxState.store;
    var animals = data.animals;
    var arts = data.arts;
    var nature = data.nature;
    var space = data.space;
    return RefreshIndicator(
      onRefresh: () {
        return Future.delayed(Duration(seconds: 3), () {
          Initial(FirebaseAuth.instance.currentUser.email);
        });
      },
      child: VStack([
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
            (arts == null)
                ? CircularProgressIndicator().centered()
                : ListView.builder(
                    scrollDirection: Axis.horizontal,
                    itemCount: arts.length,
                    itemBuilder: (context, index) => CardWidget(
                                price: arts[index].price,
                                stock: arts[index].qty,
                                title: arts[index].title,
                                url: arts[index].url)
                            .onTap(() {
                          context.vxNav
                              .push(Uri(path: '/buy'), params: arts[index]);
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
            (animals == null)
                ? CircularProgressIndicator()
                : ListView.builder(
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
              context.vxNav
                  .push(Uri(path: '/list'), params: ['NATURE', nature]);
            }),
            (nature == null)
                ? CircularProgressIndicator()
                : ListView.builder(
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
            (space == null)
                ? CircularProgressIndicator()
                : ListView.builder(
                    scrollDirection: Axis.horizontal,
                    itemCount: space.length,
                    itemBuilder: (context, index) => CardWidget(
                                price: space[index].price,
                                stock: space[index].qty,
                                title: space[index].title,
                                url: space[index].url)
                            .onTap(() {
                          context.vxNav
                              .push(Uri(path: '/buy'), params: space[index]);
                        })).expand()
          ],
          alignment: MainAxisAlignment.spaceEvenly,
          axisSize: MainAxisSize.max,
        )).height(context.percentHeight * 40).make(),
      ]).scrollVertical(physics: AlwaysScrollableScrollPhysics()),
    );
  }
}
