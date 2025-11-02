import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Contact() {
    const { register, handleSubmit, reset } = useForm();

    const sendEmail = (data: any) => {
        emailjs.send(
            "service_id",
            "template_id",
            data,
            "user_public_key"
        );
        reset();
    };

    return (
        <section id="contact" className="py-16">
            <h3 className="text-2xl font-semibold mb-6 text-center">Hubungi Saya</h3>
            <form onSubmit={handleSubmit(sendEmail)} className="max-w-md mx-auto space-y-4">
                <Input placeholder="Nama" {...register("name")} required />
                <Input placeholder="Email" type="email" {...register("email")} required />
                <Textarea placeholder="Pesan" {...register("message")} required />
                <Button type="submit" className="w-full">Kirim</Button>
            </form>
        </section>
    );
}
