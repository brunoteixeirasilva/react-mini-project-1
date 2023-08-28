// src/components/ProductList.js
import React, { useMemo, useState } from "react";

// import products from './_mock/products';
import "./DataList.scss";

export declare type IdentifiedListItem = {
	id: string;
};

export enum SortDirection {
	ASC = "asc",
	DESC = "desc"
}

export interface ISelectOption {
	value: string;
	label: string;
	default?: undefined | boolean;
}

export interface IColumnFilter {
	type: "text" | "select";
	options?: ISelectOption[];
	default?: undefined | boolean;
}

export interface IColumnSort {
	direction?: SortDirection;
	default?: undefined | boolean;
}

export interface IColumnConfiguration {
	field: string;
	label: string;
	render?: undefined | ((item: any) => JSX.Element);
	sort?: undefined | IColumnSort;
	filter?: undefined | IColumnFilter;
}

export interface IDataList<T extends IdentifiedListItem> {
	columns: IColumnConfiguration[];
	items: T[];
}

const _defaultFilter: IColumnConfiguration = {
	field: "id",
	label: "ID",
	filter: {
		type: "text",
		default: true
	}
};

const _defaultSort: IColumnConfiguration = {
	field: "id",
	label: "ID",
	sort: {
		direction: SortDirection.ASC,
		default: true
	}
};

function DataList<T extends IdentifiedListItem>(
	props: IDataList<T>
): JSX.Element {
	const placeholder = {
		filterText: "Para filtrar, escreva aqui.."
	};
	const defaultSortProperty =
		!props.columns || props.columns.length === 0
			? _defaultSort
			: props.columns.find((column) => !!column.sort?.default) ??
			  props.columns[0];
	const defaultFilterProperty =
		!props.columns || props.columns.length === 0
			? _defaultFilter
			: props.columns.find((column) => !!column.filter?.default) ??
			  props.columns[0];
	const [filter, setFilter] = useState("");
	const [filterProp, setFilterProp] = useState<IColumnConfiguration>(
		defaultFilterProperty
	);
	const [sortProp, setSortProp] = useState(defaultSortProperty);
	const [sortDirection, setSortDirection] = useState(
		sortProp.sort?.direction ?? SortDirection.ASC
	);

	const filteredItems = useMemo(
		() =>
			props.items?.filter((item) => {
				const filterResult = String(item[filterProp.field])
					.toLowerCase()
					.includes(filter.toLowerCase());

				return filterResult;
			}) ?? [],
		[filter, filterProp, props.items]
	);

	const sortedItems = useMemo(
		() =>
			[...filteredItems].sort((a, b) => {
				const isAsc = sortDirection === SortDirection.ASC;
				if (a[sortProp.field] < b[sortProp.field])
					return isAsc ? -1 : 1;
				if (a[sortProp.field] > b[sortProp.field])
					return isAsc ? 1 : -1;
				return 0;
			}),
		[filteredItems, sortDirection, sortProp]
	);

	const handleSetFilterProp = (event, field) => {
		event.preventDefault();

		setFilterProp(field);
	};

	const handleSort = (event, newSortProperty: IColumnConfiguration) => {
		event.preventDefault();

		if (sortProp.field === newSortProperty.field) {
			setSortDirection((prev) =>
				prev === SortDirection.ASC
					? SortDirection.DESC
					: SortDirection.ASC
			);
		} else {
			setSortProp(newSortProperty);
			setSortDirection((prev) =>
				prev === SortDirection.ASC
					? SortDirection.DESC
					: SortDirection.ASC
			);
		}
	};

	return (
		<div className="data-list">
			<div className="filters">
				<select
					value={filterProp.field}
					onChange={(e) => {
						const newFilterProp =
							props.columns.find(
								(column) => column.field === e.target.value
							) ?? defaultFilterProperty;

						return handleSetFilterProp(e, newFilterProp);
					}}
				>
					{props.columns.map((column) => (
						<option key={column.field} value={column.field}>
							{column.label}
						</option>
					))}
				</select>
				<input
					type="text"
					placeholder={placeholder.filterText}
					value={filter}
					onChange={(e) => setFilter(e.target.value)}
				/>
			</div>

			<table>
				<thead>
					<tr>
						{props.columns.map((column) => (
							<th
								key={column.field}
								onClick={(e) => handleSort(e, column)}
							>
								{column.render?.(column) ?? column.label}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{sortedItems.map((item, index) => (
						<tr key={!item?.id ? index : item.id}>
							{props.columns.map((column) => (
								<td key={column.field}>
									{column.render?.(item) ??
										item[column.field]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export { DataList };
