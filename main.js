function numberDoubler(num) {
    while(num < 100){
        num *= 2;
    }
    return num
}

function stringRepeater(str) {
    const str2 = str
    while(str.length < 10){
        str = str.concat(str2)
    }
    return str
}

function makeDivisible(x, y) {
    while(x % y !== 0){
        x += 1
    }
    return x
}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};