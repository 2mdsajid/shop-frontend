"use client";

import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import LogOutButton from "@/components/reusable/LogOutButton";
import { TBaseUser } from "@/lib/schema/user.schema";

type Props = {
  user: TBaseUser | null;
};

const AccountMenu = ({ user }: Props) => {
  const [open, setOpen] = useState(false);

  const closePopover = () => setOpen(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5 text-brand-secondary hover:text-brand-primary transition-colors" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-2 bg-brand-secondary text-brand-secondary rounded-lg shadow-lg">
        {user ? (
          <>
            <Link href="/account" onClick={closePopover}>
              <Button className="w-full flex items-center justify-start gap-2 text-left bg-brand-primary text-brand-light hover:bg-brand-dark">
                <User className="h-4 w-4" /> My Account
              </Button>
            </Link>
            <div className="mt-1 h-px bg-border" /> {/* Separator */}
            <LogOutButton closePopover={closePopover} /> {/* Ensure LogOutButton accepts an onClick prop */}
          </>
        ) : (
          <Link href="/login" onClick={closePopover}>
            <Button className="w-full flex items-center justify-start gap-2 text-left bg-brand-primary text-brand-light hover:bg-brand-dark">
              <User className="h-4 w-4" /> Log In
            </Button>
          </Link>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default AccountMenu;
