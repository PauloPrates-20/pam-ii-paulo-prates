import React, { useState } from "react";
import { Text, View, Image, Button, Alert, ImageBackground } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Index() {
	const [color, changeColor] = useState('red');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
				marginTop: 30,
      }}
    >
      <Text style={{ marginBottom: 30 }}>Página de teste pro Tio João.</Text>

			<Image
				style={{ width: 300, height: 500 }}
				source={require('../assets/images/pato.jpg')}
				alt='Deu ruim a imagem'
			/>
			<Text style={{ marginBottom: 100 }}>Uma imagem aleatória sem graça.</Text>
			<Button
				title='aperte'
				onPress={() => changeColor(color === 'red' ? 'blue' : 'red')}
				color={color}
			/>

			<TextInput placeholder="Digita alguma coisa aí" style={{marginTop: 15, borderWidth: 1, padding: 7}} />
    </View>
  );
}
