import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Users,
} from "lucide-react";
// import { cn } from "../lib/utils";
// import { useToast } from "../hooks/use-toast";
// import { useState } from "react";

export const ContactSection = () => {
  // const { toast } = useToast();
  // const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   setIsSubmitting(true);

  //   setTimeout(() => {
  //     toast({
  //       title: "Message sent!",
  //       description: "Thank you for your message. I'll get back to you soon.",
  //     });
  //     setIsSubmitting(false);
  //   }, 1500);
  // };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div
        className="container mx-auto max-w-5xl"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Ia legătura cu noi!
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Dacă dorești dezvoltarea unui spațiu, ai nevoie de consultanță sau
          vrei pur și simplu să lași un mesaj, nu ezita să ne contactezi.
        </p>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold mb-6">
            {" "}
            Informații de contact
          </h3>
          <div className="grid grid-cols-1 gap-6 md:flex md:space-x-6 md:space-y-0 mx-auto w-fit">
            <div className="flex items-start space-x-2">
              <div className="p3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium"> Email</h4>
                <a
                  href="mailto:robertmandici29@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  mihainicolescu@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="p3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium"> Telefon</h4>
                <a
                  href="tel:+40725923168"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +407xxxyyy
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="p3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium "> Locatie</h4>
                <a className="text-muted-foreground hover:text-primary transition-colors">
                  Bucuresti, Romania
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="p3 rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium"> Social Media</h4>
                <a className="text-muted-foreground hover:text-primary transition-colors flex justify-center">
                  <a
                    href="https://www.linkedin.com/in/robert-mandici-473b42181/"
                    target="_blank"
                  >
                    <Linkedin />
                  </a>
                </a>
              </div>
            </div>
          </div>

          {/* <div className="pt-8">
            <h4> Conecteaza-te cu mine</h4>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://www.linkedin.com/in/robert-mandici-473b42181/"
                target="_blank"
              >
                <Linkedin />
              </a>
              <a href="https://www.instagram.com/robert.mdc/" target="_blank">
                <Instagram />
              </a>
            </div>
          </div> */}
        </div>

        {/* <div
            className="bg-card p-4 rounded-lg shadow-xs"
            // onSubmit={handleSubmit}
          >
            <img
              src="/media/image_contact.jpg"
              alt="Image contact"
              className="max-h-95 object-contain justify-self-center"
            />
            {/* <h3 className="text-2xl font-semibold mb-6"> Trimite un mesaj</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Numele tau
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Nume..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="nume@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Mesajul tau
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Salut, as vrea sa vorbim despre..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Se trimite..." : "Trimite mesaj"}
                <Send size={16} />
              </button>
            </form> 
          </div> */}
      </div>
    </section>
  );
};
