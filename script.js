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
let votoBranco = false;

function comecarEtapa() {
    let etapa = etapas[etapaAtual];
    let numeroHTML = '';
    numero = '';
    votoBranco = false;
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
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item) => {
        if (item.numero === numero) {
            return true;
        } else {
            return false;
        }
    });
    if (candidato.length > 0) {
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`;
        let fotosHTML = '';
        for(let i in candidato.fotos) {
            fotosHTML += `<div class="foto-candidato"><img src="${candidato.fotos[i].url}" alt="Candidato"/>${candidato.fotos[i].legenda}</div>`
        }
        lateral.innerHTML = fotosHTML;
    } else {
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `<div class="aviso--grande pisca">VOTO NULO!</div>`
    }
}

function clicou(n) {
    let elementoNumero = document.querySelector('.numero.pisca');
    if (elementoNumero !== null) {
        elementoNumero.innerHTML = n;
        numero = `${numero}${n}`;
        elementoNumero.classList.remove('pisca');
        if (elementoNumero.nextElementSibling !== null) {
            elementoNumero.nextElementSibling.classList.add('pisca');
        } else {
            atualizaInterface();
        }
    }
}

function branco() {
    if(numero === '') {
        votoBranco === true;
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        numeros.innerHTML = '';
        descricao.innerHTML = `<div class="aviso--grande pisca">VOTO EM BRANCO</div>`

    }
}

function corrige() {
    comecarEtapa();
}

function confirma() {
    console.log ('clicou em confirma');
}

comecarEtapa()