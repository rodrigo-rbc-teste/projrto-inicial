alert('Boas vindas ao jogo do numero Secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual a n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
    //se chute for igual a secreto
    if (chute == numeroSecreto) {
        break;
    } else {
    if (chute > numeroSecreto) {
        alert(`O numero secreto é menoror que ${chute}`);
    } else { 
        alert(`o numero secreto é maior que ${chute}`);
    }
    // tentativas = tentativas + 1;
    tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';