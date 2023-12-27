"use client";
import React from 'react'
import Projectcard from './Projectcard'
import TypewriterComponent from 'typewriter-effect';

const Projectsection = () => {
  return (
    <section id="project">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 h-screen">
        <div class="my-auto">
            <h1 class="text-6xl text-white font-extrabold text-center">
                <TypewriterComponent 
                options={{ 
                    strings: [
                        "Projects",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                 }}
                />
            </h1>
        </div>
        <Projectcard />
    </div>
</section>  )
}

export default Projectsection