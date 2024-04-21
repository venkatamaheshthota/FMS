"use client"
import React, { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import HomeBlogData from "@/app/homeBlogData";
import BlogTable from "./BlogTable";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const Events = () => {
  const mockData = [...HomeBlogData, ...HomeBlogData, ...HomeBlogData];
  const [sortedPosts, setSortedPosts] = useState([...mockData]);
  const [sortByName, setSortByName] = useState(false);
  const [sortByDate, setSortByDate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSortByName = async () => {
    setIsLoading(true);
    const sortedPostsCopy = [...sortedPosts];
    sortedPostsCopy.sort((a, b) =>
      sortByName ? b.title.localeCompare(a.title) : a.title.localeCompare(b.title)
    );
    await simulateSortingDelay(); // Simulate sorting delay
    setSortedPosts(sortedPostsCopy);
    setSortByName(!sortByName);
    setSortByDate(false); // Reset other sort flag
    setIsLoading(false);
  };

  const handleSortByDate = async () => {
    setIsLoading(true);
    const sortedPostsCopy = [...sortedPosts];
    sortedPostsCopy.sort((a, b) =>
      sortByDate ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date)
    );
    await simulateSortingDelay(); // Simulate sorting delay
    setSortedPosts(sortedPostsCopy);
    setSortByDate(!sortByDate);
    setSortByName(false); // Reset other sort flag
    setIsLoading(false);
  };

  // Simulate sorting delay (replace with actual sorting logic)
  const simulateSortingDelay = () => {
    return new Promise((resolve) => setTimeout(resolve, 100));
  };

  return (
    <section className="dark:bg-dark bg-white pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <SectionTitle
          subtitle="All Events"
          title=""
          paragraph="Our upcoming Meetings & Events"
          width="640px"
          center
        />
        <div>
          <div className="flex">
            <button
              style={{ backgroundColor: '#81b583', position: 'relative', marginRight: '10px' }}
              onClick={handleSortByDate}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Sort by Date
              {sortByDate && <span style={{ position: 'absolute', top: '-5px', right: '-5px', width: '10px', height: '10px', backgroundColor: 'red', borderRadius: '50%', display: 'inline-block' }}></span>}
            </button>
            <button
              style={{ backgroundColor: '#81b583', position: 'relative' }}
              onClick={handleSortByName}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Sort by Name
              {sortByName && <span style={{ position: 'absolute', top: '-5px', right: '-5px', width: '10px', height: '10px', backgroundColor: 'red', borderRadius: '50%', display: 'inline-block' }}></span>}
            </button>
          </div>
        </div>
        <div className="py-8">
          {isLoading ? (
            <div className="flex items-center justify-center">
              <Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box>
            </div>
          ) : (
            <BlogTable blogs={sortedPosts} itemsPerPage={5} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Events;
