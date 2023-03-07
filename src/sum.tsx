export function sum(arr: number[]): number {
	return arr.reduce((a, b) => a + b, 0)
}

interface IfetchData {
	userId: number,
	id: number,
	title: string,
	completed: boolean
}

export function getData(url: string): Promise<IfetchData[]> {
	return fetch('https://jsonplaceholder.typicode.com/todos')
		.then(response => response.json())
		.then(json => json)
}

