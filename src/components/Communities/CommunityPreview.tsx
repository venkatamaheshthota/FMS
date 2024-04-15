"use client"

import { useRouter } from "next/router";

import SectionTitle from "../Common/SectionTitle";
import SingleCommunity from "./SingleCommunity";
import { CommunityType } from "@/types/communityType";
import SingleCommunityPreviewImage from "./SingleCommunityPreviewImage";
import Newsletter from "../Blog/Newsletter";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

export const areas: any = {
    NORTH_EAST: 'Northeast',
    NORTH_WEST: 'Northwest',
};

const communityData: CommunityType[] = [
    {
        id: 0,
        name: "Havana Main \nStreet",
        area: areas.NORTH_WEST,
        image: "/images/communities/havanacommunitywall.jpg",
        description: "Havana Main Street has existed for over 100 years. However, it was only in 2017 that the community gained Main Street designation from the Florida Main Street Program. We intend to use this momentum to help revitalize our downtown, enriching quality of life, business, and tourism while preserving the historic foundation we inherited. We want our downtown visitors to experience fun and excitement and to tell their friends they must go see Havana. ",
        link: " https://www.havanamainstreet.com",
        poi: [
            {
              title: "Gocki's Restaurant & Retail",
              line1: "Family-owned Restaurant and Retail Shop run by Malissa and Schel Collins.",
              line2: "208 1st St NW, Havana, FL 32333",
              link: "https://www.gockis.com/"
            },
            {
              title: "Kellum's Furniture",
              line1: "Family-owned Furniture Store located at",
              line2: "106 N Main St, Havana, FL 32333.",
              link: "https://kellumsfurniture.com/"
            }
          ]
    },
    {
        id: 1,
        name: "Quincy Main \nStreet",
        area: areas.NORTH_WEST,
        image: "/images/communities/quincyCommunitywall.png",
        link: "https://www.quincymainstreet.org/",
        poi: [
            {
              title: "Gocki's Restaurant & Retail",
              line1: "Historical Quincy Courthouse",
              line2: "10 East Jefferson Street",
            //   link: "https://www.gockis.com/"
            }
          ]

    },
    {
        id: 2,
        name: "Chattohoochee Main \nStreet",
        area: areas.NORTH_WEST,
        image: "/images/communities/chtcommunitywall.png",
        link: "https://www.chattahoocheemainstreet.org/",
        poi: [
            {
              title: "Tootie-Pies",
              line1: "Welcome to Tootie-Pies LLC. Tootie-Pies is a gift shop that was original located in Sneads, Fl. We have recently moved to our new location in Chattahoochee, Fl on Mainstreet. Since our move we have add a lot of new inventory. \n Visit the shop at 308 W. Washington St., Chattahoochee, FL or on Facebook.",
              line2: "308 W. Washington St., Chattahoochee, FL",
              link: "https://www.facebook.com/tootiepies1517"
            },
            {
              title: "Twin City Brewery",
              line1: "Great selection of local, domestic, and craft beer as well as a full menu of delicious food! Check them out on Facebook or call 850-663-2120. 408 W Washington St. Chattahoochee, Florida 32324",
              line2: "408 W Washington St. Chattahoochee, Florida 32324",
              link: "https://www.facebook.com/people/Twin-City-Brewery/100086655570352/?mibextid=ZbWKwL"
            }
          ]
    },
];

const CommunityPreview = () => {
    // const router = useRouter();
    // const { id } = router.query; // Access the id from query parameters

    const [id, setId] = useState(null);

    useEffect(() => {
        getCommunityId()
    })

    const getCommunityId = async () => {
        const communityId = await localStorage.getItem('communityId')
        setId(communityId)
    }


    if (!id) {
        return (
            <section
                id="Communities Preview"
                className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
            >
                <div className="-mx-4 flex flex-wrap justify-center">
                    <CircularProgress />
                </div>
            </section>)
    }

    return (
        <section
            id="Communities Preview"
            className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
        >

            <div className="container">
                <div className="mb-[60px]">
                    <SectionTitle
                        // subtitle="Ask the Locals"
                        title={communityData[id].name}
                        paragraph=""
                        width="640px"
                        center
                    />
                </div>

                <div className="-mx-4 flex flex-wrap justify-center">
                    <SingleCommunityPreviewImage key={communityData[id].id} community={communityData[id]} />
                </div>
            </div>
        </section>
    );
};

export default CommunityPreview;
