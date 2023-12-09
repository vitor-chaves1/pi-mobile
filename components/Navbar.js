import { View } from 'react-native'
import { Appbar, Menu, Text } from "react-native-paper";
import { useContext, useState } from "react";
import { AuthContext } from '../contexts/AuthContext';

const Navbar = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const { usuario, logout } = useContext(AuthContext)
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);


    return (
        <Appbar.Header style={{ backgroundColor: '#388E3C', justifyContent: 'space-between' }}>
            <Menu visible={visible} onDismiss={closeMenu} anchor={<Appbar.Action icon="menu" iconColor="#000" onPress={openMenu} />}>
                <Menu.Item onPress={() => {
                    navigation.navigate('Catalogo')
                    closeMenu
                }} title="Catalogo" />
                <Menu.Item onPress={() => {
                    navigation.navigate('Carrinho')
                    closeMenu
                }} title="Carrinho" />
                <Menu.Item onPress={() => {
                    navigation.navigate('Historico')
                    closeMenu
                }} title="Historico" />
                <Menu.Item onPress={() => {
                    navigation.navigate('ListaDesejos')
                    closeMenu
                }} title="Lista de Desejos" />
                <Menu.Item onPress={() => {
                    navigation.navigate('Perfil')
                    closeMenu
                }} title="Perfil" />
                <Menu.Item
                    style={{ backgroundColor: '#ff4f64', borderRadius: 8, marginHorizontal: 8 }}
                    onPress={() => {
                        logout()
                        closeMenu
                    }}
                    title="Logout"
                    trailingIcon={'logout'}
                />
            </Menu>
            <View>
                <Text variant="headlineLarge" style={{ fontWeight: 'bold', textShadowColor: '#fff', textShadowRadius: 4 }} >Meu App</Text>
            </View>
            <Appbar.Action icon="cart-outline" iconColor="#000" onPress={() => { navigation.navigate('Carrinho') }} />
        </Appbar.Header>
    );
}
export default Navbar;