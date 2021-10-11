export function calcAge(birthDay) {
  let birth = new Date(birthDay)
  const birthTime = birth.getTime()
  let now = new Date()
  let beforeBirth =
    (() => {
      birth.setDate(now.getDate())
      birth.setMonth(now.getMonth())
      return birth.getTime()
    })() > birthTime
      ? 0
      : 1
  return now.getFullYear() - birth.getFullYear() - beforeBirth
}
