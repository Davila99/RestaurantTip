import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';

const Propina = () => {
    const [total, setTotal] = useState('145.66')
    const [personas, setPersonas] = useState('5')
    const [porcentaje, setPorcentaje] = useState('15')
    const [propina, setPropina] = useState('4.27')
    const [totalPersona, setTotalPersona] = useState('32.79')


    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.headerText}>Cuenta</Text>
                <View>
                    <Text style={styles.textaddon}>C$</Text>
                    <TextInput
                        style={styles.inputs}
                        keyboardType='numeric'
                        defaultValue={total}
                        onChangeText={setTotal} />
                </View>

                <View style={styles.boxSelectTip}>
                    <Text style={styles.headerText}>
                        Seleccione el porcentaje de propina
                    </Text>
                    <View style={styles.containersButtons}>
                        <TouchableOpacity
                            onPress={() => setPorcentaje('5')}
                            style={
                                porcentaje == '5'
                                    ? styles.botonPorcentajeActivate
                                    : styles.botonPorcentaje
                            }
                        >
                            <Text
                                style={
                                    porcentaje == '5'
                                    ? styles.textbotonPorcentajeActivate
                                    : styles.textbotonPorcentaje
                                }
                            >
                                5%
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setPorcentaje('10')}
                            style={
                                porcentaje == '10'
                                    ? styles.botonPorcentajeActivate
                                    : styles.botonPorcentaje
                            }
                        >
                            <Text
                                style={
                                    porcentaje == '10'
                                    ? styles.textbotonPorcentajeActivate
                                    : styles.textbotonPorcentaje
                                }
                            >
                                10%
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setPorcentaje('15')}
                            style={
                                porcentaje == '15'
                                    ? styles.botonPorcentajeActivate
                                    : styles.botonPorcentaje
                            }
                        >
                            <Text
                                style={
                                    porcentaje == '15'
                                    ? styles.textbotonPorcentajeActivate
                                    : styles.textbotonPorcentaje
                                }
                            >
                                15%
                            </Text>
                        </TouchableOpacity>
        
                        <TouchableOpacity
                            onPress={() => setPorcentaje('25')}
                            style={
                                porcentaje == '25'
                                    ? styles.botonPorcentajeActivate
                                    : styles.botonPorcentaje
                            }
                        >
                            <Text
                                style={
                                    porcentaje == '25'
                                    ? styles.textbotonPorcentajeActivate
                                    : styles.textbotonPorcentaje
                                }
                            >
                                25%
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setPorcentaje('50')}
                            style={
                                porcentaje == '50'
                                    ? styles.botonPorcentajeActivate
                                    : styles.botonPorcentaje
                            }
                        >
                            <Text
                                style={
                                    porcentaje == '50'
                                    ? styles.textbotonPorcentajeActivate
                                    : styles.textbotonPorcentaje
                                }
                            >
                                50%
                            </Text>
                        </TouchableOpacity>
<TouchableOpacity style={styles.botonPorcentaje}>
    <Text style={styles.textbotonPorcentaje}>Custom</Text>
</TouchableOpacity>

                    </View>
                </View>


            </ScrollView>
        </View>
    )
}

export default Propina

const styles = StyleSheet.create({
    container: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: '#FFFFFF',
        flex: 1,
        width: '100%',
        paddingTop: 24,
        paddingLeft: 24,
        paddingRight: 24
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#687778',
        borderWidth: 0,
        marginBottom: 5,
        marginTop: 5
    },
    inputs: {
        backgroundColor: '#F2F8FB',
        borderRadius: 8,
        padding: 10,
        textAlign: 'right',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#004445'
    },
    textaddon: {
        position: 'absolute',
        borderRadius: 8,
        padding: 10,
        textAlign: 'right',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#004445'

    },
    boxSelectTip: {
        marginTop: 25
    },
    containersButtons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignContent: "space-between",
        flexWrap: 'wrap'
    },
    botonPorcentaje: {
        backgroundColor: '#00494C',
        borderRadius: 8,
        width: '48%',
        paddingVertical: 7,
        marginTop: 10
    },
    botonPorcentajeActivate: {
        backgroundColor: '#00C1AC',
        borderRadius: 8,
        width: '48%',
        paddingVertical: 7,
        marginTop: 10
    },
    botonReset: {
        backgroundColor: '#00C1AC',
        borderRadius: 8,
        width: '100%',
        paddingVertical: 7,
        marginTop: 1
    },
    textbotonPorcentaje: {
        color: '#F5FBFC',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center'
    },
    textbotonPorcentajeActivate: {
        color: '#004B4F',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center'
    },
    textbotonReset: {
        color: '#00514E',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center'
    },
    boxResumen: {
        backgroundColor: '#00494C',
        borderRadius: 8,
        marginTop: 25,
        padding: 20
    },
    textWhiteHeaderText: {
        color: '#EDFEFE',
        fontWeight: 'bold',
        fontSize: 22,
        borderWidth: 0
    },
    textGrayResumen: {
        color: '#4F8B8E',
        fontWeight: 'bold',
        fontSize: 14,
        borderWidth: 0
    },
    textMontoResumen: {
        color: '#00BEAD',
        fontWeight: 'bold',
        fontSize: 40,
        borderWidth: 0
    },
    filaResumen: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    }

})
