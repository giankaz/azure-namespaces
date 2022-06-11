import { StyledLi } from "./styles";

export default function Card({index, assetType, abbreviation}) {
  return (
    <StyledLi key={index}>
        <p>{assetType}</p>
        <span>{abbreviation}</span>
    </StyledLi>
  )
}
