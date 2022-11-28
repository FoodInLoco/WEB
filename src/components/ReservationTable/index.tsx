import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Chip, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal } from '@mui/material';
import moment from 'moment';
import { Content } from '../LoginModal/styles';
import toasts from '../../utils/toasts';
import { cancelReservation } from '../../services/restaurants';
function createData(
  restaurantName: string = 'Teste',
  date: number,
  description: string,
  confirmation: number,
  seatQuantity: number,
  id: any,
) {
  return {
    restaurantName,
    date,
    description,
    confirmation,
    seatQuantity,
    id
  };
}


type IReservationParams = {
  reservationsListData: any
}
export function ReservationTable({ reservationsListData }: IReservationParams) {
  const [rows, setRows] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const handleSetRows = () => {
    const newArr = reservationsListData.map((row: any) => {
      return createData(row?.restaurant?.companyName, row.date, row.description, row.confirmation, row.seatQuantity, row.id)
    })
    setRows(newArr)
  }
  const handleConfirmation = (code: number) => {
    if (code === 0) {
      return <Chip label="Pendente" color="primary" />
    } else if (code === 1) {
      return <Chip label="Aprovado" color="success" />
    } else {
      return <Chip label="Cancelado" color="warning" />

    }
  }

  const handleConfirm = async () => {
    setLoading(true)
    try {
      const restaurants = await cancelReservation(id);
      toasts.success({ message: "Reserva removida com sucesso", status: 200 })
      handleModal()
      window.location.reload()
    } catch (error: any) {
      toasts.error(error)
    } finally {
      setLoading(false)
    }

  }
  const handleOpenModal = (value: any) => {
    setId(value)
    handleModal()
  }
  const handleModal = () => setOpen(prev => !prev)
  React.useEffect(() => handleSetRows(), [reservationsListData])
  return (
    <TableContainer component={Paper}>
      <Dialog
        open={open}
        keepMounted
        onClose={handleModal}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Cancelar Reserva"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Tem certeza que deseja cancelar essa reserva?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm}>
            {loading ? <CircularProgress size={14} /> : 'Confirmar'}
          </Button>
          <Button onClick={handleModal}>Pensando bem</Button>
        </DialogActions>
      </Dialog>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Restaurante</TableCell>
            <TableCell align="right">Data</TableCell>
            <TableCell align="right">Nº Pessoas</TableCell>
            <TableCell align="center">Situação</TableCell>
            <TableCell align="right">Obs</TableCell>
            <TableCell align="right"> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length ? rows.map((row: any, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row?.restaurantName}
              </TableCell>
              <TableCell align="right">{moment(row.date).format('DD/MM/YYYY')}</TableCell>
              <TableCell align="right">{row.seatQuantity}</TableCell>
              <TableCell align="center">{handleConfirmation(row.confirmation)}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="center">
                {[0, 1].includes(row.confirmation) && <Button variant="outlined" onClick={() => handleOpenModal(row.id)} size="small" color="error">
                  Cancelar Reserva
                </Button>}
              </TableCell>
            </TableRow>
          )) : ''}
        </TableBody>
      </Table>
    </TableContainer >
  );
}