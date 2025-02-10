'use client'

import React from 'react'
import { Button } from '../ui/button'
import { logOut } from '@/lib/actions/auth.actions'

type Props = {
  closePopover: () => void;
}

const LogOutButton = (props: Props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const handleClick = async () => {
    setIsLoading(true);
    await logOut();
    props.closePopover();
    setIsLoading(false);
  };
  return (
    <Button variant="destructive" onClick={handleClick} className="w-full text-left text-brand-light hover:bg-brand-dark">Log Out</Button>
  )
}

export default LogOutButton