if(document.forms?.chatForm) {
  const wsURL = 'wss://echo.websocket.org'
  const chatSocket = new WebSocket(wsURL)
  const chat = document.querySelector('#chat')
  const leftChatBtn = document.querySelector('#leftChat')

  chatSocket.onopen = function(e) {
    chat.innerHTML += `<p class="text-3xl text-green-300">Chat is started</p>`
  }
  chatSocket.onclose = function(e) {
    chat.innerHTML += `<p class="text-3xl text-red-300">Chat is closed</p>`
  }
  chatSocket.onmessage = function(e) {
    chat.innerHTML += `<p class="text-xl">${e.data}</p>`
  }
  chatSocket.onerror = function(e) {
    chat.innerHTML += `<p class="text-xl text-red-900">${e.data}</p>`
  }

  leftChatBtn.addEventListener('click', (e) => {
    e.preventDefault()
    chatSocket.close()
  })

  document.forms.chatForm.addEventListener('submit', function(e) {
    e.preventDefault()

    chatSocket.send(`${window.navigator.appCodeName}: ${this.elements.message.value}`)
    this.reset()
  })
}
