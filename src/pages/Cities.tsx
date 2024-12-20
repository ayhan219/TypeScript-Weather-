
import CitiesSingle from '../components/CitiesSingle'


type Props = {}

const Cities = (props: Props) => {
  return (
    
    <div className='w-full h-auto md:h-screen bg-[#0B121E]'>
      <div className='w-full h-auto flex items-center  md:text-3xl font-bold text-white justify-end md:justify-center pt-5'>
        <h1>Weather conditions of major cities</h1>
      </div>
      <div className='w-full h-[90%] flex flex-col md:flex-row'>
        <div className='w-full h-full flex items-end pt-5 flex-col gap-4 pr-5 '>
          <CitiesSingle />
          <CitiesSingle />
          <CitiesSingle />
          <CitiesSingle />
          <CitiesSingle />
          <CitiesSingle />

        </div>
        <div className='w-full h-full flex items-end md:items-start pt-5 flex-col gap-4 pr-5 md:pr-0  '>
        <CitiesSingle />
          <CitiesSingle />
          <CitiesSingle />
          <CitiesSingle />
          <CitiesSingle />
          <CitiesSingle />
        </div>
      </div>
      
    </div>
  )
}

export default Cities