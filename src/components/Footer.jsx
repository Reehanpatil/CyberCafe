import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className='border-t border-slate-200 bg-white py-6 px-4'>
      <p className='text-center text-sm text-slate-500'>
        © {new Date().getFullYear()}{" "}
        <Link
          to='/'
          className='font-semibold text-blue-700 hover:text-blue-800'
        >
          CyberCafe
        </Link>
        . All rights reserved. Developed by Reehan MP.
      </p>
    </footer>
  );
}
