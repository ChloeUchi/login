const officerLoginBtn = document.getElementById('officer');
const memberLoginBtn = document.getElementById('member');
const container = document.getElementById('container');

officerLoginBtn.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

memberLoginBtn.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});