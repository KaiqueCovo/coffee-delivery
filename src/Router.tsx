import { Routes, Route } from 'react-router-dom';

import { HomePage, CheckoutPage } from './pages';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/checkout' element={<CheckoutPage />} />
    </Routes>
  );
}
