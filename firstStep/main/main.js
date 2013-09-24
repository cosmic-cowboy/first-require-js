// requireメソッドを呼ぶ前に、require.configメソッドでオプションを指定する
// baseUrl：requireで読み込むベースのパスをassetsにする。
// paths：ベース以外に配置されているjsファイルの設定を行う
// ここではjquery, mustache, text.js(require.jsのplugin)を設定している
require.config({
  baseUrl:"assets",
  paths:  {
    "jquery" : "../lib/jquery-1.10.2.min",
    "mustache" : "../lib/mustache",
    "text" : "../lib/text"
  }
});

// require.jsを用いたjavascriptファイルは、requireというメソッドの引数に、依存先と処理を記述します。
// 第1引数は、main.jsが依存するjavascriptファイルを配列形式で指定します。
// 第2引数は、このファイルの具体的な実装内容を記載します。
require([
  'scripts/content1',
  'scripts/content2',
  'text!../assets/mustache/blankslate.mustache',
  'mustache',
  'jquery'
  ], function(
  content1,
  content2,
  blankslateMustache,
  Mustache,
  $){
    $('#result').append(Mustache.render(blankslateMustache, content1));
    $('#result').append(Mustache.render(blankslateMustache, content2));
  }
);