# Techniques for WCAG 2.1の作業の進め方（分割ワークフロー版）

## このワークフロー文書の目的

Techniques for WCAG 2.0とTechniques for WCAG 2.1の両方ともにある達成方法について、その数は300以上となります。

上記の2つの文書の両方ともにある達成方法について、[work-step.md](work-step.md)に記載されている作業を分割して、より早く作業を進めることを目的とした実験的なワークフローです。

## 具体的にどう進めるの？

[work-step.md](work-step.md)の作業のフローは概ね以下のようになっています。

1. 作業者が原文の2.0と2.1の差分をとって差分のない箇所を既存訳に置換する
2. 相対URLの調整を必要に応じて作業者が行う
3. 差分のある箇所については、差分の翻訳を行う
4. 作業者がPull Requestを出す
5. レビュワーがレビューする
6. 作業者がレビューコメントに対応する
7. 一連の作業が終わったらPull Requestをマージする

1.～7.に関して、これまで作業者が1人、レビュワーが1人でやってきましたが、
差分を取って置換する作業を担当する人と、翻訳を行い、レビューコメントに対応する調整作業を担当する人をわけます。
前者を置換作業者、後者を翻訳作業者と呼ぶとすると、

1. 置換作業者が原文の2.0と2.1の差分をとって差分のない箇所を既存訳に置換する
    - テンプレート箇所は2.1新規の達成方法だろうと、2.0既存の達成方法だろうと同じ
    - 本文は2.1新規はそもそも差分なし、2.0既存でも差分が出るかもしれない。
    - 訳注が存在すれば、訳注を付与する
2. 置換作業者が相対URLの調整を必要に応じて行う
3. 置換作業者がPull Requestを出す
4. レビュワーが置換作業を確認する
    - もし差分があれば、レビュワーは翻訳作業者をアサインし、翻訳作業者が、差分のある箇所について差分の翻訳を行う
    - 差分がなければ、5.に進む
5. レビュワーが翻訳をレビューする
6. 翻訳作業者がレビューコメントに対応する
7. 一連の作業が終わったらPull Requestをマージする

というフローになります。

- 置換作業者は、issueがアサインされたら作業開始、Pull Requestを出したら作業終了です。
- 翻訳作業者は、Pull Requestにアサインされたら作業開始、Pull Requestがマージされたら作業完了です。

## Q&A

### 1. 置換作業者が原文に差分のある翻訳文に出くわした場合は？

該当箇所を明示して、Pull Requestのコメントにdiffで示します。

<pre>
```diff
- 2.0の原文。
+ 2.1の原文。
```
</pre>

あわせて、2.0の既存訳を示すと、より良いかもしれません。


### 2. 翻訳作業者がPull Requestをローカルで作業するには？

リモート（GitHub）にはブランチはある状態ですが、ローカルにはブランチがない状態です。
置換作業者が作成したブランチ名が例えば`replace-work`とすると、コマンドラインの場合、

```
git checkout -b replace-work origin/replace-work
```

とすると、リモートブランチをローカルに持ってきてチェックアウトできます。pushするには、

```
git push origin replace-work
```

とすればよいです。


### 3. 他に質問があります

- [work-step.md](work-step.md)に質問への回答があるかもしれません。
- work-step.mdに質問への回答がない場合、Slackで尋ねてください。


## 共通する翻訳例
### 達成方法に関する重要な情報
差分が、WCAG 2.0 から 2.1 への変更差分のみの場合は、一括して置換してよい。

例
```diff
- <p>See <a href="http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html">Understanding Techniques for WCAG Success Criteria</a> for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.0 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.0.</p>
+ <p>See <a href="https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques">Understanding Techniques for WCAG Success Criteria</a> for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.</p>
```

```diff
+ <p>これらの達成方法 (参考) の使用法及び、それらが WCAG 2.1 達成基準 (規定) とどのように関係するかに関する重要な情報については、<a href="https://waic.jp/docs/UNDERSTANDING-WCAG20/understanding-techniques.html">WCAG 達成基準の達成方法を理解する</a>を参照のこと。適用 (対象) セクションは、その達成方法の範囲について説明しており、特定の技術に関する達成方法があるからといって、WCAG 2.1 を満たすコンテンツを作成する際に、常にその技術が使用可能であるわけではない。</p>
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
(書かれていない達成方法を満たす慣習的な達成方法)
```

例 G127 G139 G141 G156 G162 G200 H2 等　対訳未定
```
(Advisory)
```

例 G136 G190 SCR38 SVR3 G209 等　対訳未定
```
This technique is not referenced from any Understanding document.
```

### 参考リソース
2.1で削除されているものは、差分としての報告は不要です。
例
```diff
-<h2 id="G76-resources">Resources</h2>
-<div class="textbody"><p>No resources available for this technique.</p></div>
+
```


### 検証＞期待される結果の下の注釈
2.1で削除されているものは、差分としての報告は不要です。
例
```diff
- If this is a sufficient technique for a success criterion, failing this test procedure does not necessarily mean that the success criterion has not been satisfied in some other way, only that this technique has not been successfully implemented and can not be used to claim conformance.
+ 
```
