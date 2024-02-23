import React from 'react'
import Skill from './components/Skill';
import './skills.css';
import 'aos/dist/aos.css';

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
  },
  {
    id: 9,
    titleSkill: 'CSS'
  },
  {
    id: 10,
    titleSkill: 'JavaScript'
  }
]

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
