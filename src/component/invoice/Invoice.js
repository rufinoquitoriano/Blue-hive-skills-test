import React, { useState } from "react";

function Invoice() {
  const [edit, setEdit] = useState(0);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const [invoice, setInvoice] = useState({
    invoiceNumber: "XXXXXXX",
    invoiceDate: "02/04/2021",
    customerName: "Rufino Quitoriano",
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
    <div className="px-10 bg-gray-200 h-screen py-32">
      <table className="w-full">
        <tbody>
          <tr className="grid grid-cols-4">
            <td className="border col-span-1">{invoice.invoiceNumber}</td>
            <td className="border col-span-1"></td>
            <td className="border col-span-1"></td>
            <td className="border col-span-1">{invoice.invoiceDate}</td>
          </tr>
          <tr className="grid grid-cols-4">
            <td className="border col-span-1"> </td>
            <td className="border col-span-1"> </td>
            <td className="border col-span-1"> </td>
            <td className="border col-span-1">{invoice.customerName}</td>
          </tr>
        </tbody>
      </table>
      <table className="w-full">
        <thead>
          <tr className="grid grid-cols-5">
            <th className="border col-span-1">Product Name</th>
            <th className="border col-span-1">Quantity</th>
            <th className="border col-span-1">Price</th>
            <th className="border col-span-1">Sub Total</th>
            <th className="border col-span-1">Action</th>
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
                  <td className="border col-span-1">
                    <input
                      defaultValue={product.productName}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </td>
                  <td className="border col-span-1">
                    <input
                      defaultValue={product.quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </td>
                  <td className="border col-span-1">
                    <input
                      defaultValue={product.price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </td>
                  <td className="border col-span-1"></td>
                  <td className="border col-span-1 grid grid-cols-2 ">
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
                <td className="border col-span-1">{product.productName}</td>
                <td className="border col-span-1">{product.quantity}</td>
                <td className="border col-span-1">{product.price}</td>
                <td className="border col-span-1">
                  {product.quantity * product.price}
                </td>
                <td className="border col-span-1 grid grid-cols-2 ">
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
            <td className="border col-span-1"></td>
            <td className="border col-span-1"></td>
            <td className="border col-span-1">Total</td>
            <td className="border col-span-1">
              {edit !== 0 ? 0 : invoice.total}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Invoice;
