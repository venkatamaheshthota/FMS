import Communities from "@/components/Communities";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Communities Preview",
  description: "Communities description",
};

const CommunityPreviewPage = () => {
  return (
    <main>
      <Communities />
    </main>
  );
};

export default CommunityPreviewPage;
