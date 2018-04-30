import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Personal from './Personal'
import Hobbies from './Hobbies'
import Education from './Education'
import Experience from './Experience'
import Techonologies from './Technologies'

class App extends Component {  
	render() {
		return [
			<Header />,
			<Personal />,
			<Education />,
			<Experience	/>,
			<Techonologies />,
			<Hobbies />,
			<Footer/>
		]
	}
}

export default App