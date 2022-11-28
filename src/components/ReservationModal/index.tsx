import Modal from '@mui/material/Modal';
import { Container, Content } from "./styles"
import { useAuth } from '../../contexts/auth';
import * as Yup from "yup";
import { useState } from 'react';
import { SignInForm } from '../SignInForm';
import SignUpForm from '../SignUpForm';
import { ReservationForm } from '../ReservationForm';

type IModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  code?: string
}

export function ReservationModal({ open, setOpen, code }: IModalProps) {

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Content>
          <ReservationForm idRestaurant={code} closeModal={handleClose} />
        </Content>
      </Modal>
    </Container>
  );
}
