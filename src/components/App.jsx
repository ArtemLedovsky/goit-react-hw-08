import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactsPage from "../pages/ContactsPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import PrivateRoute from "./PrivateRoute";
import Layout from "./Layout";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";
import RestrictedRoute from "./RestrictedRoute";

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return null;
  }
  return (
    <div>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute component={<LoginPage />} redirectTo="/" />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<RegistrationPage />}
                  redirectTo="/contacts"
                />
              }
            />
          </Route>
        </Routes>
      </PersistGate>
    </div>
  );
};

export default App;
