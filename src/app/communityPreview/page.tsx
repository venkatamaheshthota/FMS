import Communities from "@/components/Communities";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Community Preview",
  description: "Community Preview",
};

const CommunitiesPreview = () => {
  return (
    <main>
      <Communities />
    </main>
  );
};

export default CommunitiesPreview;
