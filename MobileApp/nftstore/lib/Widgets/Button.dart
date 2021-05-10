import 'package:flutter/material.dart';
import 'package:velocity_x/velocity_x.dart';


class Button extends StatelessWidget {
  final String label;
  final navname;
  final id;
  final form;
  const Button(
      {Key key,
      @required this.label,
      this.navname,
      @required this.id,
      this.form})
      : super(key: key);

void submit(BuildContext context, name, formkey) {
    final valid = formkey.currentState.validate();
    if (valid) {
      formkey.currentState.save();
      }
      context.vxNav.push(Uri(path: name));
    }

  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);
    return ClipRRect(
      borderRadius: BorderRadius.circular(20),
      child: VxBox(
        child: ElevatedButton(
            onPressed: () async => (id == 2 || id == 5)
                ? context.vxNav.push(Uri(path: navname))
                : (id == 3)? null:submit(context, navname, form),
            child: label.richText
                .textStyle(theme.textTheme.headline2.copyWith(fontSize: 13))
                .make()),
      ).height(40).make(),
    );
  }
}
