import React from 'react';
import { ProtectedRoutes } from 'components/guards';
import {
  Home,
  Bestsellers,
  TopDeals,
  OnSale,
  Business,
  Novels,
  Kids,
  Account,
  Biography,
  SelfHelp,
  Classic,
  Comic,
  Contact,
  Cart,
  SignIn,
  SignUp,
  Checkout,
} from 'pages';
import { Route, Routes } from 'react-router-dom';
import {
  HOME,
  BESTSELLERS,
  TOP_DEALS,
  ON_SALE,
  BUSINESS,
  NOVELS,
  KIDS,
  BIOGRAPHY,
  SELF_HELP,
  CLASSIC,
  COMIC,
  CONTACT,
  CART,
  SIGN_IN,
  SIGN_UP,
  CHECKOUT,
  ACCOUNT,
} from 'navigation/constants';

function RouterConfig() {
  return (
    <Routes>
      {/*************************PUBLIC ROUTES************************************** */}

      {/* List all public routes here */}
      <Route exact path={HOME} element={<Home />} />
      <Route exact path={BESTSELLERS} element={<Bestsellers />} />
      <Route exact path={CART} element={<Cart />} />
      <Route exact path={TOP_DEALS} element={<TopDeals />} />
      <Route exact path={ON_SALE} element={<OnSale />} />
      <Route exact path={BUSINESS} element={<Business />} />
      <Route path={SIGN_IN} element={<SignIn />} />
      <Route path={SIGN_UP} element={<SignUp />} />
      <Route path={CHECKOUT} element={<Checkout />} />
      <Route path={NOVELS} element={<Novels />} />
      <Route path={KIDS} element={<Kids />} />
      <Route path={BIOGRAPHY} element={<Biography />} />
      <Route path={SELF_HELP} element={<SelfHelp />} />
      <Route path={CLASSIC} element={<Classic />} />
      <Route path={COMIC} element={<Comic />} />
      <Route path={CONTACT} element={<Contact />} />

      {/*************************PROTECTED ROUTES************************************** */}
      {/*************************PROTECTED ROUTES************************************** */}
      <Route element={<ProtectedRoutes redirectPath={SIGN_UP} />}>
        {/* LIST ALL PROTECTED ROUTES HERE */}
        <Route path={ACCOUNT} element={<Account />} />
      </Route>

      {/*************************404************************************** */}

      {/* List All 404 routes here */}
      <Route path="*" element={<div>404 PAGE NOT FOUND</div>} />
    </Routes>
  );
}

export default RouterConfig;
