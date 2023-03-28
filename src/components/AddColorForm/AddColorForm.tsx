import { useState } from 'react'

const defaultRGBState = { red: 0, green: 0, blue: 0 }

export default function AddColorForm() {
	const [colors, setColors] = useState(JSON.parse(localStorage.getItem('colors') || '[]'))
	const [error, setError] = useState('')
	const [rgbColors, setRgbColors] = useState<{
		red: number
		green: number
		blue: number
	}>(defaultRGBState)
	const [hexColor, setHexColor] = useState<string>()

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		const name = event.target.name

		if (
			name === 'hex' &&
			(value.indexOf('#') !== 0 || value.lastIndexOf('#') !== 0 || value.indexOf('#') !== value.lastIndexOf('#'))
		) {
			setError('Pleas write good code of color')
		} else if ((name === 'red' || name === 'green' || name === 'blue') && value.length > 3) {
			setError('Pleas write good code of color')
		} else {
			setError('')
			name === 'hex'
				? setHexColor(event.target.value)
				: setRgbColors(prev => ({ ...prev, [event.target.name]: +event.target.value }))
		}
	}

// rgb to hex function
	const rgbToHex = (r:number, g:number, b:number) => '#' + [r, g, b].map(x => {
		const hex = x.toString(16)
		return hex.length === 1 ? '0' + hex : hex
	  }).join('')
	  
	console.log(rgbToHex(rgbColors.red, rgbColors.blue, rgbColors.red))

//hec to rgb function

const hexToRgb = (hex:any) =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m:string, r:number, g:number, b:number) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map((x:string) => parseInt(x, 16))
let hexToRgbt = hexToRgb("#0033ff")


//console.log(hexToRgb("#0033ff")) // [0, 51, 255]


	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()
		const color = hexColor ?? rgbColors
		// const colorObject = hexColor ? getObjectWithRGB() : getObjectWithHex()
		const newColors = [...colors, color]
		
		setColors(newColors)
		setRgbColors(defaultRGBState)
		setHexColor(undefined)
		localStorage.setItem('colors', JSON.stringify(newColors))
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor='hex'>Enter HEX value:</label>
				<br />
				<input
					type='text'
					name='hex'
					value={hexColor ?? ''}
					onChange={handleChange}
					required={!Object.values(rgbColors).some(val => val)}
					maxLength={7}
				/>
				<h3>{error}</h3>
				<br />
				<br />
				<label htmlFor='rgbColor' id='rgbColor'>
					Enter RGB colors
				</label>
				<br />
				<label htmlFor='red'> RED </label>
				<input
					type='number'
					name='red'
					id=''
					onChange={handleChange}
					value={rgbColors.red ?? ''}
					required={!hexColor}
				/>
				<label htmlFor='red'> GREEN </label>
				<input
					type='number'
					name='green'
					id=''
					onChange={handleChange}
					value={rgbColors.green ?? ''}
					required={!hexColor}
				/>
				<label htmlFor='red'> BLUE </label>
				<input
					type='number'
					name='blue'
					id=''
					onChange={handleChange}
					value={rgbColors.blue ?? ''}
					required={!hexColor}
				/>
				<input type='submit' />
			</form>
		</>
	)
}
