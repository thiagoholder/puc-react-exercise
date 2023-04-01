import "./styles.css";
import Header from "./components/Layout/Header";
import MainContent from "./components/Layout/MainContent";
import Footer from "./components/Layout/Footer";

export default function App() {
  const posts = [
    {
      title: "A vida de um Engenheiro",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit erat mattis nibh fermentum lacinia. Proin non nisl sapien. Proin neque dolor, ornare nec mattis eget, vestibulum ut tellus. Nam viverra ut lacus eget tincidunt. Sed rhoncus eleifend nibh. Maecenas metus lacus, tincidunt nec ligula eu, faucibus rutrum ante. Aenean neque urna, eleifend ut blandit nec, mollis sit amet sem. Cras nisi erat, interdum faucibus ex eu, volutpat convallis felis. Morbi placerat in sem et pulvinar. Suspendisse porta, lacus quis egestas suscipit, velit enim mattis enim, vel malesuada tortor urna sed tortor."
    },
    {
      title: "Mudar de país é uma",
      description:
        "Maecenas vel elit vel nisi dapibus ullamcorper id eu ligula. Ut quis lacinia justo. Suspendisse fermentum venenatis cursus. Sed sed faucibus quam. Suspendisse sagittis lobortis libero ac lacinia. Morbi maximus, elit quis blandit iaculis, arcu sapien congue urna, in interdum felis mauris vel dui. "
    },
    {
      title: "As diversas maneiras de uma arquietura robusta",
      description:
        "Sed quis urna a urna condimentum fringilla ac ut mauris. Aliquam in sem felis. Aliquam blandit elit ac tortor cursus ullamcorper. Sed convallis scelerisque ipsum, eu consequat tellus vehicula sit amet."
    }
  ];
  return (
    <div className="App">
      <Header />
      <MainContent posts={posts} />
      <Footer />
    </div>
  );
}
