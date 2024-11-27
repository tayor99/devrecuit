import "./App.css";
import { TodoList } from "./components/Todo";
import { FetchList } from "./pages/FetchList";

const App = () => {
  return (
    <div className="container">
      <h1 className="header">Task Management Dashboard</h1>
      <div className="container__body">
        <TodoList />
        <FetchList />
      </div>
    </div>
  );
};

export default App;
