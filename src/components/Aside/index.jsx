import React from "react";
import FilterList from "../FilterList";
import { StyledAside } from "./styles";

export default function Aside({
	setFilteredData,
	filteredData,
	forceAside,
	setForceAside,
}) {
	return (
		<StyledAside mobile={forceAside ? true : false}>
			<div>
				<h2>Namespaces</h2>
				{forceAside && <button onClick={() => setForceAside(false)}>x</button>}
			</div>
			<FilterList
				setFilteredData={setFilteredData}
				filteredData={filteredData}
				setForceAside={setForceAside}
				forceAside={forceAside}
			/>
		</StyledAside>
	);
}
