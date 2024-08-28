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
        }
    
        const titleHeading = document.getElementById("about-me-heading")
        const titleHeadingRect = titleHeading.getBoundingClientRect()
    
        const titleHeadingHeight = titleHeadingRect.height;
        const visibleTitleHeadingHeight = Math.max(0, Math.min(titleHeadingRect.bottom, windowHeight) - Math.max(titleHeadingRect.top, 0));
    
        let titleHeadingVisibilityPercentage = visibleTitleHeadingHeight / titleHeadingHeight
    
        if(titleHeadingVisibilityPercentage === 1) {
            titleHeading.classList.add('visible')
        }
    
        const pHeadingList = document.querySelectorAll(".about-me-heading-p")
        pHeadingList.forEach(pHeading => {
            const pHeadingRect = pHeading.getBoundingClientRect()
        
            const pHeadingHeight = pHeadingRect.height;
            const visiblePHeadingHeight = Math.max(0, Math.min(pHeadingRect.bottom, windowHeight) - Math.max(pHeadingRect.top, 0));
        
            let pHeadingVisibilityPercentage = visiblePHeadingHeight / pHeadingHeight
            if(pHeadingVisibilityPercentage === 1) {
                pHeading.classList.add('visible')
            }
        })
        
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
            <div className="about-me-heading" id="about-me-heading">
                <h1 className="about-me-heading-title" id="about-me-heading-title">Who I am</h1>
                <h2 className="about-me-heading-subtitle" id="about-me-heading-subtitle">Designer and Developer based in Johannesburg, South Africa</h2>
            </div>
            <p className="about-me-heading-p" id="about-me-heading-p">Hi, I'm Franz Pretorius, a front-end developer with a creative flair that's always a cut above the rest! I've got a solid foundation in HTML, CSS, and JavaScript, and I'm always styling my skills with the latest trends.</p>
            <p className="about-me-heading-p" id="about-me-heading-p">After branching out from the University of Johannesburg, I committed to a 6-month Web Development course at CodeSpace Academy, where I merged my knowledge with hands-on experience in TypeScript, Tailwind CSS, React, Bootstrap, Framer-Motion and version control tools like Git and GitHub. I'm currently upskilling in UI/UX design using Figma.</p>
            <p className="about-me-heading-p" id="about-me-heading-p">My portfolio is loaded with projects that showcase my skills, from a bank landing page to a kanban task management application, and even a podcast app that streams online content using the Fetch API.</p>
            <p className="about-me-heading-p" id="about-me-heading-p">I'm a team player who's always ready to lend a hand and collaborate on projects. My debugging skills are on point, and I'm always adapting to new development tasks.</p>
            <p className="about-me-heading-p" id="about-me-heading-p">As a dedicated problem-solver, I thrive on resolving issues and completing projects to the highest standard. If you're looking for a reliable, enthusiastic front-end developer who's always connected and ready to push the boundaries, let's link up and create something amazing together!</p>
        </div>
        </>
      );
    };

export default About_Me;
