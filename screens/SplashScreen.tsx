import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { RecipeCard } from '../components/RecipeCard';
import { recipes } from '../data/recipes';

const numColumns = 2;
const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 60) / numColumns; // 40 is total horizontal padding

export function SplashScreen({ navigation }) {
    const renderItem = ({ item }) => (
        <RecipeCard
            recipe={item}
            onPress={() => navigation.navigate('RecipeDetails', { recipe: item })}
            style={{ width: cardWidth, height: cardWidth }}
        />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Recipe App</Text>
            <FlatList
                data={recipes.slice(0, 8)}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={numColumns}
                contentContainerStyle={styles.gridContent}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    gridContent: {
        padding: 10,
        backgroundColor: "#bada55"
    },
});