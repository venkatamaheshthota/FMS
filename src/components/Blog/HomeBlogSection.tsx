"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";

const HomeBlogSection = ({ posts }: any) => {
  const [sortedPosts, setSortedPosts] = useState([...posts]);
  const [isSorted, setIsSorted] = useState(false)

  console.log(posts)
  
  const handleSortByDate = () => {
    // Create a copy of posts to sort
    const sortedPostsCopy = [...posts];

    if (!isSorted) {
      // Sort by date in ascending order
      sortedPostsCopy.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else {
      // Reverse the order of sortedPostsCopy (i.e., sort in descending order)
      sortedPostsCopy.reverse();
    }

    setSortedPosts(sortedPostsCopy); // Update state with sorted posts
    setIsSorted(!isSorted); // Toggle isSorted state
  };
  

  const sortByButton = (
    <button
      style={{backgroundColor: '#81b583'}}
      onClick={handleSortByDate}
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
    >
      Sort by Date
    </button>
  );
  return (
    <section className="dark:bg-dark bg-white pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Events"
            title=""
            paragraph="Our upcoming Meetings & Events"
            width="640px"
            center
            sortByButton={sortByButton}
          />
        </div>

        <div className="-mx-4 flex flex-wrap">
          {sortedPosts.slice(0, 3).map((blog: any) => (
            <div key={blog.id} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;

