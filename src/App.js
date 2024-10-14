import MainLayout from './component/layout/MainLayout';
import { useRoutes } from "react-router-dom";
import MainRoutes from './routes/MainRoutes';
function App() {
  const routes = useRoutes([MainRoutes]);
  return (
    <div className="App">
 <MainLayout>{routes}</MainLayout>
    </div>
  );
}

export default App;
