import React from 'react'

const Projectsection = () => {
  return (
    <section id="project">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 h-screen">
        <div class="my-auto">
            <h1 class="text-6xl text-white font-extrabold">
                Projects
            </h1>
        </div>
        <div class="space-y-8 my-auto">
            <h1 class="text-4xl font-extrabold text-black">My Recent Works</h1>
            <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5">
                <div class="border-2 rounded-xl p-14">
                    A
                </div>
                <div class="border-2 rounded-xl p-14">
                    B
                </div>
                <div class="border-2 rounded-xl p-14">
                    C
                </div>
                <div class="border-2 rounded-xl p-14">
                    A
                </div>
                <div class="border-2 rounded-xl p-14">
                    B
                </div>
                <div class="border-2 rounded-xl p-14">
                    C
                </div>
                <div class="border-2 rounded-xl p-14">
                    A
                </div>
                <div class="border-2 rounded-xl p-14">
                    B
                </div>
            </div>
        </div>
    </div>
</section>  )
}

export default Projectsection