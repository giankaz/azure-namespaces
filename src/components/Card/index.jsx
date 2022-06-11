import { StyledLi } from "./styles";
import {MdOutlineOpenInNew} from 'react-icons/md'
import { useModal } from "../../contexts/Modal";

export default function Card({index, card}) {
  const {openModal, setModalData} = useModal()
  return (
    <StyledLi onClick={() => {
      setModalData(card)
      openModal()
    }}>
        <p>{card.assetType}</p>
        <MdOutlineOpenInNew/>
    </StyledLi>
  )
}
