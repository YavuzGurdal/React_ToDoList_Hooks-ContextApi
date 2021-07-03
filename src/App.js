import React from 'react'
import FormInput from './components/FormInput';
import List from './components/List';
import Footer from './components/Footer';
import { DataProvider } from './components/DataProvider';

function App() {
  return (

    <DataProvider> {/* butu app i context ile sardık. */}
      <div className="App">
        <h1>ToDo List</h1>

        <FormInput />

        <List />

        <Footer />

      </div>
    </DataProvider>
  );
}

export default App;
