"use client"

import { Minus, Plus, ShoppingBag, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { addToCart, getCartItems, removeFromCart } from "@/lib/actions/cart.actions"
import { TItemInCart } from "@/lib/schema/cart.schema"
import { checkUserLoggedIn, getCheckoutToken } from "@/lib/actions/checkout.actions"
import { toast } from "@/hooks/use-toast"
import { useRouter, usePathname } from "next/navigation"
import { ToastAction } from "@/components/ui/toast"

export function CartSidebar() {
  const router = useRouter()
  const pathname = usePathname()

  
  const [isOpen, setIsOpen] = useState(false)
  const [items, setItems] = useState<TItemInCart[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const updateQuantity = (itemId: string, newQuantity: number) => {
    addToCart(itemId, newQuantity)
    setItems(items.map((item) => (item.details.id === itemId ? { ...item, quantity: Math.max(1, newQuantity) } : item)))
  }

  const removeItem = (itemId: string) => {
    removeFromCart(itemId)
    setItems(items.filter((item) => item.details.id !== itemId))
  }

  const proceedToCheckout = async () => {

    const { data: isLoggedIn, message: isLoggedInMessage } = await checkUserLoggedIn()
    if (!isLoggedIn) {
      return toast({
        variant: "destructive",
        title: "warning",
        description: isLoggedInMessage,
        action: <ToastAction altText="Login"><Link href="/login">Login</Link></ToastAction>,
      })  
    }


    setIsLoading(true)
    const checkoutTokenItems = items.map((item: TItemInCart) => ({
      productId: item.details.id,
      quantity: item.quantity,
    }))
    const { data: checkoutToken, message } = await getCheckoutToken(checkoutTokenItems)
    if (!checkoutToken) {
      return toast({
        variant: "destructive",
        title: "warning",
        description: message,
      })
    }
    setIsLoading(false)
    setIsOpen(false)
    router.push(`/checkout?t=${checkoutToken}`)
  }

  const subtotal = items.reduce((sum, item) => sum + item.details.price * item.quantity, 0)

  useEffect(() => {
    const fetchItems = async () => {
      if (isOpen) {
        setIsLoading(true)
        try {
          const cartItems = await getCartItems()
          setItems(cartItems)
        } catch (error) {
          console.error("Failed to fetch cart items:", error)
        }
        setIsLoading(false)
      }
    }
    fetchItems()
  }, [isOpen])


  useEffect(() => {
    setIsOpen(false)
  }, [pathname]) // Runs whenever the URL path changes````


  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingBag className="h-5 w-5" />
          {items.length > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-purple-600 text-xs text-white flex items-center justify-center">
              {items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col h-full">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle className="text-2xl">Cart</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto py-6">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600" />
            </div>
          ) : items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-500 mb-5">Your cart is empty</p>
              <Button asChild className="bg-brand-secondary hover:bg-brand-dark text-brand-light transition-colors ">
                <Link href="/">START SHOPPING</Link>
              </Button>

            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <Card key={item.details.id} className="p-4 flex gap-4">
                  <div className="relative h-24 w-24 rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={item.details.imageUrl || "/placeholder.svg"}
                      alt={item.details.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{item.details.name}</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-auto p-0 text-gray-500 hover:text-gray-900"
                        onClick={() => removeItem(item.details.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">₹ {item.details.price.toLocaleString("en-IN")}</p>
                    <div className="flex items-center gap-2 mt-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.details.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.details.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
        {items.length > 0 && (
          <div className="border-t pt-4">
            <div className="flex justify-between py-2">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium">₹ {subtotal.toLocaleString("en-IN")}</span>
            </div>
            <Button className="w-full mt-4" size="lg" onClick={proceedToCheckout}>
              {isLoading ? 'CHECKING OUT...' : 'Checkout'}
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

