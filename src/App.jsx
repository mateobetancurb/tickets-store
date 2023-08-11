import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Events } from "./components/Events";

const App = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleNavbarSearch = (term) => {
		setSearchTerm(term);
	};

	console.log(searchTerm, 10);

	return (
		<>
			<Navbar onSearch={handleNavbarSearch} />
			<Events searchTerm={searchTerm} />
		</>
	);
};

export { App };
