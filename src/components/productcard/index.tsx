
import './styles.css'
import { products } from '../../configurations/product';

const Productcard: React.FC = () => (
    <div className='container'>
        {products?.map((item: any, index: any) => (
            <div className="card">

                <div className="imgBox">
                    <img src="https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png" alt="mouse corsair" className="mouse" />
                </div>

                <div className="contentBox">
                    <h3>Mouse Corsair M65</h3>
                    <h2 className="price">61.<small>98</small> €</h2>
                    <a href="/" className="buy">Buy Now</a>
                </div>

            </div>
        ))}
    </div>

);

export default Productcard
