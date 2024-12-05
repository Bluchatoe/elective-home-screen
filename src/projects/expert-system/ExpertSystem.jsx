import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root";
import Law from "./Law";
import ExpertSystemBody from "./ExpertSystemBody";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Navigate to="expert-system" replace />,
      },
      {
        path: "law",
        element: <Law />,
      },
      {
        path: "expert-system",
        element: <ExpertSystemBody />,
      },
    ],
  },
]);

const ExpertSystem = () => {
  return <RouterProvider router={router} />;
};

export default ExpertSystem;