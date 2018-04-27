import React, {Component} from 'react'

class List extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}
	createTasks(items) {
		return <li key={items.key}>{items.text}</li>
	}

	render() {
		let listEntries = this.props.entries
		let listItems = listEntries.slice(0).reverse().map(this.createTasks)

		return (
			<ul>{listItems}</ul>
		)
	}
}

export default List