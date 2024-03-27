import { Link } from "react-router-dom";
import "../App.css";
import { FaAngleDoubleRight } from "react-icons/fa";


const MyCard = ({ content, linkToPath }) => {
  return (
    <div className="container">
      <div className="cards">
        <div className="card">
          <div className="cardContent">
            <h1>{content}</h1>
            <Link className="link-css" to={linkToPath}>
              <FaAngleDoubleRight size={30} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

function Home() {
  return (
    <>
      <h1>This is Home Page</h1>
      <div className="card-container">
        <MyCard content="Create New One" linkToPath="/create" />
        <MyCard content="Choose From File" linkToPath="/importfile" />
      </div>
    </>
  );
}

export default Home;
