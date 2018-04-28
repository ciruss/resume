import React, { Component } from 'react'
import List from './List'

import {Collapse} from 'react-collapse'

class Experience extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpened: true
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
					Work experience
				</h2>
				<Collapse isOpened={this.state.isOpened}>
					<div class="pa4">
						<div class="overflow-auto">
							<table class="f6 w-50 mw8 center" cellspacing="0">
								<thead>
									<tr>
										<th class="fw6 bb b--black-20 tc pb3 pr3 bg-white">Time</th>
										<th class="fw6 bb b--black-20 tc pb3 pr3 bg-white">Company/Position</th>
										<th class="fw6 bb b--black-20 tc pb3 pr3 bg-white">Job description</th>
									</tr>
								</thead>
								<tbody class="lh-copy">
									<tr>
										<td class="pv3 pr3 bb b--black-20">Sept 2017 - ...</td>
										<td class="pv3 pr3 bb b--black-20">OÜ Pro Personal - Customer service</td>
										<td class="pv3 pr3 bb b--black-20">Nightclub customer service </td>
									</tr>
									<tr>
										<td class="pv3 pr3 bb b--black-20">Oct 2015 - Aug 2016</td>
										<td class="pv3 pr3 bb b--black-20">Superfox OÜ - Laborer</td>
										<td class="pv3 pr3 bb b--black-20">Construction worker</td>
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

export default Experience