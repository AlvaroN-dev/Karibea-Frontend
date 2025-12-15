export function LoginLoader() {
    return (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-md z-40 flex items-center justify-center">
            <div className="bg-white rounded-lg p-12 shadow-2xl">
                <div className="text-center">
                    <div className="relative w-16 h-16 mx-auto mb-4">
                        <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                    </div>

                    <h3 className="text-xl mb-2 tracking-widest">LUXE</h3>
                    <p className="text-gray-500 text-sm">Cargando...</p>
                </div>
            </div>
        </div>
    );
}
