import React from 'react'
import { MDBFooter, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export const Footer = () => {
    return (
       <div id='footer'>
         <MDBFooter bgColor='light' className='text-center text-lg-left'>
        
        
        <div className='text-center p-3' style={
            {backgroundColor: 'rgba(0, 0, 0, 0.2)' }
            }>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-dark' href='https://www.linkedin.com/in/robeltadele'>
            Robel Tadele
          </a>
        </div>
        
      </MDBFooter>
       </div>
    );
}



