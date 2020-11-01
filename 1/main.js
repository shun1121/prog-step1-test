const users = require("./users.json")

// const duplicate = function (search, array) {//重複があればカウントを増やし、配列に入れる関数
//     let cnt = 0
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === search) {
//             cnt++
//         }
//     }
//     return cnt
// }

let prefecture = []  //県の配列
for (let i = 0; i < users.length; i++) {
    prefecture.push(users[i].pref)
}

let pref = []  //重複をのぞいた県の配列
for (let i = 0; i < users.length; i++) {
    if (pref.indexOf(prefecture[i]) === -1) {
        pref.push(prefecture[i])
    }
}
//console.log(pref)

//平均値を出したい
let res = []
for (let i = 0; i < pref.length; i++) {
    //const count = duplicate(pref[i], prefecture)
    let array = []
    let sum = 0  //配列の足し算したい
    //let sum1
    for (let j = 0; j < users.length; j++) {
        if (pref[i] === users[j].pref) {
            array.push(users[j].score)　//←スコアの値
            //console.log(arr1) //＜－arrayの中の要素数
        }
    }
    for (let k = 0; k < array.length; k++) {
        sum += array[k]
        sum1 = sum / array.length  //＜－カウントを使わんでよかった
    }
    //console.log(sum1) //＜－平均値
    //console.log(array)
    res.push({ "pref": pref[i], "average": sum1 }) //オブジェクトをそのままぶちこむ
    
}
res.sort((a, b) => b.average - a.average)
for (let element of res) {
    console.log(`${element.pref} : ${element.average}`)
}







