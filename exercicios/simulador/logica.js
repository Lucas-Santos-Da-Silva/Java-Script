/**
 * JS - Simulador de operadores lógico
 * @author Lucas Santos da Silva
 */
//valor recebido
// 1 acender lampada
// 2 apagar lampada
// 3 quebrar lampada
let valor //valor recebido
//estado da lampada
let quebrada = false //estado de lampada

    function simular(valor){
    if (valor === 3){ 
        let beep = new Audio()
        beep.src = "./sound/glassbreaking.wav"
        beep.play()
        document.getElementById('lamp').src ="./img/broken.jpg"
        quebrada = true
    }
}
