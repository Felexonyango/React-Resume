  
import React from 'react';

const Skills = (props) => {
  const mySkills = (
    <div>
      {props.skills.map((skll) =>
        <li key={skll.name}>
          {skll.name}
           
         </li>
      )}
    </div>
  );
  return (
    <div className='title'>
      
      <h2>SKILLS</h2>
      {mySkills}
    </div>
  )
};

export default Skills;