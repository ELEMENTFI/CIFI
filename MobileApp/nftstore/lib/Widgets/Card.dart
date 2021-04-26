import 'package:flutter/material.dart';
import 'package:velocity_x/velocity_x.dart';

class CardWidget extends StatelessWidget {
  final bool list;
  final String title;
  final String price;
  final String stock;
  final String url;
  const CardWidget(
      {Key key,
      this.list,
      @required this.price,
      @required this.stock,
      @required this.title,
      @required this.url})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    var theme = Theme.of(context);
    return ClipRRect(
            borderRadius: BorderRadius.circular(20.0),
            child: VxBox(
                    child: VStack(
              [
                title.richText
                    .textStyle(theme.textTheme.headline1
                        .copyWith(color: theme.accentColor))
                    .make()
                    .px(10),
                VxBox(
                    child: VStack([
                  "Stock:"
                      .richText
                      .withTextSpanChildren([
                        stock.textSpan
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
                            price.textSpan
                                .textStyle(theme.textTheme.headline2
                                    .copyWith(fontSize: 18))
                                .make(),
                          ])
                          .textStyle(theme.textTheme.headline1
                              .copyWith(fontSize: 20, color: theme.accentColor))
                          .make()
                          .px(10),
                      Icon(
                        Icons.favorite_outline_sharp,
                        color: theme.accentColor,
                      ),
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
                .bgImage(
                    DecorationImage(image: NetworkImage(url), fit: BoxFit.fill))
                .color(theme.cardColor)
                .make())
        .p(10);
  }
}
