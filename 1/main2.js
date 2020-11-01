const users = require("./users.json");

for (let i = 0; i < users.length; i++) {
    const user = users[i]
    console.log(user.pref)
}
//console.log(users)
// const result = []
// for (let i = 0; i < users.length; i++) {
//     //配列にオブジェクト{県：値}を入れてみる
//     const user = users[i]
//     const pref = user.pref
//     //console.log(pref)//県が全部
//     let indexNum = result.findIndex((element) => element.pref === pref)//reultに県の重なりがあるか数字で返す
//     console.log(indexNum)
//     if (indexNum < 0) {
//         result.push({
//             prefecture: pref,
//             count: 1,
//             average: user.score
//         })
//     } else {
//         result[index].count++
//     }
// }

// for (element of result) {
//     console.log(`${element.firstName}:${element.count}:${element.average}`)
// }

