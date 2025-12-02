const formulario = document.getElementById("chat-form");
const campoMensagem = document.getElementById("chat-input");
const areaMensagens = document.getElementById("area-mensagens"); // onde as mensagens aparecem

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    const mensagem = campoMensagem.value.trim();
    if (mensagem === "") return;

    // Adiciona mensagem do usuário no chat
    adicionarMensagem(mensagem, "usuario");

    //back-end
    fetch("https://chatkumi-backend.onrender.com/api/chatbot/mensagem", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ texto: mensagem }) 
})
.then(res => res.text())  
.then(data => {
    adicionarMensagem(data, "kumi");
})
.catch(err => {
    adicionarMensagem("Desculpe, houve um erro ao buscar a resposta 😕", "kumi");
    console.error(err);
});

campoMensagem.value = "";


function adicionarMensagem(texto, tipo) {
    const div = document.createElement("div");
    div.classList.add("mensagem-chat", tipo);
    div.textContent = texto;

    areaMensagens.appendChild(div);

    // Rolagem para a última mensagem
    areaMensagens.scrollTop = areaMensagens.scrollHeight;
}
