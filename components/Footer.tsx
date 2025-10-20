// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-primary text-gray-100 py-10 mt-12">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div>
          <h5 className="font-semibold text-white">RealData Africa</h5>
          <p className="text-sm text-blue-200 mt-2">Founder & CEO: Danstan Gisore</p>
          <p className="text-xs text-blue-200 mt-3">Redefining Property Intelligence Across the Continent</p>
        </div>

        <div>
          <h6 className="font-semibold">Contact</h6>
          <p className="text-sm mt-2">
            <a href="mailto:realdataafrica@gmail.com" className="underline">realdataafrica@gmail.com</a><br />
            <a href="mailto:danstanvannevins@gmail.com" className="underline">danstanvannevins@gmail.com</a><br />
            <a href="https://wa.me/254758412009" className="underline">WhatsApp: +254 758 412009</a>
          </p>
        </div>

        <div>
          <h6 className="font-semibold">Payments</h6>
          <p className="text-sm mt-2 text-blue-200">
            M-Pesa Paybill: <strong>247247</strong><br/>
            Account: <strong>0900182646576</strong> (Equity Bank)
          </p>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-blue-200">© {new Date().getFullYear()} RealData Africa. All rights reserved.</div>
    </footer>
  );
}
