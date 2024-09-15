# SlackBackupAsHtml

## Output slack search results as HTML
## Slackの検索結果をHTMLファイルに出力できます。
## Slackメッセージをバックアップする目的で作成しました。
###### SlackSearchToCSVから改名し、CSVには出力できなくなりました。HTMLへの出力しかできませんのでお間違いなく。
###### どうしてもCSVにしたい場合は、出力されたHTMLからどうにか作成してください。(ご相談にはのります)
---
## 使い方
1. 当拡張機能をインストールしたあとはWEBブラウザの再起動をお願いします。
1. WEBブラウザでSlackにログインします。
1. 出力したいチャンネルを開きます。
1. 検索フィルターを表示して検索を行います。
    * 例えば1ヵ月分(今月分)などを検索します。
1. 検索結果の先頭が表示されている状態のまま、
1. 当、拡張機能のアイコンをクリックします。
1. RUNボタンをクリックしてしばらく待つと、
1. Resultに結果(HTML)が表示されます。
1. SaveボタンをクリックするとHTMLとしてダウンロードできます。

---
## 注意事項
* 検索結果の最初のメッセージが表示されている状態で実行してください。
    * そうしないと取りこぼしが発生します。
    * 「↑検索フィルタトップへ戻る」が表示されていない事を確認するといいと思います。
* ページネーションが表示されていても、次ページへの遷移はしません。
    * 「表示:すべての結果」で実行するといいかもしれませんが、データ量に気を付けて（配慮して）ください。
* 出力したHTMLを見るときはSlackにログインしている方がいいと思います。
* 出力したHTML中のファイルや画像へのリンクがいつまで有効なのかは未検証です。
* あえて低速です。
* Slackに対応されて使えなくなるかもしれません。
* RUNボタンをクリックしても何も表示されに場合は以下を確認してください。
    * Slackの検索結果が表示されたページであるか。⇒Slackのフィルターを使用して検索結果を表示する。
    * 拡張機能のインストール直後ではないか。⇒WEBブラウザの再起動またはページのリロードが必要。