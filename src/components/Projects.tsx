import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";

export function Projects() {
    return (
        <section id="projects" className="py-16">
            <h3 className="text-2xl font-semibold mb-6 text-center">Project Showcase</h3>
            <div className="grid sm:grid-cols-2 gap-6">
                {projects.map((p) => (
                    <Card key={p.title}>
                        <CardContent className="p-5">
                            <img src={p.image} alt={p.title} className="rounded-lg mb-4" />
                            <h4 className="font-semibold">{p.title}</h4>
                            <p className="text-sm text-gray-600 mb-2">{p.description}</p>
                            <a href={p.link} target="_blank" className="text-sm text-blue-600 underline">
                                Lihat Project
                            </a>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
