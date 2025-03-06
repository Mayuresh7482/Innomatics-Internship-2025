import React from 'react';
import './SkillCategory.css';

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="skill-category">
      <h3>{title}</h3>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-level" 
                style={{ width: `${skill.level}%` }}
                data-level={skill.level}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;