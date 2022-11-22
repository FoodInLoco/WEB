import Modal from '@mui/material/Modal';
import { Container, Content } from "./styles"
import { useAuth } from '../../contexts/auth';
import * as Yup from "yup";
import { useState } from 'react';
import { SignInForm } from '../SignInForm';
import SignUpForm from '../SignUpForm';

type ILoginModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
}

type EnumForm = 'signin' | 'signup'
export function LoginModal({ open = false,
  setOpen }: ILoginModalProps) {

  const [currentModal, setCurrentModal] = useState<EnumForm>('signin')
  const handleClose = () => {
    setOpen(false);
    setCurrentModal('signin')
  };
  const handelChangeForm = (form: EnumForm) => setCurrentModal(form)
  return (
    <Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Content>
          {currentModal === 'signin' ? <SignInForm goTo={handelChangeForm} /> : <SignUpForm goTo={handelChangeForm} />}
        </Content>
      </Modal>
    </Container>
  );
}
