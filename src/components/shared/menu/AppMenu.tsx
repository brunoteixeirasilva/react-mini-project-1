import React from "react";

import "./AppMenu.scss";

export function AppMenu(props): JSX.Element {
	const tiles = [
		{
			id: 1,
			title: "Produtos",
			description: "Acessar a coleção de produtos"
		},
		{
			id: 2,
			title: "Fornecedores",
			description: "Informações sobre fornecedores"
		},
		{
			id: 3,
			title: "Vendas",
			description: "Histórico de vendas efetuadas"
		},
		{
			id: 4,
			title: "Site",
			description: "Ver o site externo"
		}
		// Add more groups as needed
	];

	return (
		<div className="menu-grid">
			{tiles.map((tile) => (
				<div key={tile.id} className="tile">
					<h3>{tile.title}</h3>
					<p>{tile.description}</p>
				</div>
			))}
		</div>
	);
}
