function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="idCards">
      <img src={picture} />
      <div className="textCards">
        <p><strong>First Name:</strong> {firstName}</p>
        <p>
          <strong>lastName</strong>: {lastName}
        </p>
        <p>
          <strong>Gender</strong>: {gender}
        </p>
        <p>
          <strong>Height</strong>: {height}
        </p>
        <p>
          <strong>Birth</strong>: {birth}
        </p>
      </div>
    </div>
  );
}
export default IdCard;
