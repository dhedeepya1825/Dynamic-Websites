let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let chatContainer = document.getElementById("chatContainer");
let userInput = document.getElementById("userInput");

function sendMsgToChatbot() {
    let userMsg = userInput.value;
    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-to-chatbot-container");
    chatContainer.appendChild(msgContainerEl);
    let spanEl = document.createElement("span");
    spanEl.classList.add("msg-to-chatbot");
    spanEl.textContent = userMsg;
    msgContainerEl.appendChild(spanEl);
    userInput.value = "";
    getMsgFromChatbot();
}

function getMsgFromChatbot() {
    let noOfChatBotMsgs=chatbotMsgList.length;
    let chatbotMsg=chatbotMsgList[Math.ceil(Math.random()*noOfChatBotMsgs)-1];
    let userMsg = userInput.value;
    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-from-chatbot-container");
    chatContainer.appendChild(msgContainerEl);
    let chatbotMsgEL = document.createElement("span");
    chatbotMsgEL.classList.add("msg-from-chatbot");
    chatbotMsgEL.textContent =chatbotMsg;
    msgContainerEl.appendChild(chatbotMsgEL);
   
}