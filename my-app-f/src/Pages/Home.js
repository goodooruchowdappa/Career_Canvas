import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>This is Home Page</h1>
      <Link to="/create">Create New One</Link>
      <br />
      <Link to="/importfile">Import File</Link>
      <br />
      
    </>
  );
}

export default Home;
