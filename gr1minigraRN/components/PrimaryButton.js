import { View, Text, Pressable, StyleSheet } from 'react-native'

const PrimaryButton = (props) => {

    function pressHandle(){
        console.log("Ała Nacisnąłeś mnie")
    }

    return (
        <Pressable onPress={pressHandle} 
                   style={styles.btnContainer} 
                   android_ripple={{color:'dark'}}
                   >
            <View >
                <Text style={styles.btnText}> {props.children} </Text>
            </View>
        </Pressable>
    );
}


const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: '#25979c',
        borderRadius: 28
    },
    btnText: {
        color: 'white',
        textAlign: 'center'
    }

})

export default PrimaryButton ;
