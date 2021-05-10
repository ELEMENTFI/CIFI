import 'package:flutter/material.dart';
import 'package:nftstore/Widgets/Button.dart';
import 'package:nftstore/Widgets/TextWidget.dart';
import 'package:velocity_x/velocity_x.dart';

// ignore: must_be_immutable
class AccountCreation extends StatelessWidget {
  TextEditingController controller1 = TextEditingController();
  TextEditingController controller2 = TextEditingController();
  TextEditingController controller3 = TextEditingController();
  TextEditingController controller4 = TextEditingController();
  TextEditingController controller5 = TextEditingController();

  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);
    final formkey = GlobalKey<FormState>();
    return Scaffold(
      backgroundColor: theme.primaryColor,
      appBar: AppBar(
        centerTitle: true,
        title: 'Account Creation'
            .richText
            .textStyle(theme.textTheme.headline1)
            .make(),
      ),
      body: Form(
        key: formkey,
        child: VStack([
          TextWidget(
            label: 'E_MAIL ID',
            id: 1,
            obsecure: false,
            prefix: false,
            keybordtype: TextInputType.emailAddress,
            controller: controller1,
            ctx: context,
          ),
          TextWidget(
            label: 'PHONE_NO',
            id: 2,
            obsecure: false,
            prefix: false,
            keybordtype: TextInputType.phone,
            controller: controller2,
            ctx: context,
          ),
          TextWidget(
            label: 'USER_NAME',
            id: 3,
            obsecure: false,
            prefix: false,
            keybordtype: TextInputType.text,
            controller: controller3,
            ctx: context,
          ),
          TextWidget(
            label: 'PASSWORD',
            id: 4,
            obsecure: true,
            prefix: false,
            keybordtype: TextInputType.text,
            controller: controller5,
            ctx: context,
          ),
          TextWidget(
            label: 'REPASSWORD',
            id: 5,
            obsecure: true,
            prefix: false,
            keybordtype: TextInputType.text,
            controller: controller5,
            ctx: context,
          ),
          HStack(
            [
              Button(
                id: 1,
                label: 'CREATE',
                navname: '/main',
                form: formkey,
              ),
              Button(
                id: 2,
                label: 'LOG IN',
                navname: '/',
              )
            ],
            alignment: MainAxisAlignment.spaceAround,
            axisSize: MainAxisSize.max,
          )
        ]).scrollVertical(),
      ),
    );
  }
}
