"use client"
import { useRouter } from "next/navigation";
import SectionTitle from "../Common/SectionTitle";
import SingleCommunity from "./SingleCommunity";
import { CommunityType } from "@/types/communityType";

export const areas: any = {
  NORTH_EAST: 'Northeast',
  NORTH_WEST: 'Northwest',
};

const communityData: CommunityType[] = [
  {
    id: 0,
    name: "Fernandina Beach",
    area: areas.NORTH_WEST,
    image: "/images/communities/fbeachCommunity.png",
  },
  {
    id: 1,
    name: "Havana Main \nStreet",
    area: areas.NORTH_WEST,
    image: "/images/communities/havanacommunity.png",
  },
  {
    id: 2,
    name: "Quincy Main \nStreet",
    area: areas.NORTH_WEST,
    image: "/images/communities/quincycommunity.png",
  },
  {
    id: 3,
    name: "Chattohoochee Main \nStreet",
    area: areas.NORTH_WEST,
    image: "/images/communities/chtcommunity.png",
  },
  {
    id: 4,
    name: "Stuart Main Street",
    area: areas.NORTH_WEST,
    image: "/images/communities/strtCommunity.png",
  },
];

const Communities = () => {
  const router = useRouter();

  const handleView = async (community: CommunityType) => {
    await localStorage.removeItem('communityId');
    await localStorage.setItem('communityId', `${community.id}`);
    router.push('communityPreview');
  };

  // Separate sorting of communityData
  const sortedCommunityData = [...communityData].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section
      id="Communities"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            // subtitle="Ask the Locals"
            title="Florida's Main Street communities"
            paragraph="Florida's Main Street communities are filled with history, culture and good news.  Local history, tales, stories and facts can shed some light on the values of a community.  Visit one of the links below to learn more about communities across Florida!"
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {sortedCommunityData.map((community) => (
            <SingleCommunity key={community.id} community={community} handleView={handleView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Communities;
