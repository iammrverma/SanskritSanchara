const list = document.querySelectorAll('.list');
console.log(list);
function activeLink(){
    console.log('run');
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
item.addEventListener('click', activeLink));