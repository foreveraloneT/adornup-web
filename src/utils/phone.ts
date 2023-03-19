export function formatPhoneNumber (tel: string): string {
  return `${tel.slice(0, 4)}-${tel.slice(4, 8)}-${tel.slice(8)}`;
}
