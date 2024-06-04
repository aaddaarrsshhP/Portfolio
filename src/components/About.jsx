import React from 'react'

export const About = () => {

    
    return(
     <>   
     <div id='about-name-pic'>

        <div className='about-name'>
          <h2>I am <span>Adarsh Patel</span></h2>
          <h2>Front-end Developer</h2>
        </div>

        <div className='about-pic'>
          <img src='/vecteezy_developer-png-with-ai-generated_29711176.png'/>
        </div>

     </div>
       <div id='about-description'>
            <h1>About</h1>
            <div style={{display: 'flex'}}>
            <div id='yellowline'></div>
            <p className='pp'>Hello! I'm a passionate frontend developer with a keen eye for creating engaging and user-friendly web experiences.
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
