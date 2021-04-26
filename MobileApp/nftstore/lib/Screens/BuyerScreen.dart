import 'package:flutter/material.dart';
import '../Widgets/Button.dart';
import '../Widgets/DropDwonButton.dart';
import 'package:velocity_x/velocity_x.dart';

class BuyerScreen extends StatelessWidget {
  // final data;

  // const BuyerScreen({Key key, @required this.data}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);

    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: "check" //(data.title.toString())
            .richText
            .textStyle(theme.textTheme.headline1)
            .make(),
      ),
      backgroundColor: theme.primaryColor,
      body: VStack([
        VxBox(
                child: VxBox()
                    .square(context.percentHeight * 20)
                    .neumorphic(color: theme.cardColor, elevation: 5.0)
                    .bgImage(DecorationImage(
                      image: NetworkImage(
                          "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"), //data.url),
                      fit: BoxFit.fill,
                    ))
                    .makeCentered())
            .height(context.percentHeight * 20)
            .make(),
        (context.percentHeight * 10).heightBox,
        VxBox(
                child: VStack([
          ListTile(
            title: "OWENER NAME"
                .richText
                .textStyle(theme.textTheme.headline1)
                .make(),
            trailing: "shyam" //(data.owner.toString())
                .richText
                .textStyle(theme.textTheme.headline2)
                .make(),
          ).p(10),
          ListTile(
            title: "PRICE".richText.textStyle(theme.textTheme.headline1).make(),
            trailing: '0.01' //(data.price.toString())
                .richText
                .textStyle(theme.textTheme.headline2)
                .make(),
          ).p(10),
          ListTile(
            title: "QTY".richText.textStyle(theme.textTheme.headline1).make(),
            trailing: DropButon(qty: int.parse('4') //data.qty.toString()),
                ),
          ).p(10),
          VxBox(
              child: VStack([
            "Description:".richText.textStyle(theme.textTheme.headline1).make(),
            // "hi frik gjkeiejgi jgiewhjjshrf fgfushjn fjhdjsheuh hhsudnfjj"
            //     .richText
            //     .textStyle(theme.textTheme.headline2)
            //     .make()
          ])).height(context.percentHeight * 13).make().p(10),
          (context.percentHeight * 4).heightBox,
          Button(label: 'BUY', id: 7).centered()
        ]).scrollVertical())
            .make()
            .expand(),
      ]),
    );
  }
}
