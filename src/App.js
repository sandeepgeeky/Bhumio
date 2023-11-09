import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div
      style={{
        padding: "15px",
        backgroundColor: "black",
        height: "100vh",
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
