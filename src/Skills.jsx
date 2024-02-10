import React from 'react'
import Skill from './components/Skill';
import './proyects.css';
import './about.css';
import './skills.css';

const skillsList = [
  {
    id: 1,
    titleSkill: 'Java'
  },
  {
    id: 2,
    titleSkill: 'Figma'
  },
  {
    id: 3,
    titleSkill: 'C++'
  },
  {
    id: 4,
    titleSkill: 'GitHub + Git'
  },
  {
    id: 5,
    titleSkill: 'Docker'
  },
  {
    id: 6,
    titleSkill: 'Linux/Windows'
  },
  {
    id: 7,
    titleSkill: 'Mysql'
  },
  {
    id: 8,
    titleSkill: 'React'
  }
]

export default function Skills() {
  return (
    <section className='container-proyects'>
        <h1 className='titulos'>Skills</h1>
        <div className='container-skills'>
          {
            skillsList.map(skill => (
              <div className='skill' key={skill.id}>
                <Skill titleSkill={skill.titleSkill}/>
              </div>
            ))
          }
        </div>
    </section>
  )
}
