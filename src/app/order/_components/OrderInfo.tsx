// OrderInfo.tsx

import React from 'react';

type Props = {
    id: string;
    createdAt: Date;
    status: string;
};

const OrderInfo = (props: Props) => {
    const { id, createdAt, status } = props;
    const formattedDate = new Date(createdAt).toLocaleString();
    return (
        <div className=" flex justify-between px-2">
            {/* <h2 className="text-xl font-bold mb-2">Order Information</h2> */}
            <div className='text-sm text-gray-700'>
                {id.replace(/-/g, '')}
            </div>
            <div className='text-sm text-gray-700'>
                {formattedDate}
            </div>
            {/* <div>
                <strong>Status:</strong> {status}
            </div> */}
        </div>
    );
};

export default OrderInfo;
