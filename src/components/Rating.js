function Rating({ children }) {
  const num = Math.round(children);

  const starArr = ['☆', '☆', '☆', '☆', '☆'];

  for (let i = 0; i < num; i++) {
    starArr[i] = '★';
  }

  return (
    <div className="stars">
      <p>{starArr.join('')}</p>
    </div>
  );
}

export default Rating;
