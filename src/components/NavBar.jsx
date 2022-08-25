import CartWidget from './CartWidget';



const NavBar = () => {
    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <CartWidget/>
          <h1 className="navbar-brand">Sweet Guitar Tienda Online</h1>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav mr-auto">
             <li className="nav-item active">
                <a className="nav-link" href="/public/index.html">Inicio </a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="/public/index.html">Nosotos</a>
             </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/public/index.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Acerca de:
                </a>
               <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                 <a className="dropdown-item" href="/public/index.html">Guitarras electricas</a>
                  <a className="dropdown-item" href="/public/index.html">Guitarras Acusticas</a>
                 <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/public/index.html">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/public/index.html" >Efectos de Guitarra</a>
              </li>
           </ul>
           <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Busqueda en Tienda</button>
           </form>
          </div>
        </nav>

        
    )
}


export default NavBar;




