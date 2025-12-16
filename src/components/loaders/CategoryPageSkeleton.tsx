import { ProductCardSkeleton } from "./ProductCardSkeleton";

export function CategoryPageSkeleton() {
    return (
        <div className="min-h-screen bg-white">
            <div className="relative h-64 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <div className="h-12 w-64 bg-white/30 rounded mb-4 mx-auto"></div>
                        <div className="h-4 w-96 bg-white/30 rounded mx-auto"></div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 animate-pulse">
                    <div className="h-6 w-32 bg-gray-200 rounded"></div>
                    <div className="flex gap-4">
                        <div className="h-10 w-32 bg-gray-200 rounded"></div>
                        <div className="h-10 w-32 bg-gray-200 rounded"></div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[...Array(8)].map((_, i) => (
                        <ProductCardSkeleton key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}
