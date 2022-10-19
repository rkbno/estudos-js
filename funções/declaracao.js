
//PRIMEIRA MANEIRA

function dizerOi(nome) {
    console.log("Olá" + nome);
}

dizerOi("Jon");
dizerOi("Robb")


//SEGUNDA MENEIRA

function dizerOi(nome) {
    console.log("Olá" + nome);
}

var dizerOla = function (nome) {
    console.log("Olá" + nome);
};

dizerOla("Bran");


//TERCEIRA MANEIRA

var dizerTchau = new function("nome", "console.log('Tchau' + nome);");

dizerTchau("Rickon")
