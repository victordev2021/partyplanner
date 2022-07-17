import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
// import { CardService } from "./components/CardService";
import Services from "../../data/services.json";

export const Home = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <h1>Aplication</h1>
      {/* <p>{user.email}</p> */}
      {Services.services.map((service) => {
        return (
          <ul>
            <li>
              <div key={service.id}>
                <h1>{service.name}</h1>
                <p>
                  {service.category.map((cat) => {
                    return (
                      <ul>
                        <li>{cat.name}</li>
                      </ul>
                    );
                  })}
                </p>
              </div>
            </li>
          </ul>
        );
      })}
      <Link to="/about">About</Link>
    </div>
  );
};
