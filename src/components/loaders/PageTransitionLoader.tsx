export function PageTransitionLoader() {
    return (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
            <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                </div>

                <h2 className="text-2xl mb-2 tracking-widest">LUXE</h2>
                <p className="text-gray-500 text-sm">Cargando...</p>

                <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden mt-6 mx-auto">
                    <div className="h-full bg-black animate-[slideProgress_1s_ease-in-out_infinite]"></div>
                </div>
            </div>

            <style>{`
        @keyframes slideProgress {
          0% { transform: translateX(-100%); width: 30%; }
          50% { width: 70%; }
          100% { transform: translateX(400%); width: 30%; }
        }
      `}</style>
        </div>
    );
}
