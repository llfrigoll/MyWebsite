import React, { useEffect } from 'react';
import './Components.css'; // Import the CSS file for styling

const About_Me = () => {

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const heading = document.getElementById("about-me-title")
        const headingRect = heading.getBoundingClientRect()
    
        const headingHeight = headingRect.height;
        const visibleHeadingHeight = Math.max(0, Math.min(headingRect.bottom, windowHeight) - Math.max(headingRect.top, 0));
    
        let headingVisibilityPercentage = visibleHeadingHeight / headingHeight
    
        if(headingVisibilityPercentage === 1) {
          heading.classList.add('visible')
        }else {
          heading.classList.remove('visible')
        }
    
        // const heading = document.getElementById('tech-stack-heading')
        // const headingRect = heading.getBoundingClientRect()
    
        // const headingHeight = headingRect.height;
        // const visibleHeadingHeight = Math.max(0, Math.min(headingRect.bottom, windowHeight) - Math.max(headingRect.top, 0));
    
        // let headingVisibilityPercentage = visibleHeadingHeight / headingHeight
    
        // if(headingVisibilityPercentage > 0.8 || visibilityPercentage > 0) {
        //   heading.classList.add('visible')
        // }else {
        //   heading.classList.remove('visible')
        // }
    
        // const heading = document.getElementById('tech-stack-heading')
        // const headingRect = heading.getBoundingClientRect()
    
        // const headingHeight = headingRect.height;
        // const visibleHeadingHeight = Math.max(0, Math.min(headingRect.bottom, windowHeight) - Math.max(headingRect.top, 0));
    
        // let headingVisibilityPercentage = visibleHeadingHeight / headingHeight
    
        // if(headingVisibilityPercentage > 0.8 || visibilityPercentage > 0) {
        //   heading.classList.add('visible')
        // }else {
        //   heading.classList.remove('visible')
        // }
    }
    

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return (
        <>
        <div className="about-me" id="about-me">
            <h1 className="about-me-title" id="about-me-title">About me</h1>
            <br />
            <div className="about-me-heading">
                <h1>Who I am</h1>
                <h2>Designer and Developer based in Johannesburg, South Africa</h2>
                <p>Hi, I'm Franz Pretorius, a front-end developer with a creative flair that's always a cut above the rest! I've got a solid foundation in HTML, CSS, and JavaScript, and I'm always styling my skills with the latest trends.</p>
                <p>After branching out from the University of Johannesburg, I committed to a 6-month Web Development course at CodeSpace Academy, where I merged my knowledge with hands-on experience in TypeScript, Tailwind CSS, React, Bootstrap, Framer-Motion and version control tools like Git and GitHub. I'm currently upskilling in UI/UX design using Figma.</p>
                <p>My portfolio is loaded with projects that showcase my skills, from a bank landing page to a kanban task management application, and even a podcast app that streams online content using the Fetch API.</p>
                <p>I'm a team player who's always ready to lend a hand and collaborate on projects. My debugging skills are on point, and I'm always adapting to new development tasks.</p>
                <p>As a dedicated problem-solver, I thrive on resolving issues and completing projects to the highest standard. If you're looking for a reliable, enthusiastic front-end developer who's always connected and ready to push the boundaries, let's link up and create something amazing together!</p>
            </div>
        </div>
        </>
      );
    };

export default About_Me;
