import React from 'react'

export const About = () => {

    
    return(
     <>   
     <div id='about-name-pic'>

        <div id='about-name'>
          <div>
            <h3 style={{display: 'inline-block'}}>I am</h3>
            <h2 style={{display: 'inline-block',color: 'rgb(255,215,0)',marginLeft: '0.4rem'}}>Adarsh Patel</h2>
          </div>
           <h3 style={{marginTop: '-1rem'}}>Frontend Developer</h3>
        </div>
        <div id='about-pic'>
          <img id='pic' src='/vecteezy_developer-png-with-ai-generated_29711176.png'/>
        </div>

     </div>
       <div id='about-description'>
            <h1>About</h1>
            <div style={{display: 'flex'}}>
            <div id='yellowline' style={{width: '10vw', border: 'solid 1px yellow',height: '0' }}></div>
            <p style={{marginLeft: '2rem'}}>Hello! I'm a passionate frontend developer with a keen eye for creating engaging and user-friendly web experiences.
            My expertise lies in turning design concepts into fully functional and visually stunning websites and web applications. I 
            specialize in HTML, CSS, JavaScript, React, and Redux, and I'm constantly exploring new technologies and frameworks to enhance my 
            skills and stay ahead of industry trends. 
            Whether it's crafting responsive layouts, implementing smooth animations, 
            or optimizing performance for seamless user interactions, I thrive on the 
            challenges of frontend development.
          </p>
            </div>
       </div>
    </>
  )
}
