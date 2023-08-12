import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";
import { Detail } from "../pages/Detail";
import { NotFound } from "../pages/NotFound";
import { Profile } from "../pages/Profile";

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
	{
		path: "/profile",
		element: <Profile />,
		children: [
			{
				path: "my-info",
				element: <p>my info</p>,
			},
			{
				path: "liked-events",
				element: <p>liked events</p>,
			},
		],
	},
]);

const MyRoutes = () => <RouterProvider router={router} />;

export { MyRoutes };
