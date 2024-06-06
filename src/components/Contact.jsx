import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export const Contact = () => {

    
  return (
    <>
        
            <div style={{border:'solid 1px rgb(255,215,0)',borderLeftStyle: 'none',borderRightStyle: 'none',
          backgroundColor: '#353535'}}>
              <div style={{display: 'flex',justifyContent: 'center'}}>
                <h4 style={{display: 'flex',padding: '0rem 1rem 0rem 1rem',marginTop: '-0.8rem',backgroundColor: '#242424'}}>Contact Me</h4>
              </div>
              <div style={{paddingTop: '1.5rem',display: 'flex',justifyContent:'center',alignItems:'center',
              columnGap:'3rem',flexWrap: 'wrap',rowGap: '1rem'}}>
                  <div style={{display:'flex',alignItems:'center',columnGap:'0.2rem',backgroundColor: '#141414',
                borderRadius: '11px',height:'7vh',padding: '0 2rem 0 2rem'}}>
                    <EmailIcon sx={{fontSize: '19px'}}/>
                    <h4>aadarshp502@gmail.com</h4>
                  </div>
                  <div style={{display:'flex',alignItems:'center',backgroundColor: '#141414',
                  borderRadius: '11px',height:'7vh',padding: '0 2rem 0 2rem'}}>
                    <PhoneIcon sx={{fontSize: '19px'}}/>
                    <h4>+91 7024445960</h4>
                  </div>
              </div>
              <div style={{display: 'flex',justifyContent: 'center',paddingTop: '1rem',paddingBottom: '3rem'}}>
                <div style={{display: 'flex',alignItems: 'center',backgroundColor: '#141414',
                  borderRadius: '11px',height:'7vh',padding: '0 2rem 0 2rem'}}>
                  <LocationOnIcon sx={{fontSize: '19px'}}/>
                  <h4>Ujjain, Madhya Pradesh</h4>
                </div>
              </div>
            </div>
          <div style={{display: 'flex',alignItems: 'center',flexDirection: 'column'}}>
            <div style={{display:'flex',alignItems:'center',columnGap: '0.3rem',marginTop: '-0.5rem'
            ,backgroundColor: '#242424',padding: '0rem 1rem 0rem 1rem'}}>
                <FacebookIcon fontSize='xs-small'/>
                <XIcon fontSize='xs-small'/>
                <LinkedInIcon fontSize='xs-small'/>
                <WhatsAppIcon fontSize='xs-small'/>
            </div>
            <div style={{paddingTop: '1.5rem',paddingBottom: '1.5rem',color:'rgb(255,215,0)'}}>
              <h4>"Thanks For Scrolling"</h4>
            </div>
          </div>
    </>
    
  )
}
