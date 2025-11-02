import { motion } from "framer-motion";

export function About() {
    return (
        <motion.section
            id="about"
            className="py-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <h3 className="text-2xl font-semibold mb-6">Tentang Saya</h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Saya seorang <span className="font-medium text-gray-800">marketing strategist</span>
                yang juga memiliki passion di bidang <span className="font-medium text-gray-800">frontend development</span>.
                Fokus saya adalah menciptakan pengalaman digital yang efisien dan elegan —
                baik melalui kampanye pemasaran yang tepat sasaran maupun desain antarmuka yang bersih dan profesional.
            </p>

            <div className="mt-8 flex justify-center gap-8">
                <div className="text-center">
                    <p className="text-3xl font-bold text-gray-800">5+</p>
                    <p className="text-sm text-gray-500">Tahun Pengalaman</p>
                </div>
                <div className="text-center">
                    <p className="text-3xl font-bold text-gray-800">20+</p>
                    <p className="text-sm text-gray-500">Project Selesai</p>
                </div>
                <div className="text-center">
                    <p className="text-3xl font-bold text-gray-800">10+</p>
                    <p className="text-sm text-gray-500">Klien Bahagia</p>
                </div>
            </div>
        </motion.section>
    );
}
