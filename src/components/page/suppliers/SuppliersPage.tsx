import React from "react";
import {
	IColumnConfiguration,
	SortDirection
} from "components/shared/list/base/DataList";
import { suppliers } from "components/shared/list/base/_mock/suppliers";
import { translate } from "hooks/i18n";
import { ListPage } from "components/shared/page/ListPage";

export interface ISuppliersPageProps {}

const supplierColumns: IColumnConfiguration[] = [
	{
		field: "name",
		label: "Nome",
		sort: {
			direction: SortDirection.ASC,
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
	}
];

function SuppliersPage(props: ISuppliersPageProps) {
	const text = {
		title: translate("page.suppliersList.title")
	};

	return (
		<ListPage
			title={text.title}
			columns={supplierColumns}
			items={suppliers}
		/>
	);
}

export { SuppliersPage };
