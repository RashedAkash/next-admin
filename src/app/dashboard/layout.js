import Sidebar from '@/components/Sidebar/Sidebar';
import DashNavbar from '@/components/dashNavbar/DashNavbar';
import React from 'react';

const DashboradLayout = ({children}) => {
  return (
    <div className='grid md:grid-cols-12'>
      <div className=' col-span-3'>
        <Sidebar />
      </div>
      <div className=' col-span-9'>
        <DashNavbar />
        {children}
      </div>
    </div>
  );
};

export default DashboradLayout;