import { useNavigate, useParams } from "react-router-dom";
import { getHeroesById } from "../helpers/getHeroesById";


export const HeroPage = () => {
  const { id } = useParams();
  const hero = getHeroesById(id);
  const navigate = useNavigate();

  const handleReturn = () => {
    if (hero.tipo === 'anime') {
      navigate('/animes');
    } else {
      navigate('/comics');
    }
  };

  const handleAlert = () => {
    Swal.fire({
      title: "Héroe no encontrado",
      text: `El héroe con el ID: ${id} no existe`,
      icon: "error",
      confirmButtonText: "Ir a Comics",
      cancelButtonText: "Ir a Anime",
      showCancelButton: true,
      showCloseButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/comics');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        navigate('/animes');
      }
    });
  };

  return (
    <>
      {hero ? (
        <div className="container my-4">
          <div className="card mx-auto" style={{ maxWidth: '350px'}}>
            <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
              <img src={`/assets/heroes/${hero.id}.jpg`} className="img-fluid" alt={hero.nombre} style={{ height: '100%', width: '100%' }}/>
              <a href="#!">
                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">{hero.nombre}</h5>
              <p className="card-text">Tipo: {hero.tipo}</p>
              <p className="card-text">Origen: {hero.origen}</p>
              <p className="card-text">Descripción: {hero.descripcion}</p>
              <button className="btn btn-primary" onClick={handleReturn}>Volver</button>
            </div>
          </div>
        </div>
      ) : (
        handleAlert()
      )}
    </>
  );
};