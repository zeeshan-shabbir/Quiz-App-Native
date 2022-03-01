import React,{useState,useContext} from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../theme/theme';
import { Picker } from '@react-native-picker/picker';
import { GlobalContext } from '../context/context';


const DropDown = ({
    labelText1 = 'defualt text',
    labelText2 = 'defualt tex',
    labelValue1 = 1,
    labelValue2 = 2,
    style,
    fontsize,
    isPrimary = true,
    ...more
}) => {
    const { state, dispatch } = useContext(GlobalContext);

    const [selectedLevel, setselectedLevel] = useState();
    return (
        <View style={styles.main}>


            <Picker
                selectedValue={selectedLevel}
                onValueChange={(itemValue, itemIndex) =>{
                    setselectedLevel(itemValue)
                    dispatch({type: 'SELECTED_LEVEL',payload:itemValue,})
                }
                    
                  }
                  style={styles.picker}
                  {...more}
            >
                <Picker.Item label={labelText1} value={labelValue1} />
                <Picker.Item label={labelText2} value={labelValue2} />
            </Picker>
        </View>
    );
};

export default DropDown;
const styles = StyleSheet.create({
    picker: {
        // borderWidth:4,
        // borderColor:"black",
    },
    main: {
        width: "80%",
        borderWidth: 4,
        borderColor: "black",
    },
});
