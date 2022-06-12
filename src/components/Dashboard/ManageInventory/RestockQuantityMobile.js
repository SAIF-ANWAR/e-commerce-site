import React from 'react';

const RestockQuantityMobile = (phone, refetch) => {
    const handleRestock = (e) => {
        e.preventDefault()
        const earlierQuantity = phone.phone.quantity
        const earlierAmount = parseFloat(earlierQuantity)
        const currentQuantity = parseFloat(e.target.quantity?.value)
        const latestQuantity = earlierAmount + currentQuantity
        const quantity = latestQuantity
        const id = phone.phone._id
        const url = `https://morning-sands-87879.herokuapp.com/mobiles/${id}`
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

    }
    return (
        <div>
            <div>
                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 class="font-bold text-lg mb-3">Product: {phone?.phone?.name} </h3>
                        <form onSubmit={handleRestock} className="flex flex-col">
                            <p className='text-md mb-3'>Enter Quantity</p>
                            <input type="number" name='quantity' className='input input-bordered' />
                            <input for="my-modal-6" className='btn btn-sm mt-4' type="submit" value="submit" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestockQuantityMobile;