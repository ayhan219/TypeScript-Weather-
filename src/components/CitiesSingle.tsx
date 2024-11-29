


const CitiesSingle = () => {
  return (
    <div>
        <div className='w-96 h-24 bg-[#202B3D] flex items-center rounded-lg justify-between cursor-pointer hover:bg-[#333f53] ease-in-out duration-100 '>
            <div className='w-[40%] h-auto flex items-center justify-evenly'>
              <div>
                <img className='w-16 h-16' src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" alt="" />
              </div>
              <div className='font-bold text-white'>
                <h3>Madrid</h3>
                <span className='text-[#656F81]'>10:23</span>
              </div>
            </div>
            <div className='font-semibold text-2xl text-white pr-5'>
              <h1>30°</h1>
            </div>
          </div>
    </div>
  )
}

export default CitiesSingle