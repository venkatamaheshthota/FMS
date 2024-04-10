"use client"
import { useState } from "react";

import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "../Blog/SingleBlog";
import HomeBlogData from "@/app/homeBlogData";

const Events = () => {
  const mockData = [...HomeBlogData, ...HomeBlogData, ...HomeBlogData, ]
  const [sortedPosts, setSortedPosts] = useState([...mockData]);
  const [isSorted, setIsSorted] = useState(false)

  const handleSortByDate = () => {
    // Create a copy of posts to sort
    const sortedPostsCopy = [...mockData];

    // Determine sorting direction based on current state
    if (!isSorted) {
      // Sort by date in ascending order
      sortedPostsCopy.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else {
      // Sort by date in descending order
      sortedPostsCopy.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    setSortedPosts(sortedPostsCopy); // Update state with sorted posts
    setIsSorted(!isSorted); // Toggle isSorted state
  };

  const SortButton = (
    <button
      style={{backgroundColor: '#81b583'}}
      onClick={handleSortByDate}
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
    >
      Sort
    </button>
  );

  return (
    <section className="dark:bg-dark bg-white pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
    <div className="container mx-auto">
      <div className="mb-[60px]">
        <SectionTitle
          subtitle="All Events"
          title=""
          paragraph="Our upcoming Meetings & Events"
          width="640px"
          center
          RightButton={SortButton}
        />
      </div>

      <div className="-mx-4 flex flex-wrap">
        {sortedPosts.map((blog: any) => (
          <div key={blog.id} className="w-full px-4 md:w-1/2 lg:w-1/3">
            <SingleBlog blog={blog} />
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Events;
