export default function Contact() {
  return (
    <footer className="bg-sky-900/50 backdrop-blur-md text-white py-5 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4 italic">All Things Home</h2>
        </div>
        
        <div id="contact">
          <h4 className="font-bold mb-4 uppercase text-sm">Contact Us</h4>
          <p className="text-gray-400">+60136302527</p>
        </div>

        <div>
          <h4 className="font-bold mb-4 uppercase text-sm">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">TikTok</a>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        © 2026 All Things Home.
      </div>
    </footer>
  );
}