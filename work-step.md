# Techniques for WCAG 2.1の作業の進め方

作業の進め方の一例です。このドキュメントは進め方の一例であって、こうしなければならない、というものではありません。

ここに記した進め方と異なる方法であっても、同じ結果となる翻訳成果物さえ得られればどのような方法であっても構いません。

## 1. Techniques for WCAG 2.0とTechniques for WCAG 2.1の差分を取って貼り付ける

[HTML Diff service](https://services.w3.org/htmldiff)を用いて、差分を取得します。

waic.jpに翻訳が掲載されている[WCAG 2.0 達成方法集](https://waic.jp/docs/WCAG-TECHS/Overview.html)の原文である[Techniques for WCAG 2\.0](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/)と、翻訳作業の対象になっているこのレポジトリの[Techniques for WCAG 2\.1](https://raw.githack.com/waic/wcag21/techniques-20191001/techniques/)とで、差分を取ります。こうすることで、英語で差分のない箇所は日本語をそのままWCAG 2.0 達成方法集からコピーし、差分のある箇所は新たに翻訳すればよい、ということがわかります。

### 差分の例：FLASH1の場合

URLは自分の作業を行うファイルに読み替えてください。Techniques for 2.0/2.1の原文の差分URLはつぎのようになります。HTML Diff service「Address of reference document:」に下記の①を、「Address of new document:」に下記の②を入力することで差分URLを生成できます。

https://services.w3.org/htmldiff?doc1=https%3A%2F%2Fwww.w3.org%2FTR%2FWCAG20-TECHS%2FFLASH1.html&doc2=https%3A%2F%2Fraw.githack.com%2Fwaic%2Fwcag21%2Ftechniques-20191001%2Ftechniques%2Fflash%2FFLASH1.html

- 2.0日本語訳のURL：https://waic.jp/docs/WCAG-TECHS/FLASH1.html
- 2.0原文のURL（①）：https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH1.html
- 2.1原文（正確には翻訳前の状態）のURL（②）：https://raw.githack.com/waic/wcag21/techniques-20191001/techniques/flash/FLASH1.html

生成した差分において、例えば「FLASH1: Setting the name property for a non-text object」であれば、先頭の「FLASH1:」以外は変更がないので、WCAG 2.0 達成方法集からの対応箇所の訳で先頭を取り除いた「非テキストオブジェクトに name プロパティを設定する」をそのままコピーして、これから翻訳するFLASH1に貼り付ければよいことがわかります。

また、見出し「Important Information about Techniques」は「達成方法に関する重要な情報」をそのままコピーして貼り付ければよいです。さらにこの見出しの段落は、翻訳文では2.0を2.1に置き換えればよいことがわかります。

この例は、Techniques for 2.0とTechniques for 2.1にどちらもファイルがあって差分を取ることができる場合ですが、2.1で新規にファイルが追加されたものであっても、「Important Information about Techniques」のようにテンプレート的に共通している箇所については、2.0から翻訳をコピーしてくればよいです。

## 2. 新規文章や変更のある箇所の翻訳を行う

Techniques for WCAG 2.1の新規文章や、差分を取って変更がある箇所については、新たに翻訳を行う必要があります。任意のツールの力を借りつつ、翻訳を行います。
翻訳ガイドラインの確認をお忘れなく。

## 3. Pull Requestをする

ブランチ `techniques-20191001` にPull Requestを行い、レビュワーは@momdoに向けてください。

レビューコメントを受け取ったら、指摘に基づいて修正をするか、指摘への質問や反論を書いてください。

（翻訳と翻訳作業に付随するあれやこれやの質問は随時、GitHubやSlack等で受け付けています）

レビュワーがマージOKを出したら、基本としてPull Requestを出した人がマージしてください。