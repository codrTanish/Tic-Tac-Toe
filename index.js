console.log('Working');

// record Array Stores The Previous Symbol Inserted Into The Div.
let record = []

// div Array Stores Information About The Divs Which Has The Symbols Inserted Already
let div = []

// chances Array It Is Used To Change The Background Accordingly.
let chances = []

// position Array Stores Symbol According To The Div Position At Which User Has Clicked.
let position = ['', '', '', '', '', '', '', '', '']
let chance = 0
let winner = document.getElementById('winner')
let content = `<div id="block_0" class="block" onclick="func('block_0')"></div>
<div id="block_1" class="block" onclick="func('block_1')"></div>
<div id="block_2" class="block" onclick="func('block_2')"></div>
<div id="block_3" class="block" onclick="func('block_3')"></div>
<div id="block_4" class="block" onclick="func('block_4')"></div>
<div id="block_5" class="block" onclick="func('block_5')"></div>
<div id="block_6" class="block" onclick="func('block_6')"></div>
<div id="block_7" class="block" onclick="func('block_7')"></div>
<div id="block_8" class="block" onclick="func('block_8')"></div>`

function win(n) {
    // This Function Is Used To Check If X or O Has Won Or Not. Using The Position Array.
    if (position[0] == n && position[3] == n && position[6] == n){
        chances = [0, 3, 6]
        return true

    }else if( position[1] == n && position[4] == n && position[7] == n){
        chances = [1, 4, 7]
        return true

    }else if( position[2] == n && position[5] == n && position[8] == n){
        chances = [2, 5, 8]
        return true

    }else if( position[0] == n && position[1] == n && position[2] == n){
        chances = [0, 1, 2]
        return true

    }else if( position[3] == n && position[4] == n && position[5] == n){
        chances = [3, 4, 5]
        return true

    }else if( position[6] == n && position[7] == n && position[8] == n){
        chances = [6, 7, 8]
        return true

    }else if( position[2] == n && position[4] == n && position[6] == n){
        chances = [2, 4, 6]
        return true

    }else if( position[0] == n && position[4] == n && position[8] == n){
        chances = [0, 4, 8]
        return true

    }else{
        return false 
}
}

function winnerName() {
    // This Function Writes Winner Or Game Draw Condition In DOM.
    function clear() {
        // This function Resets The Tic Tac Toe Game Board.
        setTimeout(() => {
            alert('Resetting Game')
            document.querySelector('.play-area').innerHTML = '  '
            record = []
            div = []
            chances = []
            position = ['', '', '', '', '', '', '', '', '',]
            chance = 0
            winner.innerHTML = ``
            document.querySelector('.play-area').insertAdjacentHTML('afterbegin', content)
        }, 2000);
    }

    if (position.includes('')) {
        // This Condition Is Used To Check If X Has Won Or O Has Won. Before Commencing Next Attempt.
        if (win('x') || win('o')) {
            if (win('x')) {
                chances.forEach((curVal) => document.getElementById(`block_${curVal}`).style.backgroundColor = 'red')
                winner.innerHTML = `Player 1 Has Won The Game 😀`
                
                clear()
                
                
            }else if(win('o')){
                chances.forEach((curVal) => document.getElementById(`block_${curVal}`).style.backgroundColor = '#ffc709')
                winner.innerHTML = `Player 2 Has Won The Game 😀`
                clear()
                    
            } 
            
        }    
    } else {
        // This Condition Is Used To Check If '' is not present in position that means its a clear Draw.
        winner.innerHTML = `Draw 😀`
        clear()
    }
    
}

function func(id) {
    // Main Function Which Will Be Executed On Click Event. (PARENT FUNCTION)
    let elem = document.getElementById(id)

    // Insert X Symbol In Div
    function cross() {
        let symbol = `<i class="fas fa-times white"></i>`
        elem.insertAdjacentHTML('afterbegin', symbol)
    }

    // Insert o Symbol In Div
    function circle() {
        let symbol = `<i class="far fa-circle white"></i>`
        elem.insertAdjacentHTML('afterbegin', symbol)
    }

    if (chance < 9) {
        // This Condition Is Used So That User Can't Click More Than 9 Times 
        if (div.includes(id) == false) {
            if (record.length == 0) {
                cross()
                record.push('x')
                div.push(id)
                let sliced = id.slice(6, 7)
                position[sliced] = 'x'
                
            } else if (record[record.length - 1] == 'x') {
                circle()
                record.push('o')
                div.push(id)
                let sliced = id.slice(6, 7)
                position[sliced] = 'o'
                
    
            } else if (record[record.length - 1] == 'o') {
                cross()
                record.push('x')
                div.push(id)
                let sliced = id.slice(6, 7)
                position[sliced] = 'x'
            }
            winnerName()
            chance = chance + 1
        }
    } 
}

