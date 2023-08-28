// components/shared/list/base/DataList/_mock/products.js

import { IdentifiedListItem } from "components/shared/list/base/DataList";

export interface IProduct extends IdentifiedListItem {
	name: string;
	category: string;
	price: number;
}

const products: IProduct[] = [
	{
		id: "any-id-1",
		name: "Product A",
		category: "Electronics",
		price: 100
	},
	{
		id: "any-id-2",
		name: "Product B",
		category: "Apparel",
		price: 50
	},
	{
		id: "any-id-3",
		name: "Product C",
		category: "Electronics",
		price: 300
	}
	// ... add more products
];

export { products };
