import "./App.css";
import DataTable from "./Component/DataTable";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1 style={{ marginBottom: 20, marginTop: 10 }}>Seashell Collection</h1>
      <DataTable />
    </div>
  );
}

export default App;
