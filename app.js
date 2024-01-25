alert("Bem vindo ao jogo do número secreto!") /* Posso usar tanto áspas simples como duplas para inserir texto no alert, deve-se manter uma padronização, se começar com áspas simples, use ela em o projeto */
let numeroMaximo = 30;
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
let chute; /* A função prompt é utilizada para solicitar entrada do usuário por meio de uma caixa de diálogo.*/
let tentativa = 1

while (chute != numeroSecreto) {
   chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

   if (numeroSecreto == chute) {
      break;
   }  else {
        if (chute > numeroSecreto) {
           alert(`O número secreto é menor que ${chute} `);
         }  else {
            alert(`O número secreto é maior que ${chute}`);
         }
         tentativa++;
      }
}
   
let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa"; /* Esse formato de código é chamado de if ternário */
alert (`Isso ai! Você descobriu o número secreto! ${numeroSecreto} utilizando ${tentativa} ${palavraTentativa} !`);