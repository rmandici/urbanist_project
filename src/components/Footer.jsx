import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-col items-center sm:flex-row sm:justify-between">
      <p className="text-sm text-muted-foreground mb-4 sm:mb-0 text-center sm:text-left">
        &copy; {new Date().getFullYear()} UMS.com. All rights reserved.
      </p>

      <div className="flex justify-center items-center mb-4 sm:mb-0 sm:order-last">
        <img
          src="/media/footer_image.png"
          alt="Footer Image"
          className="max-h-20"
        />
      </div>

      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary-purple transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
