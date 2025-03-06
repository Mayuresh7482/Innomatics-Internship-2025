import React, { useEffect, useRef } from 'react';
import SkillCategory from '../ui/SkillCategory';
import { skillsData } from '../../data/skills';
import './Skills.css';

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <div className="section-header">
          <h2>Skills & Technologies</h2>
          <p>My technical toolkit and expertise</p>
        </div>
        
        <div className="skills-container">
          {skillsData.map((category) => (
            <SkillCategory 
              key={category.id} 
              title={category.title} 
              skills={category.skills} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;