var l = [1,3,5,2,7,5,5,8,4,8,4,8,4];
var cont = 0;
for (var i = 0; i < l.length; i++){
  if (l[i] == 4){
    cont += 1;
  }
}

console.log(cont);