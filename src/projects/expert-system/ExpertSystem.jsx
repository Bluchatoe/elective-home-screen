import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Law from "./Law";
import ExpertSystemBody from "./ExpertSystemBody";

const router = createBrowserRouter([
  {
    path: "/pedero-elective",
    element: <Root />,
    children: [
      {
        path: "law",
        element: <Law />,
      },
      {
        path: "/pedero-elective",
        element: <ExpertSystemBody />,
      },
    ],
  },
]);

const ExpertSystem = () => {
  return <RouterProvider router={router} />;
};

export default ExpertSystem;
