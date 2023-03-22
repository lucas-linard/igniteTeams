import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container, Content, Icon } from "./styles";
import { Alert } from "react-native";

export default function NewGroup() {
  const [group, setGroup] = useState("");
  const navigation = useNavigation();

  async function handleNewGroup() {
    
    try {
      if(group.trim().length === 0){
        return Alert.alert("Novo grupo", "Informe o nome da turma. "); 
      }

      await groupCreate(group);
      navigation.navigate("Players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo grupo", error.message);
      } else {
        Alert.alert("Novo grupo", "Não foi possível criar o grupo");
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <Header showBackButton={true} />
      <Content>
        <Icon />
        <Highlight
          title="Nova Turma"
          subtitle="Criar a turma para adicionar pessoas"
        />
        <Input placeholder="Nome da turma" onChangeText={setGroup} />
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </Content>
    </Container>
  );
}
