const socials = ["LinkedIn", "Dribbble", "Read.cv", "Instagram"];

export default function Footer() {
  return (
    <footer className="w-full px-gutter py-section-v flex flex-col md:flex-row justify-between items-center gap-stack-md max-w-container-max mx-auto bg-surface-container-low">
      <a className="font-headline-md text-headline-md text-primary" href="#home">
        DESIGNER.STUDIO
      </a>
      <p className="font-meta text-meta text-on-surface text-center md:text-left">
        © 2024 Designer Studio. All rights reserved. Crafted with serenity.
      </p>
      <div className="flex items-center gap-6">
        {socials.map((social) => (
          <a
            key={social}
            className="font-meta text-meta text-on-surface-variant hover:text-accent-magenta transition-colors duration-300"
            href="#"
          >
            {social}
          </a>
        ))}
      </div>
    </footer>
  );
}
