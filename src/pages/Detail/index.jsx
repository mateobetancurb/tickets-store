import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
	const { eventId } = useParams();
	const [eventDetails, setEventDetails] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const getEventDetailApi = async () => {
		try {
			const url = ` https://app.ticketmaster.com/discovery/v2/events/${eventId}/?apikey=${
				import.meta.env.VITE_CONSUMER_KEY
			}`;
			const req = await fetch(url);
			if (!req.ok) {
				throw new Error("Error HTTP:" + req.status);
			}
			const res = await req.json();
			setEventDetails(res);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getEventDetailApi();
	}, []);

	if (isLoading && Object.keys(eventDetails) === 0) {
		return <p>Cargando detalles del evento...</p>;
	}

	return (
		<>
			<div>Detail</div>
		</>
	);
};

export { Detail };
