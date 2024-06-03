import React from 'react'

export const Portfolio = () => {
  return (
    <>
        
        <h1 style={{display: 'flex', justifyContent: 'center'}}>My Skills</h1>
         <div style={{backgroundColor: '#353535',paddingTop: '1rem' ,paddingBottom: '2.5rem'}}> 
          <div style={{display: 'flex',justifyContent: 'center',columnGap: '2rem',marginTop: '3rem',flexWrap: 'wrap'}}>
            <div id='skill' style={{width: '6vw',paddingTop: '1.5rem',borderRadius:'1rem',height: '12vh',backgroundColor: '	#141414',display:'flex',flexDirection: 'column',justifyContent:'center',alignItems:'center'}}>
              <div style={{height: '9vh',width: '4vw'}}><img id='logo' src='/pngwing.com.png'/></div>
              <h5 style={{marginTop: '0.7rem',display: 'flex',justifyContent: 'center'}}>C</h5>
            </div>
            <div id='skill' style={{width: '6vw',paddingTop: '1.5rem',borderRadius:'1rem',height: '12vh',backgroundColor: '	#141414',display:'flex',flexDirection: 'column',justifyContent:'center',alignItems:'center'}}>
              <div style={{height: '9vh',width: '4vw'}}><img id='logo' src='/vecteezy_3d-c-programming-language-logo_12697300.png'/></div>
              <h5 style={{marginTop: '0.7rem',display: 'flex',justifyContent: 'center'}}>C++</h5>
            </div>

            <div id='skill' style={{width: '6vw',paddingTop: '1.5rem',borderRadius:'1rem',height: '12vh',backgroundColor: '	#141414',display:'flex',flexDirection: 'column',justifyContent:'center',alignItems:'center'}}>
              <div style={{height: '9vh',width: '4vw'}}><img id='logo' src='/vecteezy_stylized-3d-html-logo-design_12697299.png'/></div>
              <h5 style={{marginTop: '0.7rem',display: 'flex',justifyContent: 'center'}}>Html</h5>
            </div>

            <div id='skill' style={{width: '6vw',paddingTop: '1.5rem',borderRadius:'1rem',height: '12vh',backgroundColor: '	#141414',display:'flex',flexDirection: 'column',justifyContent:'center',alignItems:'center'}}>
              <div style={{height: '9vh',width: '4vw'}}><img id='logo' src='/vecteezy_vista-lateral-del-icono-css-3d-estilizado_11665094.png'/></div>
              <h5 style={{marginTop: '0.7rem',display: 'flex',justifyContent: 'center'}}>Css</h5>
            </div>
          </div>

          <div style={{display: 'flex',justifyContent: 'center',columnGap: '2rem',marginTop: '3rem'}}>
            <div id='skill' style={{width: '6vw',paddingTop: '1.5rem',borderRadius:'1rem',height: '12vh',backgroundColor: '	#141414',display:'flex',flexDirection: 'column',justifyContent:'center',alignItems:'center'}}>
              <div style={{height: '9vh',width: '4vw'}}><img id='logo' src='/vecteezy_javascript-logo-png-javascript-icon-transparent-png_27127463.png'/></div>
              <h5 style={{marginTop: '0.7rem',display: 'flex',justifyContent: 'center'}}>Javascript</h5>
            </div>
            <div id='skill' style={{width: '6vw',paddingTop: '1.5rem',borderRadius:'1rem',height: '12vh',backgroundColor: '	#141414',display:'flex',flexDirection: 'column',justifyContent:'center',alignItems:'center'}}>
              <div style={{height: '9vh',width: '4vw'}}><img id='logo' src='/pngwing.com (1).png'/></div>
              <h5 style={{marginTop: '0.7rem',display: 'flex',justifyContent: 'center'}}>React</h5>
            </div>
            <div id='skill' style={{width: '6vw',paddingTop: '1.5rem',borderRadius:'1rem',height: '12vh',backgroundColor: '	#141414',display:'flex',flexDirection: 'column',justifyContent:'center',alignItems:'center'}}>
              <div style={{height: '9vh',width: '4vw'}}><img id='logo' src='/pngwing.com (2).png'/></div>
              <h5 style={{marginTop: '0.7rem',display: 'flex',justifyContent: 'center'}}>Redux</h5>
            </div>
          </div>

          <div style={{display: 'flex',justifyContent: 'center',columnGap: '2rem',marginTop: '3rem'}}>

            <div id='skill' style={{width: '6vw',paddingTop: '1.5rem',borderRadius:'1rem',height: '12vh',backgroundColor: '	#141414',display:'flex',flexDirection: 'column',justifyContent:'center',alignItems:'center'}}>
              <div style={{height: '9vh',width: '4vw'}}><img id='logo' src='/pngwing.com (4).png'/></div>
              <h5 style={{marginTop: '0.7rem',display: 'flex',justifyContent: 'center'}}>MUI</h5>
              
            </div>

            <div id='skill' style={{ width: '6vw',paddingTop: '1.5rem',borderRadius:'1rem',height: '12vh',backgroundColor: '	#141414',display:'flex',flexDirection: 'column',justifyContent:'center',alignItems:'center'}}>
              <div style={{height: '9vh',width: '4vw'}}><img id='logo' src='/pngwing.com (3).png'/></div>
              <h5 style={{marginTop: '0.7rem',display: 'flex',justifyContent: 'center'}}>Git</h5>
            </div>

          </div>

         <div style={{display: 'flex',justifyContent: 'center',columnGap: '2rem',marginTop: '3rem'}}>
            <div id='skillresponsive' style={{paddingTop: '1.5rem',width: '6vw',borderRadius:'1rem',height: '13vh',backgroundColor: '	#141414',display:'flex',flexDirection: 'column',justifyContent:'center',alignItems:'center'}}>
              <div style={{height: '9vh',width: '4vw'}}><img id='logo' src='/pngwing.com (5).png'/></div>
              <h5  style={{padding: '0 0.2rem 0 0.2rem',marginTop: '0.7rem',display: 'flex',justifyContent: 'center'}}>Responsive</h5>
              <h5 style={{marginTop: '-1.5rem',display: 'flex',justifyContent: 'center'}}>Design</h5>
            </div>
         </div>
        </div>
         <h1 style={{marginTop: '5rem',display: 'flex',justifyContent: 'center'}}>Projects</h1>
         <div  style={{display: 'flex',flexDirection: 'column',justifyContent:'center',alignItems: 'center',columnGap: '4rem',marginTop: '4rem',flexWrap: 'wrap',rowGap: '4rem'}}>
            <div className='project-container' style={{display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <div style={{width: '47vw',height: '50vh' ,border: 'solid 3px grey'}}><video controls loop autoPlay id='portImg' src='/dis.webm' type='video/webm'></video></div>
              <p>It is the exact replica of Disney OTT platform, created using React.</p>
              <a href='https://github.com/aaddaarrsshhP/DisneyClone.git' className='click-here'>Click here to visit repository..</a>
              
            </div>
            <div className='project-container' style={{display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
            <div style={{width: '47vw',height: '50vh' ,border: 'solid 3px grey'}}><video controls loop autoPlay id='portImg' src='/marv.webm' type='video/webm'></video></div>
              <p>This is Marvel's superhero website.</p> 
              <a href='https://github.com/aaddaarrsshhP/Marvel.git' style={{marginTop: '1.2rem'}} className='click-here'>Click here to visit repository..</a>
            </div>
            <div  className='project-container' style={{display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <div style={{width: '47vw',height: '50vh' ,border: 'solid 3px grey'}}><img id='portImg' src='/portfolio.png'/></div>
              <p>Your are currently on the website itself.</p>
             
            </div>

            
         </div>

         <h1 style={{display: 'flex', justifyContent: 'center',marginTop: '90px',marginBottom: '40px'}}>Certification</h1>
         <p>
           I am thrilled to share with you my journey and accomplishments in the field of front-end development. One significant milestone in this journey is the completion of the META Front-End Development Certificate.
           Throughout this immersive program, provided by META, I have delved deep into the world of front-end technologies, mastering the essential skills necessary to 
           create captivating and user-friendly web experiences. From the fundamentals of HTML and CSS to 
           the intricacies of JavaScript and beyond, the META Front-End Development Certificate 
           has equipped me with the knowledge and expertise to tackle a wide range of web development challenges.
         </p>    
         <p>
           This certificate not only represents my proficiency in front-end development but also reflects my 
           dedication to continuous learning and growth in this dynamic field. With hands-on projects, 
           practical exercises, and expert guidance, I have honed my abilities to conceptualize, design, 
           and implement responsive and interactive websites that meet the highest standards of quality and 
           usability.
         </p> 
        <div style={{display: 'flex',justifyContent: 'center',paddingTop: '40px'}}>        
         <div style={{width: '25vw',height: '25vh',border: 'solid 3px white'}}>
           <img id='portImg' src='/certificate.png'/>
         </div>
         </div>  
         <a className='click-here certificate-link' href='https://coursera.org/share/723f340d4107e1ffd914cde83716854f'>visit link to see my certificate</a>                  

    </>
    
  )
}
