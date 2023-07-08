(function () {

    for (let j = 0; j < 8; j++) {
        for (let i = 0; i < 8; i++) {
            let column = document.createElement('div')
            
            if (j == 3 && i == 3 || i == 4 && j == 4) {
                column.classList.add('red')
            }
            else if (j == 3 && i == 4 || i == 3 && j == 4) {
                column.classList.add('white')
            }
            
                column.classList.add('squars')
            
            document.querySelector('#game').appendChild(column)
        }
    }
})()