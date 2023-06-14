import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router';
import { useEffect, useState } from 'react';
import PuffLoader from "react-spinners/PuffLoader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a delay for demonstration purposes
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <div>
      {
        loading ? <PuffLoader
          className=' top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
          style={ { position: "absolute" } }
          color="hsla(168, 67%, 53%, 1)"
          size={ 100 }
        /> : (
          <RouterProvider router={ router }></RouterProvider>
        )
      }
    </div>
  )
}

export default App
