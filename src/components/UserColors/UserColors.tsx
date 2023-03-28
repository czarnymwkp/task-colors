import { useEffect, useState } from 'react'
import '../UserColors/UserColors-style.scss'

type Color = {
	hex: string
	red: number
	green: number
	blue: number
}

export default function FilterColorForm() {
	const [chosenColors, setChosenColor] = useState<Color[]>([])
	const removeColor = (hex: string) => {
		const filteredColors = chosenColors.filter(color => color.hex !== hex)
		setChosenColor(filteredColors)
		localStorage.setItem('colors', JSON.stringify(filteredColors))
	}

	useEffect(() => {
		const chosenColor = localStorage.getItem('colors')
		const colorArray: [] = chosenColor ? JSON.parse(chosenColor) : []
		setChosenColor(colorArray)
	}, [])

	useEffect(() => {
		const colorsDiv = document.querySelectorAll('[data-color]')
		;(Array.from(colorsDiv) as HTMLDivElement[]).forEach(element => {
			const color = element.getAttribute('data-color')
			element.style.backgroundColor = color!
		})
	}, [chosenColors])

	return (
		<>
			<div className='userColors-main'>
				<h2>User Colors</h2>
				{chosenColors?.map(color => (
					<div className='userColors-main-div' key={color.hex} >
						<h4>Color in HEX: {color.hex}</h4>
						<div className='square' data-color={color.hex}></div>
						<h3>
							Color in RGB :
							<p>
								{color.red}:{color.green}:{color.blue}
							</p>
						</h3>
						<button className='container-btn' onClick={() => removeColor(color.hex)}>
							Remove color
						</button>
					</div>
				))}
			</div>
		</>
	)
}
