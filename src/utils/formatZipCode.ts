export function handleZipCode(phone: string) {
  const current = phone;
  const isZipCode = current.length === 8;
  let formatedPhone = current;
  if(isZipCode) {
    const parte1 = current.slice(0,5);
    const parte2 = current.slice(5,8);
    formatedPhone = `${parte1}-${parte2}`        
} 
  return formatedPhone;
}