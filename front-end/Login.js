import React, {useState, useEffect} from "react";
import { Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity} from "react-native";
import { css } from "../Css";
import { Cadastro } from "../Cadastro";


export default function Login ({navigation})
{

return(

    <KeyboardAvoidingView style={[css.container, css.darkbg]}>
        <View style={[css.loginForm]}>
            <TextInput placeholder='Usuário:'/>
            <TextInput placeholder='Senha:' secureTextEntry={true} />
  
        </View>
            <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
                <Text>Entrar</Text>
            </TouchableOpacity>

        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Text>Criar conta</Text>
            </TouchableOpacity>
        </View>

       
    </KeyboardAvoidingView>
    )
}