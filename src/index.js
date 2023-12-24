import ReactDOM from 'react-dom/client';
import "./style.css"
import Cat1 from "./assets/images/Cat 1.jpg"
import Cat2 from "./assets/images/Cat 2.jpg"
import Cat3 from "./assets/images/Cat 3.jpg"
import Cat4 from "./assets/images/Cat 4.jpg"
import Dog1 from "./assets/images/Dog 1.jpg"
import Dog3 from "./assets/images/Dog 3.jpg"
import Dog2 from "./assets/images/Dog 2.jpg"
import Dog4 from "./assets/images/Dog 4.jpg"
const root = ReactDOM.createRoot(document.getElementById('root'));

function Gallery() {
  const images = [
    {
      name: Cat1,
      text: "Billie"
    },
    {
      name: Cat2,
      text: "Tessa"
    },
    {
      name: Cat3,
      text: "Spunky"
    },
    {
      name: Cat4,
      text: "Lacey"
    },
    {
      name: Dog1,
      text: "Freddie Mercury"
    },
    {
      name: Dog4,
      text: "Jimmy Chew"
    },
    {
      name: Dog3,
      text: "Winky"
    },
    {
      name: Dog2,
      text: "Alpha | Bravo | Charlie"
    }
  ]
  return (
    <div className='image-wrapper'>
      {
        images.map(function (image) {
          return <div className="img-area">
            <div className="image-card">
              <img src={image.name} alt={image.name} />
              <p>{image.text}</p>
            </div>
          </div>
        })
      }
    </div>
  )






}
root.render(<Gallery></Gallery>);
