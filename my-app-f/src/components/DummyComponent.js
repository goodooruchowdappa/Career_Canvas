import Dummydata from "./Dummydata";

function DummyComponent() {
  return (
    <>
      {Dummydata.map((person, i) => {
        return (
          <>
            <p>ID : {`${i}`}</p>
            <p>Name : {`${person.firstName} ${person.lastName}`}</p>
            <p>Email : {`${person.email}`}</p>
            <p>Password : {`${person.password}`}</p>
            <br />
          </>
        );
      })}
    </>
  );
}

export default DummyComponent;
