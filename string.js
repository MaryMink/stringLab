
var string = prompt("Введіть строку:", '');
var letter = prompt("Введіть букву:", '');
function charCounter(str){
	alert(string.split(letter).length - 1);
}
charCounter(string);



// function charCount(text){
//     x = string.replace(/ /g,  "").length;
//     alert(x);
// }
// charCount(string)
// console.log(x)
