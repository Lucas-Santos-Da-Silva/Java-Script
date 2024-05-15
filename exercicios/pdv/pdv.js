/**
 * Sistema PDV
 * @author Lucas Santos da Silva
 */

let valor, desconto,valorDesconto, valorDesconto1,valorPago,Resultado


function calcular(){

    valor = Number(frmPDV.txtTotal.value)
    desconto = Number(frmPDV.txtPorcentagem.value)

    valorDesconto = valor*(desconto/100)
    valorDesconto1 = valor-valorDesconto

    frmPDV.txtDesconto.value = valorDesconto
    frmPDV.txtTotalDesconto.value = valorDesconto1
}

function troco(){
    

    valorPago = Number(frmPDV.txtValorPago.value)

    Resultado = valorPago - valorDesconto1 

    frmPDV.txtTroco.value = Resultado
}

function limpar(){

}
