import React from 'react';
import Skill from './Skill';
import skillsList from '../json/skillsData.json';
import '../styles/skills.css';

export default function Skills() {

  return (
    <section className='container-proyect'>
        <h1 className='titulos titulos-separadores'>Skills</h1>
        <div 
        className='container-skills'>
          {
            skillsList.length === 0 ? (
              <div className='skill'>No hay datos</div>
            ): (
              skillsList.map(skill => (
                <div className='skill' key={skill.id}>
                  <Skill titleSkill={skill.titleSkill}/>
                </div>
              ))
            )
          }
        </div>
    </section>
  )
}
