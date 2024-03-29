import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EventItem } from "./components/EventItem";

const Events = ({ searchTerm }) => {
	const [apiData, setApiData] = useState([]);
	const navigate = useNavigate();

	const getApiData = async () => {
		try {
			const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${
				import.meta.env.VITE_CONSUMER_KEY
			}&countryCode=MX`;
			const req = await fetch(url);
			if (!req.ok) {
				throw new Error("Error HTTP:" + req.status);
			}
			const res = await req.json();
			const events = res._embedded.events;
			setApiData(events);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getApiData();
	}, []);

	const handleEventClick = (id) => {
		navigate(`/detail/${id}`);
	};

	const renderEvents = () => {
		let eventsFiltered = apiData;

		if (searchTerm.length > 0) {
			eventsFiltered = eventsFiltered.filter((item) =>
				item.name.toLowerCase().includes(searchTerm)
			);
		}

		return eventsFiltered.map((eventItem) => (
			<EventItem
				key={eventItem.id}
				id={eventItem.id}
				info={eventItem.info}
				name={eventItem.name}
				image={eventItem.images[0].url}
				onEventClick={handleEventClick}
			/>
		));
	};

	return (
		<>
			<div className="text-center text-lg font-extrabold mt-5 mb-16">
				Eventos que no puedes perderte este mes
			</div>
			{renderEvents()}
		</>
	);
};

export { Events };
