'use server'


import { TProductBase, TCategory, TProductDetail, TProductCreate, TUpdateProduct } from "../schema/product.schema"
import { cookies } from "next/headers"

export const getProductsByCategory = async (category: string): Promise<{
    data: TProductBase[] | null,
    message: string
}> => {
    try {
        const response = await fetch(`${process.env.BACKEND}/product/get-products-by-category/${category}`, {
            cache: 'no-store',
            method: 'GET',
        })

        if (!response.ok) {
            const { data, message } = await response.json()
            return { data: null, message: message }
        }
        const { data, message } = await response.json()
        return { data, message }
    } catch (error) {
        console.log(error)
        return { data: null, message: 'Some Error Occurred!' }
    }
}

// get product by id
export const getProductById = async (id: string): Promise<{
    data: TProductDetail | null,
    message: string
}> => {
    try {
        const response = await fetch(`${process.env.BACKEND}/product/get-product-by-id/${id}`, {
            cache: 'no-store',
            method: 'GET',
        });
        // check response validations
        if (!response.ok) {
            const { data, message } = await response.json();
            return { data: null, message }
        }
        const { data, message } = await response.json();
        return { data, message };
    } catch (error: any) {
        console.log(error)
        return { data: null, message: 'Some error occurred while fetching product details' }
    }
}

// get prodyct base by id
export const getProductBaseById = async (id: string): Promise<{
    data: TProductBase | null,
    message: string
}> => {
    try {
        const response = await fetch(`${process.env.BACKEND}/product/get-product-base-by-id/${id}`, {
            cache: 'no-store',
            method: 'GET',
        })

        if (!response.ok) {
            const { data, message } = await response.json()
            return { data: null, message }
        }
        const { data, message } = await response.json()
        return { data, message }
    } catch (error: any) {
        console.log(error)
        return { data: null, message: 'Some error occurred while fetching product base details' }
    }
}

export const getCategories = async (): Promise<{
    data: TCategory[] | null,
    message: string
}> => {
    try {
        const response = await fetch(`${process.env.BACKEND}/product/get-categories`, {
            cache: 'no-store',
            method: 'GET',
        })

        if (!response.ok) {
            const { data, message } = await response.json()
            return { data: null, message: message }
        }
        const { data, message } = await response.json()
        return { data, message }
    } catch (error) {
        return { data: null, message: 'Some Error Occured!' }
    }
}

// create categories
export const createCategory = async (categoryData: TCategory): Promise<{
    data: TCategory | null;
    message: string;
}> => {
    try {

        const cookieStore = await cookies();
        const authToken = cookieStore.get("auth-token")?.value;
        

        const response = await fetch(`${process.env.BACKEND}/product/create-category`, {
            cache: 'no-store',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify(categoryData),
        });

        if (!response.ok) {
            const { message } = await response.json();
            return { data: null, message };
        }

        const { data, message } = await response.json();
        return { data, message };
    } catch (error) {
        return { data: null, message: 'Error creating category' };
    }
};



// Get all products
export const getAllProducts = async (): Promise<{
    data: TProductBase[] | null,
    message: string
}> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/product/get-all-products`, {
            cache: 'no-store',
            method: 'GET',
        });

        if (!response.ok) {
            const { message } = await response.json();
            return { data: null, message };
        }

        const { data } = await response.json();
        return { data, message: 'Products fetched successfully' };
    } catch (error: any) {
        return { data: null, message: 'Error fetching all products' };
    }
};

// Get latest products
export const getLatestProducts = async (): Promise<{
    data: TProductBase[] | null,
    message: string
}> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/product/get-latest-products`, {
            cache: 'no-store',
            method: 'GET',
        });

        if (!response.ok) {
            const { message } = await response.json();
            return { data: null, message };
        }

        const { data } = await response.json();
        return { data, message: 'Latest products fetched successfully' };
    } catch (error: any) {
        return { data: null, message: 'Error fetching latest products' };
    }
};

// Create a new product
export const createProduct = async (productData: TProductCreate): Promise<{
    data: string | null,
    message: string
}> => {
    try {

        const cookieStore = await cookies();
        const authToken = cookieStore.get("auth-token")?.value;
        if (!authToken) {
          return { data: null, message: "User not logged in!" };
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/product/create-new-product`, {
            method: 'POST',
            cache: 'no-store',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify(productData),
        });

        if (!response.ok) {
            const { message } = await response.json();
            return { data: null, message };
        }

        const { data, message } = await response.json();
        return { data, message };
    } catch (error: any) {
        return { data: null, message: 'Error creating product' };
    }
};

// Delete a product
export const deleteProductById = async (productId: string): Promise<{
    data: boolean | null,
    message: string
}> => {
    try {

        const cookieStore = await cookies();    
        const authToken = cookieStore.get("auth-token")?.value;
        if (!authToken) {
          return { data: null, message: "User not logged in!" };
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/product/delete-product-by-id/${productId}`, {
            cache: 'no-store',
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });

        if (!response.ok) {
            const { message } = await response.json();
            return { data: null, message };
        }

        const { data, message } = await response.json();
        return { data, message };
    } catch (error: any) {
        return { data: null, message: 'Error deleting product' };
    }
};

// Update a product
export const updateProductById = async (productId: string, productData: Partial<TUpdateProduct>): Promise<{
    data: TProductDetail | null,
    message: string
}> => {
    try {
        const cookieStore = await cookies();
        const authToken = cookieStore.get("auth-token")?.value;
        if (!authToken) {
          return { data: null, message: "User not logged in!" };
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/product/update-product-by-id/${productId}`, {
            method: 'POST',
            cache: 'no-store',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify(productData),
        });

        if (!response.ok) {
            const { message } = await response.json();
            return { data: null, message };
        }

        const { data, message } = await response.json();
        return { data, message };
    } catch (error: any) {
        return { data: null, message: 'Error updating product' };
    }
};

// Add product to favorites
export const addToFavourite = async (productId: string): Promise<{
    data: boolean | null,
    message: string
}> => {
    try {
        const cookieStore = await cookies();
        const authToken = cookieStore.get("auth-token")?.value;
        if (!authToken) {
          return { data: null, message: "User not logged in!" };
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/product/add-to-favourite/${productId}`, {
            method: 'POST',
            cache: 'no-store',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            }
        });

        if (!response.ok) {
            const { message } = await response.json();
            return { data: null, message };
        }

        const { data, message } = await response.json();
        return { data, message };
    } catch (error: any) {
        return { data: null, message: 'Error adding product to favorites' };
    }
};

// Get favorite products
export const getFavouriteProducts = async (): Promise<{
    data: TProductBase[] | null,
    message: string
}> => {
    try {
        const cookieStore = await cookies();
        const authToken = cookieStore.get("auth-token")?.value;
        if (!authToken) {
          return { data: null, message: "User not logged in!" };
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/product/get-favourite-products`, {
            method: 'GET',
            cache: 'no-store',
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });

        if (!response.ok) {
            const { message } = await response.json();
            return { data: null, message };
        }

        const { data, message } = await response.json();
        return { data, message };
    } catch (error: any) {
        return { data: null, message: 'Error fetching favorite products' };
    }
};


// delete a product
export const removeFromFavourite = async (productId: string): Promise<{
    data: boolean | null,
    message: string
}> => {
    try {
        const cookieStore = await cookies();
        const authToken = cookieStore.get("auth-token")?.value;
        if (!authToken) {
          return { data: null, message: "User not logged in!" };
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/product/remove-from-favourite/${productId}`, {
            method: 'GET',
            cache: 'no-store',
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });

        if (!response.ok) {
            const { message } = await response.json();
            return { data: null, message };
        }

        const { data, message } = await response.json();
        return { data, message };

    } catch (error: any) {
        return { data: null, message: 'Error deleting product' };
    }
}