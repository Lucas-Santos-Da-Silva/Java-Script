/**
 * App Flex
 * @author Lucas Santos da Silva
 */

let etanol, gasolina


function calcflex(etanol, gasolina){
    etanol = Number(frmflex.txtEtanol.value.replace(",","."))
    gasolina = Number(frmflex.txtGasolina.value.replace(",","."))
    
    if(etanol == 0 || gasolina ==0){
        alert("Coloque algum valor nos campos vazios!!")
        document.getElementById("status").src="../img/flex.png"
        return
    }
    if (etanol < 0.7 * gasolina){
        console.log("Etanol é melhor")
        document.getElementById('status').src="../img/etanol.png"
    }
    else{
        console.log("Gasolina é melhor")
        document.getElementById('status').src="../img/gasolina.png"
    }
}

function limpar(){
    document.getElementById('status').src="./img/flex.png"
}