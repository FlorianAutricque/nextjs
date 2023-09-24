import fs from "fs/promises";
import path from "path";

function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
    // regenerate the page after x seconds to reftech in case there is new data
    revalidate: 10,
  };
}

export default HomePage;

// Using React data fetch:

/*
function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/dummy-backend.json')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setProducts(data.products)
    })
  }, [])

  return (
    <ul>
    {products.map(product => (
      <li key={produc.id}>{product.title} </li>
    ))}
    </ul>
  )
} */
