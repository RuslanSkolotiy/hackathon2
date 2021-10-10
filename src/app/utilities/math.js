export function calcAge(year) {
  const age = new Date().getFullYear() - year
  return age
}
