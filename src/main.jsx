import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import InspirasiDesain from './components/InspirasiDesain';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

function App() {
  return (
    <>
      <AppHeader />
      <DaftarDesain />
      <InspirasiDesain />
    </>
  );
}

export default App;