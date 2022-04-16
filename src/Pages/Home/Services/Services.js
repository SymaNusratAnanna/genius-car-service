import React, { useEffect, useState } from 'react';
import Service from '../../../Pages/Home/Service/Service';
import './Services.css';


const Services = () => {
    const[Services,setService]= useState([]);
    useEffect( ()=>  {
        fetch('Service.json')
        .then(res=> res.json())
        .then(data=>setService(data));
    },[])
    return (
        <div id="services" className='container'>
            <h2 className='service-title'> Our services</h2>

           <div className="services-container">
           {
                Services.map(service=> <Service
                key={service.id}
                service={service}
                ></Service>)
            }
           </div>

        </div>
    );
};

export default Services;