import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { redirect } from "next/navigation"
import { getUserSession } from "@/lib/actions/auth.actions"
import SignInLuciaGoogleButton from "@/components/reusable/SignInLuciaGoogleButton"
import { Facebook, Twitter } from "lucide-react"

type Props = {}

const Page = async (props: Props) => {
  const { data: user, message: authMessage } = await getUserSession()
  if (user && user.googleId && user.id) {
    redirect("/dashboard")
  }

  return (
    <div className="min-h-screen bg-[#FDF8F7] flex items-center justify-center p-8 py-12">
      <Card className="w-full max-w-md mx-auto overflow-hidden shadow-lg">
        <CardContent className="p-8">
          <h1 className="text-4xl font-serif text-center mb-8 text-[#E88B84]">Customer Login</h1>

          <div className="space-y-4">
            {/* <button className="w-full bg-[#4267B2] text-white py-2.5 px-4 rounded flex items-center justify-center gap-2 hover:bg-[#365899] transition-colors">
              <Facebook className="w-5 h-5" />
              Sign in with Facebook
            </button> */}

            <SignInLuciaGoogleButton className="w-full bg-[#DB4437] text-white py-2.5 px-4 rounded flex items-center justify-center gap-2 hover:bg-[#C53929] transition-colors cursor-pointer" />

            {/* <button className="w-full bg-[#1DA1F2] text-white py-2.5 px-4 rounded flex items-center justify-center gap-2 hover:bg-[#1A91DA] transition-colors">
              <Twitter className="w-5 h-5" />
              Sign in with Twitter
            </button> */}

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#FDF8F7] text-gray-500">Or Continue with your email address</span>
              </div>
            </div>

            <div className="space-y-4">
              <Input type="email" placeholder="E-mail" className="w-full px-3 py-2 border border-gray-300 rounded" />
              <div className="relative">
                <Input
                  type="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
                <Link
                  href="/forgot-password"
                  className="absolute right-0 top-[-24px] text-sm text-gray-500 hover:text-gray-700"
                >
                  Forgot your password?
                </Link>
              </div>

              <Button className="w-full bg-[#1B4B5A] text-white py-3 rounded hover:bg-[#15404D] transition-colors">
                LOGIN
              </Button>
            </div>

            <div className="text-center mt-6">
              <span className="text-gray-600">Don't have an account? </span>
              <Link href="/signup" className="text-[#1B4B5A] hover:underline">
                Sign up
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Page

