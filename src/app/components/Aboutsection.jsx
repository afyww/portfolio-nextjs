import React from 'react'

const Aboutsection = () => {
  return (
    <section id="about">
    <div class=" grid grid-cols-1 h-fit md:h-screen xl:h-screen md:grid-cols-2 xl:grid-cols-2">
        <div class="my-auto">
            <h1 class="text-6xl text-white font-extrabold">
                About Me
            </h1>
        </div>
        <div class="my-auto space-y-4">
            <h1 class="text-4xl font-extrabold text-black">Afy Wahyu Wibowo</h1>
            <div class="text-white justify-center text-sm space-y-2">
                <p>👋 Me chamo Washington Henrique Fernandes de Sousa, mas pode me chamar apenas de Henrique.
                    Prazer!</p>
                <p>👨‍💻 Há mais de 2 anos desenvolvendo e programando interfaces com JavaScript, React JS e
                    Typescript.</p>
                <p>🎓 Graduado em Análise e Desenvolvimento de Sistemas pela Fatec de São José dos Campos</p>
                <p>💡 Interesses em desenvolvimento Front-end com React, React Native, VueJS e UX/UI Design.</p>
                <p>🚀 Tentando ser um pouquinho melhor do que ontem todos dias.</p>
            </div>
        </div>
    </div>
</section>  )
}

export default Aboutsection