export function Card({title, info, img}) {
    return (
      <>
        <div className="m-1 flex justify-center container border-4 border-gray-200 rounded w-96">
          <div className="w-48 m-1 h-64">
            <img
              src={img}
              alt="Poster de la pelicula/serie"
              className="w-auto h-64"
            />
          </div>
          <div className="w-48 m-1 flex flex-col items-center relative">
            <p className="font-extrabold text-lg py-1">{title}</p>
            <p className="text-center px-2">{info}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute bottom-1">
              More info
            </button>
          </div>
        </div>
      </>
    );
  }
  