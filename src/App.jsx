import Contenido from './components/Contenido'
import Titulo from './components/Titulo'
import './App.css'

function App() {


  return (
    <>
      <div className="py-4 px-2">
        <div className="container text-center shadow bg-sky-blue rounded-4" >

          <Titulo />
          <Contenido></Contenido>
        </div>
      </div>

    </>
  )
}

export default App
