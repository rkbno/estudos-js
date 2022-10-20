var variavelGlobal = "";

(function(){
    var escopoLocal,
        foo;

    escopoLocal = "foo";
    console.log(escopoLocal);

    var escopoLocal; //sempre deixar em cima

    var obj = {foo: "bar"};


    var obj = {
        foo:"bar",
        bar:"foo",
        foobar: "oi"
    };
})();