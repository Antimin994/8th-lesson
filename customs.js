var str1 = 'aaa bbb ccc';
console.log(str1);
console.log(str1.slice(4, 7));
console.log(str1.substr(4, 3));
console.log(str1.substring(4, 7));


var myText = 'я учу javascript!';
var arrText = myText.split(' ');
var firstText = arrText[0].toUpperCase();
var lastText = myText.slice(1);
var newStr = firstText.concat(lastText);
console.log(firstText);
console.log(lastText);
console.log(newStr);



var beforeStr = 'var_test_text';
var afterStr = beforeStr.replace(/_([a-z])/gi, ($0,$1) => $1.toUpperCase());
console.log(afterStr);


var num = Math.random() * 50;
console.log(num);
