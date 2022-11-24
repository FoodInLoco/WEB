export function handlePhone(phone: string) {
  const current = phone;
  const isPhone = current.length === 9;
  let formatedPhone;
  if(isPhone) {
    const parte1 = current.slice(0,5);
    const parte2 = current.slice(5,9);
    formatedPhone = `${parte1}-${parte2}`        
} else {
    const parte1 = current.slice(0,4);
    const parte2 = current.slice(4,8);
    formatedPhone = `${parte1}-${parte2}`
}

  return formatedPhone;
}