import 'package:flutter/material.dart';
import 'package:nftstore/Widgets/Button.dart';
import 'package:nftstore/Widgets/TextWidget.dart';
import 'package:velocity_x/velocity_x.dart';

// ignore: must_be_immutable
class Login extends StatelessWidget {
  TextEditingController controller6 = TextEditingController();
  TextEditingController controller7 = TextEditingController();
  final formkey = GlobalKey<FormState>();
  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);
    return Scaffold(
      backgroundColor: theme.primaryColor,
      appBar: AppBar(
        centerTitle: true,
        title: 'LOGIN'.richText.textStyle(theme.textTheme.headline1).make(),
      ),
      body: VStack([
        Form(
          key: formkey,
          child: VxBox(
              child: VStack(
            [
              TextWidget(
                label: 'USER NAME',
                id: 6,
                obsecure: false,
                prefix: false,
                keybordtype: TextInputType.text,
                controller: controller6,
              ),
              TextWidget(
                keybordtype: TextInputType.text,
                label: 'PASSWORD',
                id: 7,
                obsecure: true,
                prefix: false,
                controller: controller7,
              ),
              (context.percentHeight * 5).heightBox,
              HStack(
                [
                  Button(
                    id: 3,
                    label: 'LOG IN',
                    navname: '/main',
                    form: formkey,
                  ),
                  Button(
                    id: 4,
                    label: 'SIGN IN',
                    navname: '/signin',
                  )
                ],
                alignment: MainAxisAlignment.spaceAround,
                axisSize: MainAxisSize.max,
              )
            ],
            alignment: MainAxisAlignment.center,
            axisSize: MainAxisSize.max,
          )).square(500).make().p(40),
        )
      ]).scrollVertical(),
    );
  }
}
