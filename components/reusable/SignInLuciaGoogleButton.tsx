import Link from "next/link"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
type Props = {
  className?: string
}

export default function SignInLuciaGoogleButton({ className }: Props) {
  return (
      <Button asChild
        type="submit"
        className={cn("flex justify-center items-center gap-2 px-6 py-2 w-full bg-black text-white font-medium border border-gray-300 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 focus:outline-none", className)}
      >
        <Link href={`/login/google`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" className="text-white">
            <path fill="currentColor" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
              s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20
              s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
          </svg>
          Continue with Google
        </Link>
      </Button>
  )
}
