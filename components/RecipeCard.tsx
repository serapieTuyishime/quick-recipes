import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function RecipeCard({ recipe, onPress, style }) {
    return (
        <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
            <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
                {recipe.title}
            </Text>
        </TouchableOpacity>
    );
}

export const styles = StyleSheet.create({
    card: {
        padding: 20,
        margin: 10,
        backgroundColor: '#F0F4F8', // Light blue-gray background
        borderColor: '#4A90E2', // Blue border
        borderWidth: 2,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2C3E50',
    },
});