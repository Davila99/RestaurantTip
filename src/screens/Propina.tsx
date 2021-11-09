import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';

const Propina = () => {
    const [cuenta, setCuenta] = useState('')
    const [cantidad, setcantidad] = useState('')
    const [resultado, setResultado] = useState(0)
    const [resultadoFinal, setResultadoFinal] = useState(0)

    const porcentaje5 = 0.05

    const handleCalcular = () => {

    }

    const handleCalcular5 = () => {
        const porcentaje = (parseInt(cuenta) * porcentaje5)
        const porPersona = porcentaje/parseFloat(cantidad)
        const resultado = parseFloat(cuenta)/parseFloat(cantidad) +porPersona
        setResultado(porPersona)
        setResultadoFinal(resultado)
        // alert(porPersona)
    }



    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.headerText}>Cuenta</Text>
                <View>
                <TextInput 
                style={styles.input}
                keyboardType='numeric'
                 onChangeText={setCuenta} />
                </View>
               

                <Text>Seleccione el porcentaje de propina</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleCalcular5}
                >
                    <Text style={styles.label} >5%</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleCalcular}
                >
                    <Text style={styles.label}>10%</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleCalcular}
                >
                    <Text style={styles.label}>15%</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button2}
                    onPress={handleCalcular}
                >
                    <Text style={styles.label}>25%</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button2}
                    onPress={handleCalcular}
                >
                    <Text style={styles.label}>50%</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button2}
                    onPress={handleCalcular}
                >
                    <Text style={styles.label}>Custom</Text>
                </TouchableOpacity>
                <Text>Numeros de Personas</Text>
                <TextInput style={styles.input} onChangeText={setcantidad} />
                <Text>Propina</Text>
                <Text>{resultado}</Text>
                <Text>Total</Text>
                <Text>{resultadoFinal}</Text>
                <View>
                    <Button title="Reset" onPress={handleCalcular5}></Button>
                </View>

            </ScrollView>
        </View>
    )
}

export default Propina

const styles = StyleSheet.create({
    container: {
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        backgroundColor: '#FFFFFF',
        flex:1,
        width:'100%',
        paddingTop:24,
        paddingLeft:24,
        paddingRight:24
    },
    headerText:{
        fontWeight:'bold',
        fontSize:18,
        color:'#687778',
        borderWidth:0,
        marginBottom:5,
        marginTop:5
    },
    inputs:{
        backgroundColor:'#F2F8FB',
        borderRadius:8,
        padding:10,
        textAlign:'right',
        fontSize:22,
        fontWeight:'bold',
        color:'#004445'
    },
    textaddon:{
        position:'absolute',
        borderRadius:8,
        padding:10,
        textAlign:'right',
        fontSize:22,
        fontWeight:'bold',
        color:'#004445'
        
    },
    boxSelectTip:{
    marginTop:25
    },
    containersButtons:{
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-between",
        alignContent:"space-between",
        flexWrap:'wrap'
    },
    porcelainButton:{
    backgroundColor:'#00C1AC',
    borderRadius:8,
    width:'48%'
    },
    input: {
        borderColor: 'green',
        borderWidth: 2,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#00494C",
        padding: 10,
        borderRadius: 3,
        width: '50%'
    },
    button2: {
        alignItems: "center",
        backgroundColor: "#00494C",
        padding: 10,
        borderRadius: 3,
        width: '50%',
    },
    label: {
        color: '#FFFFFF',
        fontSize: 24
    }

})
