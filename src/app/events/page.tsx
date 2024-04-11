import Communities from "@/components/Communities";
import Events from "@/components/Events";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "All Events",
  description: "EventsPage description",
};

const EventsPage = () => {
  return (
    <main>
      <Events />
    </main>
  );
};

export default EventsPage;
