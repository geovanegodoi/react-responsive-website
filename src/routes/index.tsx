import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import {} from '@website/components/docs';
import {
  AboutPage,
  FeaturesPage,
  HomePage,
  InstallationPage,
  IntroductionPage,
  LayoutDocsPage,
  LayoutPage,
  NotFoundPage,
  SetupContainerPage,
  UsingCliPage,
} from '@website/pages';

const appRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutPage />}>
      <Route index element={<HomePage />} />
      <Route path="features" element={<FeaturesPage />} />
      <Route path="docs" element={<LayoutDocsPage />}>
        <Route index element={<IntroductionPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="installation" element={<InstallationPage />} />
        <Route path="setup-container" element={<SetupContainerPage />} />
        <Route path="using-cli" element={<UsingCliPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
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
