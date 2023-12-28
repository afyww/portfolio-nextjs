"use client";
import Link from 'next/link'
import React from 'react'
import TypewriterComponent from 'typewriter-effect'
const Herosection = () => {
    return (
        <section id="home">
            <div class="grid grid-cols-1 h-screen md:grid-cols-2 xl:grid-cols-3 2xl:grid-col-3">
                <div class="my-0 md:my-auto xl:my-auto space-y-2">
                    <h1 class="text-5xl xl:text-left text-center text-white font-extrabold">Hi.Im</h1>
                    <h1 class="text-5xl xl:text-left text-center text-black font-extrabold">Afy Wahyu</h1>
                    <div class="my-2">
                        <h1 class="text-5xl xl:text-left text-center text-white font-bold font-['QuattrocentoSans']">
                            <TypewriterComponent
                                options={{
                                    strings: [
                                        "A Laravel Developer",
                                        "A Next Js Developer",
                                        "A Full Stack Web Developer",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                }}
                            />
                        </h1>
                        <h1 class="text-3xl xl:text-left text-center text-black font-bold font-['QuattrocentoSans']"> Based In <span
                            class="text-red-600">Indonesia</span></h1>
                    </div>
                </div>
                <div class="order-first mx-auto xl:mx-0 md:mx-0 2xl:mx-0 md:order-first md:col-span-1 xl:col-span-1 xl:order-none my-auto">
                    <svg className='w-full h-full' viewBox="0 0 511 594" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_i_4_241)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M187.688 349.726C231.358 369.154 280.327 366.996 318.696 349.725V392.286L319.129 392.276V417.265H187.688V349.726Z" fill="#BB7D52" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M187.687 385.189C231.356 404.618 280.327 402.459 318.696 385.189V412.33L348.2 411.716L348.566 411.728C348.566 477.147 161.182 486.939 161.182 411.629L161.913 411.602L187.687 411.711V385.189Z" fill="#D08B5B" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M110.974 116.327C215.187 60.9447 348.511 80.6392 393.556 117.159C406.579 143.315 407.499 168.544 403.668 195.625C412.466 190.356 422.928 191.562 431.172 196.469C434.511 218.941 443.457 263.394 403.37 265.323C389.569 408.72 136.7 426.569 102.518 265.792C62.7876 264.648 73.5007 219.721 75.9833 198.147C85.515 192.095 96.3999 195.141 103.156 197.849L110.974 116.327V116.327Z" fill="#F2A26B" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M95.4947 177.056C96.0423 178.311 94.2635 179.566 88.9272 181.849C77.8828 186.453 76.9144 187.41 76.8864 194.622V194.971C76.8864 204.669 78.6652 207.179 86.3271 208.093C94.1266 209.006 99.053 210.488 100.422 212.314C100.968 213.113 101.516 216.764 101.516 220.53C101.516 228.631 104.525 240.043 108.221 245.975C118.62 262.863 145.71 271.422 178.549 268.227C194.695 266.514 204.136 263.89 214.398 258.185C229.723 249.627 236.837 238.673 237.932 221.443C238.753 210.945 238.753 210.945 242.858 209.803C248.195 208.207 261.467 208.207 266.941 209.803C271.181 211.059 271.181 211.059 271.181 219.161C271.181 228.517 274.055 239.7 277.885 245.977C288.284 262.863 315.376 271.422 348.078 268.227C364.361 266.515 373.801 263.89 384.064 258.186C399.388 249.628 406.504 238.331 407.872 220.645C408.829 209.006 408.146 209.576 423.196 207.979C430.858 207.18 432.638 204.669 432.638 194.857C432.638 187.097 431.132 185.615 418.408 181.05L410.744 178.311L398.84 175.231L390.084 173.634C385.295 172.835 379.138 172.149 376.538 172.035C373.801 172.035 366.961 169.981 360.12 167.129C348.762 162.451 348.215 162.336 334.806 162.336C319.482 162.336 308.672 164.961 299.914 170.667C297.315 172.378 291.842 174.546 288.01 175.344C284.042 176.144 276.654 178.312 271.592 180.137C258.32 184.816 251.478 184.588 234.512 178.882C227.124 176.373 220.145 174.317 219.187 174.317C218.228 174.317 215.082 172.721 212.209 170.781C203.178 164.847 193.053 162.336 177.454 162.336C164.182 162.336 163.362 162.565 151.595 167.243C143.658 170.439 137.501 172.035 133.806 172.035C130.796 172.149 124.228 172.835 119.302 173.748L95.4947 177.056ZM204.956 191.776C221.375 196.226 226.437 202.273 226.574 217.563C226.711 225.665 226.165 228.29 223.565 232.739C214.535 248.143 188.811 256.816 158.298 254.876C134.901 253.279 122.86 247.802 116.429 235.706C112.324 227.833 111.777 209.006 115.607 203.186C119.166 197.708 126.008 193.944 137.226 191.433C145.984 189.493 150.773 189.265 172.665 189.493C191.547 189.835 199.757 190.406 204.956 191.776ZM374.621 191.776C391.042 196.226 396.103 202.273 396.241 217.563C396.378 225.665 395.83 228.29 393.23 232.739C384.199 248.143 358.475 256.816 327.963 254.876C304.566 253.279 292.525 247.802 286.094 235.706C281.989 227.833 281.443 209.006 285.273 203.186C288.831 197.708 295.672 193.944 306.892 191.433C315.649 189.493 320.437 189.265 342.329 189.493C361.212 189.835 369.422 190.406 374.621 191.776Z" fill="#A66F49" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M218.092 4.7916L209.471 9.47032L205.093 5.93274C198.251 0.341887 194.968 1.36884 189.768 10.6115C186.621 16.3165 182.654 17.0016 175.812 13.2356C173.075 11.6384 169.655 10.2689 168.287 10.2689C165.277 10.2689 162.403 14.1484 161.172 19.2832C160.214 23.5052 156.93 27.3847 154.193 27.3847C153.236 27.3847 149.678 26.3577 146.258 25.1024C141.058 23.1627 139.416 23.0485 136.543 24.0754C133.259 25.3307 132.985 26.0152 132.985 33.5464C132.985 39.0237 132.028 43.2457 130.249 46.4408C127.649 51.233 127.512 51.3472 121.081 51.3472C110.409 51.3472 105.346 55.7969 110.545 60.704C113.282 63.0998 111.503 65.6104 106.167 66.6374C96.3153 68.6913 93.4422 73.9403 98.7785 79.5311C102.473 83.5248 102.336 84.0957 96.4522 86.3779C90.2953 88.8879 89.3378 91.7411 93.3053 95.278C96.3153 98.017 96.3153 98.1305 94.6734 113.193C93.0323 127.799 93.579 168.534 95.4947 172.757C96.0423 174.012 94.2635 175.267 88.9272 177.549C77.707 182.227 76.8864 183.14 76.8864 190.671C76.8864 200.37 78.6652 202.881 86.3278 203.794C94.1266 204.706 99.0522 206.189 100.421 208.016C100.968 208.814 101.515 212.465 101.515 216.231C101.515 224.333 104.525 235.743 108.22 241.677C118.619 258.565 145.71 267.122 178.549 263.928C194.695 262.216 204.136 259.592 214.398 253.887C229.722 245.329 236.837 234.374 237.933 217.144C238.753 206.646 238.753 206.646 242.858 205.506C248.195 203.908 261.467 203.908 266.94 205.506C271.182 206.761 271.182 206.761 271.182 214.862C271.182 224.219 274.055 235.402 277.886 241.677C288.285 258.565 315.376 267.123 348.078 263.929C364.361 262.217 373.801 259.592 384.064 253.887C399.389 245.329 406.504 234.033 407.872 216.346C408.829 204.707 408.146 205.278 423.196 203.68C430.859 202.881 432.638 200.371 432.638 190.558C432.638 182.799 431.132 181.315 418.408 176.751L410.745 174.012V162.602C410.608 143.09 407.324 129.283 401.577 124.833C399.662 123.35 395.42 121.067 392 119.698C386.663 117.53 385.569 117.416 383.927 118.899C382.285 120.269 382.695 121.524 386.8 128.37C391.863 136.814 396.378 151.078 397.883 163.401L398.841 170.932L390.084 169.334C385.295 168.536 379.138 167.851 376.538 167.737C373.801 167.737 366.96 165.683 360.119 162.831C348.762 158.152 348.215 158.038 334.806 158.038C319.481 158.038 308.671 160.663 299.915 166.368C297.315 168.08 291.842 170.247 288.011 171.046C284.043 171.845 276.654 174.013 271.592 175.839C258.32 180.517 251.478 180.289 234.511 174.583C227.123 172.073 220.145 170.019 219.187 170.019C218.229 170.019 215.082 168.422 212.208 166.482C203.178 160.548 193.053 158.038 177.454 158.038C164.182 158.038 163.361 158.266 151.594 162.944C143.658 166.139 137.501 167.737 133.806 167.737C130.796 167.851 124.229 168.536 119.303 169.449C105.347 171.959 106.441 173.442 107.535 154.273C108.357 137.841 110.956 123.921 113.967 119.128C117.388 113.765 144.479 102.24 171.297 94.7091C204.547 85.4664 241.9 81.9289 284.043 84.3253C320.165 86.265 329.743 88.775 369.697 106.69C383.653 112.966 396.652 117.987 399.662 118.329C404.588 118.899 404.998 118.671 406.503 115.248C409.787 107.374 407.187 87.5197 401.714 78.5055C397.61 71.8876 397.336 69.377 399.662 62.5309C401.304 57.738 401.304 56.711 399.252 54.201C397.336 51.8046 395.967 51.3485 390.495 51.3485C386.937 51.4627 381.464 51.9187 378.317 52.3755C372.707 53.2882 372.57 53.2882 373.255 50.3215C375.991 39.1392 372.707 36.6286 359.434 39.4811C355.193 40.3939 351.225 40.9648 350.951 40.6222C350.541 40.2803 350.951 36.8569 351.909 33.0916C353.55 26.9299 353.414 25.9029 351.499 24.1909C349.446 22.5937 348.215 22.5937 340.278 23.849C327.554 26.0171 322.765 24.9902 318.113 19.0561C313.324 13.2369 308.945 11.183 304.43 12.666C301.967 13.4646 299.368 13.1227 294.442 11.2972C289.242 9.47162 286.232 9.01491 281.58 9.58515C276.791 10.2702 274.191 9.81351 269.676 7.87377C265.024 5.93403 262.424 5.5915 256.814 6.16174C250.794 6.73263 248.604 6.27592 241.626 3.42341C237.248 1.59785 232.049 0.114178 230.133 0C228.217 0 222.881 2.16809 218.092 4.7929L218.092 4.7916ZM204.956 187.476C221.375 191.927 226.438 197.974 226.575 213.265C226.712 221.366 226.164 223.991 223.565 228.441C214.534 243.845 188.811 252.517 158.298 250.578C134.901 248.98 122.86 243.503 116.429 231.407C112.324 223.534 111.777 204.706 115.608 198.887C119.166 193.41 126.007 189.645 137.226 187.134C145.984 185.194 150.773 184.966 172.665 185.194C191.547 185.537 199.756 186.107 204.956 187.476ZM374.621 187.476C391.041 191.927 396.103 197.974 396.24 213.265C396.377 221.366 395.83 223.991 393.23 228.441C384.199 243.845 358.476 252.517 327.963 250.578C304.566 248.98 292.525 243.503 286.095 231.407C281.99 223.534 281.442 204.706 285.273 198.887C288.831 193.41 295.672 189.645 306.892 187.134C315.649 185.194 320.438 184.966 342.33 185.194C361.212 185.537 369.422 186.107 374.621 187.476Z" fill="black" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M160.898 201.284C153.646 204.136 145.298 211.325 145.298 214.748C145.298 217.372 147.488 217.372 151.73 214.52C162.812 207.217 186.347 207.217 198.388 214.406C200.713 215.661 203.177 216.802 203.998 216.802C206.871 216.802 205.503 212.694 201.125 208.358C195.378 202.424 185.116 198.545 175.401 198.545C170.338 198.545 165.549 199.457 160.898 201.283V201.284Z" fill="#533824" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M319.617 201.284C312.366 204.136 304.019 211.325 304.019 214.748C304.019 217.372 306.208 217.372 310.45 214.52C321.532 207.217 345.067 207.217 357.108 214.406C359.433 215.661 361.897 216.802 362.718 216.802C365.591 216.802 364.223 212.694 359.844 208.358C354.098 202.424 343.836 198.545 334.121 198.545C329.058 198.545 324.269 199.457 319.618 201.283L319.617 201.284Z" fill="#533824" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M222.88 255.826C224.386 260.733 228.764 264.613 236.426 267.694C242.584 270.204 245.731 270.775 254.761 270.775C263.791 270.775 266.939 270.204 273.096 267.694C280.758 264.613 285.136 260.733 286.641 255.826L287.326 253.316H254.761H222.196L222.88 255.826Z" fill="#AF754C" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M216.586 301.697C218.365 311.168 226.985 320.867 237.658 325.431C245.456 328.855 259.824 329.539 268.034 326.915C280.348 322.921 291.021 312.195 292.937 301.697H216.586Z" fill="#3E291B" />
                            <path d="M303.036 521.813L311.823 515.855C313.859 514.475 316.852 514.732 318.507 516.43C320.163 518.128 319.854 520.624 317.818 522.004L313.565 524.887L344.438 546.58C346.474 547.961 346.783 550.457 345.127 552.154C344.188 553.118 342.818 553.617 341.438 553.617C340.385 553.617 339.324 553.327 338.443 552.729L303.036 527.962C301.927 527.209 301.282 526.08 301.282 524.887C301.282 523.695 301.927 522.565 303.036 521.813Z" fill="#7B4AE2" />
                            <path d="M342.053 485.411C344.575 485.428 346.605 487.147 346.584 489.251L346.192 549.838C346.171 551.942 344.109 553.634 341.587 553.617C340.948 553.613 340.341 553.499 339.79 553.298C338.169 552.705 337.04 551.348 337.055 549.777L337.449 489.19C337.469 487.086 339.53 485.394 342.053 485.411Z" fill="#7B4AE2" />
                            <path d="M362.105 527.088L365.35 524.887L353.792 517.05C351.756 515.669 351.448 513.174 353.103 511.476C354.758 509.778 357.751 509.52 359.787 510.901L375.878 521.813C376.988 522.565 377.632 523.695 377.632 524.887C377.632 526.08 376.988 527.209 375.878 527.961L368.1 533.236C367.219 533.833 366.159 534.124 365.105 534.124C363.724 534.124 362.354 533.624 361.416 532.662C359.761 530.964 360.069 528.468 362.105 527.088Z" fill="#C83267" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M160.349 411.67C119.986 414.948 83.3169 427.495 52.8039 448.407C26.5478 466.325 19.2227 480.566 0 500.848C39.1664 534.735 91.8343 563.448 149.268 579.306C187.578 589.819 213.712 593.209 254.76 593.209C295.81 593.209 321.943 589.819 360.255 579.306C418.197 563.853 467.004 538.53 511 502.182C480.867 469.746 468.463 448.486 419.911 428.512C399.523 420.035 375.578 413.931 357.244 412.348L348.609 411.699L348.198 411.691L347.256 417.096C343.151 442.868 304.431 461.859 256.129 461.859C207.83 461.859 169.792 443.094 164.865 416.983C163.908 411.783 163.497 411.33 160.351 411.67H160.349Z" fill="#090E16" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M185.386 365.739L184.816 365.59C183.255 365.181 190.92 362.262 193.635 361.178C201.618 357.995 212.029 358.645 225.044 363.204C230.068 364.439 237.335 367.747 243.178 369.427C256.05 373.223 262.627 371.044 274.24 366.895L284.392 363.204C297.407 358.645 307.818 357.995 315.801 361.178C318.478 362.233 321.121 363.602 323.134 365.065L323.74 365.505C300.444 380.324 225.768 387.692 185.386 365.739Z" fill="#2C1B18" fill-opacity="0.501961" />
                        </g>
                        <defs>
                            <filter id="filter0_i_4_241" x="0" y="0" width="511" height="597.209" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_4_241" />
                            </filter>
                        </defs>
                    </svg>

                </div>
                <div class="ml-0 md:ml-32 xl:ml-32 my-auto space-y-4">
                    <div class="flex justify-center">
                        <Link href="https://www.linkedin.com/in/afywahyu/" class="pr-4">
                            <svg class="w-12 h-12" width="4" height="48" viewBox="0 0 48 48" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M42 8.64706V39.3529C42 40.055 41.7211 40.7283 41.2247 41.2247C40.7283 41.7211 40.055 42 39.3529 42H8.64706C7.94502 42 7.27173 41.7211 6.77531 41.2247C6.27889 40.7283 6 40.055 6 39.3529V8.64706C6 7.94502 6.27889 7.27173 6.77531 6.77531C7.27173 6.27889 7.94502 6 8.64706 6H39.3529C40.055 6 40.7283 6.27889 41.2247 6.77531C41.7211 7.27173 42 7.94502 42 8.64706ZM16.5882 19.7647H11.2941V36.7059H16.5882V19.7647ZM17.0647 13.9412C17.0675 13.5407 16.9914 13.1436 16.8407 12.7726C16.69 12.4016 16.4677 12.0638 16.1866 11.7787C15.9054 11.4936 15.5707 11.2666 15.2018 11.1108C14.8329 10.955 14.4369 10.8734 14.0365 10.8706H13.9412C13.1268 10.8706 12.3458 11.1941 11.7699 11.7699C11.1941 12.3458 10.8706 13.1268 10.8706 13.9412C10.8706 14.7555 11.1941 15.5366 11.7699 16.1124C12.3458 16.6883 13.1268 17.0118 13.9412 17.0118C14.3417 17.0216 14.7402 16.9525 15.1139 16.8083C15.4877 16.664 15.8293 16.4476 16.1194 16.1713C16.4095 15.895 16.6423 15.5642 16.8045 15.1979C16.9667 14.8316 17.0551 14.437 17.0647 14.0365V13.9412ZM36.7059 26.4141C36.7059 21.3212 33.4659 19.3412 30.2471 19.3412C29.1932 19.2884 28.1438 19.5129 27.2037 19.9922C26.2637 20.4715 25.4657 21.189 24.8894 22.0729H24.7412V19.7647H19.7647V36.7059H25.0588V27.6953C24.9823 26.7725 25.273 25.8567 25.8678 25.1469C26.4625 24.4372 27.3133 23.9908 28.2353 23.9047H28.4365C30.12 23.9047 31.3694 24.9635 31.3694 27.6318V36.7059H36.6635L36.7059 26.4141Z"
                                    fill="black" />
                            </svg>
                        </Link>
                        <Link href="https://www.instagram.com/aafyww/" class="pr-4">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M24 6C19.1112 6 18.4992 6.0204 16.5792 6.108C14.6628 6.1956 13.3536 6.5004 12.2088 6.9456C11.0088 7.3968 9.9204 8.1048 9.0204 9.0216C8.10507 9.92056 7.39663 11.0082 6.9444 12.2088C6.5016 13.3536 6.1956 14.664 6.108 16.5804C6.0216 18.4992 6 19.11 6 24C6 28.89 6.0204 29.5008 6.108 31.4208C6.1956 33.3372 6.5004 34.6464 6.9456 35.7912C7.3968 36.9912 8.1048 38.0796 9.0216 38.9796C9.92058 39.8949 11.0082 40.6033 12.2088 41.0556C13.3536 41.4996 14.6628 41.8044 16.5792 41.892C18.4992 41.9796 19.1112 42 24 42C28.8888 42 29.5008 41.9796 31.4208 41.892C33.3372 41.8044 34.6464 41.4996 35.7912 41.0544C36.9912 40.6032 38.0796 39.8952 38.9796 38.9784C39.8949 38.0794 40.6034 36.9918 41.0556 35.7912C41.4996 34.6464 41.8044 33.3372 41.892 31.4208C41.9796 29.5008 42 28.8888 42 24C42 19.1112 41.9796 18.4992 41.892 16.5792C41.8044 14.6628 41.4996 13.3536 41.0544 12.2088C40.6025 11.0077 39.894 9.91959 38.9784 9.0204C38.0794 8.10507 36.9918 7.39663 35.7912 6.9444C34.6464 6.5016 33.336 6.1956 31.4196 6.108C29.5008 6.0216 28.89 6 24 6ZM24 9.2436C28.806 9.2436 29.376 9.2616 31.2744 9.348C33.0288 9.4284 33.9816 9.72 34.6164 9.9684C35.4564 10.2936 36.0564 10.6848 36.6864 11.3136C37.3164 11.9436 37.7064 12.5436 38.0316 13.3836C38.2788 14.0184 38.5716 14.9712 38.652 16.7256C38.7384 18.624 38.7564 19.194 38.7564 24C38.7564 28.806 38.7384 29.376 38.652 31.2744C38.5716 33.0288 38.28 33.9816 38.0316 34.6164C37.7435 35.3983 37.2839 36.1056 36.6864 36.6864C36.1057 37.284 35.3983 37.7437 34.6164 38.0316C33.9816 38.2788 33.0288 38.5716 31.2744 38.652C29.376 38.7384 28.8072 38.7564 24 38.7564C19.1928 38.7564 18.624 38.7384 16.7256 38.652C14.9712 38.5716 14.0184 38.28 13.3836 38.0316C12.6017 37.7435 11.8944 37.2839 11.3136 36.6864C10.7162 36.1055 10.2566 35.3982 9.9684 34.6164C9.7212 33.9816 9.4284 33.0288 9.348 31.2744C9.2616 29.376 9.2436 28.806 9.2436 24C9.2436 19.194 9.2616 18.624 9.348 16.7256C9.4284 14.9712 9.72 14.0184 9.9684 13.3836C10.2936 12.5436 10.6848 11.9436 11.3136 11.3136C11.8943 10.7161 12.6017 10.2564 13.3836 9.9684C14.0184 9.7212 14.9712 9.4284 16.7256 9.348C18.624 9.2616 19.194 9.2436 24 9.2436Z"
                                    fill="black" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M24 30.0059C23.2113 30.0059 22.4303 29.8506 21.7016 29.5488C20.973 29.2469 20.3109 28.8045 19.7532 28.2468C19.1955 27.6891 18.7531 27.027 18.4512 26.2983C18.1494 25.5697 17.994 24.7887 17.994 23.9999C17.994 23.2112 18.1494 22.4302 18.4512 21.7015C18.7531 20.9729 19.1955 20.3108 19.7532 19.7531C20.3109 19.1954 20.973 18.753 21.7016 18.4511C22.4303 18.1493 23.2113 17.9939 24 17.9939C25.5929 17.9939 27.1206 18.6267 28.2469 19.7531C29.3733 20.8794 30.006 22.4071 30.006 23.9999C30.006 25.5928 29.3733 27.1205 28.2469 28.2468C27.1206 29.3732 25.5929 30.0059 24 30.0059ZM24 14.7479C21.5463 14.7479 19.193 15.7227 17.4579 17.4578C15.7228 19.1929 14.748 21.5462 14.748 23.9999C14.748 26.4537 15.7228 28.807 17.4579 30.5421C19.193 32.2772 21.5463 33.2519 24 33.2519C26.4538 33.2519 28.8071 32.2772 30.5422 30.5421C32.2773 28.807 33.252 26.4537 33.252 23.9999C33.252 21.5462 32.2773 19.1929 30.5422 17.4578C28.8071 15.7227 26.4538 14.7479 24 14.7479ZM35.9436 14.5799C35.9436 15.16 35.7132 15.7162 35.3031 16.1264C34.8929 16.5365 34.3367 16.7669 33.7566 16.7669C33.1766 16.7669 32.6203 16.5365 32.2102 16.1264C31.8001 15.7162 31.5696 15.16 31.5696 14.5799C31.5696 13.9999 31.8001 13.4436 32.2102 13.0335C32.6203 12.6234 33.1766 12.3929 33.7566 12.3929C34.3367 12.3929 34.8929 12.6234 35.3031 13.0335C35.7132 13.4436 35.9436 13.9999 35.9436 14.5799Z"
                                    fill="black" />
                            </svg>
                        </Link>
                        <Link href="https://github.com/afyww">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M24.0165 4.33325C12.9479 4.33325 4 13.3471 4 24.4985C4 33.4124 9.73324 40.9579 17.6868 43.6284C18.6812 43.8292 19.0454 43.1945 19.0454 42.6607C19.0454 42.1932 19.0126 40.5908 19.0126 38.9211C13.4445 40.1233 12.285 36.5173 12.285 36.5173C11.3902 34.1803 10.0643 33.5796 10.0643 33.5796C8.24185 32.3443 10.197 32.3443 10.197 32.3443C12.2186 32.4779 13.2794 34.4142 13.2794 34.4142C15.0686 37.4855 17.9518 36.6177 19.1118 36.0834C19.2773 34.7813 19.8079 33.8799 20.3713 33.3792C15.9303 32.9118 11.2578 31.1758 11.2578 23.43C11.2578 21.2265 12.0527 19.4237 13.3122 18.0216C13.1134 17.521 12.4173 15.4506 13.5113 12.6797C13.5113 12.6797 15.2014 12.1454 19.0122 14.7496C20.6438 14.3082 22.3263 14.0837 24.0165 14.0818C25.7067 14.0818 27.4295 14.3157 29.0205 14.7496C32.8317 12.1454 34.5218 12.6797 34.5218 12.6797C35.6158 15.4506 34.9192 17.521 34.7205 18.0216C36.0132 19.4237 36.7753 21.2265 36.7753 23.43C36.7753 31.1758 32.1028 32.8782 27.6287 33.3792C28.358 34.0135 28.9873 35.2152 28.9873 37.1184C28.9873 39.8225 28.9545 41.9928 28.9545 42.6603C28.9545 43.1945 29.3192 43.8292 30.3132 43.6288C38.2667 40.9575 43.9999 33.4124 43.9999 24.4985C44.0327 13.3471 35.052 4.33325 24.0165 4.33325Z"
                                    fill="black" />
                            </svg>
                        </Link>
                    </div>
                    <div class="relative xl:inline-block space-y-2">
                        <button class="bg-black text-white w-full p-3 font-semibold hover:shadow-blue-500/50 shadow-2xl delay-200">Download
                            Cv
                        </button>
                        <button class="bg-green-600 w-full p-3 font-semibold hover:shadow-green-500/50 shadow-2xl delay-200">
                            <Link href="http://wa.me/6287733839260">Contact Me</Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Herosection