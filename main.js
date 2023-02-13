var mascaraValor = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var mascaraAcao = ['c', '-', '+', '*', '/', '.'];


function verificaValor(tipo, valor){
    if(tipo === "acao" && valor == "c"){
            document.getElementById("tela").value = "0";
    } else if (tipo === "acao" && valor == "=" || valor == "Enter"){
        var resultado = eval(document.getElementById("tela").value);
        document.getElementById("tela").value = resultado

    } else {
        var valor_atual = document.getElementById("tela").value;
        if (valor_atual == "0"){
            document.getElementById("tela").value = valor
        } else {
            document.getElementById("tela").value += valor

        }
    }
}

document.addEventListener("keydown", (e) => {

    var foundAcao = mascaraAcao.find(element => element === e.key);
    var foundValor = mascaraValor.find(element => element === e.key);

    console.log(e.key);

    if(foundAcao === e.key || e.key === "Enter"){
        verificaValor("acao", e.key)
    } else if(foundValor === e.key){
        verificaValor("num", e.key)
    }

})
