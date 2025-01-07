

let sendButton = document.querySelector('.submit');
let winter = document.querySelector('.winter');


sendButton.onclick = () => {
    winter.classList.add('call');

    setTimeout(() => {
        winter.classList.remove('call');
    }, 2000);
}
