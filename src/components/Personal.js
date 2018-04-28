import React, { Component } from 'react'

import '../style/personal.css'

class Personal extends Component {

	render() {

		return(
			<div class="pa3 tc personal">
				<dl class="lh-title mv2">
					<dt class="dib b"><i className="material-icons">person</i></dt>
					<dd class="dib">Johan Laas</dd>
				</dl>
				<dl class="lh-title mv2">
					<dt class="dib b"><i className="material-icons">cake</i></dt>
					<dd class="dib">24.06.1991</dd>
				</dl>
				<dl class="lh-title mv2">
					<dt class="link dim gray dib b"><a href={'mailto:' + 'johanlaas4@gmail.com'}>
						<i className="material-icons">mail</i></a></dt>
					<dd class="dib"><a class='link underline-hover' href={'mailto:' + 'johanlaas4@gmail.com'}>johanlaas4@gmail.com</a></dd>
				</dl>
				<dl class="lh-title mv2">
					<dt class="dib b"><i className="material-icons">call</i></dt>
					<dd class="dib">56662971</dd>
				</dl>
			</div>
		)
	}
}

export default Personal