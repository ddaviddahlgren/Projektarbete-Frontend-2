import { useState } from "react";
import BackButton from "../logoutButton/LogoutBtn";
import WelcomeHome from "../welcomeHome/WelcomeHome";
import Header from "../pageComponents/Header";
import Main from "../pageComponents/Main";

const HomeContext = () => {
  //check if just logged in to show quote
  const [showWelcome, setShowWelcome] = useState(() => {
    return sessionStorage.getItem("justLoggedIn") === "true";
  });

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    sessionStorage.removeItem("justLoggedIn"); // Clear the flag
    sessionStorage.removeItem("quoteFetched"); // Clear for next login
  };

  return (
    <div>
      {showWelcome && <WelcomeHome onComplete={handleWelcomeComplete} />}
      <Header />
      <Main />
      <footer>
        <BackButton />
      </footer>
    </div>
  );
};

export default HomeContext;
