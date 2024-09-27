import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/")({
    component: Index,
})

function Index() {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold tracking-tighter">
                Vite Boilerplate
            </h1>
            <a
                className="underline tracking-wide text-xl text-muted-foreground"
                href="https://github.com/0x41337/my-vite-boilerplate"
            >
                Source Code
            </a>
        </div>
    )
}
