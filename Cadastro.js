import React, {useState, useEffect} from "react";
import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, DatePicker} from "react-native";
import { css } from "./Css";


export default function Cadastro ({navigation})
{

return(

    <KeyboardAvoidingView style={[css.container, css.darkbg]}>
        <View style={[css.loginForm]}>
            <TextInput placeholder='Nome:'/>
            <TextInput placeholder='Usuário:'/>
            <TextInput placeholder='Email:'/>
            <TextInput placeholder='Confirmar Email:' />
            <TextInput placeholder='Senha:' />
            <TextInput placeholder='Confirmar Senha:' />
        </View>
    </KeyboardAvoidingView>
    )
}