"use client"
import { CommunityType } from "@/types/communityType";
import Image from "next/image";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";


const DEFAULT_MAP_LINK = "https://www.google.com/maps/d/embed?mid=1-mlRhwQ83a0KaT-WkG4bFtWjLBwJ86E&ehbc=2E312F" // florida mainstreet

const SingleCommunityPreviewImage = ({ community }: { community: CommunityType }) => {
  const { image, name, area, description, link, poi, mapLink = DEFAULT_MAP_LINK } = community;

  const handleLinkClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <>
      {/* Main content grid */}
      <div className="w-full grid grid-cols-4 gap-4">
        {/* Large column with big image cover */}
        <div className="col-span-3 bg-white rounded-lg shadow">
          <div className="relative h-80">
            <Image
              src={image}
              alt={name}
              layout="fill"
              objectFit="contain"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{name}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>

            {/* Redirectable link */}
            {link && (
              <p className="text-sm mt-4">
                <span
                  className="text-black font-medium cursor-pointer hover:bg-black hover:text-white p-1 rounded"
                  onClick={handleLinkClick}
                >
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    View {name} website
                  </a>
                </span>
              </p>
            )}
          </div>
        </div>

        {/* Events box on the right */}
        <div className="col-span-1 bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">{area}</h3>
          <div className="border-t pt-4">
            <h4 className="text-sm text-gray-600 dark:text-gray-400">Events</h4>
            <p className="text-sm text-gray-400 dark:text-gray-600">No upcoming events</p>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 gap-4 mt-8">
        <div className="col-span-1 h-96 ">

          <AccordionComponent data={poi} />
        </div>
        <div className="col-span-1 h-96 bg-gray-200 rounded-lg shadow-lg">
          {/* <p>Map goes here</p> */}
          <div className="mb-[60px]">
            <iframe src={mapLink} width="100%" height="400"></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCommunityPreviewImage;
const AccordionComponent = ({ data }) => {
  const accordionItemStyle = {
    backgroundColor: '#81b583', // Background color for the AccordionSummary
    color: 'white', // Text color for the AccordionSummary
    fontWeight: 'bold', // Font weight for the AccordionSummary text
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Point of Interest</h2>
      <Accordion style={{ backgroundColor: '#ffffff', marginBottom: '8px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={accordionItemStyle} // Apply custom styles to AccordionSummary
        >
          <Typography>{data[0].title}</Typography>
        </AccordionSummary>

        {/* line 1 */}
        <AccordionDetails>
          <Typography>
            {data[0].line1}
          </Typography>
        </AccordionDetails>

        {/* line 2 */}

        {data[0].line2 &&
          <AccordionDetails>
            <Typography>
              {data[0].line2}
            </Typography>
          </AccordionDetails>}

        {/* link */}

        {data[0].link &&
          <AccordionDetails>
            <p className="text-sm mt-4">
              <span className="text-black font-medium cursor-pointer hover:bg-black hover:text-white p-1 rounded">
                <a href={data[0].link} target="_blank" rel="noopener noreferrer">
                  View website
                </a>
              </span>
            </p>
          </AccordionDetails>
        }

      </Accordion>

      {data[1] && <Accordion style={{ backgroundColor: '#ffffff', marginBottom: '8px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={accordionItemStyle} // Apply custom styles to AccordionSummary
        >
          <Typography>{data[1].title}</Typography>
        </AccordionSummary>

        {/* line 1 */}
        <AccordionDetails>
          <Typography>
            {data[1].line1}
          </Typography>
        </AccordionDetails>

        {/* line 2 */}

        {data[1].line2 &&
          <AccordionDetails>
            <Typography>
              {data[1].line2}
            </Typography>
          </AccordionDetails>}

        {/* link */}

        {data[1].link &&
          <AccordionDetails>
            <p className="text-sm mt-4">
              <span className="text-black font-medium cursor-pointer hover:bg-black hover:text-white p-1 rounded">
                <a href={data[1].link} target="_blank" rel="noopener noreferrer">
                  View website
                </a>
              </span>
            </p>
          </AccordionDetails>
        }

      </Accordion>}
    </div>
  );
};

