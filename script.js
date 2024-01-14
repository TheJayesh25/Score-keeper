const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const reset = document.getElementById('reset');

const playing_to_select = document.getElementById('points');
let playing_to = 5;

playing_to_select.addEventListener('change', function(e){
    console.log(playing_to_select.value);
    playing_to = Number(playing_to_select.value);
    playing_to_select.disabled = true;
})

let count_1 = 0;
let count_2 = 0;


player1.addEventListener('click', function(e){
    console.log('player 1 clicked')
    console.log(playing_to)
    count_1++;
    playing_to_select.disabled = true;
    const p = document.createElement('p');
    p.setAttribute('class','score');
    p.appendChild(document.createTextNode(`${count_1} to ${count_2}`));
    document.querySelector('.score').replaceWith(p);
    updateButtons();
})

player2.addEventListener('click', function(e){
    console.log('player 2 clicked')
    count_2++;
    playing_to_select.disabled = true;
    const p = document.createElement('p');
    p.setAttribute('class','score');
    p.appendChild(document.createTextNode(`${count_1} to ${count_2}`));
    document.querySelector('.score').replaceWith(p);
    updateButtons();
})

reset.addEventListener('click', function(e){
    const p = document.createElement('p');
    count_1 = 0;
    count_2 = 0;
    playing_to_select.selectedIndex = 0;
    player1.disabled=false;
    player2.disabled=false;
    playing_to_select.disabled = false;
    p.setAttribute('class','score');
    p.appendChild(document.createTextNode(`${count_1} to ${count_2}`));
    document.querySelector('.score').replaceWith(p);
})


function updateButtons() {
    if (count_1 === playing_to || count_2 === playing_to) {
        player1.disabled = true;
        player2.disabled = true;
    }
}