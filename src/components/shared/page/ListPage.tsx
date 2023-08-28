import React, { useMemo } from "react";

import {
	DataList,
	IColumnConfiguration,
	IdentifiedListItem
} from "components/shared/list/base/DataList";

import "./ListPage.scss";

export interface IListPageProps<T extends IdentifiedListItem> {
	title: string;
	columns: IColumnConfiguration[];
	items: T[];
}

function ListPage<T extends IdentifiedListItem>(props: IListPageProps<T>) {
	const resolvedColumns = useMemo(() => {
		return props?.columns && props?.columns.length > 0 ? props.columns : [];
	}, [props.columns]);
	const resolvedItems = useMemo(() => {
		return props?.items && props?.items.length > 0 ? props.items : [];
	}, [props.items]);

	return (
		<section className="listPage">
			<h2 className="listPage__title">{props.title}</h2>
			<div className="listPage__listContainer">
				<DataList columns={resolvedColumns} items={resolvedItems} />
			</div>
		</section>
	);
}

export { ListPage };
