
import { Button } from 'antd';
import { Outlet } from 'react-router-dom';
import './App.css';



export const App = () => {

  return (
    <div className="App">
      <h1>Git Issues <small>Seguimiento de Problemas</small> </h1>
      <Outlet />
    </div>
  )
}

