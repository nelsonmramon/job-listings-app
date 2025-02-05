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
import EditJobPage from "./pages/editJobPage.page";

const App = () => {
  //ADD new Job
  const addJob = async (newJob) => {
    // console.log(newJob);
    const response = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  //DELETE Job
  const deleteJob = async (id) => {
    console.log("delete", id);
    const response = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  //UPDATE Job
  const updateJob = async (job) => {
    const response = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default App;
