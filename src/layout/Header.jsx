import DarkModeButton from "../components/DarkModeButton";

function Header() {
  return (
    <header className="quizHeader">
      <div className="logo">
        <h1>Quiz App </h1>
      </div>
      <DarkModeButton />
    </header>
  );
}

export default Header;
