import { useState } from "react";
import { Button, Typography, TextField, CircularProgress, Link, Box, FormControl, Switch, FormGroup, FormControlLabel } from "@mui/material";
import InputMask from 'react-input-mask';
import { useFormik } from 'formik';
import * as Yup from "yup";
import toasts from "../../utils/toasts";
import { signUp } from "../../services/auth";
import { getAdress } from "../../utils/searchAdress";
import { createRestaurant } from "../../services/restaurants";

interface ISignUpFormProps {
}
export function CreateRestaurantForm({ }: ISignUpFormProps) {

  const [loadingSignUp, setLoadingSignUp] = useState(false)
  const [loadingAdress, setLoadingAdress] = useState(false)
  const [kids, setKids] = useState(false)
  const schema = Yup.object().shape({
    companyName: Yup.string().required('Campo obrigatório'),
    tradingName: Yup.string().required('Campo obrigatório'),
    email: Yup.string().email('Digite um email válido.').required('Campo obrigatório'),
    phoneNumber: Yup.string().required('Campo obrigatório'),
    state: Yup.string().required('Campo obrigatório'),
    city: Yup.string().required('Campo obrigatório'),
    zipCode: Yup.string().required('Campo obrigatório'),
    street: Yup.string().required('Campo obrigatório'),
    number: Yup.string(),
    complement: Yup.string(),
    kids: Yup.boolean(),
  });
  const { handleSubmit, errors, values, handleChange, touched, setErrors, setValues } = useFormik({
    initialValues: {
      companyName: "",
      tradingName: "",
      email: "",
      phoneNumber: "",
      state: "",
      city: "",
      zipCode: "",
      street: "",
      number: "",
      complement: "",
      kids: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      setLoadingSignUp(true)
      const unformatedNumber = values.phoneNumber.replace(/[^0-9]+/g, '');
      const payload = { ...values, ddd: `${unformatedNumber[0]}${unformatedNumber[0]}`, phoneNumber: unformatedNumber.slice(2), roles: 1, kids }
      try {
        const res = await createRestaurant(payload)
        toasts.success({ message: "Cadastro efetuado com sucesso!", status: 200 })
      } catch (error: any) {
        toasts.error({ message: error.message, status: error.status })
      } finally {
        setLoadingSignUp(false)
      }

    },
  });
  const handleAdress = async (zipCode: string) => {
    const unmaskZipCode = zipCode.replace('-', '').replace('_', '')
    if (unmaskZipCode.length == 8) {
      try {
        setLoadingAdress(true)
        const adress = await getAdress(unmaskZipCode)
        if (adress?.erro) {
          setErrors({ zipCode: "Cep inválido" })
          return;
        }
        setValues({
          ...values,
          zipCode,
          street: adress.logradouro,
          city: adress.localidade,
          state: adress.uf
        })
      } catch (error) {
        toasts.error({ message: 'Erro ao buscar esse endereço', status: 400 })
      } finally {
        setLoadingAdress(false)
      }
    }
  }
  return (
    <>
      <Typography id="modal-modal-title" sx={{ margin: 1 }} variant="h6" component="h2">
        Criar um restaurante
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <FormControl sx={{ m: 1, width: '40ch' }}>
            <TextField
              fullWidth
              sx={{ m: 1 }}
              id="companyName"
              name="companyName"
              label="Nome"
              value={values.companyName}
              onChange={handleChange}
              error={touched.companyName && Boolean(errors.companyName)}
              helperText={touched.companyName && errors.companyName}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '40ch' }}>
            <TextField
              fullWidth
              sx={{ m: 1 }}
              id="tradingName"
              name="tradingName"
              label="Nome Fantasia"
              value={values.tradingName}
              onChange={handleChange}
              error={touched.tradingName && Boolean(errors.tradingName)}
              helperText={touched.tradingName && errors.tradingName}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '36ch' }}>
            <InputMask
              mask="(99) 99999-9999"
              disabled={false}
              maskChar=" "
              value={values.phoneNumber}
              onChange={handleChange}
            >
              <TextField
                fullWidth
                error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                helperText={touched.phoneNumber && errors.phoneNumber}
                sx={{ m: 1 }}
                id="phoneNumber"
                name="phoneNumber"
                label="Telefone" />
            </InputMask>
          </FormControl>
          <FormControl sx={{ m: 1, width: '40ch' }}>
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
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }}>
            <InputMask
              mask="99999-999"
              disabled={false}
              maskChar=" "
              value={values.zipCode}
              onChange={(e) => {
                handleChange(e);
                handleAdress(e.target.value);
              }}
            >
              <TextField
                fullWidth
                error={touched.zipCode && Boolean(errors.zipCode)}
                helperText={touched.zipCode && errors.zipCode}
                sx={{ m: 1 }}
                id="zipCode"
                name="zipCode"
                label="CEP" />
            </InputMask>
          </FormControl>
          <FormControl sx={{ m: 1, width: '40ch' }}>
            <TextField
              fullWidth
              sx={{ m: 1 }}
              id="street"
              name="street"
              label="Rua"
              value={values.street}
              onChange={handleChange}
              error={touched.street && Boolean(errors.street)}
              helperText={touched.street && errors.street}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '10ch' }}>
            <TextField
              fullWidth
              sx={{ m: 1 }}
              id="number"
              name="number"
              label="Nº"
              value={values.number}
              onChange={handleChange}
              error={touched.number && Boolean(errors.number)}
              helperText={touched.number && errors.number}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '40ch' }}>
            <TextField
              fullWidth
              sx={{ m: 1 }}
              id="city"
              name="city"
              label="Cidade"
              value={values.city}
              onChange={handleChange}
              error={touched.city && Boolean(errors.city)}
              helperText={touched.city && errors.city}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '10ch' }}>
            <TextField
              fullWidth
              sx={{ m: 1 }}
              id="state"
              name="state"
              label="Estado"
              value={values.state}
              onChange={handleChange}
              error={touched.state && Boolean(errors.state)}
              helperText={touched.state && errors.state}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '28ch' }}>
            <TextField
              fullWidth
              sx={{ m: 1 }}
              id="complement"
              name="complement"
              label="Complemento"
              value={values.complement}
              onChange={handleChange}
              error={touched.complement && Boolean(errors.complement)}
              helperText={touched.complement && errors.complement}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '40ch' }}>
            <FormGroup>
              <FormControlLabel control={<Switch defaultChecked checked={kids}
                onChange={() => setKids(prev => !prev)} />} label="Epaço para crianças" />
            </FormGroup>
          </FormControl>
          <Button color="primary" variant="contained" fullWidth type="submit" disabled={loadingSignUp} sx={{ m: 1 }}>
            {loadingSignUp ? <CircularProgress size={14} /> : 'Criar Restaurante'}
          </Button>
        </Box></form>
    </>
  )
}

