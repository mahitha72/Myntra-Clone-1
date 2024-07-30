
import { generateToken, messaging } from "./Notifications/firebase";
import { useEffect } from "react";
import { onMessage } from "firebase/messaging";
import './App.css';
import AllRoutes from './Components/AllRoutes';


function App() {
  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      console.log(payload);
    });
  }, []);
  return (
    <div className="App">
     <AllRoutes />
    </div>
  );
}

export default App;
