/**
 *  @version 1.0
 * @author Filipe Bacof
 * @description Módulo da urna eletrônica.
 * jsdoc.org
*/

let seuVotoPara = document.querySelector('.seu-voto-para span');
let cargo = document.querySelector('.cargo span');
let descricao = document.querySelector('.informacoes-adicionais');
let aviso = document.querySelector('.divisao2');
let lateral = document.querySelector('.divisao1-right');
let numeros = document.querySelector('.digitos-piscantes');

let etapaAtual = 0;
let numero = '';

function comecarEtapa() {
    let etapa = etapas[etapaAtual];

    let numeroHTML = '';
    for (let i=0; i<etapa.numeros; i++) {
        if(i === 0) {
            numeroHTML +='<div class="numero pisca"></div>';
        } else {
        numeroHTML += '<div class="numero"></div>';
        }
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHTML;
}

function atualizaInterface() {

}

function clicou(n) {
    let elementoNumero = document.querySelector('.numero.pisca');
    if (elementoNumero !== null) {
        elementoNumero.innerHTML = n;
        numero = `${numero}${n}`;
    }
}

function branco() {
    console.log ('clicou em branco');
}

function corrige() {
    console.log ('clicou em corrige');
}

function confirma() {
    console.log ('clicou em confirma');
}

comecarEtapa()