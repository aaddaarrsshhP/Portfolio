import React, { useRef, useState } from 'react'

export const Header = ({func,about,portfolio,contact}) => {

  const [abou,setAbou]=useState(null); 
  const [port,setPort]=useState(null);  
  const [cont,setCont]=useState(null);

     function colorr(per)
    {
      if(per=='about')
      {
        setAbou({color: 'white'})
        setPort(null);
        setCont(null);
      }
      else if(per=='portfolio')
      {

        setAbou(null)
        setPort({color: 'white'});
        setCont(null);
      }
      else
      {
        
        setAbou(null)
        setPort(null);
        setCont({color: 'white'});
      }
    }     
   
  console.log("header",func,about,portfolio,contact);
  return (<>
    <div id='header' style={{border: 'solid 5px #353535'}}>
        <h3 style={abou} id='head-title' onClick={function Wrap(){func(about);colorr('about')}}>About</h3>
        <h3 style={port} id='head-title' onClick={function Wrap(){func(portfolio);colorr('portfolio')}}>Skills & Projects</h3>
        <h3 style={cont} id='head-title' onClick={function Wrap(){func(contact);colorr('contact')}}>Contact</h3>
    </div>
  </>
  )
}
