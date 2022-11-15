
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router'
import { routers } from './router/router'
import 'antd/dist/antd.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './index.css';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={client}>
    <ReactQueryDevtools />
    <RouterProvider router={routers} />
  </QueryClientProvider>
)
