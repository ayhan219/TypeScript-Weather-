
import CitiesSingle from '../components/CitiesSingle'


type Props = {}

const Cities = (props: Props) => {
  return (
    
    <div className='w-full h-screen bg-[#0B121E]'>
      <div className='w-full h-auto flex items-center text-3xl font-bold text-white justify-center pt-5'>
        <h1>Weather conditions of major cities</h1>
      </div>
      <div className='w-full h-[90%] flex'>
        <div className='w-full h-full flex items-end pt-5 flex-col gap-4 pr-5 '>
          <CitiesSingle />
          <CitiesSingle />
          <CitiesSingle />
          <CitiesSingle />
          <CitiesSingle />
          <CitiesSingle />

        </div>
        <div className='w-full h-full flex items-start pt-5 flex-col gap-4 pl-5 '>
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