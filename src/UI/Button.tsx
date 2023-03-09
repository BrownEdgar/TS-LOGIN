import React from 'react'

import "./Button.css"

interface IButtonProps {
	title: string,
	onclick?:() => void,
	classes?: string,
	variant: "dark" | "light" | "default",
	type: "button" | "submit",
	size: "lg" | "md" | "sm"
}


export default function Button(props: IButtonProps) {
	return (
		<button 
			className={`btn ${props.classes} btn-${props.variant} btn-${props.size}`}
			type={props.type}
			onClick={props.onclick}
		>{props.title}</button>
	)
}
