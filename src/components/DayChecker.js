import React, { Component } from 'react'

class DayChecker extends Component {  
	getDayName(number) {
		let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
		return days[number]
	}
	render() {
		let today = new Date().getDay()
		if (today === 6 || today === 0)
			return <div>It's {this.getDayName(today)}, you stupid weekend fu*k</div>
		return <div>It's {this.getDayName(today)}, a workday so work you stupid fu*k</div>
	}
}

export default DayChecker
