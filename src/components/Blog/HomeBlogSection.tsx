"use client";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import { useRouter } from "next/navigation";

const HomeBlogSection = ({ posts }: any) => {
  const router = useRouter();


  const handleViewAllButton = () => {
    router.push("/events");
  }

  

  const ViewAllButton = (
    <button
      style={{backgroundColor: '#81b583'}}
      onClick={handleViewAllButton}
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
    >
      View All
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
            RightButton={ViewAllButton}
          />
        </div>

        <div className="-mx-4 flex flex-wrap">
          {posts.slice(0, 3).map((blog: any) => (
            <div key={blog.id} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <SingleBlog blog={blog}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;

