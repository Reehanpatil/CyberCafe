import { useState } from "react";
import { Link } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import {
  ArrowLeft,
  IndianRupee,
  QrCode,
  ShieldCheck,
  AtSign,
  User,
} from "lucide-react";

// Loose sanity check — just needs text@text (e.g. "9876543210@paytm",
// "name@oksbi"). UPI handles vary a lot across banks/apps, so this
// intentionally doesn't try to validate the exact format.
function isLikelyValidUpiId(value) {
  const trimmed = value.trim();
  const parts = trimmed.split("@");
  return (
    parts.length === 2 &&
    parts[0].length >= 2 &&
    parts[1].length >= 2 &&
    !trimmed.includes(" ")
  );
}

export default function ReceivePaymentPage() {
  const [upiId, setUpiId] = useState("");
  const [payeeName, setPayeeName] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [error, setError] = useState("");

  const upiLink = `upi://pay?pa=${encodeURIComponent(upiId)}${
    payeeName ? `&pn=${encodeURIComponent(payeeName)}` : ""
  }&am=${encodeURIComponent(amount)}&cu=INR${note ? `&tn=${encodeURIComponent(note)}` : ""}`;

  const handleGenerate = (e) => {
    e.preventDefault();

    if (!isLikelyValidUpiId(upiId)) {
      setError("Enter a valid UPI ID, e.g. name@bank or 9876543210@upi");
      return;
    }
    if (!amount || Number(amount) <= 0) {
      setError("Enter a valid amount");
      return;
    }

    setError("");
    setShowQR(true);
  };

  const handleBack = () => setShowQR(false);

  return (
    <div className='bg-slate-50 min-h-[calc(100vh-64px)]'>
      {/* Header */}
      <section className='relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 px-4 pt-10 pb-16 sm:pb-20'>
        <div className='absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]' />

        <div className='relative max-w-2xl mx-auto'>
          <Link
            to='/'
            className='inline-flex items-center gap-1.5 text-sm font-medium text-blue-100 hover:text-white transition-colors mb-6'
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4'>
            <QrCode size={14} />
            Free UPI QR Generator
          </span>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight'>
            Receive Payment
          </h1>
          <p className='mt-3 text-sm sm:text-base text-blue-100 leading-relaxed'>
            Enter any UPI ID and amount to generate a scannable QR code — anyone
            can use this to receive payments.
          </p>
        </div>
      </section>

      {/* Content Card */}
      <section className='px-4 -mt-8 sm:-mt-10 relative z-10 pb-16'>
        <div className='max-w-md mx-auto bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 overflow-hidden'>
          {showQR && (
            <div className='flex items-center gap-2 px-5 sm:px-6 pt-5'>
              <button
                onClick={handleBack}
                className='flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors'
              >
                <ArrowLeft size={15} />
                Edit Details
              </button>
            </div>
          )}

          <div className='p-5 sm:p-6'>
            {!showQR ?
              <form onSubmit={handleGenerate} className='space-y-5'>
                <div>
                  <label
                    htmlFor='upiId'
                    className='block text-sm font-semibold text-slate-700 mb-1.5'
                  >
                    Your UPI ID
                  </label>
                  <div className='relative'>
                    <AtSign
                      size={18}
                      className='absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400'
                    />
                    <input
                      id='upiId'
                      type='text'
                      required
                      autoFocus
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder='yourname@upi or 9876543210@paytm'
                      className='w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 text-sm font-medium text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='payeeName'
                    className='block text-sm font-semibold text-slate-700 mb-1.5'
                  >
                    Your Name{" "}
                    <span className='text-slate-400 font-normal'>
                      (optional)
                    </span>
                  </label>
                  <div className='relative'>
                    <User
                      size={18}
                      className='absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400'
                    />
                    <input
                      id='payeeName'
                      type='text'
                      value={payeeName}
                      onChange={(e) => setPayeeName(e.target.value)}
                      placeholder='e.g. Reehan'
                      className='w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='amount'
                    className='block text-sm font-semibold text-slate-700 mb-1.5'
                  >
                    Amount
                  </label>
                  <div className='relative'>
                    <IndianRupee
                      size={18}
                      className='absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400'
                    />
                    <input
                      id='amount'
                      type='number'
                      min='1'
                      step='0.01'
                      inputMode='decimal'
                      required
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder='0.00'
                      className='w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 text-lg font-semibold text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='note'
                    className='block text-sm font-semibold text-slate-700 mb-1.5'
                  >
                    Note{" "}
                    <span className='text-slate-400 font-normal'>
                      (optional)
                    </span>
                  </label>
                  <input
                    id='note'
                    type='text'
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder='e.g. Printing charges'
                    className='w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                  />
                </div>

                {error && (
                  <p className='text-xs font-medium text-red-600 -mt-1'>
                    {error}
                  </p>
                )}

                <button
                  type='submit'
                  className='w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-700 to-blue-900 shadow-md shadow-blue-900/20 hover:shadow-lg active:scale-[0.98] transition-all duration-200'
                >
                  <QrCode size={16} />
                  Generate QR Code
                </button>
              </form>
            : <div className='flex flex-col items-center text-center'>
                <div className='p-4 bg-white rounded-2xl border-2 border-slate-100'>
                  <QRCodeSVG
                    value={upiLink}
                    size={220}
                    level='M'
                    includeMargin={false}
                  />
                </div>

                <p className='mt-5 text-3xl font-extrabold text-slate-900'>
                  ₹{Number(amount).toLocaleString("en-IN")}
                </p>
                <p className='text-sm font-semibold text-slate-600 mt-1'>
                  {payeeName || upiId}
                </p>
                {note && (
                  <p className='text-sm text-slate-500 mt-0.5'>{note}</p>
                )}

                <p className='mt-4 text-xs text-slate-400 leading-relaxed max-w-xs'>
                  Anyone can scan this with any UPI app (GPay, PhonePe, Paytm)
                  to pay you directly.
                </p>

                <div className='mt-6 flex items-center gap-2 w-full'>
                  <button
                    onClick={handleBack}
                    className='flex-1 py-3 rounded-xl text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors'
                  >
                    Edit Details
                  </button>
                  <a
                    href={upiLink}
                    className='flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 transition-colors'
                  >
                    Open in UPI App
                  </a>
                </div>
              </div>
            }
          </div>
        </div>

        {/* Trust note */}
        <div className='max-w-md mx-auto mt-5 flex items-start gap-2.5 px-4 py-3 rounded-xl bg-blue-50 border border-blue-100'>
          <ShieldCheck size={16} className='text-blue-600 shrink-0 mt-0.5' />
          <p className='text-xs text-blue-700 leading-relaxed'>
            This is a free tool to generate standard UPI payment QR codes. Your
            UPI ID and amount are used only to build the QR locally in your
            browser — nothing is saved or sent to any server.
          </p>
        </div>
      </section>
    </div>
  );
}
