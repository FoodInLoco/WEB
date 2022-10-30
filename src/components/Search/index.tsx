
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import theme from "../../theme";

interface ISearchProps {
  showDirectionIcon?: boolean;
  placeholder?: string;
}
export default function Search({ showDirectionIcon = true, placeholder = "Digite aqui" }: ISearchProps) {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '91%', m: 2 }}
    >
      <InputBase
        sx={{ ml: 2, flex: 1 }}
        placeholder={placeholder}
        inputProps={{ 'aria-label': `${placeholder}` }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      {showDirectionIcon && <>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
          <DirectionsIcon style={{ color: theme.COLORS.PRIMARY }} />
        </IconButton>
      </>}
    </Paper>
  );
}
