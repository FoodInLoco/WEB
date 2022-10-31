import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, CircularProgress, Link, TextField } from '@mui/material';
import { Container, Content } from "./styles"
import { useAuth } from '../../contexts/auth';
import { useFormik } from 'formik';
import * as Yup from "yup";
import toasts from '../../utils/toasts';
type ILoginModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function LoginModal({ open = false,
  setOpen }: ILoginModalProps) {
  const { signIn, loadingSignIn } = useAuth()

  const handleLogin = (data: { email: string; password: string; }) => {
    try {
      signIn(data);
    } catch (error: any) {
      toasts.error(error?.message)
    }

  }
  const handleClose = () => setOpen(false);

  const schema = Yup.object().shape({
    email: Yup.string().email().required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
  });

  const { handleSubmit, errors, values, handleChange, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log("🚀 ~ file: index.tsx ~ line 42 ~ values", values)
      handleLogin(values)
    },
  });


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
            Acessar sua conta
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              sx={{ m: 1 }}
              id="email"
              name="email"
              label="Email"
              value={values.email}
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              sx={{ m: 1 }}
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
            <Button color="primary" variant="contained" fullWidth type="submit" disabled={loadingSignIn} sx={{ m: 1 }}>
              {loadingSignIn ? <CircularProgress size={14} /> : 'Acessar'}
            </Button>
          </form>
          <Link id="modal-modal-description" sx={{ mt: 2, cursor: 'pointer' }} >
            Novo por aqui? faça seu cadastro.
          </Link>
        </Content>
      </Modal>
    </Container>
  );
}
