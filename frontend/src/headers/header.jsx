import './Style.css';
import React from 'react';
const header = () => {
  return (<>
    <div className="container-flex"  id='name'>
      <div className="row">
    <div className='col-md-3'> 
     <h3 id='tag'>Shiv Shakti</h3>
        <h6 id='logo'>Sweets&Dry Fruits</h6>
      </div>
      <div className="col-sm-9">
      <div id='head'>All India Delivery with in 7 days of Working </div>
      </div>
      </div>
    </div>

    
    </>
  )
}

export default header;