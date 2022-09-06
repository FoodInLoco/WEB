import { SearchByCity } from "../SearchByCity"
import { Container, TextCard } from "./styles"

type IMainCardProps = {
  text: string
}
export function MainCard({ text = "Text" }: IMainCardProps) {
  return <Container xs={12} sm={12} md={4}>
  <TextCard>
      Escolha a opção mais perto de você
  </TextCard>
    <SearchByCity />
  </Container>
}