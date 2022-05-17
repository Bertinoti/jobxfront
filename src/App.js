import './App.css';
import CardCarousel from './components/CardCarousel/CardCarousel';
import family from "./assets/family.jpg"
import friends from "./assets/friends.jpg"
import crew from "./assets/crew.jpeg"
import parejas from "./assets/parejas.jpg"

const data = [
  {
    card: "Crew",
    description: "Regalos para um Grupo",
    tag: ["Despostes de Riesgo", "Montaña"],
    img: crew
  },
  {
    card: "Family",
    description: "Regalos para Familias",
    tag: ["Scape Rooms", "Sports", "Montaña"],
    img: family
  },
  {
    card: "Parejas",
    description: "Regalos para Parejas",
    tag: ["Romantico", "Cenas"],
    img: parejas
  },
  {
    card: "Friends",
    description: "Regalos de Cumpleaños",
    tag: ["Montaña", "Sports", "Salud"],
    img: friends
  }
]

function App() {
  return (
      <CardCarousel data={data} />
  );
}

export default App;
