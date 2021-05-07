import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import '../Widgets/Button.dart';
import '../Widgets/TextWidget.dart';
import 'package:rflutter_alert/rflutter_alert.dart';
import 'package:velocity_x/velocity_x.dart';

// ignore: must_be_immutable
class Login extends StatelessWidget {
  TextEditingController controller6 = TextEditingController();
  TextEditingController controller7 = TextEditingController();
  static final scaffold = GlobalKey<ScaffoldState>();
  final formkey = GlobalKey<FormState>();

  static authentication(username, password) async {
    final fstore = FirebaseFirestore.instance;
    try {
      fstore.collection('User').doc(username).get().then((value) {
        if (value['password'] == password) {
          scaffold.currentContext.vxNav.push(Uri(path: '/main'));
        } else {
          Alert(
            context: scaffold.currentContext,
            type: AlertType.error,
            title: "ERROR",
            desc: "User name and Password not matched",
            buttons: [
              DialogButton(
                child: Text(
                  "RETRY",
                  style: TextStyle(
                      color: Theme.of(scaffold.currentContext).accentColor,
                      fontSize: 20),
                ),
                onPressed: () => Navigator.pop(scaffold.currentContext),
                width: 120,
              )
            ],
          ).show();
        }
      });
    } catch (e) {
      Alert(
        context: scaffold.currentContext,
        type: AlertType.error,
        title: "ERROR",
        desc: e.toString(),
        buttons: [
          DialogButton(
            child: Text(
              "OK",
              style: TextStyle(
                  color: Theme.of(scaffold.currentContext).accentColor,
                  fontSize: 20),
            ),
            onPressed: () => Navigator.pop(scaffold.currentContext),
            width: 120,
          ),
        ],
      ).show();
    }
  }

  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);
    return Scaffold(
      key: scaffold,
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
