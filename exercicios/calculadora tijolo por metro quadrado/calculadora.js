/**
 * Calcular tijolos por metro quadrado
 * @author Lucas Santos da Silva
 */

let metro_quadrado, rs, rs2;
altura = 0.115;
comprimento = 0.24;
um_metro = 1;

function calcular(){

    metro_quadrado = Number(frmFlex.input_metro_quadrado.value);

    
    rs2 = um_metro/altura/comprimento;
    rs = metro_quadrado/altura/comprimento;
    
    frmFlex.input_resultado1.value = rs2.toFixed(1);
    frmFlex.input_resultado2.value = rs.toFixed(1);
}
