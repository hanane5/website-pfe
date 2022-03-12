import React  from 'react';
import Articles from './Articles';
import AddArticle from './AddArticle';



function Evenements() {
  
  return (
    <div className="container">
      
      <div className='row'>

        <div className='col-md-8'>
        <Articles/>
        </div>

        <div className ='col-md-4'>

          <AddArticle/>

        </div>
      </div>
      
      
      
    </div>
  );
}

export default Evenements;