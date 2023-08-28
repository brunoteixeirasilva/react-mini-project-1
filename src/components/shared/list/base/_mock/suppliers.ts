// components/shared/list/base/DataList/_mock/products.js

import { IdentifiedListItem } from "components/shared/list/base/DataList";

export interface ISupplier extends IdentifiedListItem {
	name: string;
	category: string;
	contact: {
		countryCode: string;
		phone: string;
	};
}

const suppliers: ISupplier[] = [
	{
		id: "any-id-1",
		name: "Fornecedor A",
		category: "Charutos",
		contact: {
			countryCode: "+55",
			phone: "51999999999"
		}
	},
	{
		id: "any-id-2",
		name: "Fornecedor B",
		category: "Cigarros",
		contact: {
			countryCode: "+55",
			phone: "51999999999"
		}
	},
	{
		id: "any-id-3",
		name: "Fornecedor C",
		category: "Vinhos",
		contact: {
			countryCode: "+55",
			phone: "51999999999"
		}
	}
	// ... add more products
];

export { suppliers };
