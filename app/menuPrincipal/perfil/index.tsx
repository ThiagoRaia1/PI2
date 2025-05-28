import { View } from "react-native";
import MenuInferior from "../../components/MenuInferior";
import BotaoLogout from "../../components/BotaoLogout";

export default function Perfil() {
  return (
    <View style={{ flex: 1, backgroundColor: "#aaa" }}>
      <View style={{ flex: 1, backgroundColor: "#eee" }}>
        <BotaoLogout />
      </View>
      <MenuInferior />
    </View>
  );
}
