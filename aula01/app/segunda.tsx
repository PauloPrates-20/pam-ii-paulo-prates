import React, { useState } from "react";
import { Text, View, Image, Button, Alert, ImageBackground } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Segunda() {
	const [color, changeColor] = useState('green');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
				marginTop: 30,
      }}
    >
      <Text style={{ marginBottom: 30 }}>Outra de teste pro Tio João.</Text>

			<Image
				style={{ width: 500, height: 500 }}
				source={{ uri: 'https://i.pinimg.com/originals/6b/aa/f2/6baaf29d3470f517c51d346e37e23cfb.jpg' }}
				alt='Deu ruim a imagem'
			/>
			<Text style={{ marginBottom: 100 }}>Outra imagem sem graça.</Text>
			<Button
				title='aperte'
				onPress={() => changeColor(color === 'green' ? 'purple' : 'green')}
				color={color}
			/>

			<TextInput placeholder="Digita alguma coisa aí" style={{marginTop: 15, borderWidth: 1, padding: 7}} />
    </View>
  );
}
