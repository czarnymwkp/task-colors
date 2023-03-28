import React from 'react'
import { colorsArray } from '../../content/ColorArray'
import '../PredefinedColors/PredefinedColors-style.scss'

export default function PredefinedColors() {
	return (
		<div className='predefined-main'>
			<h2>Predefined Colors</h2>
			{colorsArray.map(record => {
				return (
					<div className='predefined-color' key={record.Italian}>
						<h2>Name: {record.English}</h2> <h4>HEX: {record.HEX}</h4> <h4>RGB: {record.RGB}</h4>
					</div>
				)
			})}
		</div>
	)
}
