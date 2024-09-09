import Data from '../assests/Data'

function UseCustomQues(Num) {
    let data = Data
    let arr = []
    while (arr.length < Num) {
        let k = Math.floor(Math.random() * data.length)
        arr.push(data[k])
        arr = [...new Set(arr)]
    }
    return arr
}

export default UseCustomQues