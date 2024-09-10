import { Text, View } from "react-native";
import ButtonProps from "@/components/ButtonProps";

export default function Index() {
  const handleClick = () => {
    console.log('Botão pressionado');

  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ButtonProps text="Clique aqui" color="red" onPress={handleClick} />
      <ButtonProps text="Clique agora" color="blue" onPress={handleClick} />
      <ButtonProps text="Clique também" color="pink" onPress={handleClick} />
    </View>
  );
}
