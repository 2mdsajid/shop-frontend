'use client'

import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"
import { addToCart } from "@/lib/actions/cart.actions"
import { addToFavourite } from "@/lib/actions/product.actions"
import { checkUserLoggedIn, getCheckoutToken } from "@/lib/actions/checkout.actions"
import { Heart, ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ToastAction } from "@/components/ui/toast"
import Link from "next/link"

type Props = {
  productId: string
}

const ActionButtons = (props: Props) => {

  const router = useRouter()


  const { productId } = props
  const [isLoading, setIsLoading] = useState(false)


  const proceedToCheckout = async () => {
    const items = [{
      productId,
      quantity: 1
    }]

    const { data: isLoggedIn, message: isLoggedInMessage } = await checkUserLoggedIn()
    if (!isLoggedIn) {
      return toast({
        variant: "destructive",
        title: "warning",
        description: isLoggedInMessage,
        action: <ToastAction altText="Login"><Link href="/login">Login</Link></ToastAction>,
      })  
    }

    const { data: checkoutToken, message: checkoutTokenMessage } = await getCheckoutToken(items)
    if (!checkoutToken) {
      return toast({
        variant: "destructive",
        title: "warning",
        description: checkoutTokenMessage,
      })
    }
    router.push(`/checkout?t=${checkoutToken}`)
  }



  const handleAddToCart = async (e: any) => {
    e.preventDefault()
    const { success, message } = await addToCart(props.productId, 1)
    if (success) {
      return toast({
        variant: "success",
        title: "success",
        description: message,
      })
    } else {
      return toast({
        variant: "destructive",
        title: "Error",
        description: message,
      })
    }
  }

  const handleAddToFavourite = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const { data, message } = await addToFavourite(props.productId)
      if (!data) {
        return toast({
          variant: "destructive",
          title: "warning",
          description: message,
        })
      }
      return toast({
        variant: "success",
        title: "success",
        description: message,
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-4">

      {/* buy now */}
      <Button onClick={proceedToCheckout} className="w-full bg-white text-black hover:bg-gray-100  border">
        <ShoppingCart className="mr-2 h-4 w-4" />
        BUY NOW
      </Button>



      {/* cart button */}
      <Button onClick={handleAddToCart} className="w-full bg-white text-black hover:bg-gray-100 border">
        <ShoppingCart className="mr-2 h-4 w-4" />
        ADD TO CART
      </Button>


      {/* favorite button */}
      <Button
        onClick={handleAddToFavourite}
        variant="secondary"
        className="w-full bg-[#0F4C64] text-white hover:bg-[#0F4C64]/90"
        disabled={isLoading}
      >
        <Heart className="mr-2 h-4 w-4" />
        {isLoading ? 'ADDING...' : 'ADD TO WISHLIST'}
      </Button>
    </div>
  )
}

export default ActionButtons