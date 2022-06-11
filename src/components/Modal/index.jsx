import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { BiCopyAlt } from "react-icons/bi";
import { useModal } from "../../contexts/Modal";
import ButtonMUI from "../Button";
import InputMUI from "../Textfield";
import { StyledCloseButton, StyledDiv, StyledInput } from "./styles";
import { useSnackbar } from "notistack";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",

	bgcolor: "var(--grey)",
	border: "2px solid #000",
	boxShadow: 24,
	p: "40px 20px 30px 20px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	borderRadius: "8px",
	gap: "10px",
};

export default function GeneratorModal() {
	const { isOpen, openModal, closeModal, modalData } = useModal();

	const [generatedName, setGeneratedName] = useState("Generated Namespace");

	const [name, setName] = useState("");

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

	function mountName() {
		if (modalData.abbreviation && name) {
			const newGeneratedName = modalData.nohyphen
				? `${modalData.abbreviation.toLowerCase()}<${name.toLowerCase()}>${"test"}`
				: `${modalData.abbreviation.toLowerCase()}-<${name.toLowerCase()}>-<${"test"}>`;
			setGeneratedName(newGeneratedName);
			enqueueSnackbar(
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
			enqueueSnackbar("Name was not generated. Missing data.", {
				variant: "error",
				anchorOrigin: {
					vertical: "bottom",
					horizontal: "center",
				},
			});
		}
	}

	useEffect(() => {
		setGeneratedName("Generated Namespace");
		setName("");
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
					<InputMUI
						readOnly={true}
						shrink={false}
						labelText={modalData.assetType}
						min={modalData.charLength ? modalData.charLength.min : undefined}
						max={modalData.charLength ? modalData.charLength.max : undefined}
					/>
					<InputMUI
						labelText={modalData.abbreviation}
						shrink={false}
						min={modalData.charLength ? modalData.charLength.min : undefined}
						max={modalData.charLength ? modalData.charLength.max : undefined}
					/>
					<InputMUI
						labelText="Type your app or service name"
						onChange={(e) => setName(e.target.value)}
						value={name}
						shrink
						min={modalData.charLength ? modalData.charLength.min : undefined}
						max={modalData.charLength ? modalData.charLength.max : undefined}
					/>
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
					<ButtonMUI onClick={mountName}>Generate Azure Namespace</ButtonMUI>
				</Box>
			</Modal>
		</div>
	);
}
