import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Users from './pages/Users';
import Trials from './pages/Trials';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<Home />}/>
      <Route path='/users' element={<Users />}/>
      <Route path='/trials' element={<Trials />}/>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />
}

export default App
