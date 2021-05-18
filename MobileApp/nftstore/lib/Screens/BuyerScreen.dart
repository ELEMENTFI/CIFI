import 'package:flutter/material.dart';
import '../Widgets/Button.dart';
import '../Widgets/DropDwonButton.dart';
import 'package:velocity_x/velocity_x.dart';

class BuyerScreen extends StatelessWidget {
  final data;

  const BuyerScreen({Key key, @required this.data}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);

    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: (data.title.toString())
            .richText
            .textStyle(theme.textTheme.headline1)
            .make(),
      ),
      backgroundColor: theme.primaryColor,
      body: VStack([
        VxBox()
            .square(context.percentHeight * 20)
            .neumorphic(color: theme.cardColor, elevation: 5.0)
            .bgImage(DecorationImage(
              image: NetworkImage(data.url),
              fit: BoxFit.fill,
            ))
            .makeCentered()
            .p(10),
        (context.percentHeight * 10).heightBox,
        ListTile(
          title: "OWENER NAME"
              .richText
              .textStyle(theme.textTheme.headline1)
              .make(),
          trailing: (data.owner.toString())
              .richText
              .textStyle(theme.textTheme.headline2)
              .make(),
        ).p(10),
        ListTile(
          title: "PRICE".richText.textStyle(theme.textTheme.headline1).make(),
          trailing: (data.price.toString())
              .richText
              .textStyle(theme.textTheme.headline2)
              .make(),
        ).p(10),
       
        Button(label: 'BUY', id: 7).centered()
      ]),
    );
  }
}
