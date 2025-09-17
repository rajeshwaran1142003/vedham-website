import React, { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCartFromStorage, getCartTotal } from '../utils/cart';

type PaymentMethod = 'UPI' | 'COD';

interface CustomerForm {
  fullName: string;
  phone: string;
  whatsappSame: boolean;
  email: string;
  altPhone?: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  pincode: string;
  landmark?: string;
  notes?: string;
}

const initialForm: CustomerForm = {
  fullName: '',
  phone: '',
  whatsappSame: true,
  email: '',
  altPhone: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  pincode: '',
  landmark: '',
  notes: ''
};

const phoneRegex = /^[6-9]\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const pincodeRegex = /^[1-9][0-9]{5}$/;

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const cartItems = useMemo(() => getCartFromStorage(), []);
  const subtotal = useMemo(() => getCartTotal(cartItems), [cartItems]);
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  const [form, setForm] = useState<CustomerForm>(initialForm);
  const [method, setMethod] = useState<PaymentMethod>('UPI');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    if (!form.fullName.trim()) return setError('Please enter full name'), false;
    if (!phoneRegex.test(form.phone)) return setError('Please enter a valid 10-digit mobile number'), false;
    if (!emailRegex.test(form.email)) return setError('Please enter a valid email address'), false;
    if (!form.address1.trim()) return setError('Please enter address line 1'), false;
    if (!form.city.trim()) return setError('Please enter city'), false;
    if (!form.state.trim()) return setError('Please enter state'), false;
    if (!pincodeRegex.test(form.pincode)) return setError('Please enter a valid 6-digit PIN code'), false;
    setError(null);
    return true;
  };

  const handlePlaceOrder = async () => {
    if (!validate()) return;
    setIsSubmitting(true);

    const orderId = `VE${Date.now().toString().slice(-6)}`;
    const orderDetails = {
      orderId,
      amount: total,
      subtotal,
      shipping,
      items: cartItems,
      customer: form,
      paymentMethod: method
    };

    try {
      if (method === 'COD') {
        navigate('/success', { state: { orderDetails, payment: { status: 'COD' } } });
        return;
      }

      if (method === 'UPI') {
        const upiLink = `upi://pay?pa=vijaya2015.ve@oksbi&pn=Vedham%20Eldix&am=${total}&cu=INR&tn=Order%20${orderId}`;
        window.location.href = upiLink;
        // After returning, still show success instructions
        navigate('/success', { state: { orderDetails, payment: { status: 'UPI' } } });
        return;
      }
    } catch (e) {
      setError('Network error. Please check your connection.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link to="/cart" className="text-green-600 hover:text-green-700">Back to Cart</Link>
          <h1 className="text-3xl font-bold text-gray-900 mt-2">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Customer Information</h2>

            {error && <div className="mb-4 p-3 bg-red-50 text-red-700 rounded">{error}</div>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="border rounded p-3" placeholder="Full Name*" value={form.fullName} onChange={e=>setForm({...form, fullName:e.target.value})} />
              <input className="border rounded p-3" placeholder="Email*" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
              <input className="border rounded p-3" placeholder="Phone Number*" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
              <input className="border rounded p-3" placeholder="Alternative Phone" value={form.altPhone} onChange={e=>setForm({...form, altPhone:e.target.value})} />
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-2">Delivery Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="border rounded p-3 md:col-span-2" placeholder="Address Line 1*" value={form.address1} onChange={e=>setForm({...form, address1:e.target.value})} />
              <input className="border rounded p-3 md:col-span-2" placeholder="Address Line 2" value={form.address2} onChange={e=>setForm({...form, address2:e.target.value})} />
              <input className="border rounded p-3" placeholder="City*" value={form.city} onChange={e=>setForm({...form, city:e.target.value})} />
              <input className="border rounded p-3" placeholder="State*" value={form.state} onChange={e=>setForm({...form, state:e.target.value})} />
              <input className="border rounded p-3" placeholder="PIN Code*" value={form.pincode} onChange={e=>setForm({...form, pincode:e.target.value})} />
              <input className="border rounded p-3" placeholder="Landmark" value={form.landmark} onChange={e=>setForm({...form, landmark:e.target.value})} />
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-2">Order Notes</h3>
            <textarea className="border rounded p-3 w-full" rows={3} placeholder="Special instructions or preferences" value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})}></textarea>

            <h2 className="text-xl font-semibold mt-6 mb-2">Payment Method</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <button onClick={()=>setMethod('UPI')} className={`p-3 border rounded ${method==='UPI'?'border-green-600 bg-green-50':'border-gray-300'}`}>UPI Direct</button>
              <button onClick={()=>setMethod('COD')} className={`p-3 border rounded ${method==='COD'?'border-green-600 bg-green-50':'border-gray-300'}`}>Cash on Delivery</button>
            </div>

            <button onClick={handlePlaceOrder} disabled={isSubmitting} className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-semibold">
              {isSubmitting ? 'Processing...' : `Place Order • ₹${total}`}
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-3">
              {cartItems.map(ci => (
                <div key={ci.product.id} className="flex justify-between text-sm">
                  <span>{ci.product.name} × {ci.quantity}</span>
                  <span>₹{ci.product.price * ci.quantity}</span>
                </div>
              ))}
              <div className="flex justify-between pt-3 border-t"><span>Subtotal</span><span>₹{subtotal}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span></div>
              <div className="flex justify-between font-semibold pt-2 border-t"><span>Total</span><span>₹{total}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;



