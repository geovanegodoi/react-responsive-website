import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
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
