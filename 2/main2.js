const data = require("./kana.json");

//function charToArray(ch) {
// 1文字chを12x10の2次元配列にして返す関数
// ※座標が存在している箇所にはアスタリスク*、ない位置にはスペースを格納してください
//const kana = data.str ＜－　これを最終的に作る
const kana = data.あ
console.log(kana)
for (let i = 0; i < kana.length; i++) {
//   for (let j = 0; j < )
  console.log(kana[i].x)
}

//二次元配列をまず作る
let arr = []
for (let i = 0; i < 10; i++) {　// y座標
  let arr2 = [] //空文字とアスタリスクが入る配列
  for (let j = 0; j < 12; j++) { // x座標
    if (kana[i].x === j && kana[i].y === i) {
      //arr2.push("*")
      arr2[kana[i].y][kana[i].x] = "*"
    } else {
      arr2.push("")
    }
    // arr2.push("")
  }
  arr.push(arr2)
}
  console.log(arr) //二次元配列ができた

  // for (let i = 0; i < keys.length; i++) {
  //   if (keys[i] === str) {
      
  //   }
  // }  


//}

// function printArray(arr) {
//   // 二次元配列をconsole.logする関数
// }

// const str = process.argv[2];
// for (let i = 0; i < str.length; i++) {
//   const arr = charToArray(str[i]);
//   printArray(arr);
// }
