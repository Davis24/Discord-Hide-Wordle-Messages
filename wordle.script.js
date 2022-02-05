function hideWordle(){
    const chatMessage = document.querySelectorAll('li[id^="chat-message"]'); // Find all chat messages
    chatMessage.forEach(chatMsg => {
		//Find all messages that contain Wordle. NOTE: this will only effect the copy-paste Worlde, if you wish to exclude ALL MESSAGE about Worlde you will need to modify this line to be case insensitive. Please reference: https://bobbyhadz.com/blog/javascript-includes-case-insensitive about making something case insensitive. 
        if(chatMsg.textContent.includes('Wordle')){ 
                chatMsg.style.display = "none"; //Sets the message to not display.
        }
    });
};
setInterval(hideWordle, 500); // Repeat every half second. You can modify this if you wish.
