
import './styles.css'
import { products } from '../../configurations/product';
import { useState } from 'react';
import { Pagination } from 'antd';
import type { PaginationProps } from 'antd';
import Card from './card';
import { motion } from "framer-motion"

const Productcard: React.FC = () => {

    // State Managment Portion
    const [lowerLimit, setLowerLimit] = useState<number>(0)
    const [upperLimit, setUpperLimit] = useState<number>(12)
    const [loading, setLoading] = useState<boolean>(true)
    const count = 12

    //  End of State Management



    const onChange: PaginationProps['onChange'] = pageNumber => {
        let nextCounter = pageNumber - 1
        setLowerLimit(nextCounter * count)
        setUpperLimit(pageNumber * count)

    };


    return <><div className='container'>
        {products?.slice(lowerLimit, upperLimit)?.map((item: any, index: any) => {
            return <Card item={item} loading={loading} />
        })
        }

    </div>
        <Pagination defaultCurrent={1} total={products?.length} onChange={onChange} />
    </>

};

export default Productcard
