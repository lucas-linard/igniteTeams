import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container, Content, Icon } from "./styles";

export default function NewGroup() {
  const [group, setGroup] = useState('');
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("Players", { group });
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
        <Input 
        placeholder="Nome da turma"
        onChangeText={setGroup}
        />
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </Content>
    </Container>
  );
}
