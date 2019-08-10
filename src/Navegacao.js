import { createAppContainer, createStackNavigator } from "react-navigation";
import Inicio from "./telas/Inicio";
import Jogo from "./telas/Jogo";
import Fim from "./telas/Fim";

export default createAppContainer(
  createStackNavigator(
    {
      Inicio,
      Jogo,
      Fim
    },
    {
      defaultNavigationOptions: {
        header: null
      }
    }
  )
);
