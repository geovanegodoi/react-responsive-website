// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import appRoutes from '../routes';
import { RouterProvider } from 'react-router';

export function App() {
  return (
    <>
      <NxWelcome title="react-responsive-website" />

      <div />
    </>
  );
}

export default App;
