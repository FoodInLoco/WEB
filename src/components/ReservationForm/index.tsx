import { useState } from "react";
import { Button, Typography, TextField, CircularProgress, Link, Box, FormControl } from "@mui/material";
import InputMask from 'react-input-mask';
import { useFormik } from 'formik';
import * as Yup from "yup";
import toasts from "../../utils/toasts";
import moment from "moment";
import { createReservation } from "../../services/restaurants";


export function ReservationForm({ idRestaurant, closeModal }: { idRestaurant: string | undefined, closeModal: () => void }): JSX.Element {

  const [loadingSignUp, setLoadingSignUp] = useState(false)
  const [loadingAdress, setLoadingAdress] = useState(false)
  const schema = Yup.object().shape({
    description: Yup.string().required('Campo obrigatório'),
    seatQuantity: Yup.number().required('Campo obrigatório'),
    date: Yup.date().required('Campo obrigatório'),

  });
  const { handleSubmit, errors, values, handleChange, touched, setErrors, setValues } = useFormik({
    initialValues: {
      description: "",
      seatQuantity: 1,
      date: moment().format('YYYY-MM-DD hh:mm'),
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      setLoadingSignUp(true)
      try {
        await createReservation({ date: moment(values.date), description: values.description, restaurantId: idRestaurant, seatQuantity: values.seatQuantity })
        closeModal()
        toasts.success({ message: "Solicitação enviada!", status: 200 })
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
        Criar uma reserva
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <FormControl sx={{ m: 1, width: '80ch' }}>
            <TextField
              fullWidth
              sx={{ m: 1 }}
              id="description"
              name="description"
              label="Descrição"
              value={values.description}
              onChange={handleChange}
              error={touched.description && Boolean(errors.description)}
              helperText={touched.description && errors.description}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '80ch' }}>
            <TextField
              fullWidth
              type="datetime-local"
              sx={{ m: 1 }}
              id="date"
              name="date"
              label="Data da Reserva"
              value={values.date}
              InputProps={{
                inputProps: {
                  min: moment().format('YYYY-MM-DD hh:mm'),
                }
              }}
              onChange={handleChange}
              error={touched.date && Boolean(errors.date)}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '80ch' }}>
            <TextField
              fullWidth
              type="number"
              sx={{ m: 1 }}
              id="seatQuantity"
              name="seatQuantity"
              label="Nº de pessoas"
              value={values.seatQuantity}
              InputProps={{
                inputProps: {
                  min: 1
                }
              }}
              onChange={handleChange}
              error={touched.date && Boolean(errors.date)}
            />
          </FormControl>
          <Button color="primary" variant="contained" fullWidth type="submit" disabled={loadingSignUp} sx={{ m: 1 }}>
            {loadingSignUp ? <CircularProgress size={14} /> : ' Solicitar Reserva'}
          </Button>
        </Box></form>
    </>
  )
}

