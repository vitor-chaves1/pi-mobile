import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Collapsible from 'react-native-collapsible'

export default class ContainerCollapsible extends Component {
    state = {
        collapsed: true,
    }

    toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed })
    }

    render() {
        const { titulo, children } = this.props
        return (
            <View style={{ flex: 1, backgroundColor: '#f0f0f0', marginTop: 8, borderRadius: 8,borderBottomWidth:1, borderColor:'#bdbdbd' }}>
                <TouchableOpacity onPress={this.toggleExpanded}>
                    <View style={{ backgroundColor: '#f0f0f0', padding: 12, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', fontSize: 16, fontWeight: 'bold', }}>{titulo}</Text>
                    </View>
                </TouchableOpacity>
                <Collapsible collapsed={this.state.collapsed} align="center">
                    <View style={{ padding: 18, backgroundColor: '#f0f0f0', borderRadius: 8 }}>
                        {children}
                    </View>
                </Collapsible>
            </View>
        )
    }
}
