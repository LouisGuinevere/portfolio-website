import React from 'react'
import ExperienceDetail from './ExperienceDetail'
import "./experience.css"

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience_card">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <ExperienceDetail title="HTML" content="Experienced"/>
            <ExperienceDetail title="CSS" content="Experienced" />
            <ExperienceDetail title="Javascript" content="Experienced" />
            <ExperienceDetail title="Bootstrap" content="Experienced" />
            <ExperienceDetail title="React" content="Experienced" />
          </div>
        </div>
        <div className="experience_card">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <ExperienceDetail title="Node JS" content="Experienced" />
            <ExperienceDetail title="MongoDB" content="Experienced" />
            <ExperienceDetail title="MySQL" content="Experienced" />
            <ExperienceDetail title="PHP" content="Experienced" />
            <ExperienceDetail title="Java" content="Experienced" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience