import { StyleSheet } from "react-native";
import { myColors } from "./Color";

export const Styles = StyleSheet.create({
    btnBlue: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    btnDark: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.btnDark,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    btnRed: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.red,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    btnGreen: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.green,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    btnGray: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.btnGray,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    btnLight: {
        width: 72,
        height: 72,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    smallTextLight: {
        color: myColors.white,
        fontSize: 32
    },
    smallTextDark: {
        color: myColors.dark,
        fontSize: 32
    },
    row: {
        maxWidth: '100%',
        flexDirection: 'row',
    },
    viewBottom: {
        position: 'absolute',
        bottom: 50,
    },
    screenFirstNumber: {
        fontSize: 96,
        color: myColors.gray,
        fontWeight: '200',
        alignSelf: 'flex-end',
    },
    screenSecondNumber: {
        fontSize: 40,
        color: myColors.gray,
        fontWeight: '200',
        alignSelf: 'flex-end',
    },

});