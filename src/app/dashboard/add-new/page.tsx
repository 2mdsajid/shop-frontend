import React from 'react'
import dynamic from 'next/dynamic';
const AddNewPurseForm = dynamic(() => import('@/components/dashboard/add-new/AddNewPurseForm'), {
    ssr: false,
});


type Props = {}

const page = (props: Props) => {
    return (
        <div><AddNewPurseForm /></div>
    )
}

export default page