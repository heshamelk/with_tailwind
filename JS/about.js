

let slide = document.querySelector('.slide');
let slideImages = Array.from(document.querySelectorAll('.slide img'));
let mainContainer = document.querySelector('.container');

slideImages.forEach((img) => {
    img.addEventListener('click', () => {
        slide.classList.add('stop');
        let overLay = document.createElement('div');
        overLay.className = 'over';
        img.classList.add('large');
        overLay.appendChild(img);
        let close = document.createElement('span');
        close.appendChild(document.createTextNode('x'));
        close.className = 'close';
        overLay.appendChild(close);
        mainContainer.appendChild(overLay);

        close.addEventListener('click', () => {
            overLay.remove();
            slide.classList.remove('stop');
            location.reload(true);
        });
    }); 
});



