import React, { Component } from 'react'
import List from './List'

import {Collapse} from 'react-collapse'

class Acordion extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: '',
			items: [],
			isOpened: false,
			addIsOpen: false
		}
		this.addItem = this.addItem.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.handleAddClick = this.handleAddClick.bind(this)
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
	}

	handleClick() {
		this.setState(prevState => ({
			isOpened: !prevState.isOpened
		}))
	}

	handleAddClick() {
		this.setState(prevState => ({
			addIsOpen: !prevState.addIsOpen
		}))
	}

	createTasks(items) {
		return <li key={items.key}>{items.text}</li>
	}
	
	render () {
		let listEntries = this.state.items.slice(0).reverse().map(this.createTasks)
		let listItems = this.props.items.map(this.createTasks)

		return (
			<div class='tc'>
				<h2 
					onClick={this.handleClick}
					style={{cursor: 'pointer'}}>
					{this.props.title}
				</h2>
				<Collapse 
					isOpened={this.state.isOpened}
					hasNestedCollapse={true}
				>
					<div className='form'>
						<i 
							onClick={this.handleAddClick} 
							className="material-icons"
							style={{cursor: 'pointer'}}
						>add_circle</i>
						<Collapse	isOpened={this.state.addIsOpen}>
							<form onSubmit={this.addItem}>
								<input 
									ref={(a) => this._inputElement = a}
									blaceholder='Add'>
								</input>
								<button type='submit'>Add</button>
							</form>
						</Collapse>
						<ul className='newList'>{listEntries}</ul>
						<ul className='oldList'>{listItems}</ul>
					</div>
				</Collapse>
			</div>
		)
	}
}

export default Acordion