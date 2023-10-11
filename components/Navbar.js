import { Appbar, Menu } from "react-native-paper";
import { useState } from "react";

const Navbar = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);


    return (
        <Appbar.Header style={{ backgroundColor: '#388E3C', justifyContent: 'space-between' }}>
            <Menu visible={visible} onDismiss={closeMenu} anchor={<Appbar.Action icon="menu" onPress={openMenu} />}>
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
                <Menu.Item onPress={() => {
                    navigation.navigate('Login')
                    closeMenu
                }} title="Login" />
            </Menu>
            <Appbar.Action icon="cart-outline" onPress={() => {navigation.navigate('Carrinho')}} />
        </Appbar.Header>
    );
}
export default Navbar;