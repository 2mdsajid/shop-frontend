import AddNewPurse from '@/components/dashboard/main/AddNewPurse'
import React from 'react'

type Props = {
  searchParams: {
    t: string
  }
}

const page = (props: Props) => {
  const TypeOfDashRender = props.searchParams.t
  return (
    <div className='w-full'>
      {TypeOfDashRender === 'add-new' && <AddNewPurse />}
    </div>
  )
}

export default page