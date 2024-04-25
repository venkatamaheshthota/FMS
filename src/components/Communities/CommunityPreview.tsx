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
        name: "Fernandina Beach",
        area: areas.NORTH_WEST,
        image: "/images/communities/fbeachCommunityWall.png",
        description: "The Fernandina Beach Main Street Program kicked off in 2015 and was expanded in 2019. We’re part of the National Main Street Program that includes more than 1,200 communities – large and small, rural, and urban – in all 50 states. We all share the same goal: strengthening communities through preservation-based economic vitality in older and historic downtowns and neighborhood commercial districts.",
        link: "https://www.fernandinamainstreet.com/",
        mapLink: "https://www.google.com/maps/d/embed?mid=1-mlRhwQ83a0KaT-WkG4bFtWjLBwJ86E&ehbc=2E312F",
        business: [
            {
            name: "The Addison on Amelia Island",
            type: "Lodging",
            desc: "Bed & breakfast",
            address: {
              street: "614 Ash Street",
              city: "Fernandina Beach, FL",
              zip: "32034",
            },
          },
          {
            name: "Atlantic Hair Studio",
            type: "Retail",
            desc: "Hair salon",
            address: {
              street: "302 S 8th St",
              city: "Fernandina Beach, FL",
              zip: "32034",
            },
          }
        ]
    },
    {
        id: 1,
        name: "Havana Main \nStreet",
        area: areas.NORTH_WEST,
        image: "/images/communities/havanacommunitywall.jpg",
        description: "Havana Main Street has existed for over 100 years. However, it was only in 2017 that the community gained Main Street designation from the Florida Main Street Program. We intend to use this momentum to help revitalize our downtown, enriching quality of life, business, and tourism while preserving the historic foundation we inherited. We want our downtown visitors to experience fun and excitement and to tell their friends they must go see Havana. ",
        link: " https://www.havanamainstreet.com",
        business: [
            {
            name: "Weekend Finds",
            type: "Retail",
            desc: "Gift shop",
            address: {
              street: "212 N. Main St.",
              city: "Havana, FL",
              zip: "32333",
            },
          },
          {
            name: "Subway",
            type: "Restaurant",
            desc: "Sandwich shop",
            address: {
              street: "102 8th Ave. E",
              city: "Havana, FL",
              zip: "32333",
            },
          }
        ]

    },
    {
        id: 2,
        name: "Quincy Main \nStreet",
        area: areas.NORTH_WEST,
        image: "/images/communities/quincyCommunitywall.png",
        link: "https://www.quincymainstreet.org/",

        business: [
            {
            name: "Big Papa's Chophouse",
            type: "Restaurant",
            desc: "Steak house",
            address: {
              street: "18 N. Adams St.",
              city: "Quincy, FL ",
              zip: "32351",
            },
          },
          {
            name: "Regional Therapy Services Inc",
            type: "Health",
            desc: "Physical therapy clinic",
            address: {
              street: "108 N. Adams St.",
              city: "Quincy, FL ",
              zip: "32351",
            },
          }
        ]
    },
    {
        id: 3,
        name: "Chattohoochee Main \nStreet",
        area: areas.NORTH_WEST,
        image: "/images/communities/chtcommunitywall.png",
        link: "https://www.chattahoocheemainstreet.org/",
        mapLink:"https://www.google.com/maps/d/embed?mid=1-mlRhwQ83a0KaT-WkG4bFtWjLBwJ86E&ehbc=2E312F",
        business: [
            {
            name: "Pippin's Tire & Auto Services",
            type: "Automotive",
            desc: "Tire & auto mechanic shop",
            address: {
              street: "616 W Washington St",
              city: "Chattahoochee, FL",
              zip: "32324",
            },
          },
          {
            name: "Bleachers & Blayke's Billiards",
            type: "Restaurant",
            desc: "Restaurant",
            address: {
              street: "418 W Washington St",
              city: "Chattahoochee, FL",
              zip: "32324",
            },
          }
        ]
    },
    {
        id: 4,
        name: "Stuart Main \nStreet",
        description: "Stuart Main Street is a 501c3 private nonprofit organization that has been serving our historic district for more than 35 years. Stuart Main Street is a nationally accredited organization under the Main Street America banner belonging to a network of more than 1,200 other main street programs across the country. Stuart Main Street uses the Main Street America Four Point Approach to create and promote a positive downtown experience for residents, businesses and visitors through community driven revitalization and economic development efforts.",
        area: areas.NORTH_WEST,
        image: "/images/communities/strtcommunitywall.png",
        link: "https://www.stuartmainstreet.org/events/stuart-stroll/",
        mapLink:"https://www.google.com/maps/d/embed?mid=1-mlRhwQ83a0KaT-WkG4bFtWjLBwJ86E&ehbc=2E312F",
        business: []
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
