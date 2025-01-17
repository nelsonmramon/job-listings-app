import React from "react";
import Navbar from "./components/Navbar/navbar.component";
import Hero from "./components/Hero/hero.component";
import HomeCards from "./components/Home-Cards/homeCards.component";
import JobListings from "./components/JobListings/jobListings.component";
import ViewAllJobs from "./components/ViewAllJobs/viewAllJobs.component";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};
export default App;
