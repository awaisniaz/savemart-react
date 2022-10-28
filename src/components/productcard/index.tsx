import { Card, } from 'antd';
import './styles.css'
import { products } from '../../configurations/product';



const { Meta } = Card;
const Productcard: React.FC = () => (
    <div className='container'>
        {products?.map((item: any, index: any) => (
            <Card
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={item?.image} />}
            >
                <Meta title={item?.Name} description={item?.Name} />
            </Card>
        ))}
    </div>

);

export default Productcard
