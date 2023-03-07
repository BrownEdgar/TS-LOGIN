import React, { useState } from 'react'
import Button from './UI/Button'


const API_KEY = process.env.REACT_APP_API_KEY
console.log(API_KEY)
interface IUser {
	email: string,
	password: string
}

export default function App() {
	const [user, setUser] = useState<IUser>({
		email: "",
		password: "",
	})


	const registerUser = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
	
		const email = (e.target as any).email.value
		const password = (e.target as any).password.value
		const data = {
			email,
			password
		}
		console.log(data)
	}

	return (
		<div>
			<form onSubmit={registerUser}>
				<div>
					<label htmlFor="email">Email</label>
					<input type="email" id="email" required />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" id="password" required />
				</div>
				<Button
					title='login'
					variant='light'
					type='button'
					size='md'
					classes='aaaa'
				/>
				<Button
					title='register'
					variant='dark'
					type='submit'
					size='lg'
				/>
			</form>


		</div>
	)
}
