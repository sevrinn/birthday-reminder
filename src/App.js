import React, { useState } from 'react'
import data from './data'
import List from './List'
import './App.css'

function App() {
	const [people, setPeople] = useState(data)
	return (
		<section className='birthday-page'>
			<div className='birthday-container'>
				<h3 className='birthday-header'>{people.length} birthdays today</h3>
				<List people={people} />
				<button className='btn' onClick={() => setPeople([])}>
					Clear All
				</button>
			</div>
		</section>
	)
}

export default App
