import { View, TextInput, StyleSheet} from 'react-native' ;
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen(){
    return (
        <View style={styles.inputContainer}>
            <TextInput  style={styles.numberInput}
                        maxLength={2}
                        keyboardType="numer-pad"
                        autoCorrect={false}
                        autoCapitalize="none"
            />
            <PrimaryButton> Reset </PrimaryButton>
            <PrimaryButton> Confirm </PrimaryButton>
        </View>
    )
}

export default StartGameScreen ;

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        padding: 10,
        marginHorizontal: 24,
       

    },
    numberInput:{
        height: 50,
        width: 50,
        fontSize:25,
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color:"#ddb52f",
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'

    }
})