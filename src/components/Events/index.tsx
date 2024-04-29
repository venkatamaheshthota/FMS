"use client"
import React, { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import BlogTable from "./BlogTable";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import eventsData from "@/app/eventsData";
import EventsTable from "./EventsTable";

const Events = () => {
  const [sortedPosts, setSortedPosts] = useState([...eventsData]);
  const [sortByName, setSortByName] = useState(false);
  const [sortByDate, setSortByDate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSortByName = async () => {
    setIsLoading(true);
    const sortedPostsCopy = [...sortedPosts];
    const newSortByName = !sortByName; // Toggle sort by name

    sortedPostsCopy.sort((a, b) =>
      newSortByName ? a.EventName.localeCompare(b.EventName) : b.EventName.localeCompare(a.EventName)
    );

    await simulateSortingDelay();
    setSortedPosts(sortedPostsCopy);
    setSortByName(newSortByName);
    setSortByDate(false); // Reset date sorting
    setIsLoading(false);
  };

  const handleSortByDate = async () => {
    setIsLoading(true);
    const sortedPostsCopy = [...sortedPosts];
    const newSortByDate = !sortByDate; // Toggle sort by date
  
    sortedPostsCopy.sort((a, b) => {
      const dateA = new Date(a.Date);
      const dateB = new Date(b.Date);
      return newSortByDate ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    });
  
    await simulateSortingDelay();
    setSortedPosts(sortedPostsCopy);
    setSortByDate(newSortByDate);
    setSortByName(false); // Reset name sorting
    setIsLoading(false);
  };
  
  const simulateSortingDelay = () => {
    return new Promise((resolve) => setTimeout(resolve, 100));
  };

  return (
    <section style={{marginTop: '5%'}} className="dark:bg-dark bg-white pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
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
              {sortByDate && <span className="sort-indicator"></span>}
            </button>
            <button
              style={{ backgroundColor: '#81b583', position: 'relative' }}
              onClick={handleSortByName}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Sort by Name
              {sortByName && <span className="sort-indicator"></span>}
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
            <EventsTable events={sortedPosts} itemsPerPage={5} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Events;
