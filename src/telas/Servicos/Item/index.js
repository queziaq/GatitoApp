import React, { useState } from 'react';

import {TouchableOpacity, Text, View } from 'react-native';

import estilos from './estilos';
import CampoInteiro from '../../../componentes';
import Botao from '../../../componentes/Botao';

export default function Item({nome, preco, descricao}) {
    const [quantidade, setQtd] = useState(1);
    const [total, setTotal] = useState(preco);
    const [expandir, setExpandir] = useState(false);

    const calcTotal = (quantidade) => {
        setTotal(quantidade * preco);
    }

    const atualizaSoma = (qtd) => {
        setQtd(qtd);
        calcTotal(qtd);
    }

    const inverteExpandir = () => {
        setExpandir(!expandir);
        atualizaSoma(1);
    }

    return <>
        <TouchableOpacity style={estilos.informacao} onPress={inverteExpandir}>
            <Text style={estilos.nome}>{ nome }</Text>
            <Text style={estilos.descricao}>{ descricao }</Text>
            <Text style={estilos.preco}>{
                Intl.NumberFormat('pt-BR', {
                    style: 'currency', currency: 'BRL'
                }).format(preco)
            }</Text>
        </TouchableOpacity>
        { expandir &&
            <View style={estilos.carrinho}>
                <View>
                    <View style={estilos.valor}>
                        <Text style={estilos.descricao}>Quantidade</Text>
                        <CampoInteiro valor={quantidade} acao={atualizaSoma}/>
                    </View>
                    <View style={estilos.valor}>
                        <Text style={estilos.descricao}>Total:</Text>
                        <Text style={estilos.preco}>{
                            Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                            }).format(total)
                        }</Text>
                    </View>
                </View>
                <Botao valor="Adicionar" acao={() => {}}/>
            </View>
        }
        <View style={estilos.divisor} />
    </>
    
}