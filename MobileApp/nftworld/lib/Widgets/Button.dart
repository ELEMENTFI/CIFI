import 'package:flutter/material.dart';
import '../Providers/Datafunction.dart';
import '../Screens/BuyerScreen.dart';
import '../Screens/LoginScreen.dart';
import 'package:velocity_x/velocity_x.dart';

class Button extends StatelessWidget {
  final String label;
  final navname;
  final id;
  final form;
  final buy;
  const Button({
    Key key,
    @required this.label,
    this.navname,
    @required this.id,
    this.form,
    this.buy,
  }) : super(key: key);

  void submit(BuildContext context, name, formkey) async {
    final valid = formkey.currentState.validate();
    if (valid) {
      formkey.currentState.save();
    }
    if (name != '/main') context.vxNav.push(Uri(path: name));
  }

  void submit2(formkey) async {
    final valid = formkey.currentState.validate();
    if (valid) {
      formkey.currentState.save();
    }
  }

  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);
    Mystore store = VxState.store;
    return ClipRRect(
      borderRadius: BorderRadius.circular(20),
      child: VxBox(
        child: ElevatedButton(
            onPressed: () async => (id == 2 || id == 5 || id == 4)
                ? context.vxNav.push(Uri(path: navname))
                : (id == 3)
                    ? Login.authentication(context)
                    : (id == 6)
                        ? submit2(form)
                        : (id == 7)
                            ? (buy == true)? BuyerScreenState.nftbuy():BuyerScreenState.newupdate(store)
                            :(id == 8)?BuyerScreenState.nftsend(): submit(context, navname, form),
            child: label.richText
                .textStyle(theme.textTheme.headline2.copyWith(fontSize: 13))
                .make()),
      ).height(40).make(),
    );
  }
}

