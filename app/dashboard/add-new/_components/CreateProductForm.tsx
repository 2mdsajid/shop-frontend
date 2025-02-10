'use client'

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createProductSchema } from '@/lib/schema/product.schema';
import type { TCategory, TProductCreate } from '@/lib/schema/product.schema';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createProduct } from '@/lib/actions/product.actions';
import { toast } from '@/hooks/use-toast';
import ImageUploaderComponent from './ImageUploaderComponent';
import { Textarea } from '@/components/ui/textarea';

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"; // Adjust the import path based on your project structure
import Image from 'next/image';


const CreateProductForm: React.FC<{ categories: TCategory[] }> = ({ categories }) => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<TProductCreate>({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      imageUrl: "",
      images: [],
    },
  });

  const onSubmit = async (data: TProductCreate) => {
    setErrorMessage(null);
    setSuccessMessage(null);
    try {
      const { data: product, message } = await createProduct(data);
      if (!product) {
        return toast({
          title: "Error",
          description: message,
          variant: "destructive",
        });
      }

      setSuccessMessage('Product created successfully!');
      form.reset();
      return toast({
        title: "Success",
        description: message,
        variant: "success",
      });
    } catch (error: any) {
      return toast({
        title: "Error",
        description: error?.message || 'Failed to create product. Please try again.',
        variant: "destructive",
      });
    }
  };


  const handleAddImage = () => {
    form.setValue("images", [...form.getValues("images"), ""]);
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = form.getValues("images").filter((_, i) => i !== index);
    form.setValue("images", updatedImages);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column */}
          <div className="flex-1 space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Product Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Product Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="specifications"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Specifications</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Product Specifications" {...field} value={field.value ?? ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="careInstructions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Care Instructions</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Care Instructions" {...field} value={field.value ?? ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Product Price" {...field} onChange={(e) => field.onChange(Number(e.target.value) || 0)} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {categories.length > 0 && <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.name} value={category.name}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />}
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-4">
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input placeholder="Main Image URL" {...field} value={form.getValues("images")} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isFreeDelivery"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel>Free Delivery</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="availableStock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Available Stock</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Stock Quantity"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand</FormLabel>
                  <FormControl>
                    <Input placeholder="Product Brand" {...field} value={field.value ?? ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Images</FormLabel>
                  {field.value.map((_, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-2">
                      <img src={field.value[index]} alt="Product Image" width={100} height={100} />
                      <Button type="button" onClick={() => handleRemoveImage(index)} variant="destructive">
                        Remove
                      </Button>
                    </div>
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <div>
              <FormLabel>Images</FormLabel>
              {form.getValues("images").length > 0 && (
                <div>
                  {form.getValues("images").map((imageUrl: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2 mb-2">
                      <img src={imageUrl} alt={`Product Image ${index + 1}`} width={100} height={100} />
                      <Button type="button" onClick={() => handleRemoveImage(index)} variant="destructive">
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div> */}

            <ImageUploaderComponent
              SetImages={(images) => {
                form.setValue("images", images);
                form.setValue("imageUrl", images[0]);
              }}
              images={form.getValues("images")}
            />

            <FormField
              control={form.control}
              name="isNew"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel>Is New</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="discount.value"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Discount Value (%)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Discount Percentage" {...field} onChange={(e) => field.onChange(Number(e.target.value) || 0)} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="discount.isActive"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel>Discount Active</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button onClick={() => console.log(form.formState.errors)} type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? 'Creating...' : 'Create Product'}
        </Button>

        {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      </form>
    </Form>
  );
};

export default CreateProductForm;