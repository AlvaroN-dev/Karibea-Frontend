export function CartLoader() {
    return (
        <>
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" />

            <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-xl z-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="relative w-16 h-16 mx-auto mb-4">
                        <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                    </div>

                    <h3 className="text-xl mb-2 tracking-widest">LUXE</h3>
                    <p className="text-gray-500 text-sm">Abriendo carrito...</p>
                </div>
            </div>
        </>
    );
}
