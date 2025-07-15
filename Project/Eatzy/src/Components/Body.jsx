import React, { useEffect, useState } from 'react'

function Body() {
    const [data, setData] = useState([]);

    async function fetchData(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const result = await data.json() ; 
        console.log(result);
    }

    useEffect(()=>{
        fetchData()
    }, [])

  return (
    <div className='w-full '>

        <div className='w-[75%] mx-auto'>
            body

        </div>



    </div>
  )
}

export default Body