const buttons = document.querySelectorAll('a');
buttons.forEach(btn =>{
    btn.addEventListener('click', function (e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientX - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.top = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);
    })
})