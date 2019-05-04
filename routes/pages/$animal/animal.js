export default ({ match }) => {
  /* 
  example: 
  * dog/animal
  * cat/animal
 */
  return (
    <div>
      <h1>{match.params.animal}</h1>
    </div>
  )
}