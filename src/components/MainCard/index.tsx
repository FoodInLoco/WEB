import { Paper } from "@mui/material";
import theme from "../../theme";
import { SearchByCity } from "../SearchByCity"
import { TitleCard, TextContainer } from "./styles"

type IMainCardProps = {
  text: string
}
export function MainCard({ text = "Você precisa digitar uma mensagem" }: IMainCardProps) {
  return (
    <Paper sx={{
      bgcolor: `${theme.COLORS.PRIMARY}`,
      minHeight: 700,
      display: 'flex',
      flexDirection: "column",
      justifyContent: "space-between"
    }}>
      <TextContainer>
        <TitleCard>
          {text}
        </TitleCard>
      </TextContainer>
      <SearchByCity />
    </Paper >
  )
}