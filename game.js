function Rec(cl, x, y) {
    this.color = cl
    this.x = x
    this.y = y
    this.checked = false


}

function Player(name, cl) {
    this.name = name
    this.color = cl
}

function Game() {
    this.players = new Array(2)
    this.currentPlayer = {}
    this.board = []
    this.currentSquar = {}

    this.buildGame = function () {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                let squar = new Rec('rgb(164, 164, 154)', j, i)
                if (j == 3 && i == 3 || i == 4 && j == 4) {
                    squar.checked = true
                    squar.color = 'red'
                }
                else if (j == 3 && i == 4 || i == 3 && j == 4) {
                    squar.checked = true
                    squar.color = 'white'
                }
                this.board.push(squar)
            }
        }
    }


    this.checkColumn = function () {
        
            let column = this.board.filter(b => b != this.currentSquar && b.x == this.currentSquar.x && b.color == this.currentPlayer.color)
            if (column.length != 0) {
                console.log('yey!!!!!!!!!!!!!!!')
                let little = column.filter(c => c.y < this.currentSquar.y)
                little.forEach(l => {
                    let between1 = this.board.filter(b => b.x == this.currentSquar.x &&
                        b.y < this.currentSquar.y && b.y > l.y)
                    if (between1.length != 0 && between1.every(b => b.color != this.currentPlayer.color && b.color != 'rgb(164, 164, 154)')) {

                        document.querySelector(`#game div:nth-child(${this.board.indexOf(this.currentSquar) + 1})`).classList.add(this.currentPlayer.color)
                        between1.forEach(b => {
                            b.color = this.currentPlayer.color
                            this.currentSquar.color = this.currentPlayer.color
                            this.currentSquar.checked = true
                            let currentColor
                            if (this.currentPlayer.color == 'red')
                                currentColor = 'white'
                            else {
                                currentColor = 'red'
                            }
                            document.querySelector(`#game div:nth-child(${this.board.indexOf(b) + 1})`).classList.remove(currentColor)
                            document.querySelector(`#game div:nth-child(${this.board.indexOf(b) + 1})`).classList.add(this.currentPlayer.color)

                        })
                    }
                })

                let big = column.filter(c => c.y > this.currentSquar.y)
                big.forEach(l => {
                    let between2 = this.board.filter(b => b.x == this.currentSquar.x &&
                        b.y > this.currentSquar.y && b.y < l.y)

                    if (between2.length != 0 && between2.every(b => b.color != this.currentPlayer.color && b.color != 'rgb(164, 164, 154)')) {

                        document.querySelector(`#game div:nth-child(${this.board.indexOf(this.currentSquar) + 1})`).classList.add(this.currentPlayer.color)
                        between2.forEach(b => {
                            b.color = this.currentPlayer.color
                            this.currentSquar.color = this.currentPlayer.color
                            this.currentSquar.checked = true
                            let currentColor
                            if (this.currentPlayer.color == 'red')
                                currentColor = 'white'
                            else {
                                currentColor = 'red'
                            }
                            document.querySelector(`#game div:nth-child(${this.board.indexOf(b) + 1})`).classList.remove(currentColor)
                            document.querySelector(`#game div:nth-child(${this.board.indexOf(b) + 1})`).classList.add(this.currentPlayer.color)


                        })


                    }
                })


            }

        

    }


    this.checkRow = function () {
       
            let row = this.board.filter(b => b != this.currentSquar && b.y == this.currentSquar.y && b.color == this.currentPlayer.color)
            if (row.length != 0) {
                let little = row.filter(c => c.x < this.currentSquar.x)
                little.forEach(l => {
                    let between1 = this.board.filter(b => b.y == this.currentSquar.y &&
                        b.x < this.currentSquar.x && b.x > l.x)
                    if (between1.length != 0 && between1.every(b => b.color != this.currentPlayer.color && b.color != 'rgb(164, 164, 154)')) {
                        console.log('yey!!!!!!!!!!!!!!!');
                        document.querySelector(`#game div:nth-child(${this.board.indexOf(this.currentSquar) + 1})`).classList.add(this.currentPlayer.color)
                        this.board.indexOf(this.currentSquar).color = this.currentPlayer.color
                        between1.forEach(b => {
                            b.color = this.currentPlayer.color
                            this.currentSquar.color = this.currentPlayer.color
                            this.currentSquar.checked = true
                            let currentColor
                            if (this.currentPlayer.color == 'red')
                                currentColor = 'white'
                            else {
                                currentColor = 'red'
                            }
                            document.querySelector(`#game div:nth-child(${this.board.indexOf(b) + 1})`).classList.remove(currentColor)
                            this.board.indexOf(b).color = this.currentPlayer.color
                            document.querySelector(`#game div:nth-child(${this.board.indexOf(b) + 1})`).classList.add(this.currentPlayer.color)

                        })
                    }
                })

                let big = row.filter(c => c.x > this.currentSquar.x)
                big.forEach(l => {
                    let between2 = this.board.filter(b => b.y == this.currentSquar.y &&
                        b.x > this.currentSquar.x && b.x < l.x)

                    if (between2.length != 0 && between2.every(b => b.color != this.currentPlayer.color && b.color != 'rgb(164, 164, 154)')) {
                        console.log('yey!!!!!!!!!!!!!!!');
                        document.querySelector(`#game div:nth-child(${this.board.indexOf(this.currentSquar) + 1})`).classList.add(this.currentPlayer.color)
                        this.board.indexOf(this.currentSquar).color = this.currentPlayer.color
                        between2.forEach(b => {
                            b.color = this.currentPlayer.color
                            this.currentSquar.color = this.currentPlayer.color
                            this.currentSquar.checked = true
                            let currentColor
                            if (this.currentPlayer.color == 'red')
                                currentColor = 'white'
                            else {
                                currentColor = 'red'
                            }
                            document.querySelector(`#game div:nth-child(${this.board.indexOf(b) + 1})`).classList.remove(currentColor)
                            this.board.indexOf(b).color = this.currentPlayer.color
                            document.querySelector(`#game div:nth-child(${this.board.indexOf(b) + 1})`).classList.add(this.currentPlayer.color)

                        })


                    }
                })


            }

        
       


    }


    this.checkAlacson = function () {
      
        let alacson  = this.board.filter(b => b != this.currentSquar && b.y+b.x == this.currentSquar.y+this.currentSquar.x && b.color == this.currentPlayer.color)
        if (alacson.length != 0) {
            let little = alacson.filter(c => c.x < this.currentSquar.x)
            little.forEach(l => {
                let between1 = this.board.filter(b => b.y+b.x  == this.currentSquar.y+this.currentSquar.x &&
                    b.x < this.currentSquar.x && b.x > l.x)
                if (between1.length != 0 && between1.every(b => b.color != this.currentPlayer.color && b.color != 'rgb(164, 164, 154)')) {
                    console.log('yey!!!!!!!!!!!!!!!');
                    document.querySelector(`#game div:nth-child(${this.board.indexOf(this.currentSquar) + 1})`).classList.add(this.currentPlayer.color)
                   
                    between1.forEach(b => {
                        b.color = this.currentPlayer.color
                        this.currentSquar.color = this.currentPlayer.color
                        this.currentSquar.checked = true
                        let currentColor
                        if (this.currentPlayer.color == 'red')
                            currentColor = 'white'
                        else {
                            currentColor = 'red'
                        }
                        document.querySelector(`#game div:nth-child(${this.board.indexOf(b) + 1})`).classList.remove(currentColor)
                        
                        document.querySelector(`#game div:nth-child(${this.board.indexOf(b) + 1})`).classList.add(this.currentPlayer.color)

                    })
                }
            })

            let big = alacson.filter(c => c.x > this.currentSquar.x)
            big.forEach(l => {
                let between2 = this.board.filter(b => b.y+b.x == this.currentSquar.y+this.currentSquar.x &&
                    b.x > this.currentSquar.x && b.x < l.x)

                if (between2.length != 0 && between2.every(b => b.color != this.currentPlayer.color && b.color != 'rgb(164, 164, 154)')) {
                    console.log('yey!!!!!!!!!!!!!!!');
                    document.querySelector(`#game div:nth-child(${this.board.indexOf(this.currentSquar) + 1})`).classList.add(this.currentPlayer.color)
                   
                    between2.forEach(b => {
                        b.color = this.currentPlayer.color
                        this.currentSquar.color = this.currentPlayer.color
                        this.currentSquar.checked = true
                        let currentColor
                        if (this.currentPlayer.color == 'red')
                            currentColor = 'white'
                        else {
                            currentColor = 'red'
                        }
                        document.querySelector(`#game div:nth-child(${this.board.indexOf(b) + 1})`).classList.remove(currentColor)
                        document.querySelector(`#game div:nth-child(${this.board.indexOf(b) + 1})`).classList.add(this.currentPlayer.color)

                    })


                }
            })


        }




    
   


}


this.checkAlacsonM= function () {
      
    let alacson  = this.board.filter(b => b != this.currentSquar && b.y-b.x == this.currentSquar.y-this.currentSquar.x && b.color == this.currentPlayer.color)
    if (alacson.length != 0) {
        let little = alacson.filter(c => c.x < this.currentSquar.x)
        little.forEach(l => {
            let between1 = this.board.filter(b => b.y-b.x  == this.currentSquar.y-this.currentSquar.x &&
                b.x < this.currentSquar.x && b.x > l.x)
            if (between1.length != 0 && between1.every(b => b.color != this.currentPlayer.color && b.color != 'rgb(164, 164, 154)')) {
                console.log('yey!!!!!!!!!!!!!!!');
                document.querySelector(`#game div:nth-child(${this.board.indexOf(this.currentSquar) + 1})`).classList.add(this.currentPlayer.color)
               
                between1.forEach(b => {
                    b.color = this.currentPlayer.color
                    this.currentSquar.color = this.currentPlayer.color
                    this.currentSquar.checked = true
                    let currentColor
                    if (this.currentPlayer.color == 'red')
                        currentColor = 'white'
                    else {
                        currentColor = 'red'
                    }
                    document.querySelector(`#game div:nth-child(${this.board.indexOf(b) + 1})`).classList.remove(currentColor)
                    
                    document.querySelector(`#game div:nth-child(${this.board.indexOf(b) + 1})`).classList.add(this.currentPlayer.color)

                })
            }
        })

        let big = alacson.filter(c => c.x > this.currentSquar.x)
        big.forEach(l => {
            let between2 = this.board.filter(b => b.y-b.x == this.currentSquar.y-this.currentSquar.x &&
                b.x > this.currentSquar.x && b.x < l.x)

            if (between2.length != 0 && between2.every(b => b.color != this.currentPlayer.color && b.color != 'rgb(164, 164, 154)')) {
                console.log('yey!!!!!!!!!!!!!!!');
                document.querySelector(`#game div:nth-child(${this.board.indexOf(this.currentSquar) + 1})`).classList.add(this.currentPlayer.color)
               
                between2.forEach(b => {
                    b.color = this.currentPlayer.color
                    this.currentSquar.color = this.currentPlayer.color
                    this.currentSquar.checked = true
                    let currentColor
                    if (this.currentPlayer.color == 'red')
                        currentColor = 'white'
                    else {
                        currentColor = 'red'
                    }
                    document.querySelector(`#game div:nth-child(${this.board.indexOf(b) + 1})`).classList.remove(currentColor)
                    document.querySelector(`#game div:nth-child(${this.board.indexOf(b) + 1})`).classList.add(this.currentPlayer.color)

                })


            }
        })


    }


    





}


    








    this.changePlayers = function () {
        let index = this.players.indexOf(this.currentPlayer)
        this.currentPlayer = this.players[this.players.length - 1 - index]
    }
}

