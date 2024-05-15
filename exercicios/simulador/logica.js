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
//chaves
let sw1 = false
let sw2 = false

let path = window.location.pathname //obter a localização (Caminho da página)
alert(path)

    function simular(valor){
        if (valor == 1 && sw1 == false){
            document.getElementById('sw1').src ="./img/swon.png"
            sw1 = true
        }
        else if (valor == 1 && sw1 == true){
            document.getElementById('sw1').src ="./img/swoff.png"
            sw1 = false
        }
        else if (valor == 2 && sw2 == false){
            document.getElementById('sw2').src ="./img/swon.png"
            sw2 = true
        }
        else if (valor == 2 && sw2 == true ){
            document.getElementById('sw2').src ="./img/swoff.png"
            sw2 = false
        }
        if (quebrada === false && path ==="./exercicios/simulador/and.html"){
        if (sw1 == true && sw2 == true){
            document.getElementById('lamp').src ="./img/on.jpg" 
        }
        else{
            document.getElementById('lamp').src ="./img/off.jpg" 
        }
    }
        
    if (valor === 3){ 
        let beep = new Audio()
        beep.src = "./sound/glassbreaking.wav"
        beep.play()
        document.getElementById('lamp').src ="./img/broken.jpg"
        quebrada = true
    }
    // OR
    if (quebrada === false && path ==="/exercicios/simulador/or.html"){
        
            if (sw1 === true || sw2 === true){
                document.getElementById('lamp').src ="./img/on.jpg" 
            }
            else{
                document.getElementById('lamp').src ="./img/off.jpg" 
            }

    }
    // NOT
    if (quebrada === false && path ==="/exercicios/simulador/not.html"){
        if (!sw1 === true){
            document.getElementById('lamp').src ="./img/on.jpg" 
        }
        else{
            document.getElementById('lamp').src ="./img/off.jpg" 
        }
        
    }
    }
