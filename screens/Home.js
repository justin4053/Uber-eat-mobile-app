import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from "../components/HeaderTabs"
import SearchBar from "../components/SearchBar"
import Categories from "../components/Categories"
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems'


const YELP_API_KEY = "lKVVRGJfOsIsJzqdA3X_GtlQUkAxHRQkcLmALaGiRpD_qiGJcmxgQiQnyNMQ9wZjOqoHGJnEGBmE0KaWmKMxNrh6KYmc-xWAVfagjkuT4RpYzEoJoHjQIJYi7uUMYnYx"

export default function Home() {
    const [restaurantData, setRestaurantData] = useState(localRestaurants)
    const [city, setCity] = useState("Taiwan")

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        }

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) => setRestaurantData(json.businesses))

    }

    useEffect(() => {
        getRestaurantsFromYelp()
    }, [city])

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} />
            </ScrollView>
        </SafeAreaView >
    )
}