import React from 'react';

const RestockLaptopQuantity = ({ laptop }) => {
    const handleRestock = (e) => {
        e.preventDefault()
        const earlierQuantity = laptop.quantity
        const earlierAmount = parseFloat(earlierQuantity)
        const currentQuantity = parseFloat(e.target.quantity?.value)
        const latestQuantity = earlierAmount + currentQuantity
        const quantity = latestQuantity
        const id = laptop._id
        const url = `https://morning-sands-87879.herokuapp.com/laptops/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    window.alert("Update Successful")
                }
            })
        console.log(quantity)
    }
    return (
        <div>
            <input type="checkbox" id="laptop-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="laptop-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg mb-3">Product: {laptop?.title} </h3>
                    <form onSubmit={handleRestock} className="flex flex-col">
                        <p className='text-md mb-3'>Enter Quantity</p>
                        <input type="number" name='quantity' className='input input-bordered' />
                        <input for="laptop-modal" className='btn btn-sm mt-4' type="submit" value="submit" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default RestockLaptopQuantity;