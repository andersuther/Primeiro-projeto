import React , {useContext } from 'react';
import {useNavigation} from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';

import Header from '../../components/Header';

import {Container, Nome,NewLink,Newtext,Logout,LogoutText} from './styles';


export default function Profile() {
  const navigation = useNavigation();
  const {user , signOut} = useContext(AuthContext);
 return (
   <Container>
    <Header/>
      <Nome>
        {user && user.nome}
      </Nome>
      <NewLink onPress={()=> navigation.navigate('New')}>
        <Newtext>Registrar Gastos</Newtext>
      </NewLink>

      <Logout onPress={()=> signOut()}>
        <LogoutText>Sair</LogoutText>
      </Logout>
   </Container>
  );
}