import "./SideNav.scss";
import "../../assets/images/home-icon.svg";
import "../../assets/images/book-app-icon.svg";
import "../../assets/images/staff-icon.svg";
import "../../assets/images/clients-icon.svg";
import "../../assets/images/resources-icon.svg";
import "../../assets/images/settings-icon.svg";

const SideNav = () => {
  return (
    <section className="SideNav">
      <Components name="Home" image={image} />
    </section>
  );
};

export default SideNav;
