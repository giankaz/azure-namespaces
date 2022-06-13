export default function mountName(
	data,
	name,
	region,
	enviroment,
	instance,
	setGenerated,
	snackbar
) {
	const newGeneratedName = data.nohyphen
		? `${data.abbreviation.toLowerCase()}${name.toLowerCase()}${enviroment}${region}${
				instance ? instance : ""
		  }`
		: `${data.abbreviation.toLowerCase()}-${name.toLowerCase()}-${enviroment}-${region}-${
				instance ? instance : ""
		  }`;

	if (data.charLength) {
	    if (newGeneratedName.length < data.charLength.min) {
			snackbar(
				`The length of the generated needs to reach the minimum of ${data.charLength.min}`,
				{
					variant: "error",
					anchorOrigin: {
						vertical: "bottom",
						horizontal: "center",
					},
				}
			);
		} else {
			setGenerated(newGeneratedName);

			snackbar(`Name ${newGeneratedName} was generated, click on it to copy.`, {
				variant: "success",
				anchorOrigin: {
					vertical: "bottom",
					horizontal: "center",
				},
			});
		}
	} else {
		 if (newGeneratedName.length < 3) {
			snackbar(
				`The length of the generated needs to reach the minimum of ${data.charLength.min}`,
				{
					variant: "error",
					anchorOrigin: {
						vertical: "bottom",
						horizontal: "center",
					},
				}
			);
		} else {
			setGenerated(newGeneratedName);

			snackbar(`Name ${newGeneratedName} was generated, click on it to copy.`, {
				variant: "success",
				anchorOrigin: {
					vertical: "bottom",
					horizontal: "center",
				},
			});
		}
	}
}


/* if (newGeneratedName.length > data.charLength.max) {
	snackbar(
		`The length of the generated namespace exceeds the maximum limit of ${data.charLength.max}`,
		{
			variant: "error",
			anchorOrigin: {
				vertical: "bottom",
				horizontal: "center",
			},
		}
	);
} else  */
/* 
if (newGeneratedName.length > 32) {
	snackbar(
		`The length of the generated namespace exceeds the maximum limit of ${data.charLength.max}`,
		{
			variant: "error",
			anchorOrigin: {
				vertical: "bottom",
				horizontal: "center",
			},
		}
	);
} else */