export default (): string => {
  const date = new Date(Date.now())
  const dateOpt = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }
  return date.toLocaleTimeString('ja-JP', dateOpt)
}
