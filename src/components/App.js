import React, { Component } from 'react'
import Header from './Header'
import Acordion from './Acordion'
import Footer from './Footer'
import Personal from './Personal'
import Hobbies from './Hobbies'

class App extends Component {  
	render() {
		return [
			<Header />,
			<Personal />,
			<Acordion 
				title={'Education'}
				items={[{text: '1', key: Math.random()}]}
			/>,
			<Acordion 
				title={'Employment History'}
				items={[{text: '2', key: Math.random()}]}
			/>,
			<Hobbies />,
			<Footer/>
		]
	}
}

export default App

{/* <footer className='layout__footer'>
	<a><img id='github' src={Github} alt='Github logo'/> Resume</a><br/>
			Created by <a href={'https://github.com/ciruss'}>Johan Laas</a><br/>
	{new Date().getFullYear()}
</footer> */}