import Header from '../Header'
import './style.css'
import annaJulia from "../../assets/anna julia.jpg"

export default function App() {
  return (
    <>
      <Header title="Tocando Agora" />
      <div className='flex items-center justify-center'>
        <img className='w-80 h-80 rounded-3xl ' src={annaJulia} alt="" />
       </div>
       <div className='text-lg font-bold'>
        <h3>
          Anna Julia
        </h3>
        <div className='text-lg font-extralight'>
          <h5>
            Los Hermanos
          </h5>
        </div>
      </div>
    </>
  )
}
