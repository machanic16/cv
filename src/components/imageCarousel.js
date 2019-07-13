import React from 'react'

function ImageCarousel(props){
    return(
        <div className="carousel-item active">
             {/* <img src='../images/personal/fsae.jpg' className="d-block w-100" alt="que se esta haciendo mal?"  /> */}
             <img src={props.src} className="d-block w-100" alt="que se esta haciendo mal?"  />
             {console.log(props)}
        </div> 
    )
}

export default ImageCarousel