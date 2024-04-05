import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Communities from "@/components/Communities";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Communities",
  description: "Communities description",
};

const CommunitiesPage = () => {
  return (
    <main>
      {/* <Breadcrumb pageName="Communities" /> */}
      <Communities />
    </main>
  );
};

export default CommunitiesPage;
