const data = require("./kana.json");

function charToArray(ch) {
  // 1文字chを12x10の2次元配列にして返す関数
  // ※座標が存在している箇所にはアスタリスク*、ない位置にはスペースを格納してください
  //const kana = data.str ＜－　これを最終的に作る

  const kana = data[ch]
  // console.log(ch)
  // console.log("=========================")
  // console.log(kana) 　　//ここには　”あ”：[{},{}...]　のバリュー部分([{},{}...])が入る

  //二次元配列をまず作る
  let arr = []
  for (let i = 0; i < 10; i++) {　// y座標
    let arr2 = [] //空文字とアスタリスクが入る配列
    for (let j = 0; j < 12; j++) { // x座標
      arr2.push(" ")
    }
    arr.push(arr2)
  }
  //下のfindメソッドにあるwordは、キーである文字も含まれている －＞つまりバリュー(配列)　　11行目をみて
  for (let i = 0; i < 10; i++) {　// y座標
    for (let j = 0; j < 12; j++) { // x座標
      //kana.find((word) => word.x === j && word.y === i)だけを条件に入れていたらif(配列){}という意味不明な条件になる
      //これでもできるー＞if (kana.filter((word) => word.x === j && word.y === i).length>0) {//新しい配列の長さがあれば
       if (kana.find((word) => word.x === j && word.y === i) !== undefined) {//条件に当てはまるものがundefinedじゃなかったら=> x=j,y=iが見つかれば
        //配列（kanaのバリュー）に jと当てはまるx、iと当てはまるyがみつかれば
        arr[i][j] = "*"　//文字列を入れる　　プッシュじゃない
      }
    }
  }
  return arr
}

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    const result = arr[i].join('')
    console.log(result)
  }

}

const str = process.argv[2];
for (let i = 0; i < str.length; i++) {
  const arr = charToArray(str[i]);
  printArray(arr);
}
