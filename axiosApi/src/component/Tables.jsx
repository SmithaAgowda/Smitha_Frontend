import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const Tables = () => {
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        pName: '',
        pPrice: ''
    });

    const [editingProduct, setEditingProduct] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://p-9x7e.onrender.com/products/products");
            setProducts(response.data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingProduct) {
                await axios.put(`https://p-9x7e.onrender.com/products/edit-product/${editingProduct}`, formData);
                setEditingProduct(null);
            } else {
                await axios.post("https://p-9x7e.onrender.com/products/add-product", formData);
            }
            fetchData();
            setFormData({
                pName: '',
                pPrice: ''
            });
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleEdit = (productId) => {
        const productToEdit = products.find(product => product._id === productId);
        setFormData({
            pName: productToEdit.pName,
            pPrice: productToEdit.pPrice
        });
        setEditingProduct(productId);
    };

    const handleDelete = async (deleteId) => {
        try {
            const res = await axios.delete(`https://p-9x7e.onrender.com/products/delete-product/${deleteId}`);
            if (res.data.error) {
                alert(res.data.message);
            } else {
                alert(res.data.message);
                const updatedProducts = products.filter(product => product._id !== deleteId);
                setProducts(updatedProducts);
            }
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="productName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" name="pName" value={formData.pName} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="productPrice">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control type="text" name="pPrice" value={formData.pPrice} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    {editingProduct ? 'Update Product' : 'Add Product'}
                </Button>
            </Form>

            <Table border={1} cellPadding={0}>
                <thead>
                    <tr>
                        <th>P Id</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.pName}</td>
                            <td>{product.pPrice}</td>
                            <td>{product.date}</td>
                            <td>
                                <Delete deleteId={product._id} handleDelete={handleDelete} />
                                <Edit productId={product._id} handleEdit={handleEdit} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

const Delete = ({ deleteId, handleDelete }) => {
    return (
        <button onClick={() => handleDelete(deleteId)}>Delete</button>
    );
};

const Edit = ({ productId, handleEdit }) => {
    return (
        <button onClick={() => handleEdit(productId)}>Edit</button>
    );
};

export default Tables;
