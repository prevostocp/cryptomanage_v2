import { Link } from "react-router-dom"

export function Navigation() {
  return (
    // <div className="flex justify-between py-3" >
    //     <Link to="/coins">
    //         <h1 className="font-bold text-3xl mb-4">Coins App</h1>
    //     </Link>

    //     <button className="bg-indigo-500 px-3 py-2 rounded-lg">
    //         <Link to="/coins-create" >Create Coin</Link>    
    //     </button>            
    // </div>

    <div>
      <nav class="flex items-center justify-between flex-wrap bg-indigo-950 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">


          <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
          <Link to="/">
            <span class="font-semibold text-xl tracking-tight">Crypto Manage V2</span>
          </Link>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-indigo-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a class="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4">
              <Link to="/" >Inicio</Link>
            </a>
            {/* <a  class="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4">
                  <Link to="/coins" >Coins</Link> 
                </a> */}
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              <a class="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4">
                <Link to="/administracion" >Administración</Link>
              </a>
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              <a class="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4">
                <Link to="/inversiones" >Inversiones</Link>
              </a>
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Reportes/Estadisticas
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Configuraciones
            </a>
          </div>
          <div>
            <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Ingresar</a>
          </div>
          <div>
            <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Registrarse</a>
          </div>
        </div>
      </nav>

    </div>

  )
}