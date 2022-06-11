import Card from "../Card";
import { StyledUl } from "./styles";


export default function CardList({ type }) {

	return (
		<StyledUl>
			{type.map((card, index) => (
				<Card
					key={index}
					card={card}
				
				/>
			))}
		</StyledUl>
	);
}
