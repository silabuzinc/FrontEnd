const d = {'Marcelo': 1.80, 'José':1.50, 'Oscar':1.70, 'Jorge': 1.40};

var name = prompt("Ingrese un nombre");

for (let i in d){
  if(d[i] == 1.8){
    console.log(i);
  }
}