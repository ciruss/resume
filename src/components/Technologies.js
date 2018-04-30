import React, { Component } from 'react'

import { Collapse } from 'react-collapse'
import '../style/tech.css'

class Techonologies extends Component {
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
		let tech = [
			{text: 'JavaScript', key: Math.random()},
			{text: 'React', key: Math.random()},
			{text: 'Adobe Photoshop', key: Math.random()},
			{text: 'Adobe Illustrator', key: Math.random()},
			{text: 'HTML', key: Math.random()},
			{text: 'CSS', key: Math.random()},
			{text: 'Java', key: Math.random()},
			{text: 'MySQL', key: Math.random()},   
			{text: 'MongoDb', key: Math.random()}    
		]
		let listItems = this.state.items.map(this.createTasks)
		let hardList = tech.map(this.createTasks)
    
		return(
			<div id='tech' class='tc'>
				<h2 >Techonologies</h2>
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
						id='addTech'
					>add_circle</i>
				</div>
			</div>
		)
	}
}

export default Techonologies