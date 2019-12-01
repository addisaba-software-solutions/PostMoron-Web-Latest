 import React from 'react';
 import imageLoader from './../assets/preloader.gif'
    const LoadingSpinner = () => (
     
        <div className='text-center' style={{padding:'13%'}}> 
        <img src={imageLoader}/>
        <h3>Loading...</h3>
        </div>
    );

    export default LoadingSpinner;