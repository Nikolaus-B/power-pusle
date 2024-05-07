import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout/AppLayout';

import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const SingUpPage = lazy(() => import('pages/SignUpPage'));
const SingInPage = lazy(() => import('pages/SignInPage'));
const UserPage = lazy(() => import('pages/UserPage'));
const DiaryPage = lazy(() => import('pages/DiaryPage'));
const ProductsPage = lazy(() => import('pages/ProductsPage'));
const ExercisesPage = lazy(() => import('pages/ExercisesPage'));
const TitlePage = lazy(() => import('pages/TitlePage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route
            index
            element={
              <RestrictedRoute
                redirectTo="/settings"
                component={<HomePage />}
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/settings"
                component={<SingUpPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/settings"
                component={<SingInPage />}
              />
            }
          />
          <Route
            path="/settings"
            element={<PrivateRoute redirectTo="/" component={<UserPage />} />}
          />
          <Route
            path="/diary"
            element={<PrivateRoute redirectTo="/" component={<DiaryPage />} />}
          />
          <Route
            path="/products"
            element={
              <PrivateRoute redirectTo="/" component={<ProductsPage />} />
            }
          />
          <Route
            path="/exercises"
            element={
              <PrivateRoute redirectTo="/" component={<ExercisesPage />} />
            }
          />
          <Route path="/exercises/title" component={<TitlePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
