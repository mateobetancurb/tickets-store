import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";
import { Detail } from "../pages/Detail";
import { NotFound } from "../pages/NotFound";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <NotFound />,
	},
	{
		path: "/detail/:eventId",
		element: <Detail />,
	},
]);

const MyRoutes = () => <RouterProvider router={router} />;

export { MyRoutes };
