import { Appbar } from "react-native-paper";

const Navbar = () => {
    return (
        <Appbar.Header style={{ backgroundColor: '#388E3C', justifyContent: 'space-between' }}>
            <Appbar.Action icon="menu" onPress={() => { }} />
            <Appbar.Action icon="cart-outline" onPress={() => { }} />
        </Appbar.Header>
    );
}
export default Navbar;