import { StyledLi } from "./styles";
import {MdOutlineOpenInNew} from 'react-icons/md'
import { useModal } from "../../contexts/Modal";

export default function Card({index, assetType, abbreviation}) {
  const {setIsOpen, setModalData} = useModal()
  return (
    <StyledLi onClick={() => {
      setModalData({assetType, abbreviation})
      setIsOpen(true)
    }}>
        <p>{assetType}</p>
        <MdOutlineOpenInNew/>
    </StyledLi>
  )
}
