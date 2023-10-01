import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyCard from "./components/MyCard";

function App() {
  return (
    <>
      <Header nombre="Adopta un Perrito"></Header>
      <main>
        <MyCard
          imgUrl="https://th.bing.com/th/id/OIP.KU9PQK3_xo_gt6cp_VtA2AHaFj?w=240&h=180&c=7&r=0&o=5&pid=1.7"
          nombre="Perrito 1"
          descripcion="Perrito Lind"
        ></MyCard>
        <MyCard
          imgUrl="https://th.bing.com/th/id/OIP.ShkCuVIQ1rjBqu-BlDAMxAHaFj?w=239&h=180&c=7&r=0&o=5&pid=1.7"
          nombre="Perrito 2"
          descripcion="Perrito Feo"
        ></MyCard>
      </main>
      <Footer descripcion="descripcion de la galeria de imagenes"></Footer>
    </>
  );
}

export default App;
