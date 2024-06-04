import Cards from '@/components/Cards'
import Front from '@/components/Front'
import Interface from '@/components/Interface'
import Navbar from '@/components/Navbar'
import Hell from '@/components/Hell';
import React from 'react'
import Review from '@/components/Review';
import Store from '@/components/Store';
import Custom from '@/components/Custom';


function page() {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
     <Front/>
     <Cards/>
     <Interface />
     <Hell />
     <Review />
     <Store />
     <Custom />
    </div>
  )
}


export default page
