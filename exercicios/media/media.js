/**
 * App Flex
 * @author Lucas Santos da Silva
 */

let rs

let num1, num2, num3, num4

function calculo() {
  num1 = Number(frmFlex.txtnota1.value)
  num2 = Number(frmFlex.txtnota2.value)
  num3 = Number(frmFlex.txtnota3.value)
  num4 = Number(frmFlex.txtnota4.value)
    media = (num1 + num2 + num3 + num4) / 4
    if (media >= 7) {
        frmFlex.txtResultado.value = "Aprovado"
        frmFlex.txtMedia.value = media
        let audio = new Audio('./assets/aprovado.mp3');
        audio.play();
      } else {
      if (media >= 4 && media < 7) {
        frmFlex.txtResultado.value = "Recuperação"
        frmFlex.txtMedia.value = media
        let audio = new Audio('./assets/recuperacao.mp3');
        audio.play();
      } else{
        frmFlex.txtResultado.value = "Reprovado"
        frmFlex.txtMedia.value = media
        let audio = new Audio('./assets/reprovado.mp3');
        audio.play();
      }
    }
}