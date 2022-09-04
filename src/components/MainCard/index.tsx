import { Container, TextCard } from "./styles"

type IMainCardProps = {
  text: string
}
export function MainCard({ text = "Text" }: IMainCardProps) {
  return <Container>
    <TextCard>{text}</TextCard>
  </Container>
}