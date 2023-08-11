const EventItem = ({ id, info, name, image, onEventClick }) => {
	const handleSeeMoreClick = (e) => {
		e.stopPropagation();
		onEventClick(id);
	};

	return (
		<div onClick={() => console.log("padre click")}>
			<img src={image} alt={name} width={200} height={200} />
			<h4>{name}</h4>
			<p>{info}</p>
			<button onClick={handleSeeMoreClick}>Ver más</button>
		</div>
	);
};

export { EventItem };
