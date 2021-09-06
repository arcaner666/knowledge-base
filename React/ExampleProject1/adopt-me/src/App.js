import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
//     ...[1, 2, 3, 4].map((i) => React.createElement("h2", {}, i)),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Sudo",
//       animal: "Dog",
//       breed: "Wheaten Terrier",
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

// ReactDOM.render() istenen elemanı tarayıcıda gösterir.
// ReactDOM.render() ilk parametre olarak göstereceği componenti alır.
// ReactDOM.render() ikinci parametre olarak ise göstereceği componentin gerçek HTML
// içerisinde nereye bağlanacağını tanımlar.
ReactDOM.render(<App />, document.getElementById("root"));