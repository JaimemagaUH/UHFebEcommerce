export interface IProduct {
    createdAt: string;
    name: string;
    color: string;
    price: string;
    description: string;
    image: string;
    materials: ProductMaterial;
    id: string;
}

export enum ProductMaterial {
    FROZEN = 'Frozen',
    GRANITE = 'Granite',
    SOFT = 'Soft',
    RUBBER = 'Rubber',
    STEEL = 'Steel',
    WOODEN = 'Wooden',
    CONCRETE = 'Concrete',
    COTTON = 'Cotton',
    METAL = 'Metal',
    FRESH = 'Fresh',
    PLASTIC = 'Plastic'
};