import React, { Component } from 'react'

import { Collapse } from 'react-collapse'
import '../style/hobbies.css'

class Hobbies extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpened: false,
			items: []
		}
		this.addItem = this.addItem.bind(this)
	}
  
	addItem(e) {
		if(this._inputElement.value !== '') {
			let newItem = {
				text: this._inputElement.value,
				key: Date.now()
			}

			this.setState((prevState) => {
				return {
					items: prevState.items.concat(newItem)
				}
			})

			this._inputElement.value = ''
		}
		
		e.preventDefault()

		this.setState(prevState => ({
			isOpened: !prevState.isOpened
		}))
	}
  
	createTasks(items) {
		return <li class="dib mr1 mb2 f5-ns b pa2 dark-gray ba" key={items.key}>{items.text}</li>
	}
  
	render() {
		let hobbies = [
			{text: 'Volleyball', key: Math.random()},
			{text: 'Table tennis', key: Math.random()},
			{text: 'Photography', key: Math.random()},
			{text: 'Sailing', key: Math.random()},
			{text: 'Investing', key: Math.random()},
			{text: 'Hiking', key: Math.random()},
			{text: 'Cycling', key: Math.random()},
			{text: 'Gym', key: Math.random()}    
		]
		let listItems = this.state.items.map(this.createTasks)
		let hardList = hobbies.map(this.createTasks)
    
		return(
			<div id='hobbies' class='tc'>
				<h2 >Hobbies</h2>
				<ul class="">
					{hardList}
					{listItems}
				</ul>
				<div className='form'>
					<Collapse	isOpened={this.state.isOpened}>
						<form onSubmit={this.addItem}>
							<input 
								ref={(a) => this._inputElement = a}
								blaceholder='Add'>
							</input>
						</form>
					</Collapse>
					<i 
						onClick={this.addItem}
						className="material-icons"
						id='addHobbies'
					>add_circle</i>
				</div>
			</div>
		)
	}
}

export default Hobbies