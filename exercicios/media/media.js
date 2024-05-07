/**
 * App Flex
 * @author Lucas Santos da Silva
 */

let nota1, nota2, nota3, nota4,rs


function media(){
    nota1 = Number(frmflex.txtPrimeiraNota.value)
    nota2 = Number(frmflex.txtSegundaNota.value)
    nota3 = Number(frmflex.txtTerceiraNota.value)
    nota4 = Number(frmflex.txtQuartaNota.value)
    alert(nota1)
}

function limpar(){
    document.getElementById('status').src="./img/flex.png"
}