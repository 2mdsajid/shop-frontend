import AddNewPurseForm from '@/components/dashboard/add-new/AddNewPurseForm'
import ErrorPage from '@/components/reusable/ErrorPage'
import { getSingleBagData } from '@/lib/actions'
import React from 'react'

type Props = {
    params: {
        id: string
    }
}

const page = async (props: Props) => {
    const { id } = props.params
    const { data, message } = await getSingleBagData(id)
    if (!data) {
        return <ErrorPage message={message} />
    }
    
    return (
        <div>
            <AddNewPurseForm
                data={data}
            />
        </div>
    )
}

export default page