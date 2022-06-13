import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiCopyAlt } from "react-icons/bi";
import * as yup from "yup";
import { useModal } from "../../contexts/Modal";
import mountName from "../../functions/mountName";
import ButtonMUI from "../Button";
import SelectRegion from "../RegionSearcher";
import SelectMUI from "../Select";
import InputMUI from "../Textfield";
import { StyledCloseButton, StyledDiv, StyledInput } from "./styles";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	boxSizing: "border-box",
	bgcolor: "var(--grey)",
	border: "2px solid #000",
	boxShadow: 24,
	p: "40px 20px 30px 20px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	borderRadius: "8px",
	gap: "15px",
};
export const noInstance = ["st", "stdiag"];

export default function GeneratorModal() {
	const { isOpen, openModal, closeModal, modalData } = useModal();

	const [generatedName, setGeneratedName] = useState("Generated Namespace");

	const [name, setName] = useState("");

	const [enviroment, setEnviroment] = useState("");

	const [region, setRegion] = useState("");

	const [instance, setInstance] = useState("");

	const [showInstance, setShowInstance] = useState(true);

	const { enqueueSnackbar } = useSnackbar();

	function copyToClipboard() {
		if (generatedName !== "Generated Namespace") {
			navigator.clipboard.writeText(generatedName);

			const message = "Copied: " + generatedName;

			enqueueSnackbar(message, {
				variant: "success",
				anchorOrigin: {
					vertical: "bottom",
					horizontal: "center",
				},
			});
		} else {
			enqueueSnackbar("Name was not generated. Missing data.", {
				variant: "error",
				anchorOrigin: {
					vertical: "bottom",
					horizontal: "center",
				},
			});
		}
	}

	const regionSchema = showInstance
		? yup.string().required("Select your instance")
		: yup.string();

	const schema = yup.object().shape({
		name: yup.string().required("Type your workload/application name."),
		enviroment: yup.string().required("Select your enviroment."),
		region: yup.string().required("Type or select your region."),
		instance: regionSchema,
	});

	const {
		register,
		handleSubmit,
		setValue,
		getValues,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const submit = ({ name, enviroment, region, instance }) => {
		mountName(
			modalData,
			name,
			region,
			enviroment,
			instance,
			setGeneratedName,
			enqueueSnackbar
		);
	};

	useEffect(() => {
	
		for (let key in errors) {
			enqueueSnackbar(errors[key].message, {
			  variant: "error",
			  autoHideDuration: 3000,
			  anchorOrigin: {
				vertical: 'bottom',
				horizontal: 'center',
			}
		  })
		

		}
	}, [errors]);

	useEffect(() => {
		setValue('name', '')
		setValue('enviroment', '')
		setValue('instance', '')

		setName('')
		setEnviroment('')
		setInstance('')
		setGeneratedName("Generated Namespace")


		const checkInstaceIsNeeded = noInstance.find(
			(item) => item === modalData.abbreviation
		);

		if (checkInstaceIsNeeded) {
			setShowInstance(false);
		}

		return () => {
			setShowInstance(true);
		};
	}, [isOpen]);

	return (
		<div>
			<Modal
				keepMounted
				open={isOpen}
				onClose={closeModal}
				aria-labelledby="keep-mounted-modal-title"
				aria-describedby="keep-mounted-modal-description"
			>
				<form onSubmit={handleSubmit(submit)}>
					<Box sx={style}>
						<StyledCloseButton onClick={closeModal}>x</StyledCloseButton>
						<Typography
							sx={{
								color: "white",
								fontSize: "20px",
								maxWidth: "100%",
								marginBottom: "15px",
							}}
						>
							{modalData.assetType}
						</Typography>
						<InputMUI
							labelText="Type your app or service name"
							value={name}
							onChange={(e) => {
								setValue("name", e.target.value)
								setName(e.target.value)
							}}
						/>
						<SelectMUI
							selectValue="enviroment"
							value={enviroment}
							selectChangeFunction={setValue}
							setter={setEnviroment}
							options={["dev", "qa", "stag", "prod"]}
							selectInfo="Select the enviroment"
						/>
						<SelectRegion setRegion={setValue} />
						{showInstance && (
							<SelectMUI
								selectValue="instance"
								value={instance}
								setter={setInstance}
								selectChangeFunction={setValue}
								options={[
									"001",
									"002",
									"003",
									"004",
									"005",
									"006",
									"007",
									"008",
									"009",
									"010",
								]}
								selectInfo="Select your instance"
							/>
						)}
						<StyledDiv onClick={copyToClipboard}>
							<StyledInput
								readOnly
								placeholder={generatedName}
								value={generatedName}
								onChange={(e) => setGeneratedName(e.target.value)}
							/>
							<BiCopyAlt size={30} className="copybtn" />
							<p className="tooltiptext">Copy to clipboard</p>
						</StyledDiv>
						<ButtonMUI type="submit">Generate Azure Namespace</ButtonMUI>
					</Box>
				</form>
			</Modal>
		</div>
	);
}
