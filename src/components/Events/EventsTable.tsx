"use client"
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Event } from '@/types/events';

interface EventsTableProps {
  events: Event[];
  itemsPerPage: number;
}

const EventsTable: React.FC<EventsTableProps> = ({ events, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentEvents, setCurrentEvents] = useState(events);
  const [currentLink, setCurrentLink] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const formatDate = (dateStr) => {
    try {
      // Split date string into components assuming "month/day/year" format
      const [month, day, year] = dateStr.split('/').map(part => parseInt(part)); 
  
      // Check if components are valid numbers
      if (isNaN(month) || isNaN(day) || isNaN(year)) {
        throw new Error('Invalid date components');
      }
  
      // Construct a new date in year-month-day format (Note: month is 0-indexed in JavaScript)
      const formattedDate = new Date(year, month - 1, day); 
  
      // Format the valid date into the desired display format
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return formattedDate.toLocaleDateString('en-US', options);
    } catch (error) {
      console.error('Error formatting date:', error.message);
      return 'Invalid Date'; // Return default message if date is invalid
    }
  };
  
  

  const handleConfirm = () => {
    setModalOpen(false);
    window.open(currentLink, '_blank');
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  const totalPages = Math.ceil(events.length / itemsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    // Calculate start and end indices for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentEvents(events.slice(startIndex, endIndex));
  }, [currentPage, events, itemsPerPage]);

  return (
    <div className="container mx-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Poster
            </th> */}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Event Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Area
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Link
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900">
          {currentEvents.map((event: Event) => (
            <tr key={`event-${event.id}`}>
              {/* <td className="px-6 py-4 whitespace-nowrap">
                <img
                  src={event.poster}
                  alt={event.EventName}
                  className="h-12 w-12 object-cover rounded"
                />
              </td> */}
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                {event.EventName}
              </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {/* Parse the date string in day/month/year format */}
                      {formatDate(event.Date)}
                  </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {event.Location ?? '-'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <a
                  onClick={() => {
                    setCurrentLink(event.EventWebsite);
                    setModalOpen(true);
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline hover:text-blue-800 cursor-pointer"
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
              currentPage === i + 1 ? 'bg-green-900 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <Modal isOpen={modalOpen} style={customStyles}>
        <div>
          <p>Continue to a non-Department of State website?</p>
          <div style={{ display: 'flex', marginTop: '20px' }}>
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

export default EventsTable;

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
  },
};
