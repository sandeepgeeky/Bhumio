import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div
      style={{
        padding: "50px",
        backgroundColor: "black",
        height: "100vh",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <h1 style={{ textAlign: "center", color: "white" }}>
        Bhumio - Assignment
      </h1>
      <Card />
    </div>
  );
}

export default App;
