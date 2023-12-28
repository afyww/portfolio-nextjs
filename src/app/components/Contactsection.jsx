"use client";
import React from 'react'
import TypewriterComponent from 'typewriter-effect';
import { motion } from 'framer-motion';

const Contactsection = () => {
    return (
        <section id="contact">
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 h-screen md:h-screen xl:h-screen 2xl:h-screen">
                <div class="my-auto">
                    <h1 class="text-6xl text-white font-extrabold text-center">
                        <TypewriterComponent
                            options={{
                                strings: [
                                    "Contact",
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                            }}
                        />
                    </h1>
                </div>
                <div class="md:my-auto xl:my-auto">
                    <form action="">
                        <div class="space-y-8">
                            <div class="flex space-x-5">
                                <div class="space-y-2">

                                    <motion.div
                                        initial={{ opacity: 0, scale: 1 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 2.0 }}
                                    >
                                        <label class="text-white font-light">Your Name</label>
                                        <input type="text" class="rounded-xl w-full py-2 bg-gray-600 px-2"
                                            placeholder="Name" />
                                    </motion.div>
                                </div>
                                <div class="space-y-2">

                                    <motion.div
                                        initial={{ opacity: 0, scale: 1 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 2.0 }}
                                    >
                                        <label class="text-white font-light">Your Email</label>
                                        <input type="email" class="rounded-xl w-full py-2 bg-gray-600 px-2"
                                            placeholder="Email" />
                                    </motion.div>
                                </div>
                            </div>
                            <div class="space-y-2">

                                <motion.div
                                    initial={{ opacity: 0, scale: 1 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 2.0 }}
                                >
                                    <label class="text-white font-light">Your Message</label>
                                    <textarea name="textarea" cols="40" rows="12" placeholder="Write your message..."
                                        class="w-full rounded-xl py-2 px-2 bg-gray-600 "></textarea>
                                </motion.div>
                            </div>
                            <div class="">
                                <button type="submit" class="bg-blue-800 text-white px-5 py-3 font-xl rounded-xl">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section >
    )
}

export default Contactsection