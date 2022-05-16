import './App.css';
import WishCard from './components/WishCard/WishCard'
import { Carousel } from 'react-responsive-carousel';
import CardCarousel from './components/CardCarousel/CardCarousel';
const data = [
  {
    card: "Crew",
    description: "Regalos para um Grupo",
    tag: ["Despostes de Riesgo", "Montaña"]
  },
  {
    card: "Family",
    description: "Regalos para Familias",
    tag: ["Scape Rooms", "Sports", "Montaña"]
  },
  {
    card: "Parejas",
    description: "Regalos para Parejas",
    tag: ["Romantico", "Cenas"]
  },
  {
    card: "Friends",
    description: "Regalos de Cumpleaños",
    tag: ["Montaña", "Sports", "Salud"]
  }
]

function App() {
  return (
    <>
      <CardCarousel data={data} />
    </>

  );
}

export default App;
