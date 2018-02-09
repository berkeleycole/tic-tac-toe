import React, { Component } from 'react'
import Square from './Square'
import './App.css'

function defaultState() {
	return {
		counter: 0,
		board: ["", "", "", "", "", "", "", "", ""],
		message: '',
		gameOver: false
	}
}

class Board extends Component {
	constructor(props){
		super(props)

		this.state = defaultState()
	}

	resetGame() {
		this.setState(defaultState())
	}

	handleClick(id) {
		let { board, counter, message, gameOver } = this.state

		if(board[id] !== "") { // this cell has already been clicked - return
			return
		}

		// let currentPlayer;
		// if(counter === 0 || counter % 2 === 0) {
		// 	currentPlayer = 'X'
		// } else {
		// 	currentPlayer = 'O'
		// }

        // if there are no plays -- or they are even, then the player is X; otherwise it's O
		let currentPlayer = (counter === 0 || counter % 2 === 0) ? 'X' : 'O'

		board[id] = currentPlayer
		counter++

		// OPTIMIZATION: if counter < 6 -- no possibility for a winner
		if(counter >= 5) {
			if(determineWin(board)) {
				message = `Player ${currentPlayer} has won!`
				gameOver = true
			}
		}

		this.setState({
			counter,
			board,
			message,
			gameOver
		})
	}

	render() {
		const { board, message, gameOver, counter } = this.state

		return (
			<div>
				<h1>{message}</h1>
				{gameOver &&
					<button
						onClick={this.resetGame.bind(this)}
					>
						Play Again
					</button>}
				<div>
					Current Player: {(counter === 0 || counter % 2 === 0) ? 'X' : 'O'}
				</div>
				<div className="board">
					{board.map((square, id) => {
						return (
							<Square
								key={id}
								status={square}
								onClick={this.handleClick.bind(this, id)}
							/>
						)
					})}
				</div>
			</div>
		)
	}
}

export default Board

function determineWin(board) {
	const possibilities = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	]

	for (let i = 0; i < possibilities.length; i++) {
		if(determinePossibility(board, possibilities[i])) {
			return true
		}
	}

	return false
}

function determinePossibility(board, set) {
	if(board[set[0]] === "") {
		return false
	}

	if(board[set[0]] != board[set[1]]) {
		return false
	}

	if(board[set[1]] != board[set[2]]) {
		return false
	}

	return true
}

// let people = [
// 	{name: "George", age: 30},
// 	{name: "Alyssa", age: 28},
// 	{name: "Bob", age: 62},
// 	{name: "Sally", age: 4},
// ]
//
//
// function methodA(list) {
// 	return list.map(function(item) {
// 		return item.name
// 	})
// }
//
// function methodB(list) {
// 	let output = []
//
// 	for (let i = 0; i < list.length; i++) {
// 		output.push(list[i].name)
// 	}
//
// 	return output
// }
