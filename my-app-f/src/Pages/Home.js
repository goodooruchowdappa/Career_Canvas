import { Link } from "react-router-dom";
import "./home.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import NavBar from "../NavBar";

const MyCard = ({ content, linkToPath }) => {
  return (
    <div className="container">
      <div className="cards">
        <div className="card">
          <div className="cardContent">
            <h1 className="heading">{content}</h1>
            <Link className="link-css" to={linkToPath}>
              <FaAngleDoubleRight size={50} />
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
      <NavBar />
      <div className="card-container">
        <MyCard content="Create New One" linkToPath="/create" />
        <MyCard content="Choose From File" linkToPath="/importfile" />
        <MyCard content="Portfolio Generator" linkToPath="/portfolio" />
      </div>
    </>
  );
}

export default Home;
