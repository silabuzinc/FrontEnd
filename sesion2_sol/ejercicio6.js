var l = [15,20,50,80,40,60]
var num = prompt("Ingrese el número a eliminar")
// Se hace el parseInt porque el prompt nos retorna un string
const i = l.indexOf(parseInt(num));
l.splice(i, 1);
console.log(l);