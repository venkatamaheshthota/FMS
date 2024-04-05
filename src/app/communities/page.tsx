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
      <Communities />
    </main>
  );
};

export default CommunitiesPage;
