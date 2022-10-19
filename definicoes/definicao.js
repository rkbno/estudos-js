// objetos sao viariaveis que contem variaveis dentro dela


var obj = { 
    nome: "Jon", 
    sobrenome: "Snow", 
    idade: 16, 
    apresentar: apresentar
        
    };
 
function apresentar(){
console.log("Olá, eu sou " + this.nome + ' ' + this.sobrenome + '.');
}
console.log(obj.sobrenome);

obj.apresentar();