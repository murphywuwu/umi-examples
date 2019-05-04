
export default ({ match }) => {
  return (
    <div>
      <h1>/users/{match.params.id}</h1>
      { /* 除了0，其它都不会渲染 */ }
      <h2>{undefined}{null}{0}{false}</h2>
    </div>
  )
}
