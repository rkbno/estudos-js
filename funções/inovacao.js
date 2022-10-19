function dizerOi(nome) {
    console.log("Oi, " + nome);
}

dizerOi("Arya");

//OUTRA MANEIRA, ATRAVEZ DO METODO CALL

function dizerOi(nome) {
    console.log("Oi, " + nome);
   
}

dizerOi.caLL({}, "Arya");

// TERCEIRA MANEIRA

function dizerOi(nome) {
    console.log("Oi, " + nome);
   
}

dizerOi.caLL({}, "Arya");

dizerOi.apply{}, ["Arya"];