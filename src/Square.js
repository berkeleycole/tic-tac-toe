import React, { Component } from 'react'
import './App.css';

class Square extends Component {
	render() {
		const { onClick, status } = this.props

		return(
			<div
				className={status == "" ? 'unclicked' : 'clicked'}
				onClick={onClick}
			>
					<h1>{status}</h1>
			</div>
		)
	}
}

export default Square
