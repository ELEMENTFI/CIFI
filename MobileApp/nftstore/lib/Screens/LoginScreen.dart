import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:nftstore/Providers/Datafunction.dart';
import '../Widgets/Button.dart';
import '../Widgets/TextWidget.dart';
import 'package:rflutter_alert/rflutter_alert.dart';
import 'package:velocity_x/velocity_x.dart';
import 'MainScreen.dart';

class Authcheck extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return StreamBuilder(
        stream: Login.auth.authStateChanges(),
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            return MainPage(
              ctx: context,
            );
          } else {
            return Login();
          }
        });
  }
}

// ignore: must_be_immutable
class Login extends StatefulWidget {
  static TextEditingController controller6 = TextEditingController();
  static TextEditingController controller7 = TextEditingController();
  static final scaffold = GlobalKey<ScaffoldState>();
  static final auth = FirebaseAuth.instance;

  static authentication() async {
    final cloudstore = FirebaseFirestore.instance;
    try {
      String uid;
      if (controller6.text.contains('@'))
        uid = controller6.text;
      else
        await cloudstore
            .collection('email')
            .doc(controller6.text)
            .get()
            .then((value) {
          uid = value['email'];
        });
      auth.signInWithEmailAndPassword(email: uid, password: controller7.text);
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
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<Login> {
  final formkey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    VxState.watch(context, on: [Authstate]);
    var theme = Theme.of(context);
    Mystore data = VxState.store;
    var sign = data.sign;

    return Scaffold(
        key: Login.scaffold,
        backgroundColor: theme.primaryColor,
        appBar: AppBar(
          centerTitle: true,
          title: (sign == true)
              ? ''.text.make()
              : 'LOGIN'.richText.textStyle(theme.textTheme.headline1).make(),
          leading: (sign == true)
              ? IconButton(
                  icon: Icon(
                    Icons.menu,
                    color: theme.accentColor,
                  ),
                  onPressed: () => FirebaseAuth.instance.signOut(),
                )
              : VxBox().make(),
        ),
        body: VStack([
          Form(
            key: formkey,
            child: VxBox(
                child: VStack(
              [
                TextWidget(
                  label: 'USER NAME or Email_ID',
                  id: 6,
                  obsecure: false,
                  prefix: false,
                  keybordtype: TextInputType.text,
                  controller: Login.controller6,
                  ctx: context,
                ),
                TextWidget(
                  keybordtype: TextInputType.text,
                  label: 'PASSWORD',
                  id: 7,
                  obsecure: true,
                  prefix: false,
                  controller: Login.controller7,
                  ctx: context,
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
        ]).scrollVertical());
  }
}
