import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

const App = () => {
  const searchRef = useRef(null);
  const btnRef = useRef(null);
  const inputRef = useRef(null);

  const handleClick = () => {
    searchRef.current.classList.toggle("active");
    inputRef.current.focus();
  };

  return (
    <div className="search" ref={searchRef}>
      <input
        type="text"
        className="input"
        placeholder="Search..."
        ref={inputRef}
        onBlur={() => searchRef.current.classList.remove("active")}
      />
      <button className="btn" ref={btnRef} onClick={handleClick}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default App;
