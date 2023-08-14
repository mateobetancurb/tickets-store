import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

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
		setTimeout(() => {
			getEventDetailApi();
		}, 900);
	}, []);

	return (
		<>
			{isLoading ? (
				<p className="text-center pt-20">Cargando detalles del evento...</p>
			) : (
				<div className="w-4/5 relative flex flex-col mx-auto pb-10">
					<Link to="/">
						<button className="absolute top-10 flex gap-2 bg-[#00000034] px-5 py-2 rounded-md shadow-md hover:bg-[#00000095] transition-colors">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
								/>
							</svg>
							Volver
						</button>
					</Link>

					<div className="flex justify-center py-10">
						<h2 className="text-lg font-extrabold underline">
							Aquí están los detalles del evento
						</h2>
					</div>
					<figure>
						<img
							src={eventDetails?.images[0].url}
							alt={eventDetails?.name}
							width={500}
							height={500}
							className="rounded-xl mx-auto"
						/>
					</figure>
					<p className="py-5 font-bold">
						Nombre del evento:{" "}
						<span className="font-normal">{eventDetails?.name}</span>
					</p>
					<p className="font-bold pb-5">
						Información del evento:{" "}
						<span className="font-normal">{eventDetails?.info}</span>
					</p>
					<p className="font-bold mb-5">
						Precios:{" "}
						<span className="font-normal">
							Max ${eventDetails?.priceRanges[0].max} USD - Min $
							{eventDetails?.priceRanges[0].min} USD
						</span>
					</p>

					<p className="font-bold pb-5">Mapa del sitio y sillas disponibles:</p>
					<figure className="mx-auto">
						<img
							src={eventDetails?.seatmap?.staticUrl}
							alt={`Mapa sillas disponibles del evento: ${eventDetails?.name}`}
							className=" rounded-xl"
						/>
					</figure>
				</div>
			)}
		</>
	);
};

export { Detail };
