import Card from "../Card";
import { StyledUl } from "./styles";

export default function CardList({ type }) {
    console.log(`🤖 ~ CardList ~ type`, type)
	return (
		<StyledUl>
			{type.map((card, index) => (
				<Card
					index={index}
					assetType={card.assetType}
					abbreviation={card.abbreviation}
				/>
			))}
		</StyledUl>
	);
}
