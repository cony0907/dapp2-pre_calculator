import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const onClickAdd = () => {
    setCount(count + 1);
  };

  const onClickSubtract = () => {
    if (count <= 0) {
      alert("count의 값이 0보다 작을 수 없습니다!");
      return;
    }

    setCount(count - 1);
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      <div>{count}</div>
      <button
        className="bg-green-300 w-10 h-10 rounded-full"
        onClick={onClickAdd}
      >
        +
      </button>
      <button
        className="mt-5 bg-red-300 w-10 h-10 rounded-full"
        onClick={onClickSubtract}
      >
        -
      </button>
    </div>
  );
};

export default App;
