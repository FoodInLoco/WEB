import { toast } from "react-toastify";

interface IToastProps {
  message: string
  status: number
  title: string
  code: string
}
class Toastfy {
  private toastBase = toast
  public success({ message, status }: IToastProps) {
    return this.toastBase.success(`${status} - ${message}`)
  }
  public error({ message, status }: IToastProps) {
    return this.toastBase.error(`${status} - ${message}`)
  }
  public warning({ message, status }: IToastProps) {
    return this.toastBase.warning(`${status} - ${message}`)
  }
}
export default new Toastfy();