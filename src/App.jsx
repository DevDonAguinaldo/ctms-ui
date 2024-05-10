import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Users from './pages/Users';
import Trials from './pages/Trials';
import Subjects from './pages/Subjects';
import Visits from './pages/Visits';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<Home />}/>
      <Route path='/users' element={<Users />}/>
      <Route path='/trials' element={<Trials />}/>
      <Route path='/subjects' element={<Subjects />}/>
      <Route path='/visits' element={<Visits />}/>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />
}

export default App
