import React from 'react';

import Header from './components/Header';
import BudgetRecap from './components/BudgetRecap';
import Bottom from './components/Bottom';
import TransactionsBox from './components/TransactionsBox';

function App() {
  return (
    <div className="App">
      <Header />
      <BudgetRecap />
      <TransactionsBox />
      <Bottom />
    </div>
  );
}

export default App;
