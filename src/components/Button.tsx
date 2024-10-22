import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "../styles/GlobalStyles";


interface ButtonProps {
    title: string;
    onPress: () => void;
    isBlue?: boolean;
    isGray?: boolean;
    isRed?: boolean;
    isGreen?: boolean;
}

export default function Button({ title, onPress, isBlue, isGray, isRed, isGreen }: ButtonProps) {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity
            style={[
                isBlue
                    ? Styles.btnBlue
                    : isGray
                        ? Styles.btnGray
                        : isRed
                            ? Styles.btnRed
                            : isGreen
                                ? Styles.btnGreen
                            : theme === 'light'
                                ? Styles.btnLight
                                : Styles.btnDark
            ]}
            onPress={onPress}
        >
            <Text style={
                isBlue || isGray || isRed
                    ? Styles.smallTextLight
                    : theme === 'light'
                        ? Styles.smallTextDark
                        : Styles.smallTextLight
            }>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
