import 'package:flutter/material.dart';
import 'package:velocity_x/velocity_x.dart';

class CardWidget extends StatelessWidget {
  final bool list;
  final String nftname;
  final String nftsymbol;
  final String price;
  final String url;
  const CardWidget(
      {Key key,
      this.list,
      @required this.price,
      @required this.url,
      @required this.nftname,
      @required this.nftsymbol})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);
    return ClipRRect(
            borderRadius: BorderRadius.circular(20.0),
            child: VxBox(
                    child: VStack(
              [
                nftname.richText
                    .textStyle(theme.textTheme.headline1
                        .copyWith(color: theme.accentColor))
                    .make()
                    .px(10),
                VxBox(
                    child: VStack([
                  "Symbol:"
                      .richText
                      .withTextSpanChildren([
                        nftsymbol.textSpan
                            .textStyle(theme.textTheme.headline2
                                .copyWith(fontSize: 18))
                            .make(),
                      ])
                      .textStyle(theme.textTheme.headline1
                          .copyWith(fontSize: 20, color: theme.accentColor))
                      .make()
                      .px(10),
                  HStack(
                    [
                      "Price:"
                          .richText
                          .withTextSpanChildren([
                            (price.textSpan)
                                .textStyle(theme.textTheme.headline2.copyWith(
                                  fontSize: 18,
                                ))
                                .make(),
                          ])
                          .textStyle(theme.textTheme.headline1
                              .copyWith(fontSize: 20, color: theme.accentColor))
                          .make()
                          .px(10),
                    ],
                    alignment: MainAxisAlignment.spaceBetween,
                    axisSize: MainAxisSize.max,
                  ),
                ])).make()
              ],
              alignment: MainAxisAlignment.spaceBetween,
              axisSize: MainAxisSize.max,
            ))
                .square(list == true
                    ? context.percentHeight * 40
                    : context.percentHeight * 30)
                .neumorphic(color: theme.cardColor, elevation: 5.0)
                .bgImage(
                    DecorationImage(image: NetworkImage(url), fit: BoxFit.fill))
                .color(theme.cardColor)
                .make())
        .p(10);
  }
}
