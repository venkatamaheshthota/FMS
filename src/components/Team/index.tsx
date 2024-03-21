import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Victory Bridge - Chattahoochee Main Street",
    designation: "Built in 1922 by the Masters and Mullen Construction Company of Cleveland, Ohio",
    image: "/images/team/bridge1.jpeg",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 2,
    name: "The Hacienda",
    designation: "New Port Richey Main Street is excited about the revitalization of the architectural marvel, The Hacienda.",
    image: "/images/team/bridge2.jpeg",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 3,
    name: "Paradise Park",
    designation: "Just down the river from Silver Springs, another riverside park existed during the 1950s and 1960s.",
    image: "/images/team/bridge3.jpeg",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 4,
    name: "Silver Springs",
    designation: "n 1924, Ed Carmichael leased Silver Springs to William Carl Ray and W. C. “Shorty” Davidson. They signed a 50-year lease and intended to develop the land into an attraction.",
    image: "/images/team/bridge4.jpeg",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Ask the Locals"
            title="Florida's Main Street communities"
            paragraph="Florida's Main Street communities are filled with history, culture and good news.  Local history, tales, stories and facts can shed some light on the values of a community.  Visit one of the links below to learn more about communities across Florida!"
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team) => (
            <SingleTeam key={team.id} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
