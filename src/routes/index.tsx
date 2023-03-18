import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { DocsPage, FeaturesPage, HomePage, LayoutPage } from '../pages';

const appRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutPage />}>
      <Route index element={<HomePage />} />
      <Route path="features" element={<FeaturesPage />} />
      <Route path="docs" element={<DocsPage />} />
    </Route>
  )
);

export default appRoutes;

export function RouterProviderDecorator({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(<Route path="*" element={children} />)
      )}
    />
  );
}
