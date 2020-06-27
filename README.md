# WCAG 2.1

[ウェブアクセシビリティ基盤委員会 (WAIC) 翻訳ワーキンググループ (WG4)](http://waic.jp/committee/wg4/) が管理する、WCAG 2.1 とその関連文書のレポジトリです。

GitHub Pages により

- [WCAG 2.1](https://waic.github.io/wcag21/guidelines/)
- [WCAG 2.1 解説書](https://waic.github.io/wcag21/understanding/)

が閲覧可能です。WCAG 2.1 の策定は完了していますが、関連文書である Understanding WCAG 2.1 及び Techniques for WCAG 2.1 は、W3C AGWG によって随時更新されている文書であることに注意してください。

WCAG 2.1 解説書及び Techniques for WCAG 2.1 の作業ブランチはそれぞれ次のとおりです。

- WCAG 2.1 解説書: `master`
- Techniques for WCAG 2.1: [techniques-20191001](https://github.com/waic/wcag21/tree/techniques-20191001)

なお、WCAG 2.0 に関連する翻訳文書のレポジトリは、[waic/wcag20](https://github.com/waic/wcag20/) になります。

## Pull Request 等について

WCAG 2.1 と WCAG 2.1 解説書の Pull Request は、ブランチ `master` にお願いします。また、issue を立ててもらっても構いません。どちらの方法でも歓迎します。
`master` に push されれば、GitHub Pages によりに出力されるようになっています。
メールで込み入った質問等をしたい場合は、[WAIC のお問い合わせページ](http://waic.jp/contact/)にお願いします。

### ブランチの運用（参考情報）

基本、GitHub Flow での運用を考えています。以下のようなフローを想定しています。

- `master` ブランチがリリース可能な最新の状態となるようにする (GitHub Pages でも `master` の内容が見えるようにする)
- 作業時にはブランチを切って作業を開始する　ブランチの名前は作業の性質に応じたものとする
- 作業中は適宜ブランチを push する
- 作業が終わったところでプルリクエストを出す
- 作業内容に問題ないことが確認出来たら `master` にマージする

# WCAG 2.1 解説書 2019 年 3 月 6 日の情報について

W3C のソースファイルのハッシュは [dfad86](https://github.com/w3c/wcag/tree/dfad867083e7137d27e472e3b85aaac8cd2c2c77/understanding) です。
