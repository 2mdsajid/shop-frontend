import React from 'react'
import DashboardSidebar from './_components/DashboardSidebar'
import { getUserSession } from '@/lib/actions/auth.actions'
import { redirect } from 'next/navigation'
import DashboardButtons from './_components/DashboardButtons'
type Props = {
  children: React.ReactNode
}

const DashboardLayout = async ({ children }: Props) => {
  const { data: user, message } = await getUserSession()
  if(!user || user.role !== 'ADMIN') {
    redirect('/')
  }

  return (
    <div className="">
      <DashboardButtons />
      <div className="w-full px-4 pb-10">
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
