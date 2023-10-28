// OBJETIVO 1: Quando clicar no botão do personagem da lista, marcar o botao como solecionado.
   //Passo 1: Pegar um botão no JS para verificar quando o usuário clicar em cima dele.
   //Passo 2: Adicionar classe "selecionado" no botão que o usuário clicou.
   //Passo 3: Verificar se já existe um botao selecionado, se sim, devemos remover a seleção dele.

//OBJETIVO 2: Quando clicar no botão do personagem mostrar as informações dopersonagem.
   //Passo 1: Pegar os personagens no JS pra poder  mostrar ou esconder ele.
   //Passo 2: Adicionar a classe "selecionado" no personagem que o usuário selecionou.
   //Passo 3: Verificar se já existe um personagem selecionado, se sim, devemos remover a seleção.

const botoes = document.querySelectorAll('.botao');
 
const personagens = document.querySelectorAll('.personagem');


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarbotao();

        botao.classList.add("selecionado");

        desselecionarpersonagem();

        personagens[indice].classList.add("selecionado");

    })
})

function desselecionarpersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarbotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

