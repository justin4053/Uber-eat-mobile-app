import { View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/restaurnatDetail/About'
import MenuItems from '../components/restaurnatDetail/MenuItems'
import ViewCart from '../components/restaurnatDetail/ViewCart'

export default function RestaurantDetail({ route, navigation }) {
    return (
        <View>
            <About route={route} />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            <MenuItems />
            <ViewCart navigation={navigation} restaurantName={route.params.name} />
        </View>
    )
}