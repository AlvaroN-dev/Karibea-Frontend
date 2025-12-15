"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
// CORRECCIÓN: Usar ComponentProps para extraer los props directamente del componente
import { type ComponentProps } from "react"

export function ThemeProvider({ children, ...props }: ComponentProps<typeof NextThemesProvider>) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}