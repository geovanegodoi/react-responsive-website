// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { RouterProvider } from 'react-router';
import appRoutes from '@website/routes';

export function App() {
  return <RouterProvider router={appRoutes} />;
}

export default App;
