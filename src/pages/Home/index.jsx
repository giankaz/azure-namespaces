import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import Aside from "../../components/Aside";
import CardList from "../../components/CardList";
import GeneratorModal from "../../components/Modal";
import SearchBox from "../../components/Search";
import { useFilter } from "../../contexts/Filter";
import database from "../../databases/db";
import { StyledMain } from "./styles";
import {GiHamburgerMenu} from 'react-icons/gi'
export default function Home() {
	const [
		{
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
		},
		setDatabase,
	] = useState(database);

  const {searchValue} = useFilter()


	const [filteredData, setFilteredData] = useState([]);

  const [forceAside, setForceAside] = useState(false)

  const mobile = useMediaQuery('(max-width: 750px)')
  
	useEffect(() => {
		const newData = [];
  
    if (searchValue !== '') {
      for (let key in database) {
        
        database[key].forEach((data) => {
          if (data.assetType.toLowerCase().includes(searchValue.toLowerCase())) {
            newData.push(data)
          }
        });
      }
      setFilteredData(newData);
    } 

    if (searchValue === '') {
      setFilteredData([])
    }
	}, [searchValue]);

	return (
		<StyledMain>
			{!mobile ? <Aside setFilteredData={setFilteredData} filteredData={filteredData} />
      :
      <div className="menu_hamburguer" onClick={() => setForceAside(true)}>

        <GiHamburgerMenu size={50} />
      </div>
      }
      {forceAside && <Aside setFilteredData={setFilteredData} filteredData={filteredData} mobile={forceAside && true} forceAside={forceAside} setForceAside={setForceAside}/>}
			<section>
        <SearchBox/>
        {filteredData.length > 0 ? 
            <>
            <CardList type={filteredData}/>
            </>
            : 
            (searchValue === '' ?
            <>
            <CardList type={general} />
            <CardList type={networking} /> 
            <CardList type={computeAndWeb} />
            <CardList type={containers} />
            <CardList type={databases} />
            <CardList type={storage} />
            <CardList type={aiAndMachineLearning} />
            <CardList type={analyticsAndIoT} />
            <CardList type={azureVirtualDesktop} />
            <CardList type={devTools} />
            <CardList type={integration} />
            <CardList type={managementAndGovernance} />
            <CardList type={migration} />
            <CardList type={deprecatedProductName} />
            </>
            : (filteredData.length === 0 && <h2>Your search did not return any results.</h2>)
            )
      }
			</section>
      <GeneratorModal/>
		</StyledMain>
	);
}
