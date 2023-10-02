import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyCard from "./components/MyCard";

const perrotes = {
  perro1: {
    imagen: "https://th.bing.com/th/id/OIP.KU9PQK3_xo_gt6cp_VtA2AHaFj?w=240&h=180&c=7&r=0&o=5&pid=1.7",
    nombre: "Firulais",
    raza: "lindo",
    descripcion: "Perro inteligente y jugueton",
    colorBadge: "bg-primary",
  },
  perro2: {
    imagen: "https://th.bing.com/th/id/OIP.ShkCuVIQ1rjBqu-BlDAMxAHaFj?w=239&h=180&c=7&r=0&o=5&pid=1.7",
    nombre: "Mate",
    raza: "coquer",
    descripcion: "Perro habil y dormilon",
    colorBadge: "bg-warning",
  },
  perro3: {
    imagen: "https://th.bing.com/th/id/OIP.QOJhqI20a_pwAqN1L1QOigHaFj?w=238&h=180&c=7&r=0&o=5&pid=1.7",
    nombre: "Jaque",
    raza: "Border",
    descripcion: "Agil y energetico",
    colorBadge: "bg-secondary",
  },
};

function App() {
  return (
    <>
      <div className="bla">
        <Header nombre="Adopta un Perrito"></Header>
        <main className="card-container">
          <MyCard perrotes={perrotes.perro1}></MyCard>
          <MyCard perrotes={perrotes.perro2}></MyCard>
          <MyCard perrotes={perrotes.perro3}></MyCard>
        </main>
        <Footer descripcion="Esta galeria muestra perritos y varios datos de ellos"></Footer>
      </div>
    </>
  );
}

export default App;
