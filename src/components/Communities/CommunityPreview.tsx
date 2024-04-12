import SectionTitle from "../Common/SectionTitle";
import SingleCommunity from "./SingleCommunity";
import { CommunityType } from "@/types/communityType";
import SingleCommunityPreviewImage from "./SingleCommunityPreviewImage";
import Newsletter from "../Blog/Newsletter";

export const areas: any = {
    NORTH_EAST: 'Northeast',
    NORTH_WEST: 'Northwest',
};

const communityData: CommunityType[] = [
    {
        id: 4,
        name: "Havana Main \nStreet",
        area: areas.NORTH_WEST,
        image: "/images/communities/havanacommunitywall.jpg",
        description: "Havana Main Street has existed for over 100 years. However, it was only in 2017 that the community gained Main Street designation from the Florida Main Street Program. We intend to use this momentum to help revitalize our downtown, enriching quality of life, business, and tourism while preserving the historic foundation we inherited. We want our downtown visitors to experience fun and excitement and to tell their friends they must go see Havana. ",
        link: " https://www.havanamainstreet.com"

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
];

const CommunityPreview = () => {
    return (
        <section
            id="Communities Preview"
            className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
        >

            <div className="container">
                <div className="mb-[60px]">
                    <SectionTitle
                        // subtitle="Ask the Locals"
                        title={communityData[0].name}
                        paragraph=""
                        width="640px"
                        center
                    />
                </div>

                <div className="-mx-4 flex flex-wrap justify-center">
                    <SingleCommunityPreviewImage key={communityData[0].id} community={communityData[0]} />
                </div>
            </div>
        </section>
    );
};

export default CommunityPreview;
