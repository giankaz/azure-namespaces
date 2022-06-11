import { StyledLi } from "./styles";

export default function FilterLi({
	setFilteredData,
	filteredData,
	setForceAside,
	type,
	children,
}) {
	if (type === 'all') {
	
		return (
			<StyledLi
				onClick={() => {
					setFilteredData([]);
					if (setForceAside) setForceAside(false);
				}}
				color={filteredData.length === 0 ? "var(--blue)" : undefined}
			>
				{children}
			</StyledLi>
		);
	} else {

		return (
			<StyledLi
				onClick={() => {
					setFilteredData(type);
					if (setForceAside) setForceAside(false);

				}}
				color={filteredData === type ? "var(--blue)" : undefined}
			>
				{children}
			</StyledLi>
		);
	}
}
