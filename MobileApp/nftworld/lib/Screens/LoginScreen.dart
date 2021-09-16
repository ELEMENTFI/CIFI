import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import '../Providers/Datafunction.dart';
import '../Screens/splashscreen.dart';
import '../Widgets/Button.dart';
import '../Widgets/TextWidget.dart';
import 'package:rflutter_alert/rflutter_alert.dart';
import 'package:velocity_x/velocity_x.dart';

class Authcheck extends StatelessWidget {
  final auth = FirebaseAuth.instance;
  @override
  Widget build(BuildContext context) {
    return StreamBuilder(
        stream: auth.authStateChanges(),
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            return Splash(
              navigation: 2,
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
  FocusNode f6 = FocusNode();
  FocusNode f7 = FocusNode();
  static final auth = FirebaseAuth.instance;

  static Future<String> user() async {
    final cloudstore = FirebaseFirestore.instance;
    String user;
    print(controller6.text);
    if (controller6.text.contains('@'))
      user = controller6.text;
    else
      await cloudstore
          .collection('email')
          .doc(controller6.text)
          .get()
          .then((value) {
        user = value['email'];
      });
    return user;
  }

  static authentication(
    BuildContext stylecontext,
    scaf,
  ) async {
    try {
      String uid = await user();
      await Userdetails();
      auth
          .signInWithEmailAndPassword(email: uid, password: controller7.text)
          .then((value) {
        Login.controller6.clear();
        Login.controller7.clear();
      });
    } catch (e) {
      Alert(
        context: scaf.currentContext,
        type: AlertType.error,
        title: "ERROR",
        desc: e.toString(),
        buttons: [
          DialogButton(
            child: Text(
              "OK",
              style: Theme.of(stylecontext).textTheme.headline2,
            ),
            onPressed: () => Navigator.pop(scaf.currentContext),
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
  static final scaffold = GlobalKey<ScaffoldState>();
  final formkey = GlobalKey<FormState>();
  @override
  void initState() {
    super.initState();
    print('log');
  }

  @override
  Widget build(BuildContext context) {
    VxState.watch(context, on: [Authstate]);
    var theme = Theme.of(context);
    Mystore data = VxState.store;
    var sign = data.sign;

    return Scaffold(
        key: scaffold,
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
                  keybordtype: TextInputType.emailAddress,
                  controller: Login.controller6,
                  ctx: context,
                  focusnode: widget.f6,
                  focusfun: (_) {
                    widget.f6.unfocus();
                    FocusScope.of(context).requestFocus(widget.f7);
                  },
                  action: TextInputAction.next,
                ),
                TextWidget(
                  keybordtype: TextInputType.text,
                  label: 'PASSWORD',
                  id: 7,
                  obsecure: true,
                  prefix: false,
                  controller: Login.controller7,
                  ctx: context,
                  focusnode: widget.f7,
                  focusfun: (_) => widget.f7.unfocus(),
                  action: TextInputAction.done,
                ),
                (context.percentHeight * 5).heightBox,
                HStack(
                  [
                    Button(
                      id: 3,
                      label: 'LOG IN',
                      navname: '/main',
                      form: formkey,
                      key: scaffold,
                    ),
                    Button(
                      id: 4,
                      label: 'SIGN IN',
                      navname: '/signin',
                    )
                  ],
                  alignment: MainAxisAlignment.spaceAround,
                  axisSize: MainAxisSize.max,
                ),
                (context.percentHeight * 2).heightBox,
                "Forgot Password?"
                    .richText
                    .textStyle(theme.textTheme.headline2)
                    .makeCentered()
                    .onTap(() async {
                  try {
                    final email = await Login.user();

                    Login.auth.sendPasswordResetEmail(email: email);
                  } catch (e) {
                    Alert(
                      context: context,
                      type: AlertType.error,
                      title: "ERROR",
                      desc: e.toString(),
                      buttons: [
                        DialogButton(
                          child: Text("OK",
                              style: Theme.of(context).textTheme.headline2),
                          onPressed: () => Navigator.pop(context),
                          width: 120,
                        ),
                      ],
                    ).show();
                  }
                })
              ],
              alignment: MainAxisAlignment.center,
              axisSize: MainAxisSize.max,
            )).square(500).make().p(40),
          ),
        ]).scrollVertical().onTap(() {
          FocusScope.of(context).unfocus();
        }));
  }
}
