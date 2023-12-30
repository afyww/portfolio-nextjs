import React from 'react';
import Image from 'next/image';
import Learnmorebtn from './Learnmorebtn';

const ProjectCard = ({ title, imageSrc, technologies, description }) => {
  return (
    <div className="rounded-sm space-y-3">
      <Image
        className="transition-transform ease-linear duration-300 transform hover:scale-110 rounded-sm"
        src={imageSrc}
        width={300}
        height={300}
        alt=""
      />
      <h1 className="font-semibold text-2xl">{title}</h1>
      <p className="text-emerald-600 line-clamp-1">{technologies}</p>
      <p className="text-left font-light line-clamp-2 max-w-xs">{description}</p>
      
      <Learnmorebtn title={title} technologies={technologies} description={description} />
    </div>
  );
};

const ProjectCardList = () => {
  const projects = [
    {
      title: 'Information System',
      imageSrc: '/images/Dinkes-Project.png',
      technologies: 'Laravel-Tailwind-Jquery-Docker-Mysql',
      description: 'Information system website for Dinas Kesehatan Kota Semarang.Build with laravel full stack framework and tailwind for the front end.This web for manage employee and make work letter for the employee.',
    },
    {
      title: 'Portfolio Website',
      imageSrc: '/images/Portfolio.png',
      technologies: 'NextJs-Javascript-Typescript-Tailwind-FramerMotion',
      description: 'Portfolio website for review my project.This website build with NextJs,Tailwind,And FramerMotion.',
    },
    {
      title: 'Portfolio Website',
      imageSrc: '/images/Portfolio.png',
      technologies: 'NextJs-Javascript-Typescript-Tailwind',
      description: 'Your description here...',
    },
    {
      title: 'Portfolio Website',
      imageSrc: '/images/Portfolio.png',
      technologies: 'NextJs-Javascript-Typescript-Tailwind',
      description: 'Your description here...',
    },
    {
      title: 'Portfolio Website',
      imageSrc: '/images/Portfolio.png',
      technologies: 'NextJs-Javascript-Typescript-Tailwind',
      description: 'Your description here...',
    },
    {
      title: 'Portfolio Website',
      imageSrc: '/images/Portfolio.png',
      technologies: 'NextJs-Javascript-Typescript-Tailwind',
      description: 'Your description here...',
    },
    // Add more projects as needed
  ];

  return (
    <div className="space-y-4 xl:mx-auto xl:my-auto">
      <div className="flex justify-center space-x-8">
        <p className="text-white rounded-sm p-2 border">My Recent Works</p>
      </div>
      <div className="grid xl:grid-cols-2 gap-8 overflow-y-scroll h-96 text-white p-8 bg-gray-700">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCardList;
