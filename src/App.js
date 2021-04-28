const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h1", {}, animal),
    React.createElement("h1", {}, breed),
  ]);
};

const x = 5;
const a = 5;

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "something-important" }, "Adopt Me"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cocktail",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
