function Random({ min, max }) {
  const result = Math.round(Math.random() * (max - min) + min);
  return (
    <div className="randomNumber">
      <p>
        Radom value between {min} and {max} ➡ {result}
      </p>
    </div>
  );
}

export default Random;
