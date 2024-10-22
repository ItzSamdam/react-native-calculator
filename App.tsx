import { useEffect, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, TouchableOpacity, StyleSheet, Text } from "react-native";
import { ThemeContext } from "./src/context/ThemeContext";
import { myColors } from './src/styles/Color';
import Keyboard from './src/components/Keyboard';
import Icon from 'react-native-vector-icons/Feather';

export default function App() {
    const [theme, setTheme] = useState('light');
    const [currentTime, setCurrentTime] = useState('');
    // Function to update time
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            setCurrentTime(timeString);
        };

        // Update time every second
        const intervalId = setInterval(updateTime, 1000);
        return () => clearInterval(intervalId); // Clear the interval on component unmount
    }, []);
    return (
        <ThemeContext.Provider value={theme}>
            <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, { backgroundColor: 'black' }]}>
                <StatusBar style="auto" />
                <Text style={styles.timeText}>
                    <Icon name='clock' size={18} /> {currentTime}</Text>
                <TouchableOpacity style={styles.iconContainer} onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                    <Icon
                        name={theme === 'light' ? 'moon' : 'sun'}
                        size={20}
                        color={theme === 'light' ? 'black' : 'orange'}
                    />
                </TouchableOpacity>
                <Keyboard />
            </SafeAreaView>
        </ThemeContext.Provider>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColors.light,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        position: 'absolute',
        top: 40,
        right: 10,
    },
    timeText: {
        position: 'absolute',
        top: 40,
        left: 10,
        fontSize: 18,
        color: 'black',
    },
});