import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
    placeholder?: string;
    onSearch: (text: string) => void;
}

const SearchInput: React.FC<Props> = ({ placeholder = 'Search...', onSearch }) => {
    const [text, setText] = useState<string>('');

    useEffect(() => {
        const timer = setTimeout(() => {
            onSearch(text);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [text]);

    const handleSearch = () => {
        onSearch(text);
    };
    

    const handleClear = () => {
        setText('');
        onSearch('');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={text}
                onChangeText={setText}
                onSubmitEditing={handleSearch}
                testID='search-input'
            />
            {text.length > 0 && (
                <TouchableOpacity onPress={handleClear} style={styles.clearButton} testID='clear-button'>
                    <Icon name="close" size={20} color="#ABABAB" />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#D5D5D5',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 12,
        backgroundColor: '#FFF',
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    clearButton: {
        marginLeft: 10,
    },
});

export default SearchInput;