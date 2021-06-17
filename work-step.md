# Techniques for WCAG 2.1の翻訳作業の進め方

GitHubのissueで[達成方法集-201910](https://github.com/waic/wcag21/issues?q=is%3Aissue+is%3Aopen+label%3A%E9%81%94%E6%88%90%E6%96%B9%E6%B3%95%E9%9B%86-201910)とラベル付けされている対象の翻訳作業の進め方の一例です。

このドキュメントは進め方の一例であって、こうしなければならないというものではありません。ここに記した進め方と異なる方法であっても、同じ結果となる翻訳成果物さえ得られればどのような方法であっても構いません。

##  1. Techniques for WCAG 2.0とTechniques for WCAG 2.1の差分を取って貼り付ける

[HTML Diff service](https://services.w3.org/htmldiff)を用いて、差分を取得します。

waic.jpに翻訳が掲載されている[WCAG 2.0 達成方法集](https://waic.github.io/wcag20/Techniques/Overview.html)の原文である[Techniques for WCAG 2\.0](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/)と、翻訳作業の対象になっているこのレポジトリーの[Techniques for WCAG 2\.1](https://waic.github.io/wcag21/techniques/)とで、差分を取ります。こうすることで、英語で実質的に差分のない箇所は日本語をそのままWCAG 2.0 達成方法集からコピーできます。

### 差分の取得例：FLASH1の場合

ここで説明するURLについては、自分の作業を行うファイル名に読み替えてください。Techniques for 2.0/2.1の原文の差分URLは次のようになります。HTML Diff service「Address of reference document:」に下記の①を、「Address of new document:」に下記の②を入力することで差分URLを生成できます。下記は入力語の差分URLです。

https://services.w3.org/htmldiff?doc1=https%3A%2F%2Fwww.w3.org%2FTR%2F2016%2FNOTE-WCAG20-TECHS-20161007%2FFLASH1.html&doc2=https%3A%2F%2Fwaic.github.io%2Fwcag21%2Ftechniques%2Fflash%2FFLASH1

- 2.0日本語訳のURL：https://waic.github.io/wcag20/Techniques/FLASH1.html
- 2.0原文のURL（①）：https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH1.html
- 2.1原文（正確には翻訳前の状態）のURL（②）：https://waic.github.io/wcag21/techniques/flash/FLASH1

生成した差分において、例えば「FLASH1: Setting the name property for a non-text object」であれば、先頭の「FLASH1:」以外は変更がないので、WCAG 2.0 達成方法集からの対応箇所の訳で先頭を取り除いた「非テキストオブジェクトに name プロパティを設定する」をそのままコピーして、これから翻訳するFLASH1に貼り付ければよいことがわかります。

また、見出し「Important Information about Techniques」は「達成方法に関する重要な情報」をそのままコピーして貼り付ければよいです。さらにこの見出しの段落は、翻訳文では2.0を2.1に置き換えればよいことがわかります。

### Q1. 著しい差分があった場合はどうしますか？

@momdoで差分があった箇所を翻訳しますので、その差分のあった部分を無視して置換を行い、Pull Request作成時にコメントでそのことを言及してください。

少しの作業でその差分のある箇所を翻訳できそうであれば翻訳してもらっても構いません。

### Q2. 作業に当たっての細かいルールや注意点はありますか？

非常に長くなってしまいましたので、この文書の末尾に移動しました。

見出し「[翻訳作業における細かいルール](#%E7%BF%BB%E8%A8%B3%E4%BD%9C%E6%A5%AD%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E7%B4%B0%E3%81%8B%E3%81%84%E3%83%AB%E3%83%BC%E3%83%AB)」以降に詳細を記載していますので、そちらを参照してください。

## 2. Pull Requestをする

ブランチ `master` にPull Requestを行い、レビュワーは@momdoに向けてください。翻訳作業に漏れ（置換漏れ）がないかを確認します。

Pull Request作成の際、2.0と2.1で著しい差異があった場合は、差異があったことをあわせてコメントしてください。

画面右側の設定項目を次のようにしてもらえると嬉しいです:

- 「Reviewers」を「momdo」に設定する
- 「Labels」を「達成方法集-201910」に設定する
- 「Linked issues」を対応するissueに設定する
    - たとえば、F100の翻訳を行っているならば、「達成方法集 F100の翻訳」とあるissueを設定します

置換漏れがないことを確認したら、@momdoでマージを行います。マージされればその達成方法の作業は完了です。

## おまけ：GitHubの使い方を忘れた

[GitHub Desktop の使いかた \(GitHub 初心者向け\)](https://github.com/waic/atag20-ja/wiki/GitHub-Desktop-%E3%81%AE%E4%BD%BF%E3%81%84%E3%81%8B%E3%81%9F-(GitHub-%E5%88%9D%E5%BF%83%E8%80%85%E5%90%91%E3%81%91))が役に立つと思います（2018年に作成されたなので、一部現在と異なっていることがあります）。

それでもわからない場合は、Slackで質問してください。

## 作業スケジュール等について

- [達成方法集-201910](https://github.com/waic/wcag21/issues?q=is%3Aissue+is%3Aopen+label%3A%E9%81%94%E6%88%90%E6%96%B9%E6%B3%95%E9%9B%86-201910)とラベル付けされているissueすべてをCloseさせることが目標です（いつまでは決めてないですが、なるべく早いうちに）。
    - 目下は、マイルストーン[達成方法集：ARIA](https://github.com/waic/wcag21/milestone/7)を2021年5月をメドに完了させたいです。
    - まだ他の達成方法のマイルストーンは作成していませんが、[Milestones](https://github.com/waic/wcag21/milestones)に追加していく予定です。

先の話ですが、達成方法集の未翻訳のものが翻訳できたら…

- WCAG 2.1解説書の更新を行う（2019年3月の原文から更新）
- WCAG 2.1達成方法集の更新を行う（2019年10月の原文から更新）
- WCAG 2.2が勧告になっていたら、その翻訳を行う

というような選択肢が考えられます。言い換えると、WG4としてやることはたくさんあります…みなさまのご協力をお願いいたします。

----

## 翻訳作業における細かいルール

（2019年11月ミーティング確認済み、2020年4月更新）

### `<ul id="navigation">`部分について

- `title`属性の値はママとします。要素の内容は翻訳します。
    - 実例としては[PR #323](https://github.com/waic/wcag21/pull/323/files)のような形になっていればよいです

### リンクURLについて

- WCAG 2.1（本体）へのリンクは https://waic.jp/docs/WCAG21/ に置換します。
- 同様にUnderstanding WCAG 2.1（解説書）へのリンクは、https://waic.jp/docs/WCAG21/Understanding/ とします。
- Techniques for WCAG 2.1（達成方法集）内のリンクは、相対リンクにします。
    - 非常に面倒なことに、WCAG 2.0達成方法集とは異なるディレクトリー構造になっています。例えば、G1と、G4とARIAという文書を考えます。URLは次のようになっています。
       - G1: https://www.w3.org/WAI/WCAG21/Techniques/general/G1
       - G4: https://www.w3.org/WAI/WCAG21/Techniques/general/G4
       - ARIA1: https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA1
    - G1からG4、ARIA1へのリンクをそれぞれ考えると、G4へのリンクは`href="G4"`、ARIA1へのリンクは、`href="../aria/ARIA1"`となります。
    - Techniques for WCAG 2.1 で拡張子が付いていたり（例：`href="G4.html"`）、付いていなかったり（例：`href="G4"`）しますが、拡張子は原文のママでよいです。

### 本文中の改行について

原文の英語では、本文（例えば`p`要素の中）に改行が入っていますが、日本語訳では改行を入れずに（原文の改行を除去して）翻訳を作成します。

### `title`要素と、`h1`要素のタイトルをあわせる

`title`要素を日本語に置き換え忘れたり、`title`要素のタイトルと`h1`要素の内容が一致しなかったりということがたまにあります。

接頭辞の違い（「G1: 」など）を除いて同一のタイトルにします。

### 訳注について

WCAG 2.0達成方法集には、訳注がついていることがあります。これをWCAG 2.1達成方法集に移植する場合、マークアップを変更する必要があります。

具体的には、

```html
<div xmlns="" class="note"><p class="prefix"><em>訳注:</em>
<!-- 訳注の中身 -->
</p></div>
```

というものを

```html
<div class="note">
<div role="heading" class="note-title marker" aria-level="3">訳注:</div>
<div>
<p><!-- 訳注の中身 --></p>
</div>
</div>
```

というようなマークアップに差し替えてください。なお、`aria-level`属性は見出しレベルに相当するものなので、セクションの見出しにより1つレベルが下がるような値に変更してください。

例えば、`h3`のセクションに訳注が存在する場合、`aria-level="4"`と見出しレベルを1つ下げます。

## 共通する翻訳例
### 達成方法に関する重要な情報

差分が、WCAG *2.0* から *2.1* への変更差分のみの場合は、一括して置換してもらえればよいです。

例
```diff
- <p>See <a href="http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html">Understanding Techniques for WCAG Success Criteria</a> for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.0 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.0.</p>
+ <p>See <a href="https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques">Understanding Techniques for WCAG Success Criteria</a> for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.</p>
```

```diff
+ <p>これらの達成方法 (参考) の使用法及び、それらが WCAG 2.1 達成基準 (規定) とどのように関係するかに関する重要な情報については、<a href="https://waic.jp/docs/WCAG21/Understanding/understanding-techniques.html">WCAG 達成基準の達成方法を理解する</a>を参照のこと。適用 (対象) セクションは、その達成方法の範囲について説明しており、特定の技術に関する達成方法があるからといって、WCAG 2.1 を満たすコンテンツを作成する際に、常にその技術が使用可能であるわけではない。</p>
```

### 適用 (対象)
#### 説明文パターン

例
```
This technique relates to:
これは、次の達成基準に関連する達成方法である:
```

例 G54
``` diff
This technique relates to <span><a>Success Criterion X.X.X: Xxxxxx</a></span> (YYYY) .
- この達成基準は、<span><a>達成基準 X.X.X: Xxxxxx</a></span> (YYYY) に関連する。
+ これは<span><a>達成基準 X.X.X: Xxxxxx</a></span>  (YYYY) に関する達成方法である。
```

#### "(Sufficient)"のバリエーション

例 G63
```
(Sufficient)
(十分な達成方法)
```

例 G57
```
(Sufficient using a more specific technique)
(より具体的な手法を用いる十分な達成方法)
```

例 G9
```
(Sufficient, together with <a>GXX: Xxxx xxx xxx</a>)
(十分、<a>GXX: XxxX xxx xxx</a>とともに)
```

例 G9
```
(Sufficient, together with <a>GXX: Xxxx xxx xxx</a> using a more specific technique)
(十分、より具体的な手法を使用した <a>GXX: XxxX xxx xxx</a>とともに)
```

例 G62
```
(Sufficient as a way to meet <a>GXX: Xxx xxx xxx</a>)
(<a>GXX: Xxx xxx xxx</a>の達成方法として十分)
```

例 G63
```
(Sufficient as a way to meet an unwritten technique)
(%%書かれていない達成方法を満たす慣習的な達成方法%%書かれていない達成方法を満たす手段として十分)
```

例 G127 G139 G141 G156 G162 G200 H2 等　
```
(Advisory)
(参考)
```

例 G136 G190 SCR38 SVR3 G209 等
```
This technique is not referenced from any Understanding document.
(この達成方法は、解説書から参照されていない。)
```
