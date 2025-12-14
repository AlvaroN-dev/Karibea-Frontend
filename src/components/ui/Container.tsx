import { cn } from "@/lib/utils";

interface Props {
    children: React.ReactNode;
    className?: string;
}

// CAMBIO: 'export function' en lugar de 'const' + 'export default'
export function Container({ children, className }: Props) {
    return (
        <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
            {children}
        </div>
    );
};