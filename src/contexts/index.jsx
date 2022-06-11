import { DatabaseProvider } from "./Database";
import { FilterProvider } from "./Filter";
import { ModalProvider } from "./Modal";

export default function Providers({ children }) {
	return (
		<DatabaseProvider>
			<ModalProvider>
				<FilterProvider>{children}</FilterProvider>
			</ModalProvider>
		</DatabaseProvider>
	);
}
