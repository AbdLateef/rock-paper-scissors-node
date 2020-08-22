
const writeEvent = (text) => {
  // <ul> element
  const parent = document.querySelector('#events');

  // <li> element
  const el = document.createElement('li');
  el.innerHTML = text;

  parent.appendChild(el);
};

const onFormSubmitted = (e) => {
  e.preventDefault();

  const input = document.querySelector('#chat');
  const text = input.value;
  input.value = '';

  sock.emit('message', text);
};

const addButtonListeners = () => {
  ['rock', 'paper', 'scissors'].forEach((id) => {
    console.log(id);
    const button = document.getElementById(id);
    button.addEventListener('click', () => {
      console.log(id)
      sock.emit('turn', id);
    });
  });
};

writeEvent('Rock Paper Scissors');

const sock = io();
sock.on('message', writeEvent);

// document
//   .querySelector('#chat-form')
//   .addEventListener('submit', onFormSubmitted);

addButtonListeners();
