const chatInput = document.querySelector("#chat-input");
const chatMessages = document.querySelector("#chat-mensagens");
const chatForm = document.querySelector("#chat-form");


function adicionarMensagemChat(mensagem, remetente) {
    const ElementoDaMensagem = document.createElement("div")
    ElementoDaMensagem.classList.add("message", `${remetente}-message`);
    ElementoDaMensagem.innerHTML = mensagem;
    chatMessages.appendChild(ElementoDaMensagem);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function limparChatInput() {
    chatInput.value = "";
}

// ==========================================================
// Ativadores
// ==========================================================

chatInput.addEventListener("keydown", (e) => {
    const userInput = e.target.value.trim();
    if (e.key === "Enter" && userInput) {
        e.preventDefault();
        inputVoz = false;
        adicionarMensagemChat(userInput, "user");
        limparChatInput();

    } else if (e.key === "Enter" && !userInput) {
        e.preventDefault();
    }
});

chatForm.addEventListener("submit", (e) => {
    const userInput = chatInput.value.trim();
    if (userInput) {
        e.preventDefault();
        inputVoz = false;
        adicionarMensagemChat(userInput, "user");
        limparChatInput();
  
    } else {
        e.preventDefault();
    }
});