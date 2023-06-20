import ChatRealTime from "../components/ChatRealTime";
import SideBar from "../components/SideBar";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="footerNav">
        <SideBar whereIm={"menu"} />
      </div>
      <div className="chatContactContainer">
        <ChatRealTime />
      </div>
    </div>
  );
};

export default Contact;
