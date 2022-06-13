import { noInstance } from "../../components/Modal";

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
	setGenerated(newGeneratedName);
	snackbar(`Name ${newGeneratedName} was generated, click on it to copy.`, {
		variant: "success",
		anchorOrigin: {
			vertical: "bottom",
			horizontal: "center",
		},
	});
}
