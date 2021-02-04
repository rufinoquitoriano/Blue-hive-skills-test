import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Invoice() {
  const [edit, setEdit] = useState(0);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const history = useHistory();

  const [invoice, setInvoice] = useState({
    invoiceNumber: "XXXXXXX",
    invoiceDate: "02/04/2021",
    customerName: "Rufino Quitoriano Jr.",
    products: [
      { id: 1, productName: "Mouse", quantity: 2, price: 300 },
      { id: 2, productName: "Mouse", quantity: 5, price: 300 },
      { id: 3, productName: "Mouse", quantity: 8, price: 300 },
    ],
    total: 0,
  });

  const onDelete = (id) => {
    setInvoice({
      ...invoice,
      products: invoice.products.filter((product) => product.id !== id),
      total: 0,
    });
  };

  const onEdit = (id) => {
    setInvoice({
      ...invoice,
      products: invoice.products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            price: price || product.price,
            name: name || product.name,
            quantity: quantity || product.quantity,
          };
        }
        return product;
      }),
      total: 0,
    });
    setEdit(0);
  };

  return (
    <div className="h-screen px-10 py-32 bg-blue-400">
      <table className="w-full">
        <tbody>
          <tr className="grid grid-cols-4">
            <td className="col-span-1 border">{invoice.invoiceNumber}</td>
            <td className="col-span-1 border"></td>
            <td className="col-span-1 border"></td>
            <td className="col-span-1 border">{invoice.invoiceDate}</td>
          </tr>
          <tr className="grid grid-cols-4">
            <td className="col-span-1 border"> </td>
            <td className="col-span-1 border"> </td>
            <td className="col-span-1 border"> </td>
            <td className="col-span-1 border">{invoice.customerName}</td>
          </tr>
        </tbody>
      </table>
      <table className="w-full">
        <thead>
          <tr className="grid grid-cols-5">
            <th className="col-span-1 border">Product Name</th>
            <th className="col-span-1 border">Quantity</th>
            <th className="col-span-1 border">Price</th>
            <th className="col-span-1 border">Sub Total</th>
            <th className="col-span-1 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {invoice.products.map((product) => {
            invoice.total += product.quantity * product.price;
            if (product.id === edit) {
              //   setName(product.productName);
              //   setPrice(product.price);
              //   setQuantity(product.quantity);
              return (
                <tr className="grid grid-cols-5">
                  <td className="col-span-1 border">
                    <input
                      defaultValue={product.productName}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </td>
                  <td className="col-span-1 border">
                    <input
                      defaultValue={product.quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </td>
                  <td className="col-span-1 border">
                    <input
                      defaultValue={product.price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </td>
                  <td className="col-span-1 border"></td>
                  <td className="grid grid-cols-2 col-span-1 border ">
                    <button
                      className="col-span-1"
                      onClick={() => onEdit(product.id)}
                    >
                      Save
                    </button>
                    <button
                      className="col-span-1"
                      onClick={() => {
                        setEdit(0);
                        setInvoice({
                          ...invoice,
                          total: 0,
                        });
                      }}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              );
            }
            return (
              <tr className="grid grid-cols-5">
                <td className="col-span-1 border">{product.productName}</td>
                <td className="col-span-1 border">{product.quantity}</td>
                <td className="col-span-1 border">{product.price}</td>
                <td className="col-span-1 border">
                  {product.quantity * product.price}
                </td>
                <td className="grid grid-cols-2 col-span-1 border ">
                  <button
                    className="col-span-1"
                    onClick={() => setEdit(product.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="col-span-1"
                    onClick={() => onDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
          <tr className="grid grid-cols-4">
            <td className="col-span-1 border"></td>
            <td className="col-span-1 border"></td>
            <td className="col-span-1 border">Total</td>
            <td className="col-span-1 border">
              {edit !== 0 ? 0 : invoice.total}
            </td>
          </tr>
        </tbody>
      </table>
      <Link to="/">
        <button className="p-2 my-4">Back to Home</button>
      </Link>
    </div>
  );
}

export default Invoice;
