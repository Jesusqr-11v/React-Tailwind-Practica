import { Card } from "./Card";

export function App() {
  return (
    <>
      <div className="flex sm:items-center flex-col md:flex-row sm:justify-center">
        <Card
          title="The last of us"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam doloribus fugit culpa hic doloremque numquam?"
          img="https://depor.com/resizer/9_wT4K5YvKQNgky6aXRbRIleDL8=/620x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/LW7CCPSEIZEKLPY7AQ6FPZMBGM.jpeg"
        />
        <Card
          title="Mario la pelicula"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam doloribus fugit culpa hic doloremque numquam?"
          img="https://es.web.img3.acsta.net/pictures/23/02/06/17/15/3568166.jpg"
        />
        <Card
          title="Suzume no tojimari"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam doloribus fugit culpa hic doloremque numquam?"
          img="https://ramenparados.com/wp-content/uploads/2022/09/suzume-no-Tojimari-cartel-2.jpg"
        />
      </div>
    </>
  );
}
