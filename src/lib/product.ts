import { prisma } from "./prisma";

// Crear un producto
export const createProduct = async (data: {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}) => {
  return prisma.product.create({
    data,
  });
};

// Obtener todos los productos
export const getAllProducts = async () => {
  return prisma.product.findMany();
};

// Obtener un producto por su ID
export const getProductById = async (id: number) => {
  return prisma.product.findUnique({
    where: { id },
  });
};

// Actualizar un producto
export const updateProduct = async (id: number, data: {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}) => {
  return prisma.product.update({
    where: { id },
    data,
  });
};

// Eliminar un producto
export const deleteProduct = async (id: number) => {
  return prisma.product.delete({
    where: { id },
  });
};