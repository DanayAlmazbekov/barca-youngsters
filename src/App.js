import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Section from "./Components/Section/Section";

const App = () => {
  let users = [
    {
      name: "Ansu",
      surname: "Fati",
      age: 19,
      number: 10,
    },
    {
      name: "Pedro",
      surname: "Gonzalez",
      age: 19,
      number: 16,
    },
    {
      name: "Pablo",
      surname: "Gavi",
      age: 17,
      number: 30,
    },
    {
      name: "Ferran",
      surname: "Torres",
      age: 22,
      number: 19,
    },
    {
      name: "Ronald",
      surname: "Araujo",
      age: 23,
      number: 4,
    },
  ];
  return (
    <div className="container">
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  );
};

export default App;
