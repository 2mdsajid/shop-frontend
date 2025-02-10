  "use client"

import Link from "next/link"
import { type JSX, useState } from "react"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { BsGraphUp, BsHandbag } from "react-icons/bs"
import { FiMenu, FiUser, FiShoppingCart } from "react-icons/fi"

type TDropownContent = {
  label: string
  link: string
  desc: string
  icon: JSX.Element
}[]

const SIDEBAR_MENU_LIST: TDropownContent = [
  {
    label: "Add Purse",
    link: "/dashboard/add-new",
    desc: "Add a new purse to the inventory",
    icon: <BsHandbag />,
  },
  {
    label: "Purse Stats",
    link: "/dashboard/purse-stats",
    desc: "View statistics about purses",
    icon: <BsGraphUp />,
  },
  {
    label: "Order Stats",
    link: "/dashboard/order-stats",
    desc: "View order statistics",
    icon: <FiShoppingCart />,
  },
  {
    label: "User Statistics",
    link: "/dashboard/user-stats",
    desc: "View user statistics",
    icon: <FiUser />,
  },
]

const DashboardSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="h-screen w-1/5">
      <div className="md:hidden">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-md text-brand-secondary hover:bg-brand-primary/10 focus:outline-none focus:ring"
        >
          <FiMenu className="h-6 w-6" />
        </button>
      </div>

      <aside
        className={`
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        fixed h-screen top-0 left-0 z-50 w-64 bg-black transition duration-300 ease-in-out transform md:translate-x-0 md:static md:inset-0
      `}
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <div className="flex items-center justify-between md:justify-center mb-5">
            <h2 className="text-xl font-semibold text-brand-primary">Dashboard</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 rounded-md text-brand-secondary hover:bg-brand-primary/10 focus:outline-none focus:ring md:hidden"
            >
              <AiOutlineArrowLeft className="h-6 w-6" />
            </button>
          </div>
          <nav>
            {SIDEBAR_MENU_LIST.map((item, index) => (
              <Link key={index} href={item.link}>
                <div className="flex items-center p-2 text-brand-secondary rounded-lg hover:bg-brand-primary/10">
                  <span className="text-xl mr-3">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  )
}

export default DashboardSidebar

