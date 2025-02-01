import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/homePage.page";
import MainLayout from "./layouts/mainLayout.layout";
import JobsPage from "./pages/jobsPage.page";
import NotFoundPage from "./pages/notFoundPage.page";
import JobPage, { jobLoader } from "./pages/jobPage.page";
import AddJobPage from "./pages/addJobPage.page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/add-job" element={<AddJobPage />} />
      <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
