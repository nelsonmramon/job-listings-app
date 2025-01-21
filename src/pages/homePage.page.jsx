import React from "react";
import Hero from "../components/Hero/hero.component";
import HomeCards from "../components/Home-Cards/homeCards.component";
import JobListings from "../components/JobListings/jobListings.component";
import ViewAllJobs from "../components/ViewAllJobs/viewAllJobs.component";

const HomePages = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePages;
