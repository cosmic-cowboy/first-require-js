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

  var stooges = [
    { "name": "Moe" },
    { "name": "Larry" },
    { "name": "Curly" }
  ];

  var emptyArray = [];

  var musketeers = ["Athos", "Aramis", "Porthos", "D'Artagnan"];

  var beatles = [
    { "firstName": "John", "lastName": "Lennon" },
    { "firstName": "Paul", "lastName": "McCartney" },
    { "firstName": "George", "lastName": "Harrison" },
    { "firstName": "Ringo", "lastName": "Starr" }
  ];
  var name = function () {
      return this.firstName + " " + this.lastName;
  };

  var functions = {
    "name": "Tater",
    "bold": function () {
      return function (text, render) {
        return "<b>" + render(text) + "</b>";
      }
    }
  };

  return {
    variables : variables,
    falses    : falses,
    stooges : stooges,
    emptyArray : emptyArray,
    musketeers : musketeers,
    beatles : beatles,
    name : name,
    functions : functions
  };


});
