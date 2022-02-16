import React from 'react';
import { TextInput } from 'react-native';

import estilos from './estilos';

export default function CampoInteiro({valor, acao}) {
    const numberToString = String(valor);
    
    const atualiza = (novoValor, acaoRetorno) => {
        const verificaInteiro = novoValor.match(/^[0-9]*$/);
        if (!verificaInteiro) return;
        
        const removeZero = novoValor.replace(/^(0)(.+)/,'$2');
        
        acaoRetorno(removeZero);
    }

    return <TextInput 
        style = {[estilos.campo]}
        keyboardType='number-pad'
        selectTextOnFocus
        onChangeText={(novoValor) => {atualiza(novoValor, acao)}}
        value={numberToString}
    />
}