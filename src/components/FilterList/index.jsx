import { useDatabase } from "../../contexts/Database";
import { StyledLi, StyledUl } from "./styles";

export default function FilterList({setFilteredData, filteredData}) {
 
	const {
			general,
			networking,
			computeAndWeb,
			containers,
			databases,
			storage,
			aiAndMachineLearning,
			analyticsAndIoT,
			azureVirtualDesktop,
			devTools,
			integration,
			managementAndGovernance,
			migration,
			deprecatedProductName,
		} = useDatabase()

		

	return (
		<StyledUl>
			<StyledLi onClick={() => setFilteredData([])} color={filteredData.length === 0 ? 'var(--blue)' : undefined}>Show All</StyledLi>
			<StyledLi onClick={() => setFilteredData(general)} color={filteredData === general ? 'var(--blue)' : undefined}>General</StyledLi>
			<StyledLi onClick={() => setFilteredData(networking)} color={filteredData === networking ? 'var(--blue)' : undefined}>Networking</StyledLi>
			<StyledLi onClick={() => setFilteredData(computeAndWeb)} color={filteredData === computeAndWeb ? 'var(--blue)' : undefined}>Compute and Web</StyledLi>
			<StyledLi onClick={() => setFilteredData(containers)} color={filteredData === containers ? 'var(--blue)' : undefined}>Containers</StyledLi>
			<StyledLi onClick={() => setFilteredData(databases)} color={filteredData === databases ? 'var(--blue)' : undefined}>Databases</StyledLi>
			<StyledLi onClick={() => setFilteredData(storage)} color={filteredData === storage ? 'var(--blue)' : undefined}>Storage</StyledLi>
			<StyledLi onClick={() => setFilteredData(aiAndMachineLearning)} color={filteredData === aiAndMachineLearning ? 'var(--blue)' : undefined}>Ai and Machine Learning</StyledLi>
			<StyledLi onClick={() => setFilteredData(analyticsAndIoT)} color={filteredData === analyticsAndIoT ? 'var(--blue)' : undefined}>Analytics and IoT</StyledLi>
			<StyledLi onClick={() => setFilteredData(azureVirtualDesktop)} color={filteredData === azureVirtualDesktop ? 'var(--blue)' : undefined}>AzureVirtualDesktop</StyledLi>
			<StyledLi onClick={() => setFilteredData(devTools)} color={filteredData === devTools ? 'var(--blue)' : undefined}>Developer Tools</StyledLi>
			<StyledLi onClick={() => setFilteredData(integration)} color={filteredData === integration ? 'var(--blue)' : undefined}>Integration</StyledLi>
			<StyledLi onClick={() => setFilteredData(managementAndGovernance)} color={filteredData === managementAndGovernance ? 'var(--blue)' : undefined}>Management and Governance</StyledLi>
			<StyledLi onClick={() => setFilteredData(migration)} color={filteredData === migration ? 'var(--blue)' : undefined}>Migration</StyledLi>
			<StyledLi onClick={() => setFilteredData(deprecatedProductName)} color={filteredData === deprecatedProductName ? 'var(--blue)' : undefined}>Deprecated Product Name</StyledLi>
		</StyledUl>
	);
}
