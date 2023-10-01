import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyCard from "./components/MyCard";

const perritos = {
  perro1: {
    imagen: "https://th.bing.com/th/id/OIP.KU9PQK3_xo_gt6cp_VtA2AHaFj?w=240&h=180&c=7&r=0&o=5&pid=1.7",
    nombre: "Firulais",
    raza: "lindo",
    descripcion: "perro inteligente y jugueton",
    colorBadge: "bg-primary",
  },
  perro2: {
    imagen: "https://th.bing.com/th/id/OIP.ShkCuVIQ1rjBqu-BlDAMxAHaFj?w=239&h=180&c=7&r=0&o=5&pid=1.7",
    nombre: "Mate",
    raza: "coquer",
    descripcion: "perro habil y dormilon",
    colorBadge: "bg-warning",
  },
};

function App() {
  console.log("color en app" + perritos.perro1.colorBadge);
  return (
    <>
      <div className="bla">
        <Header nombre="Adopta un Perrito"></Header>
        <main className="card-container">
          <MyCard
            imgUrl={perritos.perro1.imagen}
            nombre={perritos.perro1.nombre}
            descripcion={perritos.perro1.descripcion}
            raza={perritos.perro1.raza}
            color={perritos.perro1.colorBadge}
          ></MyCard>
          <MyCard
            imgUrl={perritos.perro2.imagen}
            nombre={perritos.perro2.nombre}
            descripcion={perritos.perro2.descripcion}
            raza={perritos.perro2.raza}
            color={perritos.perro2.colorBadge}
          ></MyCard>
        </main>
        <Footer descripcion="Esta galeria muestra perritos y varios datos de ellos"></Footer>
      </div>
    </>
  );
}

export default App;
