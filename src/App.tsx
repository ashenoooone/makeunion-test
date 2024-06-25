import { Header } from '~/widgets/header/header.tsx';
import { RouterProvider } from '~/app/providers/routerProvider/router-provider.tsx';

function App() {
  return (
    <div>
      <Header />
      <RouterProvider />
    </div>
  );
}

export default App;
