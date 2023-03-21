import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container, Content, Icon } from "./styles";

export default function NewGroup() {
  return (
    <Container>
      <Header showBackButton={true} />
      <Content>
        <Icon/>
        <Highlight
          title="Nova Turma"
        subtitle="Cira a turma para adicionar pessosas"
        />
        <Input
        placeholder="Nome da turma"
        />
        <Button
        title="Criar"
        style={{ marginTop: 20 }}
        />
      </Content>
    </Container>
  );
}
