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
import {
	StyledCloseButton,
	StyledDiv, StyledInput
} from "./styles";

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
export const noInstance = ['st', 'stdiag']

export default function GeneratorModal() {
	const { isOpen, openModal, closeModal, modalData } = useModal();

	const [generatedName, setGeneratedName] = useState("Generated Namespace");

	const [name, setName] = useState("");

	const [enviroment, setEnviroment] = useState("");

	const [region, setRegion] = useState("");
    console.log(`🤖 ~ GeneratorModal ~ region`, region)

	const [instance, setInstance] = useState("");

	const [reset, setReset] = useState(false)

	const [showInstance, setShowInstance] = useState(true)

	

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

	const schema = yup.object().shape({});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const submit = (data) => {
		console.log(data);
	};

	useEffect(() => {
		setRegion("")
		setGeneratedName("Generated Namespace");
		setName("");
		setEnviroment("");
		setInstance("");
		setReset(true)
		const checkInstaceIsNeeded = noInstance.find((item) => item === modalData.abbreviation)
        
		if (checkInstaceIsNeeded) {
			setShowInstance(false)
		}
	
		return () => {
			setReset(false)
			setShowInstance(true)
		}
	
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
						required
						labelText="Type your app or service name"
						onChange={(e) => setName(e.target.value)}
						value={name}
						min={modalData.charLength ? modalData.charLength.min : undefined}
						max={modalData.charLength ? modalData.charLength.max : undefined}
					/>
					<SelectMUI
						selectValue={enviroment}
						selectChangeFunction={setEnviroment}
						options={["dev", "prod", "qa", "stag"]}
						selectInfo="Select the enviroment"
					/>
					{reset && <SelectRegion region={region} setRegion={setRegion} />}
					{showInstance && 
					<SelectMUI
					selectValue={instance}
					selectChangeFunction={setInstance}
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
						"010"
					]}
					selectInfo="Select your instance"
				/>}
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
					<ButtonMUI
						onClick={() =>
							mountName(
								modalData,
								name,
								region,
								enviroment,
								instance,
								setGeneratedName,
								enqueueSnackbar
							)
						}
					>
						Generate Azure Namespace
					</ButtonMUI>
				</Box>
			</Modal>
		</div>
	);
}
