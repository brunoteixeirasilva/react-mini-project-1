import React from "react";

import "./AppMenu.scss";
import { useNavigate } from "react-router-dom";
import { Routes } from "components/router/Routes";

export function AppMenu(props): JSX.Element {
	const tileTexts = {
		products: "Produtos",
		suppliers: "Fornecedores",
		sales: "Vendas",
		site: "Site"
	};
	const navigate = useNavigate();

	function onNavigate(
		event: React.MouseEvent<HTMLDivElement>,
		route: string
	): void {
		event.preventDefault();

		if (!route) return;

		navigate(route);
	}

	const tiles = [
		{
			id: 1,
			title: tileTexts.products,
			description: "Acessar a coleção de produtos",
			onClick: (event: React.MouseEvent<HTMLDivElement>): void => {
				onNavigate(event, Routes.ProductsList);
			}
		},
		{
			id: 2,
			title: tileTexts.suppliers,
			description: "Informações sobre fornecedores",
			onClick: (event: React.MouseEvent<HTMLDivElement>): void => {
				onNavigate(event, Routes.SuppliersList);
			}
		},
		{
			id: 3,
			title: tileTexts.sales,
			description: "Histórico de vendas efetuadas"
		},
		{
			id: 4,
			title: tileTexts.site,
			description: "Ver o site externo"
		}
		// Add more groups as needed
	];

	return (
		<div className="menu-grid">
			{tiles.map((tile) => (
				<div
					key={tile.id}
					className="tile"
					onClick={
						tile.onClick ??
						(() => {
							return;
						})
					}
				>
					<h3>{tile.title}</h3>
					<p>{tile.description}</p>
				</div>
			))}
		</div>
	);
}
