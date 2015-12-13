window.onload = () => {
    var inputNumber: any = document.getElementById('number');
    var howmuch: any = document.getElementById('howmuch');
    inputNumber.addEventListener('input', () => {
        howmuch.innerText = new HowMuch().isThat(inputNumber.value);
    });
};
