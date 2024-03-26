'use client'

import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BsGraphUp } from 'react-icons/bs';
import { FiMenu, FiUser } from 'react-icons/fi';

type TDropownContent = {
  label: string;
  link: string;
  desc: string;
  icon: JSX.Element;
}[]

const SIDEBAR_MENU_LIST: TDropownContent = [
  {
    label: "Add Purse",
    link: '/dashboard/add-new',
    desc: "Description for Option 1",
    icon: <FiUser />,
  },
  {
    
    label: "Purse Stats",
    link: '/dashboard/purse-stats',
    desc: "Description for Option 1",
    icon: <FiUser />,
  },
  {
    label: "Order Stats",
    link: '/dashboard/order-stats',
    desc: "Description for Option 1",
    icon: <FiUser />,
  },
  {
    label: "User Statistics",
    link: '/dashboard/user-stats',
    desc: "Description for Option 1",
    icon: <BsGraphUp />
  }
]

type Props = {}

const DashboardSidebar = (props: Props) => {
  const [isSidebarShown, setIsSideBarShown] = useState(false)
  // const imgurl = session?.user?.image
  // const name = session?.user?.name
  // const role = session?.user?.role as string
  // const avatarname = getFirstTwoUpperCase(name)


  return (
    <div className={`${isSidebarShown ? 'w-[100vw] h-screen md:w-fit  ' : 'w-max  md:w-fit'} z-50 flex fixed`}>
      <div className={`transform ${isSidebarShown ? 'w-[50vw] md:w-[30vw] lg:w-[25vw] xl:w-[20vw] h-screen border border-black' : 'w-[0vw] md:w-[30vw] lg:w-[25vw] xl:w-[20vw] md:h-screen '} pt-3 bg-primary dark:bg-dark-primary md:border-r md:dark:border-r-white md:border-r-gray-800`}>
        <div className={`transform ${isSidebarShown ? 'block' : 'hidden md:block'} pl-3 `}>
          <div className='pl-0 md:pl-4 flex flex-col space-y-2 rounded-md mt-1 '>
            {
              SIDEBAR_MENU_LIST.map((dropdowncontent, index) => {
                const Icon = dropdowncontent.icon; // Extract the icon from the data
                return (
                  <div key={index} className='hover:bg-gray-400 hover:dark:bg-gray-800 cursor-pointer'>
                    <Link
                      onClick={() => setIsSideBarShown(false)}
                      className='block w-full'
                      href={`${dropdowncontent.link}`}
                    >
                      <div className="flex gap-4 w-max items-center">
                        <span>{dropdowncontent.icon}</span>
                        <span>{dropdowncontent.label}</span>
                      </div>
                    </Link>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
      <div className='h-fit w-fit bg-primary dark:bg-dark-primary'>
        <button className='p-2 h-fit w-fit text-2xl block md:hidden border dark:text-white border-black dark:border-white rounded-md' onClick={() => {
          setIsSideBarShown(!isSidebarShown)
        }
        }>
          {isSidebarShown ? <AiOutlineArrowLeft /> : <FiMenu />}
        </button>
      </div>
    </div>
    )
}

export default DashboardSidebar