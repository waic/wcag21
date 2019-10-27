# WCAG 2.1 (Techniques)

[ウェブアクセシビリティ基盤委員会 (WAIC) 翻訳ワーキンググループ (WG4)](http://waic.jp/committee/wg4/) が管理する、WCAG 2.1 (Techniques) のレポジトリです。

RawGit ライクなサービスにより閲覧可能です。例えば raw.githack.com であれば

- [https://raw.githack.com/waic/wcag21/techniques-20191001/techniques/](https://raw.githack.com/waic/wcag21/techniques-20191001/techniques/)

から閲覧可能です。WCAG 2.1 の策定は完了していますが、関連文書である Understanding WCAG 2.1 及び Techniques for WCAG 2.1 は、W3C AGWG によって策定中の文書であることに注意してください。

W3C のソースファイルのハッシュ：[0a32c3](https://github.com/w3c/wcag/tree/0a32c3b5411db477945ce4fcb0632af294bef3f9/techniques)

## Pull Request 等について

Pull Request は、ブランチ `techniques-20191001` にお願いします。また、issue を立ててもらっても構いません。どちらの方法でも歓迎します。
メールで込み入った質問等をしたい場合は、[WAIC のお問い合わせページ](http://waic.jp/contact/)にお願いします。

作業の進め方については[work-step.md](work-step.md)を参照ください。

### ブランチの運用（参考情報）

基本、GitHub Flow での運用を考えています。以下のようなフローを想定しています。

- `techniques-20191001` ブランチがリリース可能な最新の状態となるようにする
- 作業時にはブランチを切って作業を開始する　ブランチの名前は作業の性質に応じたものとする
- 作業中は適宜ブランチを push する
- 作業が終わったところでプルリクエストを出す
- 作業内容に問題ないことが確認出来たら `techniques-20191001` にマージする
