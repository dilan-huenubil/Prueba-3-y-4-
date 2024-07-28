

export const HomePage = () => {
  return (
    <>
      <div className="container-fluid p-5 bg-dark text-white text-center">
        <h1>Las paginas que nos encontraremos son:</h1>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-3">
            <h3>Animes</h3>
            <p>En esta pagina nos encontraremos con personajes de animes con sus respectivas descripciones</p>
          </div>
          <div className="col-sm-3">
            <h3>Comics</h3>
            <p>En esta pagina nos encontraremos con personajes de Comics con sus respectivas descripciones</p>
          </div>
          <div className="col-sm-3">
            <h3>Login</h3>
            <p>En esta pagina iniciara sesión para acceder al contenido de la web</p>
          </div>
          <div className="col-sm-3">
            <h3>Logout</h3>
            <p>En esta pagina te redireccionara a la pagina mencionada anteriormente que sería la de login.</p>
          </div>
        </div>
      </div>
    </>
  );
};
