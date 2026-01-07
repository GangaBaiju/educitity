import React from 'react'
import './Programs.css';
import Program_1 from '../../assets/program_1.webp'
import Program_2 from '../../assets/Program_2.jpg'
import Program_3 from '../../assets/Program_3.webp'


import iconnn_1 from'../../assets/icon 1.png'
import iconnn_2 from'../../assets/icon 2.png'
import iconnn_3 from'../../assets/icon 3.png'




const Programs = () => {
  return (
    <div className='Programs'>
         <div className="Program">
            <img src={Program_1} alt=""/>
             <div className="Caption">
                  <img src={iconnn_1} alt=""/>
                  <p>Graduation Degree</p>

             </div>


         </div>
      

    
         <div className="Program">
            <img src={Program_2} alt=""/>
            <div className="Caption">
                  <img src={iconnn_2} alt=""/>
                  <p>Master Degree</p>

             </div>
         </div>

        
         <div className="Program">
            <img src={Program_3} alt=""/>
            <div className="Caption">
                  <img src={iconnn_3} alt=""/>
                  <p> Post Graduation </p>

             </div>
         </div>
      

      
    </div>
  )
}

export default Programs
