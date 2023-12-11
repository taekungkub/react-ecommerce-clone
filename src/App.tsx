import MyGlobalStyles from "./MyGlobalStyle";
import ThemeProvider from "./ThemeProvider";

import HomePage from "./views/Home";
import DashboardLayout from "./layout/DashboardLayout";
import { BrowserRouter, Route, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Providers from "./Providers";
import { AuthProvider } from "./context/AuthContext";
import { store } from "./store/store";
import CategoryPage from "./views/Category";
import SigninPage from "./views/Auth/Signin";
import SignupPage from "./views/Auth/Signup";
import NotFoundPage from "./views/Exeception/404";
import ProductDetailPage from "./views/ProductDetail";
import FaqsPage from "./views/Faqs";
import CategoryListPage from "./views/Category/List";
import AccountSetting from "./views/AccountSetting";
import AccountOrder from "./views/AccountOrder";
import AccountAddress from "./views/AccountAddress";
import AccountLayout from "./layout/AccountLayout";

function App() {
  return (
    <>
      <ThemeProvider>
        <MyGlobalStyles />
        <BrowserRouter>
          <Providers store={store}>
            <AuthProvider>
              <Routes>
                <Route element={<DashboardLayout />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/product/:id" element={<ProductDetailPage />} />

                  <Route path="/signin" element={<SigninPage />}></Route>
                  <Route path="/signup" element={<SignupPage />}></Route>

                  <Route path="/store/faqs" element={<FaqsPage />} />

                  <Route path="/category/:name" element={<CategoryPage />} />
                  <Route path="/category/list" element={<CategoryListPage />} />

                  <Route element={<AccountLayout />}>
                    <Route path="/account/order" element={<AccountSetting />} />
                    <Route path="/account/setting" element={<AccountOrder />} />
                    <Route path="/account/address-setting" element={<AccountAddress />} />
                    <Route path="/account/favorite" />
                  </Route>

                  <Route path="*" element={<NotFoundPage />}></Route>
                </Route>
              </Routes>
            </AuthProvider>
          </Providers>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
