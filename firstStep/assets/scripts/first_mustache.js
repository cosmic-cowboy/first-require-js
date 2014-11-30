// defineメソッドで、モジュール(=ひとまとまりの機能)を定義します。
// 依存関係がない場合には、第１引数に実装を記述できます。
// 依存関係がある場合には、上記のrequireメソッドの例と同じく、第１引数と第２引数を指定します。
define(function() {
  var variables = {
    "name": {
      "first": "Michael",
      "last": "Jackson"
    },
    "age": "RIP",
    "company": "<b>GitHub</b>"
  };

  var falses = {
    false_1 : null,
    false_2 : undefined,
    false_3 : false,
    false_4 : 0,
    false_5 : NaN
  };

  return {
    variables : variables,
    falses    : falses
  };
});
