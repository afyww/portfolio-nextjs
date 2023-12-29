import React, { useState } from 'react';

const Aboutcard = () => {
  const sections = ['skill', 'education', 'certificate'];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSetActiveIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="space-y-4 xl:mx-auto xl:my-auto">
      <div>
        <ul className="flex justify-center space-x-8">
          {sections.map((section, index) => (
            <li
              key={section}
              className={`text-white rounded-sm p-2 border cursor-pointer ${index === activeIndex ? 'bg-gray-500' : ''
                }`}
              onClick={() => handleSetActiveIndex(index)}
            >
              <a className="hover:underline hover:text-black">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="carousel-container overflow-hidden relative">
        <div
          className="flex transition-transform duration-300 ease-in-out transform"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {sections.map((section, index) => (
            <div
              key={section}
              className="w-full flex-shrink-0"
            >
              <div className="text-white justify-center text-sm space-y-2 p-8 bg-gray-700">
                <div>
                  <h1 className="font-semibold text-2xl">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </h1>
                  <p className="font-light">
                    {section === 'skill' && (
                      <>
                        I am a full stack web developer with a passion for creating interactive
                        and responsive web applications. I have experience working with JavaScript,
                        React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git.
                        I am a quick learner and I am always looking to expand my knowledge and skill set.
                        I am a team player and I am excited to work with others to create amazing applications.
                      </>
                    )}
                    {section === 'education' && (
                      <>
                        I completed my Bachelors degree in Computer Science from XYZ University.
                        I also pursued additional courses in web development and gained hands-on experience
                        in various technologies.
                      </>
                    )}
                    {section === 'certificate' && (
                      <>
                        I earned certifications in advanced web development and software engineering.
                        These certifications showcase my commitment to staying updated with the latest
                        technologies and best practices in the field.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutcard;
