import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <section>
      <h1>The Shop Page</h1>
      <ul>
        <li>
          <Link to='/items/item1'>A Book</Link>
        </li>
        <li>
          <Link to='/items/item2'>A Carpet</Link>
        </li>
        <li>
          <Link to='/items/item3'>An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Shop;
