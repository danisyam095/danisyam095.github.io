import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export function Hero() {
    return (
        <motion.section
            className="flex flex-col items-center text-center py-28 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <p className="uppercase tracking-widest text-gray-500 text-sm mb-3">
                Halo, saya
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Dani Syam
            </h1>

            <p className="text-lg text-gray-600 max-w-xl mb-8 leading-relaxed">
                Marketing strategist & frontend developer yang berfokus pada hasil dan estetika.
                Saya memadukan data, desain, dan teknologi untuk menciptakan pengalaman digital yang bermakna.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
                <Button asChild>
                    <a href="/cv.pdf" download>
                        Download CV
                    </a>
                </Button>
                <Button variant="outline" asChild>
                    <a href="#contact">Hubungi Saya</a>
                </Button>
            </div>

            <div className="flex justify-center gap-5 mt-8 text-gray-600">
                <a
                    href="https://github.com/danisyam095"
                    target="_blank"
                    className="hover:text-gray-900 transition-colors"
                >
                    <Github className="w-5 h-5" />
                </a>
                <a
                    href="https://linkedin.com/in/danisyam"
                    target="_blank"
                    className="hover:text-gray-900 transition-colors"
                >
                    <Linkedin className="w-5 h-5" />
                </a>
            </div>
        </motion.section>
    );
}
