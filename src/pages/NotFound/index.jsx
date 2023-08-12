import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="flex justify-center items-center flex-col mt-10">
			<h2 className="text-3xl font-extrabold mb-5">Error 404</h2>
			<p className="text-xl mb-5">Esta página no existe</p>
			<Link to="/">
				<button className="bg-[#00000034] px-5 py-1 rounded-lg shadow-md">
					Volver a inicio
				</button>
			</Link>
		</div>
	);
};
export { NotFound };
