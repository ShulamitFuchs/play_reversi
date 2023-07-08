(function () {
    let many
    const mygame = new Game()
    mygame.buildGame()
    mygame.players[0] = new Player('Jhon', 'red')
    mygame.players[1] = new Player('Tom', 'white')

    mygame.currentPlayer = mygame.players[0]

    document.querySelectorAll('.squars').forEach((column, index) => {

        column.addEventListener('click', () => {
            mygame.currentSquar = mygame.board[index]
            if (!mygame.currentSquar.checked) {
                mygame.checkColumn()
                mygame.checkRow()
                mygame.checkAlacson()
                mygame.checkAlacsonM()
            }
            if (mygame.currentSquar.color == mygame.currentPlayer.color)
                mygame.changePlayers()

        })
    })
    let red = mygame.board.filter(b.color == 'red')
    let white = mygame.board.filter(b.color == 'white')
    if (red > white)
        many = red
    many = white
})()