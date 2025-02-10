'use client'

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createProductSchema } from '@/lib/schema/product.schema';
import type { TProductCreate } from '@/lib/schema/product.schema';
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
import { toast } from '@/hooks/use-toast';
import { updateProductById } from '@/lib/actions/product.actions';
import ImageUploaderComponent from '@/app/dashboard/add-new/_components/ImageUploaderComponent';
import { Select, SelectItem, SelectContent, SelectValue, SelectTrigger } from '@/components/ui/select';
import { TCategory } from '@/lib/schema/product.schema';
import { Textarea } from '@/components/ui/textarea';

interface EditProductFormProps {
    product: TProductCreate & { id: string };
    categories: TCategory[];
}

const EditProductForm: React.FC<EditProductFormProps> = ({ product, categories }) => {
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const form = useForm<TProductCreate>({
        resolver: zodResolver(createProductSchema),
        defaultValues: {
            name: product.name,
            description: product.description,
            specifications: product.specifications,
            careInstructions: product.careInstructions,
            price: product.price,
            category: product.category,
            imageUrl: product.imageUrl,
            isFreeDelivery: product.isFreeDelivery,
            availableStock: product.availableStock,
            brand: product.brand,
            images: product.images,
            isNew: product.isNew,
            discount: product.discount,
        },
    });

    const onSubmit = async (data: TProductCreate) => {
        setErrorMessage(null);
        setSuccessMessage(null);
        try {
            const { data: updatedProduct, message } = await updateProductById(product.id, data);
            console.log("Updated product data:", updatedProduct);
            if (!updatedProduct) {
                return toast({
                    title: "Error",
                    description: message,
                    variant: "destructive"
                });
            }

            setSuccessMessage('Product updated successfully!');
            return toast({
                title: "Success",
                description: message,
                variant: "success"
            });

        } catch (error: any) {
            setErrorMessage(error?.message || 'Failed to update product. Please try again.');
            return toast({
                title: "Error",
                description: error?.message || 'Failed to update product. Please try again.',
                variant: "destructive"
            });
        }
    };

    const handleDeleteImage = (imageUrl: string) => {
        const currentImages = form.getValues("images");
        const updatedImages = currentImages.filter((img) => img !== imageUrl);
        form.setValue("images", updatedImages);
        return toast({
            title: "Success",
            description: "Image removed successfully.",
            variant: "success",
        });
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

                        <FormField
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
                        />
                    </div>

                    {/* Right Column */}
                    <div className="flex-1 space-y-4">
                        {/* <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input placeholder="Main Image URL" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

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

                        <ImageUploaderComponent
                            SetImages={(images) => {
                                form.setValue("images", images);
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
                    {form.formState.isSubmitting ? 'Editing...' : 'Edit Product'}
                </Button>

                {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
                {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
            </form>
        </Form>
    );
};

export default EditProductForm;