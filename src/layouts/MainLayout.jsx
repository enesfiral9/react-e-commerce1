import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import PropTypes from "prop-types";
import Search from "../components/Modals/Search/Search";
import { useEffect, useState } from "react";
import Dialog from "../components/Modals/Search/Dialog/Dialog";

function MainLayout({ children }) {
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [isDialogShow, setIsDialogShow] = useState(false);

  //componentin ilk yüklendiğinde çalışır
  //var olan bilgiyi getItem ile alır
  //parse ile bilgileri alır
  useEffect(() => {
    const dialogStatus = localStorage.getItem("dialog")
      ? JSON.parse(localStorage.getItem("dialog"))
      : localStorage.setItem("dialog", JSON.stringify(true));

    setTimeout(() => {
      setIsDialogShow(dialogStatus);
    }, 2000);
  }, []);
  return (
    <div className="main-layout">
      <Dialog isDialogShow={isDialogShow} setIsDialogShow={setIsDialogShow} />
      <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
      <Header setIsSearchShow={setIsSearchShow} />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node,
};
