
import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Registration Form</h1>
        <RegistrationForm />
      </div>
    </Provider>
  );
};

export default App;
