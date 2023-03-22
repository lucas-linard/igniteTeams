import { useEffect, useState, useRef } from "react";
import { Alert, FlatList, TextInput } from "react-native";
import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playersGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";

type RouteParams = {
  group: string;
}

export default function Players() {
  const [team, setTeam] = useState<string>("TIME A");
  const [players, setPlayers] = useState<string[]>([]);
  
  const route = useRoute()
  const { group } = route.params as RouteParams
  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="Adicionar a galera" />
      <Form>
        <Input placeholder="Nome do jogador" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
      <HeaderList>
        <FlatList
          data={["TIME A", "TIME B", "TIME C"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={<ListEmpty message="Não há pessoas neste time" />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />
      <Button title="Remover Turma" type="SECONDARY"/>
    </Container>
  );
}
