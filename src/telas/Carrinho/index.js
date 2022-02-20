import React from 'react';
import { Text, StatusBar, SafeAreaView, FlatList, KeyboardAvoidingView, Platform } from 'react-native';

import Item from './Item';
import TelaPadrao from '../../componentes/TelaPadrao';
import StatusCarrinho from '../../componentes/StatusCarrinho';

const servicos = [
    {
        id:1,
        nome: "Banho",
        preco: 79.90,
        descricao: "Não de banho no seu gato",
        quantidade: 1
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 100.00,
        descricao: "Vacine o gatito",
        quantidade: 2
    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 90.00,
        descricao: "Vacine seu gatito",
        quantidade: 1
    }
]

export default function Servicos() {
    const total = servicos.reduce((soma, {preco, quantidade}) => soma + (preco  * quantidade), 0);

    return <>
        <StatusCarrinho total={total} />
        <FlatList 
            data={servicos}
            renderItem={({item}) => <Item {...item} />}
            keyExtractor={({id}) => String(id)}
        />
    </>
}