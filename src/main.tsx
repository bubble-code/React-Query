
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router'
import { App } from './App'
import { routers } from './router/router'
import './index.css'
import 'antd/dist/antd.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={routers} />
)
