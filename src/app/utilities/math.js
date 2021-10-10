export function calcAge(birthDay) {
  let birth = new Date(birthDay)
  let now = new Date()
  let beforeBirth =
    (() => {
      birth.setDate(now.getDate())
      birth.setMonth(now.getMonth())
      return birth.getTime()
    })() < birth.getTime()
      ? 0
      : 1
  return now.getFullYear() - birth.getFullYear() - beforeBirth
}
