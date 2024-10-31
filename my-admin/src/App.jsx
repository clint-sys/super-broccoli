import { Admin, radiantDarkTheme, radiantLightTheme, Resource } from 'react-admin';
import { PocketBaseProvider } from './ra-pocketbase';

const pbProvider = PocketBaseProvider("https://squalid-skeleton-7vrj9vp49p7vfpqx-8090.app.github.dev")

const App = () => {
  return (
      <Admin
          authProvider={pbProvider.authProvider}
          dataProvider={pbProvider.dataProvider}
          theme={radiantLightTheme}
          darkTheme={radiantDarkTheme}

      >
          <Resource name="posts" />
      </Admin>
  );
};
export default App;
