export function CartSkeleton() {
    return (
        <div className="h-full flex flex-col">
            <div className="p-6 border-b border-gray-200 animate-pulse">
                <div className="h-8 w-48 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-32 bg-gray-200 rounded"></div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex gap-4 animate-pulse">
                        <div className="w-24 h-24 bg-gray-200 rounded"></div>
                        <div className="flex-1">
                            <div className="h-5 bg-gray-200 rounded mb-2 w-3/4"></div>
                            <div className="h-4 bg-gray-200 rounded mb-2 w-1/2"></div>
                            <div className="h-8 bg-gray-200 rounded w-24"></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="border-t border-gray-200 p-6 space-y-4 animate-pulse">
                <div className="flex justify-between">
                    <div className="h-6 w-24 bg-gray-200 rounded"></div>
                    <div className="h-6 w-32 bg-gray-200 rounded"></div>
                </div>
                <div className="h-12 bg-gray-200 rounded"></div>
                <div className="h-12 bg-gray-200 rounded"></div>
            </div>
        </div>
    );
}
