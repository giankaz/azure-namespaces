import { createContext, useContext, useState } from "react";
import database from "../../db";

export const DatabaseContext = createContext();

export function DatabaseProvider({ children }) {
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

	return (
		<DatabaseContext.Provider
			value={{
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
			}}
		>
			{children}
		</DatabaseContext.Provider>
	);
}

export const useDatabase = () => useContext(DatabaseContext);
