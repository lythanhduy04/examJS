import Footer from "../components/Footer";
import Header from "../components/Header";

const HomePage = () => {
  return /*html*/ `
    ${Header()}
        <div class="container">
           <h1>Sản phẩm bán chạy</h1>
             <div class="list-product"> </div>
        </div>
    ${Footer()}
    `;
};
export default HomePage;
