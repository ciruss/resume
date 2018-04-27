import React, { Component } from 'react'

import '../style/personal.css'

class Personal extends Component {

	render() {

		return(
			<div class="pa3 pa5-ns tc personal">
				<dl class="lh-title mv2">
					<dt class="dib b"><i className="material-icons">person</i></dt>
					<dd class="dib">Johan Laas</dd>
				</dl>
				<dl class="lh-title mv2">
					<dt class="dib b"><i className="material-icons">cake</i></dt>
					<dd class="dib">24.06.1991</dd>
				</dl>
				<dl class="lh-title mv2">
					<dt class="dim gray dib b"><a href={'mailto:' + 'johanlaas4@gmail.com'} style={{color: 'black'}}>
						<i className="material-icons">mail</i></a></dt>
					<dd class="dib"><a class='link underline-hover' href={'mailto:' + 'johanlaas4@gmail.com'} style={{color: 'black'}}>johanlaas4@gmail.com</a></dd>
				</dl>
				<dl class="lh-title mv2">
					<dt class="dib b"><i className="material-icons">call</i></dt>
					<dd class="dib">56662971</dd>
				</dl>
			</div>/* ,
			<div className='personal'>
				<p><i className="material-icons">person</i>Johan Laas</p>
				<p><i className="material-icons">cake</i>24.06.1991</p>
				<p>
					<a class='link underline-hover' href={'mailto:' + 'johanlaas4@gmail.com'} style={{color: 'black'}}>
						<i className="material-icons">mail</i>
						johanlaas4@gmail.com
					</a>
				</p>
				<p><i className="material-icons">call</i>56662971</p>
			</div> */
		)
	}
}

export default Personal