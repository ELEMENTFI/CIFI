import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import '../Providers/Datafunction.dart';
import '../Screens/LoginScreen.dart';
import 'package:velocity_x/velocity_x.dart';

class TextWidget extends StatefulWidget {
  final label;
  final prefix;
  final obsecure;
  final keybordtype;
  final id;
  final controller;
  const TextWidget({
    Key key,
    @required this.label,
    @required this.prefix,
    @required this.obsecure,
    @required this.id,
    @required this.keybordtype,
    @required this.controller,
  }) : super(key: key);

  @override
  TextWidgetState createState() => TextWidgetState();
}

class TextWidgetState extends State<TextWidget> {
  final fstore = FirebaseFirestore.instance;
  var temp;
  String catagoroy;
  Logindata data = Logindata(email: '', phone: '', username: '', password: '');
  Auth authdata = Auth(username: '', password: '');

  void datasubmit(id, value) async {
    if (id <= 5) {
      switch (id) {
        case 1:
          data = Logindata(
              email: value,
              phone: data.phone,
              username: data.username,
              password: data.password);
          break;
        case 2:
          data = Logindata(
              email: data.email,
              phone: value,
              username: data.username,
              password: data.password);
          break;
        case 3:
          data = Logindata(
              email: data.email,
              phone: data.phone,
              username: value,
              password: data.password);
          break;
        case 4:
          data = Logindata(
              email: data.email,
              phone: data.phone,
              username: data.username,
              password: value);
          break;
        default:
          data = Logindata(
              email: data.email,
              phone: data.phone,
              username: data.username,
              password: data.password);
      }
      if ((data.email != null) &&
          (data.phone != null) &&
          (data.username != null) &&
          (data.password != null)) {
            try{
        fstore.collection('User').doc(data.username).set({
          'email_id': data.email,
          'password': data.password,
          'phone_no': data.phone,
          'user_name': data.username
        }).then((_) async {
          final cdata = await fstore.collection('Username').doc('list').get();
          int count = cdata.data().length;
          fstore.collection('Username').doc('list').set({
            '${count + 1}': data.username,
          });
        });
            }
            catch(e){
            
            }
      }
    }
    if ((id > 5) && (id <= 7)) {
      switch (id) {
        case 6:
          authdata = Auth(username: value, password: authdata.password);
          break;
        case 7:
          authdata = Auth(username: authdata.username, password: value);
          break;
        default:
          authdata =
              Auth(username: authdata.username, password: authdata.password);
      }
      if ((authdata.username != null) && (authdata.password != null)) {
        Login.authentication(authdata.username, authdata.password);
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);
    //Mystore store = VxState.store;
    return TextFormField(
      controller: widget.controller,
      decoration: InputDecoration(
        errorStyle: theme.textTheme.headline2
            .copyWith(fontSize: 10, fontStyle: FontStyle.italic),
        labelText: widget.label,
        labelStyle: theme.textTheme.headline2.copyWith(fontSize: 15),
        prefixIcon: widget.prefix
            ? IconButton(
                onPressed: () {},
                icon: Icon(
                  Icons.image,
                  color: theme.accentColor,
                ),
              )
            : null,
        enabledBorder: OutlineInputBorder(
            borderRadius: BorderRadius.all(Radius.circular(20.0)),
            borderSide: BorderSide(color: theme.accentColor, width: 2)),
      ),
      maxLines: widget.id == 13 ? 5 : 1,
      keyboardType: widget.keybordtype,
      style: theme.textTheme.headline1.copyWith(fontSize: 15),
      obscureText: widget.obsecure,
      onSaved: (value) => datasubmit(widget.id, value),
      validator: (value) {
        switch (widget.id) {
          case 1:
            if (value.isEmpty ||
                !RegExp(r"^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+")
                    .hasMatch(value)) return 'In valid Email';
            break;
          case 2:
            if ((!RegExp(r'(^(?:[+0]9)?[0-9]{10,12}$)').hasMatch(value)))
              return 'In valid Phone no';
            break;
          case 3:
            if (value.isEmpty) return 'Please enter your User Name';
            break;
          case 4:
            if (value.isEmpty) return 'Please enter your Password';
            setState(() {
              temp = value;
            });
            break;
          case 5:
            if (temp != value) return 'Password not matched';
            break;
          case 6:
            if (value.isEmpty) return 'Please enter your User Name';
            break;
          case 7:
            if (value.isEmpty) return 'Please enter your Password';
            break;
          case 8:
            if (value.isEmpty) return 'Please enter your NFT Name';
            break;
          case 9:
            if (value.isEmpty) return 'In vaild address';
            break;
          case 10:
            if (!RegExp(r"^[0-9]").hasMatch(value)) return 'Invalid QTY';
            break;
          case 11:
            if (!RegExp(r"^[0-9]").hasMatch(value)) return 'Invalid Price';
            break;
          case 12:
            if (value.isEmpty) return 'Invalid Title';
            break;
          case 14:
            if (value.isNotEmpty) {
              if (value.length > 50) return 'Please Enter Text Between 1 to 50';
            }
            break;
          case 15:
            if (value.isEmpty) return 'Please Enter URL';
            break;
          case 16:
            if (value.isEmpty) return 'Please enter your NFT Symbol';

            break;
          default:
            return null;
        }
        return null;
      },
    ).p(10);
  }
}
