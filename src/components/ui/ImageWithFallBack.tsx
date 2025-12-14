"use client";

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface Props extends Omit<ImageProps, 'src'> {
    src?: string;
    fallbackClassName?: string;
}

export function ImageWithFallBack({ src, alt, className, fallbackClassName, ...props }: Props) {
    const [error, setError] = useState(!src);

    if (error || !src) {
        return (
            <div
                className={cn(
                    "bg-gray-200 flex items-center justify-center text-gray-400 w-full h-full min-h-[100px]",
                    className,
                    fallbackClassName
                )}
            >
                <span className="text-xs">Sin imagen</span>
            </div>
        );
    }

    // Nota: Usamos <img> normal en lugar de next/image para simplificar configuraciones de dominio externos
    // Si quieres usar <Image />, debes configurar los dominios en next.config.ts
    return (
        <img
            src={src}
            alt={alt}
            className={cn("transition-opacity duration-300", className)}
            onError={() => setError(true)}
            {...props as any}
        />
    );
}