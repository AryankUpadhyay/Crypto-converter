
import CryptoConverter from './CryptoConverter';
import NewsFeed  from './NewsFeed';

function App() {
  return (
    <div>
    
    <div className="App">
    <h1>Crypto Dashboard</h1>
      {/* The App is Perfecty Fine */}
      <div className='App-inside'>
      <CryptoConverter/>
      <NewsFeed/>
      </div>
    </div>
    </div>
  );
}

export default App;
