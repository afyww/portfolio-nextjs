import React from 'react'

const Aboutcard = () => {
  return (
    <div class="space-y-4 xl:mx-auto xl:my-auto">
      <div>
        <ul className='flex justify-center space-x-8'>
          <li className='text-white rounded-sm p-2 border'>Skills</li>
          <li className='text-white rounded-sm p-2 border'>Education</li>
          <li className='text-white rounded-sm p-2 border'>Certificate</li>
        </ul>
      </div>

      <div class="text-white justify-center text-sm space-y-2 p-8 bg-gray-700">
        <h1 className='font-semibold text-2xl'>My Skills</h1>
        <p className='font-light line-clamp-6'>
          I am a full stack web developer with a passion for creating interactive
          and responsive web applications. I have experience working with JavaScript,
          React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git.
          I am a quick learner and I am always looking to expand my knowledge and skill set.
          I am a team player and I am excited to work with others to create amazing applications.
          I am a full stack web developer with a passion for creating interactive
          and responsive web applications. I have experience working with JavaScript,
          React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git.
          I am a quick learner and I am always looking to expand my knowledge and skill set.
          I am a team player and I am excited to work with others to create amazing applications.</p>
      </div>
    </div>)
}

export default Aboutcard