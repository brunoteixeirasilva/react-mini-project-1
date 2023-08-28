import React from "react";

import { IColumnConfiguration } from "components/shared/list/base/DataList";
import { products } from "components/shared/list/base/_mock/products";
import { translate } from "hooks/i18n";
import { ListPage } from "components/shared/page/ListPage";

export interface IProductsPageProps {}

const productColumns: IColumnConfiguration[] = [
	{
		field: "name",
		label: "Nome",
		sort: {
			default: true
		},
		filter: {
			type: "text",
			default: true
		}
	},
	{
		field: "category",
		label: "Categoria",
		filter: {
			type: "text",
			default: false
		}
	},
	{
		field: "price",
		label: "Preço",
		filter: {
			type: "text",
			default: false
		}
	}
	// {
	//     field: "description",
	//     label: "Descrição"
	// }
];

function ProductsPage(props: IProductsPageProps) {
	const text = {
		title: translate("page.productsList.title")
	};

	return (
		<ListPage
			title={text.title}
			columns={productColumns}
			items={products}
		/>
	);
}

export { ProductsPage };
