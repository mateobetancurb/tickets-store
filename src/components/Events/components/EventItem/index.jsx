const EventItem = ({ id, info, name, image, onEventClick }) => {
	const handleSeeMoreClick = (e) => {
		e.stopPropagation();
		onEventClick(id);
	};

	return (
		<div className="flex w-4/5 mx-auto mb-1 gap-5 hover:bg-gray-700 p-5 rounded-lg transition-colors">
			<img
				src={image}
				alt={name}
				width={200}
				height={200}
				className="rounded-md"
			/>
			<div>
				<h4 className="font-bold text-lg">{name}</h4>
				<p className="text-sm">{info}</p>
				<button
					onClick={handleSeeMoreClick}
					className="bg-[#00000034] px-3 py-2 rounded-md shadow-md mt-5 hover:bg-[#00000095] transition-colors"
				>
					Ver más
				</button>
			</div>
		</div>
	);
};

export { EventItem };
