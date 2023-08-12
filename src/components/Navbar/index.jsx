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
			<div className="flex items-center justify-between w-4/5 mx-auto py-10">
				<p className="text-lg font-extrabold">La tiquetera</p>
				<input
					placeholder="Busca tu evento favorito..."
					onChange={handleInputChange}
					onKeyDown={handleInputKeyDown}
					value={search}
					className="bg-[#00000034] p-3 rounded-lg placeholder:text-white shadow-md"
				/>
			</div>
		</>
	);
};

export { Navbar };
