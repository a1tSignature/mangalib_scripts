function highlightRepliesToUser() {
    let username =  prompt('Введи свой ник:', 'Мировой Дух Асуры');

    setInterval(function() {
        discoverAllMentions(username);
    }, 500);
}

function discoverAllMentions(username) {
    let messages = document.querySelectorAll('.chat-item__message');

    for(let i = 0; i < 30; i++) {
        let messageText = messages.item(i).innerHTML;

        if (messageText.includes('@' + username)) {
            messages.item(i).parentElement.style.backgroundColor = 'yellow';
        }
    }
}


highlightRepliesToUser();