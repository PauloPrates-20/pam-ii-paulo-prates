import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, FlatList, StyleSheet } from "react-native";
import { createItem, deleteItem, getItems } from '@/lib/firestoreQuerys';
import { Item, ItemData } from '@/lib/definitions';

export default function Index() {
  const [name, setName] = useState<string>('');
  const [qtd, setQtd] = useState<string>('');
	const [items, setItems] = useState<Item[]>([]);

	async function loadItems() {
		setItems(await getItems());
	}

  async function saveItem() {
    const itemData: ItemData = {
      name: name,
      qtd: parseInt(qtd),
    };

    await createItem(itemData);
		await loadItems();

		setName('');
		setQtd('');
  }

	async function removeItem(itemId: string) {
		await deleteItem(itemId)
		await loadItems();
	}

	useEffect(() => {
		loadItems();
	}, []);

  return (
    <View style={styles.container}>
      <View style={styles.itemForm}>
				<View style={styles.itemInputs}>
					<TextInput 
						style={styles.inputEntry}
						onChangeText={setQtd}
						value={qtd}
						placeholder='QUANTIDADE'
						keyboardType='numeric'
					/>
					<TextInput 
						style={styles.inputEntry}
						onChangeText={setName}
						value={name}
						placeholder='NOME DO ITEM'
					/>
				</View>
        <Button 
          title='SALVAR'
          onPress={saveItem}
        />
      </View>

        <View>
					{items && (
						<FlatList
							data={items}
							keyExtractor={({id}) => id}
							renderItem={({item}) => (
								<View style={styles.listEntry}>
									<Text>
										{item.qtd}x {item.name}
									</Text>
									<Button color='#650c1b' title='EXCLUIR' onPress={() => removeItem(item.id)}/>
								</View>
							)}
						/>
					)}
				</View>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		gap: 24,
		backgroundColor: 'white',
		width: 'auto'
	},
	itemForm: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		gap: 10
	},
	itemInputs: {
		flexDirection: 'row',
		gap: 10
	},
	inputEntry: {
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 3
	},
	listEntry: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		gap: 10,
		marginVertical: 5
	}
});