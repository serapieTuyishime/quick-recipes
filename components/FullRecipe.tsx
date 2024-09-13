import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet } from "react-native";
import { ingredients } from '../data/ingredients';

interface Recipe {
    recipe_id: number;
    title: string;
    description: string;
    prep_time: number;
    cook_time: number;
    total_time: number;
    instructions: string;
    image_url: string;
    ingredient_ids: (string | number)[]
}

export function FullRecipe({ recipe }: { recipe: Recipe }) {
    const getIngredientName = (id: number | string) => {
        if (typeof id === 'string') {
            return <Text style={styles.boldText}>{id}</Text>;
        }
        const ingredient = ingredients.find(ing => ing.id === id);
        return ingredient ? `${ingredient.quantity} ${ingredient.unit} ${ingredient.name}` : 'Unknown ingredient';
    };
    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: recipe.image_url }} style={styles.image} />
            <Text style={styles.title}>{recipe.title}</Text>
            <Text style={styles.description}>{recipe.description}</Text>

            <View style={styles.timeContainer}>
                <Text style={styles.timeText}>Prep: {recipe.prep_time} min</Text>
                <Text style={styles.timeText}>Cook: {recipe.cook_time} min</Text>
                <Text style={styles.timeText}>Total: {recipe.total_time} min</Text>
            </View>

            <Text style={styles.sectionTitle}>Ingredients:</Text>
            {recipe.ingredient_ids.map((id, index) => (
                <Text key={index} style={styles.ingredient}>
                    • {getIngredientName(id)}
                </Text>
            ))}

            <Text style={styles.sectionTitle}>Instructions:</Text>
            {recipe.instructions.split('. ').map((instruction, index) => (
                <Text key={index} style={styles.instruction}>
                    {index + 1}. {instruction}
                </Text>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 20,
        fontStyle: 'italic',
        marginBottom: 20,
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    timeText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    instruction: {
        fontSize: 22,
        marginBottom: 15,
    },

    ingredient: {
        fontSize: 18,
        marginBottom: 5,
    },

    boldText: {
        fontWeight: 'bold',
    },
});

