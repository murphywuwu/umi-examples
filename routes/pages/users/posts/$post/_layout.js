
export default (props) => {
  return (
    <div>
      <header>Posts Header (pages/users/posts/$post/_layout.js)</header>
      <hr />
      {
        props.children
      }
    </div>
  )
}
