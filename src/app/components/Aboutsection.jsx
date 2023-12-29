import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import AboutCard from './AboutCard'; 

const AboutSection = () => {
    return (
        <section id="about">
            <div className="grid grid-cols-1 h-screen md:h-full xl:h-screen 2xl:h-screen md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
                <div className="my-auto">
                    <h1 className="text-6xl text-center text-white font-extrabold">
                        <TypewriterComponent 
                            options={{ 
                                strings: ["About"],
                                autoStart: true,
                                loop: true,
                                delay: 90,
                            }}
                        />
                    </h1>
                </div>
                <AboutCard />
            </div>
        </section>
    );
};

export default AboutSection;
