import React, { Component } from 'react'
import Board from './Board'
import Square from './Square'
import './App.css'

class App extends Component {
	render() {
		return (
			<main>
				<h1>Tic Tac Toe</h1>
				<Board />
			</main>
		)
	}
}

export default App
