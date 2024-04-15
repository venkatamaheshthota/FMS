"use client"
import React, { useEffect, useState } from 'react';
import { Blog } from '@/types/blog';
import Modal from 'react-modal';

interface BlogTableProps {
  blogs: Blog[];
  itemsPerPage: number;
}

const BlogTable: React.FC<BlogTableProps> = ({ blogs, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentBlogs, setCurrentBlogs] = useState(blogs)
  const [currentLink, setCurrentLink] = useState('')

  const [modalOpen, setModalOpen] = useState(false);


  const handleConfirm = () => {
    setModalOpen(false);
    window.open(currentLink, '_blank');
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  const totalPages = Math.ceil(blogs.length / itemsPerPage);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };



    useEffect(() => {
        // Calculate start and end indices for the current page
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setCurrentBlogs(blogs.slice(startIndex, endIndex))
    }, [currentPage])

  return (
    <div className="container mx-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Poster
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Event Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Link
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900">
          {currentBlogs.map((blog, index) => (
            <tr key={`____${index}____${blog.id}___`}>
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="h-12 w-12 object-cover rounded"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                {blog.title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(blog.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <a
                  onClick={() => {
                    setCurrentLink(blog?.link)
                    setModalOpen(true)
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline hover:text-blue-800 hover:cursor-pointer"
                >
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-center">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === i + 1
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {i + 1}
          </button>
        ))}
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

export default BlogTable;

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