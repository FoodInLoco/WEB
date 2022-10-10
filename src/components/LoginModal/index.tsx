import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link, TextField } from '@mui/material';
import { Container, Content } from "./styles"

type ILoginModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
}
export function LoginModal({ open = false,
  setOpen }: ILoginModalProps) {
  const handleClose = () => setOpen(false);

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
