import 'package:flutter/material.dart';
import 'package:nftstore/Providers/Datafunction.dart';
import 'package:nftstore/Widgets/Card.dart';

import '../Widgets/Button.dart';
import '../Widgets/TextWidget.dart';
import 'package:velocity_x/velocity_x.dart';

// ignore: must_be_immutable
class NFTCreation extends StatelessWidget {
  static TextEditingController controller8 = TextEditingController();
  static TextEditingController controller9 = TextEditingController();
  static TextEditingController controller10 = TextEditingController();

  final formkey = GlobalKey<FormState>();
  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);
    VxState.watch(context, on: [Images]);
    Mystore store = VxState.store;
    var img = store.image;
    return Scaffold(
      backgroundColor: theme.primaryColor,
      appBar: AppBar(
        title: "CREATE NFT".text.textStyle(theme.textTheme.headline1).make(),
        centerTitle: true,
      ),
      body: Form(
        key: formkey,
        child: VStack(
          [
            (context.percentHeight * 5).heightBox,
            TextWidget(
              label: 'NFT NAME',
              id: 8,
              obsecure: false,
              prefix: false,
              keybordtype: TextInputType.text,
              controller: controller8,
              ctx: context,
            ),
            (context.percentHeight * 5).heightBox,
            TextWidget(
              label: 'NFT SYMBOL',
              prefix: false,
              id: 9,
              obsecure: false,
              keybordtype: TextInputType.text,
              controller: controller9,
              ctx: context,
            ),
            TextWidget(
              label: 'IMAGE URL',
              prefix: true,
              id: 10,
              obsecure: false,
              keybordtype: TextInputType.url,
              controller: controller10,
              ctx: context,
            ),
            (context.percentHeight * 3).heightBox,
            if (img == true)
              CardWidget(
                list: false,
                nftname: controller8.text,
                nftsymbol: controller9.text,
                url: controller10.text,
                price: '',
              ).px(context.percentWidth * 15),
            (context.percentHeight * 1).heightBox,
            Button(
              id: 6,
              label: 'CREATE',
              form: formkey,
            ).centered(),
            (context.percentHeight * 2).heightBox,
          ],
        ).scrollVertical(),
      ),
    );
  }
}
