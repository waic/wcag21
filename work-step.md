# Techniques for WCAG 2.1の作業の進め方

作業の進め方の一例です。このドキュメントは進め方の一例であって、こうしなければならない、というものではありません。

ここに記した進め方と異なる方法であっても、同じ結果となる翻訳成果物さえ得られればどのような方法であっても構いません。

## 1. Techniques for WCAG 2.0とTechniques for WCAG 2.1の差分を取って貼り付ける

[HTML Diff service](https://services.w3.org/htmldiff)を用いて、差分を取得します。

waic.jpに翻訳が掲載されている[WCAG 2.0 達成方法集](https://waic.github.io/wcag20/Techniques/Overview.html)の原文である[Techniques for WCAG 2\.0](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/)と、翻訳作業の対象になっているこのレポジトリの[Techniques for WCAG 2\.1](https://raw.githack.com/waic/wcag21/techniques-20191001/techniques/)とで、差分を取ります。こうすることで、英語で差分のない箇所は日本語をそのままWCAG 2.0 達成方法集からコピーし、差分のある箇所は新たに翻訳すればよい、ということがわかります。

### 差分の取得例：FLASH1の場合

URLは自分の作業を行うファイルに読み替えてください。Techniques for 2.0/2.1の原文の差分URLはつぎのようになります。HTML Diff service「Address of reference document:」に下記の①を、「Address of new document:」に下記の②を入力することで差分URLを生成できます。

https://services.w3.org/htmldiff?doc1=https%3A%2F%2Fwww.w3.org%2FTR%2FWCAG20-TECHS%2FFLASH1.html&doc2=https%3A%2F%2Fraw.githack.com%2Fwaic%2Fwcag21%2Ftechniques-20191001%2Ftechniques%2Fflash%2FFLASH1.html

- 2.0日本語訳のURL：https://waic.github.io/wcag20/Techniques/FLASH1.html
- 2.0原文のURL（①）：https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH1.html
- 2.1原文（正確には翻訳前の状態）のURL（②）：https://raw.githack.com/waic/wcag21/techniques-20191001/techniques/flash/FLASH1.html

生成した差分において、例えば「FLASH1: Setting the name property for a non-text object」であれば、先頭の「FLASH1:」以外は変更がないので、WCAG 2.0 達成方法集からの対応箇所の訳で先頭を取り除いた「非テキストオブジェクトに name プロパティを設定する」をそのままコピーして、これから翻訳するFLASH1に貼り付ければよいことがわかります。

また、見出し「Important Information about Techniques」は「達成方法に関する重要な情報」をそのままコピーして貼り付ければよいです。さらにこの見出しの段落は、翻訳文では2.0を2.1に置き換えればよいことがわかります。

この例は、Techniques for 2.0とTechniques for 2.1にどちらもファイルがあって差分を取ることができる場合ですが、2.1で新規にファイルが追加されたものであっても、「Important Information about Techniques」のようにテンプレート的に共通している箇所については、2.0から翻訳をコピーしてくればよいです。

## 2. 新規文章や変更のある箇所の翻訳を行う

Techniques for WCAG 2.1の新規文章や、差分を取って変更がある箇所については、新たに翻訳を行う必要があります。任意のツールの力を借りつつ、翻訳を行います。

- [翻訳ガイドライン](https://github.com/waic/translation_guidelines/blob/master/WAIC-wcag20-trans-guide.md)
- [WCAG 2.1の用語集](https://waic.jp/docs/WCAG21/#glossary)
- [WG4の用語集](https://docs.google.com/spreadsheets/d/1V8wX-pxAO-zuYwTSvTSuZ_FtnV47su6Tyy2vM5GEOLw/edit#gid=0)

の確認もお忘れなく。

### Techniquesの独自ルール（2019年11月ミーティング確認済み、2020年4月更新）

#### `<ul id="navigation">`部分について

- `title`属性の値はママとします。要素の内容は翻訳します。
    - 実例としては[PR #323](https://github.com/waic/wcag21/pull/323/files)のような形になっていればよいです

#### リンクURLについて

- WCAG 2.1（本体）へのリンクは https://waic.jp/docs/WCAG21/ に置換します。
- Understanding WCAG 2.1へのリンクは、waic.jpですでに公開されていますが、そのママとします。
    - あとで一括置換します。
- Techniques for WCAG 2.1内のリンクは、相対リンクにします。
    - 非常に面倒なことに、WCAG 2.0達成方法集とは異なるディレクトリ構造になっています。例えば、G1と、G4とARIAという文書を考えます。URLは次のようになっています。
       - G1: https://www.w3.org/WAI/WCAG21/Techniques/general/G1
       - G4: https://www.w3.org/WAI/WCAG21/Techniques/general/G4
       - ARIA1: https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA1
    - G1からG4、ARIA1へのリンクをそれぞれ考えると、G4へのリンクは`href="G4"`、ARIA1へのリンクは、`href="../aria/ARIA1"`となります。
    - Techniques for WCAG 2.1 で拡張子が付いていたり（例：`href="G4.html"`）、付いていなかったり（例：`href="G4"`）しますが、拡張子は原文のママでよいです。

#### 本文中の改行について

原文の英語では、本文に改行が入っていますが、日本語訳では改行を入れずに翻訳を作成します。

#### `title`要素と、`h1`要素のタイトルをあわせる

`title`要素を日本語に置き換え忘れたり、`title`要素のタイトルと`h1`要素の内容が一致しなかったりということがたまにあります。

接頭辞の違い（「G1: 」など）を除いて同一のタイトルにします。


#### 訳注について

WCAG 2.0達成方法集には、訳注がついていることがあります。これをWCAG 2.1達成方法集に移植する場合、マークアップを変更する必要があります。

具体的には、

```html
<div xmlns="" class="note"><p class="prefix"><em>訳注:</em>
<!-- 訳注の中身 -->
</p></div>
```

というものを

```html
<div role="heading" class="note-title marker" aria-level="3">訳注:</div>
<div>
<p><!-- 訳注の中身 --></p>
</div>
```

というようなマークアップに差し替えてください。なお、`aria-level`属性は見出しレベルに相当するものなので、セクションの見出しにより1つレベルが下がるような値に変更してください。

例えば、`h3`のセクションに訳注が存在する場合、`aria-level="4"`と見出しレベルを1つ下げます。


## 3. Pull Requestをする

ブランチ `techniques-20191001` にPull Requestを行い、レビュワーは@momdoに向けてください。

レビューコメントを受け取ったら、指摘に基づいて修正をするか、指摘への質問や反論を書いてください。

（翻訳と翻訳作業に付随するあれやこれやの質問は随時、GitHubやSlack等で受け付けています）

マージOKの状態になったら、@momdoか@bakeraがマージします。

### WCAG 2.0 達成方法集からそのままコピーした翻訳でもレビューコメントを受け取ったのですが。

これは、今回のWCAG 2.1達成方法集を作成するにあたり、すべての文書を見直す方針のためです。

必須ではありませんが、余裕のある人は、既存の翻訳からコピーする際に、機械翻訳と比較するなどして大幅な食い違いがないかなどを確認いただくと嬉しいです。

## おまけ：GitHubの使い方を忘れた

[GitHub Desktop の使いかた \(GitHub 初心者向け\)](https://github.com/waic/atag20-ja/wiki/GitHub-Desktop-%E3%81%AE%E4%BD%BF%E3%81%84%E3%81%8B%E3%81%9F-(GitHub-%E5%88%9D%E5%BF%83%E8%80%85%E5%90%91%E3%81%91))が役に立つと思います（2018年さくせいなので、一部現在と異なっていることがあります）

それでもわからない場合は、Slackで質問ください。
