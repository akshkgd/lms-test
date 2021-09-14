export default function Home() {
  return (
     <div className="px-10">
    <div className="flex flex-col flex-col-reverse grid-cols-12 gap-5 mt-0 lg:grid lg:pt-8 lg:mt-8">
    <div className="col-span-7  rounded-lg">
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/00DOY6Me7ag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
     <div className="col-span-5 ">
        <div className="overflow-hidden bg-gray-100 border border-gray-200 rounded-none shadow-sm lg:rounded-lg">
           <div className="flex justify-between px-5 py-4 bg-white">
              <div className="flex flex-col items-start">
                 <h2 className="text-lg font-bold text-left">Introduction</h2>
                 <span className="text-sm">2 videos <small className="text-xs">(8 minutes)</small></span>
              </div>
              <div className="flex flex-col items-end autoplay-option">
                 <p className="mb-1 text-sm text-gray-700">Autoplay?</p>
                 
              </div>
           </div>
           <div className="flex flex-col items-start justify-center w-full h-auto px-5 bg-white border-b border-gray-200">
              <div className="w-full h-2 overflow-hidden bg-gray-200 rounded-full">
                 <div id="progress-bar" className="w-0 h-2 transition-all duration-150 ease-out transform bg-green-400 rounded-full" ></div>
              </div>
              <div className="mt-1 mb-2 text-xs text-gray-600"><span id="progress-num">50</span>% completed</div>
           </div>
           <div  id="episode-1" data-order="1" className="bg-gray-200 text-gray-900  hover:bg-gray-200 relative flex items-center">
              <div  data-order="1" data-access="1" className="relative z-20 flex items-center justify-start w-full h-16 pl-4 font-medium text-gray-700 border-b border-gray-200 cursor-pointer">
                 <div className="w-3 h-3 mr-2">
                    <div className="">
                       <svg className="text-gray-800 w-3 h-3 text-gray-500 fill-current" viewBox="0 0 22 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M.474.996v22.001a1 1 0 001.5.868l19.052-11.001a1 1 0 000-1.733L1.974.131c-.622-.36-1.5.053-1.5.865z" />
                       </svg>
                    </div>
                 </div>
                 <span className=" absolute top-0 left-0 text-indigo-600  bg-indigo-200 text-xxs px-2 py-0.5 text-xs leading-4 rounded-br-lg">Now Playing</span>
                 <span className="flex items-center truncate">
                 <span className="w-64 text-sm text-left truncate ellipses">1. Morning Chillin</span>
                 <time className="ml-2 text-xs text-gray-500">(3 min. 47 sec.) </time>
                 </span>
              </div>
              <div className="absolute right-0 z-30 flex items-center w-6 h-6 mr-4 rounded-full">
                 <div className=" rounded-full w-6 h-6 bg-gray-400 flex justify-center items-center cursor-pointer" >
                    <svg fill="none" className="w-4 h-4 text-white" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                       <path d="M5 13l4 4L19 7"></path>
                    </svg>
                 </div>
              </div>
              <div  className="absolute top-0 z-10 w-auto h-full transition-all duration-150 ease-out transform bg-gray-300" id="episode-progress"></div>
           </div>
           <div id="episode-2" data-order="2" className="  hover:bg-gray-200 relative flex items-center">
              <div  data-order="2" data-access="" className="relative z-20 flex items-center justify-start w-full h-16 pl-4 font-medium text-gray-700 border-b border-gray-200 cursor-pointer">
                 <div className="w-3 h-3 mr-2">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-5 h-5 -mt-1 -ml-1">
                       <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                 </div>
                 <span className="hidden absolute top-0 left-0 bg-gray-600 text-white text-xxs px-2 leading-4 rounded-br-lg">Now Playing</span>
                 <span className="flex items-center truncate">
                 <span className="w-64 text-sm text-left truncate ellipses">2. Working with Laravel</span>
                 <time className="ml-2 text-xs text-gray-500">(4 min. 20 sec.)</time>
                 </span>
              </div>
              <div className="absolute right-0 z-30 flex items-center w-6 h-6 mr-4 rounded-full">
                 <div className=" rounded-full w-6 h-6 bg-gray-400 flex justify-center items-center cursor-pointer" >
                    <svg fill="none" className="w-4 h-4 text-white" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                       <path d="M5 13l4 4L19 7"></path>
                    </svg>
                 </div>
              </div>
           </div>
        </div>
     </div>
     </div>
  </div>
  )
}
