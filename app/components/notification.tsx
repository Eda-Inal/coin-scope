'use client'

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { hideNotification } from '../features/notifactionSlice';

const Notification: React.FC = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state: RootState) => state.notification.notification);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        dispatch(hideNotification());
      }, 2000); 
      return () => clearTimeout(timer); 
    }
  }, [notification, dispatch]);

  if (!notification) return null;

  let icon;
  let iconColor;
  let borderColor;


  if (notification.type === 'success') {
    icon = (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
    );
    iconColor = 'text-green-500'; 
    borderColor = 'border-green-500'; 
  } else if (notification.type === 'error') {
    icon = (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
      </svg>
    );
    iconColor = 'text-red-600'; 
    borderColor = 'border-red-600';
  }

  return (
    <div
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 w-3/4 sm:w-1/2 lg:w-1/4 md:w-1/2 min-h-16 px-4 py-2 rounded-md shadow-lg 
        bg-lightSecondary dark:bg-darkSecondary flex items-center space-x-4 ${borderColor} border-2`}
    >
    
      <div className={`p-2 ${iconColor} bg-opacity-20 rounded-full`}>
        {icon}
      </div>

    
      <span>{notification.message}</span>
    </div>
  );
};

export default Notification;

