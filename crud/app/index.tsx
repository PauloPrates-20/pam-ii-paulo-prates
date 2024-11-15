import React, { useState } from 'react';
import { Text, View, Button, TextInput, ScrollView } from "react-native";
import { createItem, getItems } from '@/lib/firestoreQuerys';
import { Item, ItemData } from '@/lib/definitions';

export default async function Index() {
  // const [name, setName] = useState<string>('');
  // const [qtd, setQtd] = useState<string>('0');

  // const items: Item[] | null = await getItems();

  // async function saveItem() {
  //   const itemData: ItemData = {
  //     name: 'name',
  //     qtd: 3,
  //   };

  //   await createItem(itemData);
  // }

  return (
    <View
      style={{
        marginTop: 10,
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 10
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}
      >
        <TextInput 
          // onChangeText={setName}
          value={'name'}
          placeholder='NOME DO ITEM'
        />
        <TextInput 
          // onChangeText={setQtd}
          value={'qtd'}
          keyboardType='numeric'
        />

      </View>
        <Button 
          title='SALVAR'
          // onPress={saveItem}
        />

        {/* <ScrollView>
          {items && items.map(item => (
            <Text key={item.id}>{item.qtd}x {item.name}</Text>
          ))}
        </ScrollView> */}
    </View>
  );
}
