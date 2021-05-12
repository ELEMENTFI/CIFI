import 'package:flutter/material.dart';
import '../Widgets/Button.dart';
import '../Widgets/TextWidget.dart';
import 'package:velocity_x/velocity_x.dart';

// ignore: must_be_immutable
class NFTCreation extends StatelessWidget {
 static TextEditingController controller8 = TextEditingController();
 static TextEditingController controller9 = TextEditingController();
 static TextEditingController controller10 = TextEditingController();
 static TextEditingController controller11 = TextEditingController();
 static TextEditingController controller12 = TextEditingController();
 static TextEditingController controller13 = TextEditingController();
 static TextEditingController controller14 = TextEditingController();
 static TextEditingController controller15 = TextEditingController();

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
              label: 'QTY',
              id: 10,
              obsecure: false,
              prefix: false,
              keybordtype: TextInputType.number,
              controller: controller10,
              ctx: context,
            ),
            (context.percentHeight * 5).heightBox,
            TextWidget(
              label: 'PRICE',
              id: 11,
              obsecure: false,
              prefix: false,
              keybordtype: TextInputType.number,
              controller: controller11,
              ctx: context,
            ),
            (context.percentHeight * 5).heightBox,
            TextWidget(
              label: 'TITLE',
              id: 12,
              obsecure: false,
              prefix: false,
              keybordtype: TextInputType.text,
              controller: controller12,
              ctx: context,
            ),
            (context.percentHeight * 5).heightBox,
            TextWidget(
              label: 'CATAGORY',
              id: 13,
              obsecure: false,
              prefix: false,
              keybordtype: TextInputType.text,
              controller: controller13,
              ctx: context,
            ),
            (context.percentHeight * 5).heightBox,
            TextWidget(
              label: 'DESCRIPTION(OPTIONAL)',
              id: 14,
              obsecure: false,
              prefix: false,
              keybordtype: TextInputType.multiline,
              controller: controller14,
              ctx: context,
            ),
            (context.percentHeight * 5).heightBox,
            TextWidget(
              label: 'IMAGE URL',
              prefix: true,
              id: 15,
              obsecure: false,
              keybordtype: TextInputType.url,
              controller: controller15,
              ctx: context,
            ),
            
            // (context.percentHeight * 3).heightBox,
            // if (controller16.text != null)
            //   CardWidget(
            //     title: controller12.text,
            //     price: controller11.text,
            //     stock: controller10.text,
            //     url: controller15.text,
            //     list: false,
            //   ).px(context.percentWidth * 15),
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
//0x306D6fa40D13171f15107D099AE98CF0E6e7C48C
