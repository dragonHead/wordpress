# wordpress セキリティ対策

## パスワード

- 半角英数字、記号を使用した複雑な設定を行う。

## バージョンアップ

- 定期的に wordpress core、プラグインをの更新を行う。
- 更新頻度の低いプラグインは使わないようにする。

## ID を守る

- 投稿者アーカイブの表示を非表示にする。
- 二段階認証を設定する。

## ログイン URL

- SiteGuard WP Plugin などを使用する。

## 管理画面へのアクセス制御

- BASIC 認証
- IP アドレス制限

## ログイン制御

- SiteGuard WP Plugin などを使用する。
- CAPTCHA Plugin などを使用する。
- 二段階認証を設定する。
- ログイン履歴を定期的に確認する。

## バージョン番号非表示

- All In One WP Security & Firewall Plugin を使用する。

## 設定ファイルを守る

- wp-config.php のパーミッション 600
- .htaccess で拒否設定する。

## 常時 SSL 化

## WAF

### さくらインターネット WAF(参考)

[WAF の設定](https://help.sakura.ad.jp/206206661/?_ga=2.85899801.1216583656.1588554205-2105232391.1588554205)

## ファイル無効化(xmlrpc.php,admin-ajax.php,wp-trackback.php,wp-comments-post.php)

- ファイル自体を削除
- プラグインによる無効化。

## トラックバックの無効化(wp-trackback.php)

- 「設定」-「ディスカッション」-「新しい記事に対し他のブログから通知を受け付ける」のチェックを外す。

## その他

- DB テーブル接頭辞の変更
- 利用していないテンプレート、プラグインの無効化

## セキュリティ対策プラグイン

- [SiteGuard WP Plugin](https://www.jp-secure.com/siteguard_wp_plugin/)
- All in one WP Security & Firewall
- Wordfence Security

## サイトヘルスチェック

### 脆弱性診断

WPScan

[WPSec](https://wpsec.com/)

## バックアップ

- UpdraftPlus プラグイン
- サーバー自体でのバックアップ

## 情報収集

- [mettup](https://www.meetup.com/ja-JP/pro/wordpress)
- [wordcamp](https://japan.wordcamp.org/)
- [zoomup](https://wpzoomup.com/)
- [twitter](https://twitter.com/jawordpressorg)
- [内閣サイバー](https://twitter.com/nisc_forecast)
- [徳丸先生](https://twitter.com/ockeghem)
