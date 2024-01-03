import logo from './logo.svg';
import './App.css';
import Expenditure from './component/Expenditure';
import ExpenditureList from './component/ExpenditureList';

function App() {
  return (
    <div className="App">
      <Expenditure />
      <ExpenditureList />
    </div>
  );
}

export default App;
