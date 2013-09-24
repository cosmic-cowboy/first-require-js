// defineメソッドで、モジュール(=ひとまとまりの機能)を定義します。
// 依存関係がない場合には、第１引数に実装を記述できます。
// 依存関係がある場合には、上記のrequireメソッドの例と同じく、第１引数と第２引数を指定します。
define(function() {

  var name = 'content1';
  var getMessage = function() {
    return 'this is : ' + name;
  };

  // require.js用に、オブジェクト形式でモジュールを返却します。
  return {
    message: getMessage
  };
});