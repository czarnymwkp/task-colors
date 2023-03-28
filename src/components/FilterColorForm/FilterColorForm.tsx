import { useEffect, useState } from 'react'
import './FilterColorForm-style.scss'
export default function FilterColorForm() {
	const [filters, setFilters] = useState({
		red: false,
		green: false,
		blue: false,
	})

	return (
		<div className='filter-container'>
			<h2>Options:</h2>
			<form onSubmit={() => console.log('dupa')}>
				<div className='filter-container-label red'>
					<label htmlFor='choseRed'>"Red is "more" then 50"</label>
					<input type='checkbox' />
				</div>
				<div className='filter-container-label green'>
					<label htmlFor='chosGreen'>"Green is "more" then 50"</label>
					<input type='checkbox' />
				</div>
				<div className='filter-container-label blue'>
					<label htmlFor='chosBlue'>"Blue is "more" then 50"</label>
					<input type='checkbox' />
				</div>
			</form>
		</div>
	)
}
