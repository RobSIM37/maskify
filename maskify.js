const maskify=(str,show)=>str.length>show?"#".repeat(str.length-show) + str.slice(-show):str;

let currentShow = 4;
console.log(maskify('Hello World!', currentShow));
console.log(maskify('3133886596', currentShow));
console.log(maskify('Robert C. Lewis', currentShow));
console.log(maskify('112233445566778', currentShow));
console.log(maskify('12', currentShow));
console.log(maskify('', currentShow));