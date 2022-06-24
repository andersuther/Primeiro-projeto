import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import  Icon  from 'react-native-vector-icons/Feather';

import { Container, Tipo, IconView, ValorText, TipoText } from './styles';

export default function HistoricoList({data, deleteItem}) {
 return (
<TouchableWithoutFeedback onLongPress={()=>deleteItem(data) }>
    <Container>
        <Tipo>
            <IconView tipo={data.tipo}>
                <Icon 
                name= {data.tipo === 'despesa' ? 'arrow-down' : 'arrow-up'}
                color="#FFF" 
                size={20} />
                <TipoText>{data.tipo}</TipoText>
            </IconView>
        </Tipo>

        <ValorText>
            R${data.valor.toFixed(2)}
        </ValorText>

    </Container>
</TouchableWithoutFeedback>
  );
 
}