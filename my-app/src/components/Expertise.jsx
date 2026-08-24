const items = [
  {
    span: "md:col-span-7",
    bg: "bg-pastel-blue",
    blobPos: "-right-10 -top-10",
    icon: "lightbulb",
    iconColor: "text-secondary",
    title: "Strategy & Direction",
    lead: "Understand First.",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We dive deep into user needs and business goals before sketching a single screen.",
  },
  {
    span: "md:col-span-5",
    bg: "bg-pastel-pink",
    blobPos: "-left-10 -bottom-10",
    icon: "diamond",
    iconColor: "text-accent-magenta",
    title: "Branding & Logo",
    lead: "Position the Brand.",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse dicta sunt explicabo. Crafting visual identities that resonate and endure.",
  },
  {
    span: "md:col-span-6",
    bg: "bg-pastel-yellow",
    icon: "animation",
    iconColor: "text-tertiary",
    title: "Motion & Animation",
    lead: "Communicate to all.",
    body: "Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Bringing interfaces to life with purposeful, delightful motion.",
  },
  {
    span: "md:col-span-6",
    bg: "bg-surface-container",
    icon: "code",
    iconColor: "text-primary",
    title: "Development",
    lead: "Bringing work to life.",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Clean, scalable front-end execution.",
  },
];

const logos = [
  { name: "Slack", className: "font-bold tracking-tighter" },
  { name: "Dribbble", className: "font-bold italic" },
  { name: "Webflow", className: "font-medium tracking-widest uppercase" },
  { name: "Youtube", className: "font-bold text-red-500" },
  { name: "Figma", className: "font-light" },
];

const testimonials = [
  {
    name: "John Doe",
    role: "Marketing Manager",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1VZvKGlhnmu1sBn2dLDPkyb0KqvYNpKvnQAB03REhKkvdAMwxh8WAbd68tsOvx9YX8CR36cSGYpBjkMB0nf8J7TQxwF9rhEoYWt_Ju_-T5UC2Gx3Lombp23X4dhSxAWlWlpGIOHLlFRtPcpjoYdlQ_h0gnar5VPTsOsuud_GeMTo1OFsyEH2CFu7Gp4QIpBd-9FeDTPW1oYfLtOlmR069Wy6pJrEheLs8NU1ACcSMWsW1fichoeTKSqJjk",
  },
  {
    name: "Steve Mark",
    role: "Founder & Leader",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1XHeUfFl3ki-EFW19h6DY9vqESHVyW8dYUU11TeyDGo4GcJuHlT1ASTLHHBPCSDISd5swxNRVgKp06Lr6lgMDaQl5wL50YliBrEuRXOSUQu-GtSn_ShYlUnypkKkj_c0dnI9WqOAt6YccGxN5OhOo4WQgCianfHZuCHt1b3QQjEzunE84z5kWqXUd1qV1cPJEO5gZqkF2L3RrsFeuzIY2POgSoW0sfq12_LdC91cmaTQX0Vo1zvx1RuodA",
  },
  {
    name: "Sarah Smith",
    role: "Operations Team",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1XJkabWB7jX4AygwWAflcpI2Tezcdnawx6p8i6TDCgONTwbeOPAva6PNbr_JIZQZEycUQfYjK8h26ELNKi7IP6Lbl4DO7wJs_IHrmd-S6TjwuiQ5DweA3H7gEr1p0SEfVCCJAoSYPwFXOxAjL5Vau2b5QiSp_lyGTS7oDM5fhRsXQUFMrOsxa4LFaRLLvyC8QlD1e7KHKwQ8JPKhbL9Qd8K4u-hqrdpqfIINtjsDtgGQM38RMa9JQrqqno",
  },
];

export default function Expertise() {
  return (
    <div id="expertise">
      <section className="px-gutter py-section-v-mobile md:py-section-v max-w-container-max mx-auto text-center flex flex-col items-center">
        <span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-container-high px-4 py-2 rounded-full mb-stack-md inline-block">
          MY SKILLS
        </span>
        <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-stack-md">
          My Expertise
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Helping brands turn their ideas into high quality products through a comprehensive and
          strategic approach to digital design.
        </p>
      </section>

      <section className="px-gutter pb-section-v max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {items.map((item) => (
            <div
              key={item.title}
              className={`col-span-1 ${item.span} ${item.bg} rounded-xl p-8 md:p-12 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300`}
            >
              {item.blobPos && (
                <div
                  className={`absolute ${item.blobPos} w-40 h-40 bg-white/20 rounded-full blur-3xl group-hover:bg-white/30 transition-colors duration-500`}
                />
              )}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-stack-md shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <span
                  className={`material-symbols-outlined ${item.iconColor}`}
                  style={{ fontSize: "32px" }}
                >
                  {item.icon}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-stack-sm">
                {item.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                <strong className="text-primary font-semibold">{item.lead} </strong>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-section-v bg-surface-container-low">
        <div className="px-gutter max-w-container-max mx-auto text-center">
          <span className="font-label-caps text-label-caps text-on-surface-variant mb-stack-md block">
            COMPANIES
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-16">
            Customers & Clients
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className={`font-headline-md text-headline-md ${logo.className}`}
              >
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-gutter py-section-v max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <span className="font-label-caps text-label-caps text-on-surface-variant bg-pastel-yellow px-4 py-2 rounded-full mb-stack-md inline-block text-tertiary">
            CRAFT AMAZING
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Customer Testimonials</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-surface rounded-xl p-8 shadow-[0_8px_40px_rgb(0,0,0,0.03)] border border-surface-container hover:-translate-y-2 transition-transform duration-300"
            >
              <span className="material-symbols-outlined text-primary-fixed-dim text-4xl mb-4 block">
                format_quote
              </span>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 italic">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                in a piece of classical.
              </p>
              <div className="flex items-center gap-4">
                <img
                  alt={`Headshot of ${t.name}`}
                  className="w-12 h-12 rounded-full object-cover"
                  src={t.image}
                />
                <div>
                  <div className="font-bold text-primary">{t.name}</div>
                  <div className="font-meta text-meta text-on-surface-variant">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
