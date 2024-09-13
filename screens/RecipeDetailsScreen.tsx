import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FullRecipe } from '../components/FullRecipe';

export function RecipeDetailsScreen({ route }) {
    const { recipe } = route.params;
    return (
        <View style={styles.container}>
            <FullRecipe recipe={recipe} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});