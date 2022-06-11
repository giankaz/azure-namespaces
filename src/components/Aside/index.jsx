import React from "react";
import FilterList from "../FilterList";
import { StyledAside } from "./styles";

export default function Aside({setFilteredData, filteredData}) {
	return (
		<StyledAside>
			<h2>Azure Namespaces:</h2>
			<FilterList setFilteredData={setFilteredData} filteredData={filteredData}/>
		</StyledAside>
	);
}
