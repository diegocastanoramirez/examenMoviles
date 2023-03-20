import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
let estudiantes =[
  {nombre:"flavio nelson",identificacion:"123456",asignatura:"matematicas",nota1:"4.5",nota2:"4.5",nota3:"4.5",definitiva:"4.5",observacion:"Aprueba"},
  {nombre:"pedro perez",identificacion:"987456",asignatura:"español",nota1:"4.0",nota2:"4.0",nota3:"4.0",definitiva:"4.0",observacion:"Aprueba"}
]
export default function App() {
  // Definir las variables de estado del componente
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [valor3, setValor3] = useState("");
  const [valor4, setValor4] = useState("");
  const [valor5, setValor5] = useState("");
  const [valor6, setValor6] = useState("");
  const [valor7, setValor7] = useState("");
  const [valor8, setValor8] = useState("");

  
  const [esValido, setesValido] = useState(false);
  const [mensaje, setMensaje] = useState("");

  let guardar=1
  let buscarNoexiste=0
  let calcular = (operador) => {
    if(parseFloat(valor4)>5||parseFloat(valor4)<0||parseFloat(valor5)>5||parseFloat(valor5)<0||parseFloat(valor6)>5||parseFloat(valor6)<0){
      setMensaje("Los datos de las notas no son correctos deben de ser entre 0 y 5")

      }else{
      if (valor1 != ""&& valor2 != ""&& valor3 != ""&& valor4 != "" && valor5 != ""&& valor6 != "" && operador=="calcular") {
        setesValido(true)
        setMensaje("")
        let resulta = 0;
  
            resulta = parseFloat(valor4)*0.30 + parseFloat(valor5)*0.35+ parseFloat(valor6)*0.35;
            setValor7(parseFloat (resulta).toFixed(2))
            if(parseFloat(resulta)>=3.0 ){
                setValor8("Aprueba")
            }else if(parseFloat(resulta)<=2.94){
              setValor8("Habilita")
            }
           else if(parseFloat(resulta)<2.0){
              setValor8("Reprueba")
            }
              ///filtrar si existe
            estudiantes.filter(function(estudiante){
              if(estudiante.identificacion==valor1){
                setMensaje("El estudiante ya existe no se puede guardar")
                guardar=0
              }
            })
  
      }
    }
      if(guardar==1&&operador=="calcular"&& valor7 !=""&& valor8 !=""){
        setMensaje("Estudiante guardado")
        estudiantes.push({nombre:valor2,identificacion:valor1,asignatura:valor3,nota1:valor4,nota2:valor5,nota3:valor6,definitiva:valor7,observacion:valor8})
        console.log(estudiantes)
      }

    else if(valor1 == ""|| valor2 == ""|| valor3 == ""|| valor4 == "" || valor5 == ""|| valor6 == ""){
      setMensaje("")
      setMensaje("Faltan datos por llenar")
    }



    
    if(operador=="limpiar") {
     
        setValor1(""),setValor2(""),setValor3(""),setValor4(""),setValor5(""),setValor6(""),setValor7(""),setValor8("")  
        setMensaje("")
      }

    if(operador=="buscar"){
      estudiantes.filter(function(estudiante){
        console.log(estudiantes)
        if(estudiante.identificacion==valor1){
          buscarNoexiste=1
          setMensaje("")
          setValor2(estudiante.nombre),setValor3(estudiante.asignatura),setValor4(estudiante.nota1),setValor5(estudiante.nota2),setValor6(estudiante.nota3),setValor7(estudiante.definitiva),setValor8(estudiante.observacion)
        }
            
      })
      if(buscarNoexiste==0){
        console.log
        setMensaje("no esta registrado")
      }
  
    }



  };

  return (
    <View style={[{width:"100%"}]}>
      <View style={[{backgroundColor: "#59C173",height:"8%",width:"100%",alignItems:"center",justifyContent: "center" }]}>
        <Text style={[styles.letras.negrita,styles.letras.fontSize25,{}]}  >Sistema de Notas</Text>
      </View>

      <View style={[{ flexDirection: "row",justifyContent:"center",alignItems: "center",marginTop:20}]}>

        <View style={[{ flexDirection: "column",marginRight:5,marginLeft:490,flex:2,justifyContent:"center"}]}>

          <Text style={styles.textos}>identificacion</Text>  
          <Text style={styles.textos}>Nombre</Text>
          <Text style={styles.textos}>Asignatura</Text>
          <Text style={styles.textos}>Nota Momento 1 (30%)</Text>
          <Text style={styles.textos}>Nota Momento 2 (35%)</Text>
          <Text style={styles.textos}>Nota Momento 3 (35%)</Text>
          <Text style={styles.textos}>Definitiva</Text>
          <Text style={styles.textos}>Observacion</Text>
          </View>


        <View style={[{ flexDirection: "column",marginLeft:5,marginRight:490,flex:2,justifyContent:"center",alignItems: "center"}]}>
          <TextInput style={styles.inputs} onChangeText={(valor1) => setValor1(valor1)} value={valor1}></TextInput>
          <TextInput style={styles.inputs} onChangeText={(valor2) => setValor2(valor2)} value={valor2}></TextInput>
          <TextInput style={styles.inputs} onChangeText={(valor3) => setValor3(valor3)} value={valor3}></TextInput>
          <TextInput style={styles.inputs} onChangeText={(valor4) => setValor4(valor4)} value={valor4} maxLength={3}></TextInput>
          <TextInput style={styles.inputs} onChangeText={(valor5) => setValor5(valor5)} value={valor5} maxLength={3}></TextInput>
          <TextInput style={[styles.inputs]} onChangeText={(valor6) => setValor6(valor6)} value={valor6} maxLength={3}></TextInput>
          <Text style={[styles.inputs]} onChangeText={(valor7) => setValor7(valor7)} value={valor7}>{valor7}</Text>
          <Text style={styles.inputs} onChangeText={(valor7) => setValor7(valor7)} value={valor7}>{valor8}</Text>
        </View>


      </View>
      <View style={[{flexDirection: "row",marginTop:10,marginLeft:490}]}>
          <TouchableOpacity
                style={[{ backgroundColor: "green",padding:3,width:190,justifyContent:"center",alignItems: "center",marginRight:12}]}
                onPress={()=>calcular("calcular")}
              >
                <Text style={[styles.textButtons]}>Calcular/Guardar</Text>
          </TouchableOpacity>
          <TouchableOpacity
                style={[{ backgroundColor: "green",flexDirection: "column"}, styles.buttons]}
                onPress={()=>calcular("limpiar")}
              >
                <Text style={[styles.textButtons]}>Limpiar</Text>
          </TouchableOpacity>
          <TouchableOpacity
                style={[{ backgroundColor: "green",flexDirection: "column" }, styles.buttons]}
                onPress={()=>calcular("buscar")}
              >
                <Text style={[styles.textButtons]}>Buscar</Text>
          </TouchableOpacity>
      </View>
      <Text style={[styles.textButtons,{color:"black",alignContent:"center",justifyContent:"center",marginLeft:490}]}>{mensaje}</Text>

      </View>
       
      


   
  );
}

const styles = StyleSheet.create({
    container: {
    marginTop:50,
    justifyContent: "center",
    width: "100%",
    flex:1
  },
  inputs: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom:8,
    marginTop:8,
    width:90,
    textAlign:"center"
  },
  textos:{
    marginBottom:8,
    marginTop:8,
    fontSize:15
  },
  buttons: {
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    marginLeft:12,
    marginRight:12
  },
  textButtons: {
    color: "white",
    fontWeight: "bold",
  },
  letras:{
    negrita: {fontWeight: 'bold'},
    cursiva: {fontStyle: 'italic'},
    subrayado: {textDecorationLine: 'underline'},
    fontSize25:{fontSize:25},
    fontSize15:{fontSize:15},
  },
});