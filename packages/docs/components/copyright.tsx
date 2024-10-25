export default function Copyright() {
  const year = new Date().getFullYear()

  return (
    <span className="text-sm">
      Copyright &copy; 2021-
      {year}
      {' '}
      DreamNum Co,Ltd. All Rights Reserved.
    </span>
  )
}
