import Link from "next/link"
import { PlusCircle, BarChart2, ShoppingBag } from "lucide-react"

const DashboardButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-1 p-4">
      <Link
        href="/dashboard/add-category"
        className="flex items-center justify-center gap-2 bg-brand-secondary hover:bg-brand-dark text-white font-semibold py-2 px-5 rounded-md shadow transition-all duration-200"
      >
        <PlusCircle size={18} />
        <span>Add Category</span>
      </Link>
      <Link
        href="/dashboard/add-new"
        className="flex items-center justify-center gap-2 bg-brand-secondary hover:bg-brand-dark text-white font-semibold py-2 px-5 rounded-md shadow transition-all duration-200"
      >
        <PlusCircle size={18} />
        <span>Add Purse</span>
      </Link>
      <Link
        href="/dashboard"
        className="flex items-center justify-center gap-2 bg-brand-secondary hover:bg-brand-dark text-white font-semibold py-2 px-5 rounded-md shadow transition-all duration-200"
      >
        <BarChart2 size={18} />
        <span>Purse Stats</span>
      </Link>
      <Link
        href="/dashboard/order-stats"
        className="flex items-center justify-center gap-2 bg-brand-secondary hover:bg-brand-dark text-white font-semibold py-2 px-5 rounded-md shadow transition-all duration-200"
      >
        <ShoppingBag size={18} />
        <span>Order Stats</span>
      </Link>
    </div>
  )
}

export default DashboardButtons
