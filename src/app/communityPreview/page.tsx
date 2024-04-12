import CommunityPreview from "@/components/Communities/CommunityPreview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Community Preview",
  description: "Community Preview",
};

const CommunitiesPreview = () => {
  return (
    <main>
      <CommunityPreview />
    </main>
  );
};

export default CommunitiesPreview;
