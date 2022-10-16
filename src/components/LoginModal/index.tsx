import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Link, TextField } from '@mui/material';
import { Container, Content } from "./styles"
import { useAuth } from '../../contexts/auth';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

type ILoginModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function LoginModal({ open = false,
  setOpen }: ILoginModalProps) {
  const { signIn, loadingSignIn } = useAuth()

  const handleLogin = (data: { login: string; password: string; }) => {
    try {
      signIn(data);
      return toast.success("Wow so easy!");
    } catch (err: any) {
      toast("Wow so easy!");

    }
  }
  const handleClose = () => setOpen(false);

  const schema = Yup.object().shape({
    login: Yup.string().email().required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
  });

  const { handleSubmit, errors, values, handleChange, touched } = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
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
            Fazer Login
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="login"
              name="login"
              label="Email"
              value={values.login}
              onChange={handleChange}
              error={touched.login && Boolean(errors.login)}
              helperText={touched.login && errors.login}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
              {loadingSignIn ? 'Carregando' : 'Submit'}
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
