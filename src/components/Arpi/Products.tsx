import React, { useEffect, useState } from 'react'
import { IProducrs } from './Interfaces'
import "./Products.css"



export default function Products() {
	const [data, setData] = useState<IProducrs[]>([])

	useEffect(() => {
		const products = JSON.parse(localStorage.getItem("products") as "") || [] as IProducrs[]


		setData(products)
	}, [])

	return (
		<div className='Products'>
			{
				data.map(elem => {
					return <div key={elem.id} className="Product">
						<div className='Product_Info' >
							<h1>{elem.category}</h1>
							<h3>{elem.title}</h3>
							<p>{elem.description}</p>
						</div>
						<div className='Product_Img'>
							<img src={elem.image} alt="" />
						</div>
						<div className="Product_price">
							<p> $ {elem.price}</p>
							<div className="Product_Count">
								<p>Rate: {elem.rating?.rate}</p>
								<p>Count: {elem.rating?.count}</p>
							</div>
						</div>
					</div>
				})

			}
		</div>
	)
}
