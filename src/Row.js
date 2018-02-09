import React, {Component} from 'react'
import Square from './Square.js'
import './App.css';

class Square extends Component {
	render(){
		var that = this
		var squaresArr = []
		for(let i = 0; i < this.props.squares; i++){
			squaresArr.push(i)
		}
		var squares = squaresArr.map(function(el, i){
			return(
				<Square key={i} id={"S " + i} mark={that.props.mark} />
			)
		})

		return(
			<div className="row">
				<div className={"square " + this.props.id}>
					{this.props.mark}
				</div>
				<div className={"square " + this.props.id}>
					{this.props.mark}
				</div>
				<div className={"square " + this.props.id}>
					{this.props.mark}
				</div>
			</div>
		)
	}
}

export default Square
