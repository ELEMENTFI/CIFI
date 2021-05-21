import 'package:flutter/material.dart';
import '../Widgets/Button.dart';
import '../Widgets/TextWidget.dart';
import 'package:velocity_x/velocity_x.dart';

// ignore: must_be_immutable
class AccountCreation extends StatelessWidget {
  static TextEditingController controller1 = TextEditingController();
  static TextEditingController controller2 = TextEditingController();
  static TextEditingController controller3 = TextEditingController();
  static TextEditingController controller4 = TextEditingController();
  static TextEditingController controller5 = TextEditingController();
  FocusNode f1 = FocusNode();
  FocusNode f2 = FocusNode();
  FocusNode f3 = FocusNode();
  FocusNode f4 = FocusNode();
  FocusNode f5 = FocusNode();
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
            focusnode: f1,
            focusfun: (_) {
              f1.unfocus();
              FocusScope.of(context).requestFocus(f2);
            },
            action: TextInputAction.next,
          ),
          TextWidget(
            label: 'PHONE_NO',
            id: 2,
            obsecure: false,
            prefix: false,
            keybordtype: TextInputType.phone,
            controller: controller2,
            ctx: context,
            focusnode: f2,
            focusfun: (_) {
              f2.unfocus();
              FocusScope.of(context).requestFocus(f3);
            },
            action: TextInputAction.next,
          ),
          TextWidget(
            label: 'USER_NAME',
            id: 3,
            obsecure: false,
            prefix: false,
            keybordtype: TextInputType.text,
            controller: controller3,
            ctx: context,
            focusnode: f3,
            focusfun: (_) {
              f3.unfocus();
              FocusScope.of(context).requestFocus(f4);
            },
            action: TextInputAction.next,
          ),
          TextWidget(
            label: 'PASSWORD',
            id: 4,
            obsecure: true,
            prefix: false,
            keybordtype: TextInputType.text,
            controller: controller4,
            ctx: context,
            focusnode: f4,
            focusfun: (_) {
              f4.unfocus();
              FocusScope.of(context).requestFocus(f5);
            },
            action: TextInputAction.next,
          ),
          TextWidget(
            label: 'REPASSWORD',
            id: 5,
            obsecure: true,
            prefix: false,
            keybordtype: TextInputType.text,
            controller: controller5,
            ctx: context,
            focusnode: f5,
            focusfun: (_) {
              f5.unfocus();
            },
            action: TextInputAction.done,
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
