import React, { Component } from 'react'
import List from './List'

import {Collapse} from 'react-collapse'

class Education extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpened: false
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.setState(prevState => ({
			isOpened: !prevState.isOpened
		}))
	}
	
	render () {
		return (
			<div class='tc'>
				<h2 
					onClick={this.handleClick}
					style={{cursor: 'pointer'}}>
					Education
				</h2>
				<Collapse isOpened={this.state.isOpened}>
					<div class="pa4">
						<div class="overflow-auto">
							<table class="f6 w-40 mw8 center" cellspacing="0">
								<thead>
									<tr>
										<th class="fw6 bb b--black-20 tc pb3 pr3 bg-white">Time</th>
										<th class="fw6 bb b--black-20 tc pb3 pr3 bg-white">Institution/Specialty</th>
									</tr>
								</thead>
								<tbody class="lh-copy">
									<tr>
										<td class="pv3 pr3 bb b--black-20">2016 - ...</td>
										<td class="pv3 pr3 bb b--black-20">Tallinn University - Bachelor of Computer Science</td>
									</tr>
									<tr>
										<td class="pv3 pr3 bb b--black-20">1997 - 2010</td>
										<td class="pv3 pr3 bb b--black-20">Kohila Highschool</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</Collapse>
			</div>
		)
	}
}

export default Education