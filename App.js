import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Banner from "./components/Banner";
export default function App() {
  // Definir las variables de estado del componente
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [resultado, setResultado] = useState(0);
  const [esValido, setesValido] = useState(false);
  const [mensaje, setMensaje] = useState("");
  // Metodos o funciones
  let calcular = (operador) => {
    if (valor1 != "" && valor2 != "") {
      setesValido(true)
      let resulta = 0;
      switch (operador) {
        case "+":
          resulta = parseFloat(valor1) + parseFloat(valor2);
          break;
        case "-":
          resulta = parseFloat(valor1) - parseFloat(valor2);
          break;
        case "*":
          resulta = parseFloat(valor1) * parseFloat(valor2);
          break;
        case "/":
          resulta = parseFloat(valor1) / parseFloat(valor2);
          break;
      }
      // Cambiar el contenido de la variable de estado resultado con la info de resulta
      setResultado(resulta);
      setMensaje("Calculo realizado correctamente ...")
    }
    else{
      setesValido(false);
      setMensaje("Debe ingresar los 2 valores ...")
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.container, { flex: 1, backgroundColor: "orange" }]}>
        <Banner name="calculadora"></Banner>
      </View>
      <View
        style={[styles.container, { flex: 5, backgroundColor: "powderblue" }]}
      >
        <Text style={{ fontWeight: "bold" }}>Calculadora Básica</Text>
        <Text>Valor 1</Text>
        <TextInput
          placeholder="Ingrese valor 1"
          style={styles.inputs}
          onChangeText={(valor1) => setValor1(valor1)}
          value={valor1}
        />
        <Text>Valor 2</Text>
        <TextInput
          placeholder="Ingrese valor 2"
          style={styles.inputs}
          onChangeText={(valor2) => setValor2(valor2)}
          value={valor2}
        />
        <Text>Resultado</Text>
        <Text
          style={[
            styles.inputs,
            {
              width: 200,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          {resultado.toFixed(1)}
        </Text>
        <View
          style={[styles.container, { marginTop: 20, flexDirection: "row" }]}
        >
          <TouchableOpacity
            style={[{ backgroundColor: "green" }, styles.buttons]}
            onPress={()=>calcular("+")}
          >
            <Text style={styles.textButtons}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ backgroundColor: "red" }, styles.buttons]}
            onPress={()=>calcular("-")}
          >
            <Text style={styles.textButtons}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ backgroundColor: "purple" }, styles.buttons]}
            onPress={()=>calcular("*")}
          >
            <Text style={styles.textButtons}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ backgroundColor: "orange" }, styles.buttons]}
            onPress={()=>calcular("/")}
          >
            <Text style={styles.textButtons}>/</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[{ backgroundColor: "black", marginTop: 20 }, styles.buttons]}
        >
          <Text style={styles.textButtons}>C</Text>
        </TouchableOpacity>
        <Text style={{color: esValido ? "green" : "red"}}>{mensaje}</Text>
      </View>

      <View style={[styles.container, { flex: 1, backgroundColor: "gray" }]}>
        <Text>Pie</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  inputs: {
    color: "blue",
    borderRadius: 5,
    padding: 10,
    borderWidth: 2,
    borderColor: "green",
    textAlign: "center",
  },
  buttons: {
    borderRadius: 10,
    padding: 10,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  textButtons: {
    color: "white",
    fontWeight: "bold",
  },
});