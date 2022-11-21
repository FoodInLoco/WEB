import { useState } from "react";
import { Button, Typography, TextField, CircularProgress, Link } from "@mui/material";
import InputMask from 'react-input-mask';
import { useFormik } from 'formik';
import * as Yup from "yup";
import toasts from "../../utils/toasts";
import { ArrowCircleLeft } from "@mui/icons-material";
import { signUp } from "../../services/auth";
interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  ddd: string;
  phoneNumber: string;
  password: string;
  roles: number;
}
interface ISignUpFormProps {
  goTo: (form: 'signin' | 'signup') => void;
}
export default function SignUpForm({ goTo }: ISignUpFormProps) {

  const [loadingSignUp, setLoadingSignUp] = useState(false)
  const schema = Yup.object().shape({
    email: Yup.string().email('Digite um email válido.').required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
    firstName: Yup.string().required('Campo obrigatório'),
    lastName: Yup.string().required('Campo obrigatório'),
    phoneNumber: Yup.string().required('Campo obrigatório')
  });
  const { handleSubmit, errors, values, handleChange, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      setLoadingSignUp(true)
      const unformatedNumber = values.phoneNumber.replace(/[^0-9]+/g, '');
      const payload = { ...values, ddd: `${unformatedNumber[0]}${unformatedNumber[0]}`, phoneNumber: unformatedNumber.slice(2), roles: 1 }
      try {
        await signUp(payload);
        toasts.success({ message: "Cadastro efetuado com sucesso!", status: 200 })
      } catch (error: any) {
        toasts.error({ message: error.message, status: error.status })
      } finally {
        setLoadingSignUp(false)
      }

    },
  });

  return (
    <>
      <Typography id="modal-modal-title" sx={{ margin: 1 }} variant="h6" component="h2">
        Criar sua conta
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          sx={{ m: 1 }}
          id="firstName"
          name="firstName"
          label="Nome"
          value={values.firstName}
          onChange={handleChange}
          error={touched.firstName && Boolean(errors.firstName)}
          helperText={touched.firstName && errors.firstName}
        />
        <TextField
          fullWidth
          sx={{ m: 1 }}
          id="lastName"
          name="lastName"
          label="Sobrenome"
          value={values.lastName}
          onChange={handleChange}
          error={touched.lastName && Boolean(errors.lastName)}
          helperText={touched.lastName && errors.lastName}
        />
        <InputMask
          mask="(99) 99999-9999"
          disabled={false}
          maskChar=" "
          value={values.phoneNumber}
          onChange={handleChange}
          error={touched.phoneNumber && Boolean(errors.phoneNumber)}
          helperText={touched.phoneNumber && errors.phoneNumber}
        >
          {(inputProps: any): JSX.Element => <TextField
            {...inputProps}
            fullWidth
            sx={{ m: 1 }}
            id="phoneNumber"
            name="phoneNumber"
            label="Telefone"

          />}
        </InputMask>
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
        <Button color="primary" variant="contained" fullWidth type="submit" disabled={loadingSignUp} sx={{ m: 1 }}>
          {loadingSignUp ? <CircularProgress size={14} /> : 'Criar conta'}
        </Button>
      </form>
      <Link id="modal-modal-description" sx={{ mt: 2, cursor: 'pointer' }} onClick={() => goTo('signin')}>
        <ArrowCircleLeft sx={{
          display: 'inline',
        }} />
        Já tem conta? faça seu login.
      </Link>
    </>
  )
}

