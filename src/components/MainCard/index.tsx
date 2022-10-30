import { Paper } from "@mui/material";
import theme from "../../theme";
import Search from "../Search";
import { TitleCard, TextContainer } from "./styles"

type IMainCardProps = {
  text: string
}
export function MainCard({ text = "Você precisa digitar uma mensagem" }: IMainCardProps) {
  return (
    <Paper sx={{
      bgcolor: `${theme.COLORS.PRIMARY}`,
      minHeight: 700,
      minWidth: 400,
      display: 'flex',
      flexDirection: "column",
      justifyContent: "space-between"
    }}>
      <TextContainer>
        <TitleCard>
          {text}
        </TitleCard>
      </TextContainer>
      <Search placeholder="Busque pelo seu endereço" />
    </Paper >
  )
}