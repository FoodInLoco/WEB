import { useAuth } from "../../contexts/auth";
import Typography from '@mui/material/Typography';
import { Button, CircularProgress, Link, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from "yup";
import toasts from '../../utils/toasts';
import { ArrowCircleRight } from '@mui/icons-material';

interface ISignInFormProps {
  goTo: (form: 'signin' | 'signup') => void;
}
export function SignInForm({ goTo }: ISignInFormProps) {
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
    onSubmit: async (values) => {
      try {
        await signIn(values);
        toasts.success({ message: "Bem vindo de volta!", status: 200 })
      } catch (error: any) {
        errors.email = 'email e/ou senha inválidos';
        errors.password = 'email e/ou senha inválidos';
      }

    },
  });
  const { signIn, loadingSignIn } = useAuth()

  return <>
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
        label="Senha"
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
    <Link id="modal-modal-description" sx={{ mt: 2, cursor: 'pointer' }} onClick={() => goTo('signup')}>
      Novo por aqui? faça seu cadastro.
      <ArrowCircleRight sx={{
        display: 'inline',
      }} />

    </Link>
  </>
}