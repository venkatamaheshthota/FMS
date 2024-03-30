'use client';

import { Blog } from "@/types/blog";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from 'react-modal';


const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, coverImage, excerpt, date, slug, link } = blog;
  const [modalOpen, setModalOpen] = useState(false);


  const handleLinkClick = () => {
      setModalOpen(true);
  };

  const handleConfirm = () => {
    setModalOpen(false);
    window.open(link, '_blank');
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
      <div className="mb-8 overflow-hidden rounded">

        <a target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
          <Image
            src={coverImage}
            alt="image"
            className="w-full transition group-hover: group-hover:scale-125"
            style={{ height: 400 }}
            width={408}
            height={272}
          />
        </a>
      </div>
      <div>
        <span
          className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white"
          style={{ backgroundColor: '#81b583' }}
        >
          {format(new Date(date), "dd MMM yyyy")}
        </span>
        <h3>
          <Link
            href={`/blogs/${slug}`}
            className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
          >
            {title}
          </Link>
        </h3>
        <p className="text-base text-body-color dark:text-dark-6">{excerpt}</p>
      </div>
      <Modal isOpen={modalOpen} style={customStyles}>
        <div>
          <p>Continue to a non-Department of State website?</p>
          <div style={{ display: 'flex', marginTop: '20px'}}>
            <button
              onClick={handleCancel}
              style={{
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                marginRight: '10px'
              }}
            >
              No, stay here
            </button>
            <button
              onClick={handleConfirm}
              style={{
                backgroundColor: 'transparent',
                color: 'black',
                border: '2px solid black',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Yes, proceed
            </button>
          </div>
        </div>
      </Modal>

    </div>
  );
};

export default SingleBlog;


const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9999, // To make sure it's on top of all other elements
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    // width: '200px', // Adjust the width as needed
    // height: '100px', // Adjust the height as needed
  },
};