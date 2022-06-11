
export default function mountName(data, name, region, enviroment, instance, setGenerated, snackbar) {
    		if (data.abbreviation && name && region && enviroment && instance) {
			const newGeneratedName = data.nohyphen
				? `${data.abbreviation.toLowerCase()}${name.toLowerCase()}${enviroment}${region}${instance}`
				: `${data.abbreviation.toLowerCase()}-${name.toLowerCase()}-${enviroment}-${region}-${instance}`;
			setGenerated(newGeneratedName);
			snackbar(
				`Name ${newGeneratedName} was generated, click on it to copy.`,
				{
					variant: "success",
					anchorOrigin: {
						vertical: "bottom",
						horizontal: "center",
					},
				}
			);
		} else {
			snackbar("Name was not generated. Missing data.", {
				variant: "error",
				anchorOrigin: {
					vertical: "bottom",
					horizontal: "center",
				},
			});
		}
	
}
