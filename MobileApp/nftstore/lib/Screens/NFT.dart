import 'package:flutter/material.dart';
import '../Widgets/Button.dart';
import '../Widgets/TextWidget.dart';
import 'package:velocity_x/velocity_x.dart';

// ignore: must_be_immutable
class NFTCreation extends StatelessWidget {
  TextEditingController controller8 = TextEditingController();
  TextEditingController controller9 = TextEditingController();
  TextEditingController controller10 = TextEditingController();
  TextEditingController controller11 = TextEditingController();
  TextEditingController controller12 = TextEditingController();
  TextEditingController controller13 = TextEditingController();
  TextEditingController controller14 = TextEditingController();
  TextEditingController controller15 = TextEditingController();
  TextEditingController controller16 = TextEditingController();

  final formkey = GlobalKey<FormState>();
  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);

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
            ),
            (context.percentHeight * 5).heightBox,
            TextWidget(
              label: 'NFT SYMBOL',
              prefix: true,
              id: 16,
              obsecure: false,
              keybordtype: TextInputType.text,
              controller: controller16,
            ),
            (context.percentHeight * 5).heightBox,
            Row(children: [
              TextWidget(
                label: 'WALLET ADDRESS',
                id: 9,
                obsecure: false,
                prefix: false,
                keybordtype: TextInputType.text,
                controller: controller9,
              ),
            ]),

            (context.percentHeight * 5).heightBox,
            TextWidget(
              label: 'QTY',
              id: 10,
              obsecure: false,
              prefix: false,
              keybordtype: TextInputType.number,
              controller: controller10,
            ),
            (context.percentHeight * 5).heightBox,
            TextWidget(
              label: 'PRICE',
              id: 11,
              obsecure: false,
              prefix: false,
              keybordtype: TextInputType.number,
              controller: controller11,
            ),
            (context.percentHeight * 5).heightBox,
            TextWidget(
              label: 'TITLE',
              id: 12,
              obsecure: false,
              prefix: false,
              keybordtype: TextInputType.text,
              controller: controller12,
            ),
            (context.percentHeight * 5).heightBox,
            TextWidget(
              label: 'CATAGORY',
              id: 13,
              obsecure: false,
              prefix: false,
              keybordtype: TextInputType.text,
              controller: controller13,
            ),
            (context.percentHeight * 5).heightBox,
            TextWidget(
              label: 'DESCRIPTION(OPTIONAL)',
              id: 14,
              obsecure: false,
              prefix: false,
              keybordtype: TextInputType.multiline,
              controller: controller14,
            ),
            (context.percentHeight * 5).heightBox,
            TextWidget(
              label: 'IMAGE URL',
              prefix: true,
              id: 15,
              obsecure: false,
              keybordtype: TextInputType.url,
              controller: controller15,
            ),
            (context.percentHeight * 3).heightBox,
            //CardWidget().px(context.percentWidth * 15),
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
//
