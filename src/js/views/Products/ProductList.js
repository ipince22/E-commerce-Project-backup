import React, { useState } from "react";
import { Product } from "./Product";
//import { Title } from "../../component/Title";
import { ProductConsumer } from "../../store/context";
//import { storeProducts } from "../../store/data";

export const ProductList = () => {
	//const [products, setProducts] = useState(storeProducts);

	return (
		<React.Fragment>
			<div className="py-5">
				<div className="container">
					{/*<Title name="our" title="products" />*/}
					<h1>Our Products</h1>
					<div className="row">
						<ProductConsumer>
							{value => {
								//console.log(value);

								return value.products.map(product => {
									//console.log(product);
									return (
										<Product
											key={product.id}
											id={product.id}
											img={product.img}
											inCart={product.inCart}
											price={product.price}
											title={product.title}
											//product={product}
											//***consultar hernan
										/>
									);
								});
							}}
						</ProductConsumer>
					</div>
				</div>
			</div>
		</React.Fragment>
		//<Product />
	);
};

/*
id:,
title: ,
img: ,
price: ,
company: ,
info: ,
inCart: ,
count: ,
total: 
*/
