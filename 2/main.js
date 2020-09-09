const data = require("./kana.json");

function charToArray(ch) {
  // 1文字chを12x10の2次元配列にして返す関数
  // ※座標が存在している箇所にはアスタリスク*、ない位置にはスペースを格納してください
}
function printArray(arr) {
  // 二次元配列をconsole.logする関数
}

const str = process.argv[2];
for (let i = 0; i < str.length; i++) {
  const arr = charToArray(str[i]);
  printArray(arr);
}
