interface IUserAddress {
	street: string,
	suite: string,
	city: string,
	zipcode: string,
	geo: {
		lat: string,
		lng: string,
	}
}

export interface IUsers {
	id: number,
	name: string,
	username: string,
	email: string,
	address: IUserAddress,
	phone: string,
	website: string,
	company: {
		name: string,
		catchPrice: string, 
		bs: string
	}
}