import { Image,Text } from "react-native";


export default function Banner(props){
  return(
    <Image source={require(`../assets/images/${props.name}.png`)} style={{width:'100%',height:'100%',resizeMode:'stretch'}}></Image>
    
    );
}