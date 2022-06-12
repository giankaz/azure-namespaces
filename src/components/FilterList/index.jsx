import { useDatabase } from "../../contexts/Database";
import FilterLi from "../FilterLi";
import { StyledUl } from "./styles";

export default function FilterList({setFilteredData, filteredData, setForceAside}) {
 
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
			<FilterLi setFilteredData={setFilteredData} filteredData={filteredData} setForceAside={setForceAside} type='all'>Show All</FilterLi>
			<FilterLi setFilteredData={setFilteredData} filteredData={filteredData} type={general} setForceAside={setForceAside}>General</FilterLi>
			<FilterLi setFilteredData={setFilteredData} filteredData={filteredData} type={networking} setForceAside={setForceAside}>Networking</FilterLi>
			<FilterLi setFilteredData={setFilteredData} filteredData={filteredData} type={computeAndWeb} setForceAside={setForceAside}>Compute and Web</FilterLi>
			<FilterLi setFilteredData={setFilteredData} filteredData={filteredData} type={containers} setForceAside={setForceAside}>Containers</FilterLi>
			<FilterLi setFilteredData={setFilteredData} filteredData={filteredData} type={databases} setForceAside={setForceAside}>Databases</FilterLi>
			<FilterLi setFilteredData={setFilteredData} filteredData={filteredData} type={storage} setForceAside={setForceAside}>Storage</FilterLi>
			<FilterLi setFilteredData={setFilteredData} filteredData={filteredData} type={aiAndMachineLearning} setForceAside={setForceAside}>AI and Machine Learning</FilterLi>
			<FilterLi setFilteredData={setFilteredData} filteredData={filteredData} type={analyticsAndIoT} setForceAside={setForceAside}>Analytics and IoT</FilterLi>
			<FilterLi setFilteredData={setFilteredData} filteredData={filteredData} type={azureVirtualDesktop} setForceAside={setForceAside}>Azure Virtual Desktop</FilterLi>
			<FilterLi setFilteredData={setFilteredData} filteredData={filteredData} type={devTools} setForceAside={setForceAside}>Developer Tools</FilterLi>
			<FilterLi setFilteredData={setFilteredData} filteredData={filteredData} type={integration} setForceAside={setForceAside}>Integration</FilterLi>
			<FilterLi setFilteredData={setFilteredData} filteredData={filteredData} type={managementAndGovernance} setForceAside={setForceAside}>Management and Governance</FilterLi>
			<FilterLi setFilteredData={setFilteredData} filteredData={filteredData} type={migration} setForceAside={setForceAside}>Migration</FilterLi>
			<FilterLi setFilteredData={setFilteredData} filteredData={filteredData} type={deprecatedProductName} setForceAside={setForceAside}>Deprecated Product Name</FilterLi>
		</StyledUl>
	);
}
