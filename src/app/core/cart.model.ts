export interface Cart {
    id: string;
    status: string;
}

export interface ProductsCart {
    cart_id: string;
    product_id: string;
    quantity: number;
}