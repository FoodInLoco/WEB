import { useState } from "react";
import { LoginModal } from "../LoginModal";
import { Container } from "./styles";

type ILoginButtonProps = {
  width?: string | number
  height?: string | number
}
export function LoginButton({ width = '50%', height = '50%' }: ILoginButtonProps) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Container onClick={handleOpen}>
        <img width={width} height={height} src="/login.svg" alt="Google login" />
      </Container>
      <LoginModal open={open} setOpen={setOpen} />
    </>
  )
}