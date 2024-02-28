// OrderInfo.tsx

import React from 'react';

type Props = {
    id: string;
    createdAt: Date;
    status: string;
};

const OrderInfo: React.FC<Props> = (props: Props) => {
    const { id, createdAt, status } = props;
    const formattedDate = new Date(createdAt).toLocaleString();
    return (
        <div className="border p-4 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-2">Order Information</h2>
            <div>
                <strong>ID:</strong> {id}
            </div>
            <div>
                <strong>Created At:</strong> {formattedDate}
            </div>
            <div>
                <strong>Status:</strong> {status}
            </div>
        </div>
    );
};

export default OrderInfo;
