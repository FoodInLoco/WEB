import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link, TextField } from '@mui/material';
import { Container, Content } from "./styles"
import { useAuth } from '../../contexts/auth';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  display: 'flex',
  flexDirection: 'column',
  p: 4,
  justifyContent: 'space-between',
  alignItems: 'center',

};

type ILoginModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
}
export function LoginModal({ open = false,
  setOpen }: ILoginModalProps) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 const {sigIn} = useAuth()
  return (
    <Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Content>
          <Typography id="modal-modal-title" sx={{ margin: 1 }} variant="h6" component="h2">
            Fazer Login
          </Typography>
          <TextField id="standard-basic" sx={{ margin: 1 }} label="email" variant="standard" />
          <TextField id="standard-basic" type={'password'} sx={{ margin: 1 }} label="senha" variant="standard" />
          <Link id="modal-modal-description" sx={{ mt: 2, cursor: 'pointer' }} >
            Novo por aqui? faça seu cadastro.
          </Link>
        </Content>
      </Modal>
    </Container>
  );
}
