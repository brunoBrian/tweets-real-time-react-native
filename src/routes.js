import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Login from './pages/login';
import Timeline from './pages/timeline';
import NewTweet from './pages/newTweet';

const Routes = createAppContainer(
  createSwitchNavigator({
    // Todas as rotas que vamos precisar na aplicação
    Login,
    App: createStackNavigator({
      Timeline,
      NewTweet
    })
  })
);

export default Routes;