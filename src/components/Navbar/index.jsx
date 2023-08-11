import { useState } from "react";

const Navbar = ({ onSearch }) => {
	const [search, setSearch] = useState("");

	const handleInputChange = (e) => {
		setSearch(e.target.value);
	};

	const handleInputKeyDown = (e) => {
		if (e.key === "Enter") {
			onSearch(search);
		}
	};

	return (
		<>
			<p>Navbar</p>
			<input
				placeholder="Busca aquí tus eventos"
				onChange={handleInputChange}
				onKeyDown={handleInputKeyDown}
				value={search}
			/>
		</>
	);
};

export { Navbar };
