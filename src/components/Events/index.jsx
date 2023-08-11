import { useEffect, useState } from "react";
import { EventItem } from "./components/EventItem";

const Events = () => {
	const [apiData, setApiData] = useState([]);

	const getApiData = async () => {
		try {
			const url = `${import.meta.env.VITE_URL_API}${
				import.meta.env.VITE_CONSUMER_KEY
			}`;
			const req = await fetch(url);
			const res = await req.json();
			const events = res._embedded.events;
			if (!req.ok) {
				throw new Error("Error HTTP:" + req.status);
			}
			setApiData(events);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getApiData();
	}, []);

	const eventsComponent = apiData.map((eventItem) => (
		<EventItem
			key={eventItem.id}
			info={eventItem.info}
			name={eventItem.name}
			image={eventItem.images[0].url}
		/>
	));

	return (
		<>
			<div>Eventos</div>
			{eventsComponent}
		</>
	);
};

export { Events };
