import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputMUI from "../Textfield";
import ButtonMUI from "../Button";
import { flexbox } from "@mui/system";
import { useModal } from "../../contexts/Modal";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",

	bgcolor: "var(--grey)",
	border: "2px solid #000",
	boxShadow: 24,
	p: "30px 20px 30px 20px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	borderRadius: "8px",
	gap: "10px",
};

export default function GeneratorModal() {
	const { isOpen, openModal, closeModal, modalData } = useModal();


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
					<InputMUI
						labelText={modalData.assetType}
						min={modalData.charLength ? modalData.charLength.min : undefined}
						max={modalData.charLength ? modalData.charLength.max : undefined}
					/>
					<InputMUI
						labelText={modalData.abbreviation}
						min={modalData.charLength ? modalData.charLength.min : undefined}
						max={modalData.charLength ? modalData.charLength.max : undefined}
					/>
					<InputMUI
						labelText={modalData.charLength && modalData.charLength.min}
						min={modalData.charLength ? modalData.charLength.min : undefined}
						max={modalData.charLength ? modalData.charLength.max : undefined}
					/>
					<ButtonMUI>Generate Azure Namespace</ButtonMUI>
				</Box>
			</Modal>
		</div>
	);
}
