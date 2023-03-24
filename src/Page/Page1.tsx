import { useNavigate } from 'react-router-dom';

interface Props {
  onClick(): void;
}

function Button({ onClick }: Props) {
  return (
    <button onClick={onClick}>알아보기</button>
  );
}

function Page1() {
  const navigation  = useNavigate();

  function handleClick() {
    navigation('/page2'); // '/howistheweather' 경로로 이동
  }

  return (
    <div className="Page1">
      <h1>경주 맛집 리스트를 찾아보자!</h1>
      <Button onClick={handleClick} />
    </div>
  );
}

export default Page1;
