import React from 'react'

export const Portfolio = () => {
  return (
    <>
        
        <h1 className="skill-top" style={{display: 'flex', justifyContent: 'center',marginTop: '20px'}}>My Skills</h1>
         
         <div style={{padding: '15px 0px 5px 0px'}}>
            <div className='skills-outer-container'>
               <div className='skills-container'>
                  <div className='skills-image'>
                    <img src='/pngwing.com.png'/>
                  </div>
                  <h4>C</h4>
               </div>
               <div className='skills-container'>
                  <div className='skills-image'>
                    <img src='/vecteezy_3d-c-programming-language-logo_12697300.png'/>
                  </div>
                  <h4>C++</h4>
               </div>
               <div className='skills-container'>
                  <div className='skills-image'>
                    <img src='/pngwing.com (3).png'/>
                  </div>
                  <h4>Git</h4>
               </div>
            </div>

            <div className='skills-outer-container'>
               <div className='skills-container'>
                  <div className='skills-image'>
                    <img src='/vecteezy_stylized-3d-html-logo-design_12697299.png'/>
                  </div>
                  <h4>Html</h4>
               </div>
               <div className='skills-container'>
                  <div className='skills-image'>
                    <img src='/vecteezy_vista-lateral-del-icono-css-3d-estilizado_11665094.png'/>
                  </div>
                  <h4>Css</h4>
               </div>
               <div className='skills-container'>
                  <div className='skills-image'>
                    <img src='/vecteezy_javascript-logo-png-javascript-icon-transparent-png_27127463.png'/>
                  </div>
                  <h4>JS</h4>
               </div>
            </div>

            <div className='skills-outer-container'>
               <div className='skills-container'>
                  <div className='skills-image'>
                    <img src='/pngwing.com (1).png'/>
                  </div>
                  <h4>React</h4>
               </div>
               <div className='skills-container'>
                  <div className='skills-image'>
                    <img src='/pngwing.com (2).png'/>
                  </div>
                  <h4>Redux</h4>
               </div>
               <div className='skills-container'>
                  <div className='skills-image'>
                    <img src='/pngwing.com (4).png'/>
                  </div>
                  <h4>MUI</h4>
               </div>
            </div>

            <div className='skills-outer-container'>
               <div className='skills-container'>
                  <div className='skills-image'>
                    <img src='https://www.mysql.com/common/logos/logo-mysql-170x115.png'/>
                  </div>
                  <h4>MySQL</h4>
               </div>
               <div className='skills-container'>
                  <div className='skills-image'>
                    <img src='/mongo.png'/>
                  </div>
                  <h4 id='mongo'>Mongo</h4>
                  <h4>DB</h4>
               </div>
               <div className='skills-container'>
                  <div className='skills-image'>
                    <img src='/nodejs.png'/>
                  </div>
                  <h4 id='mongo'>node</h4>
                  <h4>js</h4>
               </div>
            </div>
         </div>





         <h1 style={{marginTop: '5rem',display: 'flex',justifyContent: 'center'}}>Projects</h1>
         <div  style={{display: 'flex',flexDirection: 'column',alignItems: 'center',columnGap: '4rem',marginTop: '4rem',flexWrap: 'wrap',rowGap: '4rem'}}>
            <div className='project-container' style={{display: 'flex',flexDirection: 'column',alignItems: 'center'}}>

              <div className='project-img-container'><video controls loop autoPlay id='portImg' src='/dis.webm' type='video/webm'></video></div>
              <p className='pro-detail'>It is the exact replica of Disney OTT platform, created using React.</p>
              <a href='https://github.com/aaddaarrsshhP/DisneyClone.git' className='click-here'>Click here to visit repository..</a>
              
            </div>
            <div className='project-container' style={{display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
            <div className='project-img-container'><video controls loop autoPlay id='portImg' src='/marv.webm' type='video/webm'></video></div>
              <p className='pro-detail'>This is Marvel's website providing information about superheroes and their respective comics.</p> 
              <a href='https://github.com/aaddaarrsshhP/Marvel.git'  className='click-here'>Click here to visit repository..</a>
            </div>
            <div  className='project-container' style={{display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
              <div className='project-img-container'><img id='portImg' src='/portfolio.png'/></div>
              <p>You are currently on the website itself.</p>
             
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
         <div className='certificate-container'>
           <img id='portImg' src='/certificate.png'/>
         </div>
         </div>  
         <a className='click-here certificate-link' href='https://coursera.org/share/723f340d4107e1ffd914cde83716854f'>visit link to see my certificate</a>                  

    </>
    
  )
}
