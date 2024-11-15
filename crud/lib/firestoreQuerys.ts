import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, addDoc, updateDoc, deleteDoc, getDocs } from 'firebase/firestore';
import { Item, ItemData } from './definitions';

const firebaseConfig = {
    apiKey: "AIzaSyAhRKLQ2_l1EIPKsTpqDczw65LLJzK9cb8",
    authDomain: "pam-ii-joao.firebaseapp.com",
    projectId: "pam-ii-joao",
    storageBucket: "pam-ii-joao.firebasestorage.app",
    messagingSenderId: "40137347395",
    appId: "1:40137347395:web:a9c31422b48e94efc79ff6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function createItem(itemData: ItemData) {
    try {
        await addDoc(collection(db, 'items'), { ...itemData });
    } catch (error) {
        console.error('Não foi possível adicionar o item');
    }
}

export async function deleteItem(itemId: string) {
    try {
        await deleteDoc(doc(db, 'items', itemId));
    } catch (error) {
        console.error('Não foi possível exlcuir o item');
    }
}

export async function updateItem(item: Item) {
    try {
        await updateDoc(doc(db, 'items', item.id), { ...item });
    } catch (error) {
        console.error('Não foi possível atualizar o item');
    }
}

export async function getItems(): Promise<Item[] | null> {
    const items: Item[] = [];

    try {
        const querySnapshot = await getDocs(collection(db, 'items'));

        querySnapshot.forEach(doc => {
            const itemData = doc.data() as ItemData;
            const item: Item = {
                id: doc.id,
                name: itemData.name,
                qtd: itemData.qtd,
            };

            items.push(item);
        })
    } catch (error) {
        console.error('Não foi possível ler os items do banco de dados');
        return null;
    }

    return items;
}