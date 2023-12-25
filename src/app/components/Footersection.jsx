import React from 'react'

const Footersection = () => {
  return (
    <footer class="h-fit">
        <div class=" grid grid-cols-1 max-w-sm mx-auto">
            <div class="flex justify-between">
                <div class="flex space-x-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                            stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 22V12H15V22" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    <span class="text-white">Home</span>
                </div>
                <div class="flex justify-between space-x-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                            stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                            stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span class="text-white">About Me</span>
                </div>
                <div class="flex justify-between space-x-2">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.0001 15.9201V18.9201C21.0012 19.1986 20.9441 19.4743 20.8326 19.7294C20.721 19.9846 20.5574 20.2137 20.3521 20.402C20.1469 20.5902 19.9046 20.7336 19.6408 20.8228C19.377 20.912 19.0974 20.9452 18.8201 20.9201C15.7429 20.5857 12.7871 19.5342 10.1901 17.8501C7.77388 16.3148 5.72539 14.2663 4.19006 11.8501C2.50003 9.2413 1.4483 6.27109 1.12006 3.1801C1.09507 2.90356 1.12793 2.62486 1.21656 2.36172C1.30518 2.09859 1.44763 1.85679 1.63482 1.65172C1.82202 1.44665 2.04986 1.28281 2.30385 1.17062C2.55783 1.05843 2.8324 1.00036 3.11006 1.0001H6.11006C6.59536 0.995321 7.06585 1.16718 7.43382 1.48363C7.80179 1.80008 8.04213 2.23954 8.11005 2.7201C8.23668 3.68016 8.47151 4.62282 8.81006 5.5301C8.9446 5.88802 8.97372 6.27701 8.89396 6.65098C8.81421 7.02494 8.62892 7.36821 8.36005 7.6401L7.09006 8.9101C8.51361 11.4136 10.5865 13.4865 13.0901 14.9101L14.3601 13.6401C14.6319 13.3712 14.9752 13.1859 15.3492 13.1062C15.7231 13.0264 16.1121 13.0556 16.4701 13.1901C17.3773 13.5286 18.32 13.7635 19.2801 13.8901C19.7658 13.9586 20.2095 14.2033 20.5266 14.5776C20.8437 14.9519 21.0122 15.4297 21.0001 15.9201Z"
                            stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span class="text-white">Contact</span>
                </div>
            </div>
        </div>
    </footer>  )
}

export default Footersection