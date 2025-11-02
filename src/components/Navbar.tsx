import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 mb-6">
            <h1 className="text-xl font-semibold tracking-tight">Dani Syam</h1>
            <div className="flex gap-3">
                <a href="https://github.com/danisyam095" target="_blank"><Github /></a>
                <a href="https://linkedin.com/in/danisyam" target="_blank"><Linkedin /></a>
                <Button asChild>
                    <a href="/cv.pdf" download>Download CV</a>
                </Button>
            </div>
        </nav>
    );
}
