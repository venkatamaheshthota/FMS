"use client"
import { CommunityType } from "@/types/communityType";
import Image from "next/image";

const SingleCommunityPreviewImage = ({ community }: { community: CommunityType }) => {
  const { image, name, area, description, link } = community;

  const handleLinkClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
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
  );
};

export default SingleCommunityPreviewImage;
