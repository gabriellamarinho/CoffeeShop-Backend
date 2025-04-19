const Product = require('../models/product.model');

class ProductService {
  async create(productData) {
    try {
      const newProduct = await Product.create(productData);
      return newProduct;
    } catch (error) {
      console.error('Erro ao criar produto:', error);
      throw error;
    }
  }

  async getAll() {
    try {
      const products = await Product.findAll();
      return products;
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      throw error;
    }
  }

  async getById(id) {
    try {
      const product = await Product.findByPk(id);
      return product;
    } catch (error) {
      console.error(`Erro ao buscar produto com ID ${id}:`, error);
      throw error;
    }
  }

  async update(id, productData) {
    try {
      const [updatedRows] = await Product.update(productData, {
        where: { id },
      });
      if (updatedRows > 0) {
        const updatedProduct = await Product.findByPk(id);
        return updatedProduct;
      }
      return null; // Produto não encontrado
    } catch (error) {
      console.error(`Erro ao atualizar produto com ID ${id}:`, error);
      throw error;
    }
  }

  async delete(id) {
    try {
      const deletedRows = await Product.destroy({
        where: { id },
      });
      return deletedRows > 0; // Retorna true se o produto foi deletado
    } catch (error) {
      console.error(`Erro ao deletar produto com ID ${id}:`, error);
      throw error;
    }
  }
}

module.exports = new ProductService();