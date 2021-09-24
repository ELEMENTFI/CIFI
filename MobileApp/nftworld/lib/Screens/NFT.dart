import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import '../Providers/Datafunction.dart';
import '../Widgets/DropDwonButton.dart';
import '../Widgets/Button.dart';
import '../Widgets/TextWidget.dart';
import 'package:velocity_x/velocity_x.dart';

//IN THIS PAGE WE CRAETE NFT 
// ignore: must_be_immutable
class NFTCreation extends StatelessWidget {
  static TextEditingController controller8 = TextEditingController();
  static TextEditingController controller9 = TextEditingController();
  static TextEditingController controller10 = TextEditingController();
  static TextEditingController controller13 = TextEditingController();
  FocusNode f8 = FocusNode();
  FocusNode f9 = FocusNode();
  FocusNode f10 = FocusNode();
  FocusNode f13 = FocusNode();
  final formkey = GlobalKey<FormState>();
  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);
    VxState.watch(context, on: [Images]);
    return Scaffold(
      backgroundColor: theme.primaryColor,
      appBar: AppBar(
        title: "CREATE NFT".text.textStyle(theme.textTheme.headline1).make(),
        centerTitle: true,
        systemOverlayStyle: SystemUiOverlayStyle(statusBarColor: Colors.orange),
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
              focusnode: f8,
              focusfun: (_) {
                f8.unfocus();
                FocusScope.of(context).requestFocus(f9);
              },
              action: TextInputAction.next,
            ),
            (context.percentHeight * 5).heightBox,
            HStack([
              TextWidget(
                label: 'NFT SYMBOL',
                id: 9,
                obsecure: false,
                prefix: false,
                keybordtype: TextInputType.text,
                controller: controller9,
                ctx: context,
                focusnode: f9,
                focusfun: (_) {
                  f9.unfocus();
                  FocusScope.of(context).requestFocus(f10);
                },
                action: TextInputAction.next,
              ).expand(),
              DropButon(),
            ]),
            
            (context.percentHeight * 5).heightBox,
            TextWidget(
              label: 'URL',
              prefix: true,
              id: 10,
              obsecure: false,
              keybordtype: TextInputType.url,
              controller: controller10,
              ctx: context,
              focusnode: f10,
              focusfun: (_) => f10.unfocus(),
              action: TextInputAction.done,
            ),
            if(controller9.text == 'ALGOREN') 
             (context.percentHeight * 5).heightBox,
            TextWidget(
              label: 'ALGORAND WALLET ADDRESS',
              prefix: false,
              id: 13,
              obsecure: false,
              keybordtype: TextInputType.text,
              controller: controller13,
              ctx: context,
              focusnode: f13,
              focusfun: (_) => f13.unfocus(),
              action: TextInputAction.done,
            ),
            (context.percentHeight * 2).heightBox,
            Button(
              id: 6,
              label: 'CREATE',
              form: formkey,
            ).centered(),
            (context.percentHeight * 2).heightBox,
          ],
        ).scrollVertical().onTap(() {
          FocusScope.of(context).unfocus();
        }),
      ),
    );
  }
}
