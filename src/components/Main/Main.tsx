import React from 'react'

import '../../style/MainStyle.scss'

import AddColorForm from '../AddColorForm/AddColorForm'

import FilterColorForm from '../FilterColorForm/FilterColorForm'
import PredefinedColors from '../PredefinedColors/PredefinedColors'
import UserColors from '../UserColors/UserColors'

export default function Main() {
	return (
		<>
			<div className='wraper'>
				<h1>COLORS APP</h1>
				<AddColorForm></AddColorForm>
				<FilterColorForm></FilterColorForm>
			</div>
			<div className='colors-list'>
				<PredefinedColors />
				<UserColors />
			</div>
		</>
	)
}
