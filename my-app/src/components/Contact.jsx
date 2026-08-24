export default function Contact() {
  return (
    <div
      className="flex-grow w-full max-w-container-max mx-auto px-gutter py-section-v-mobile md:py-section-v"
      id="contact"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md md:gap-gutter items-start">
        <div className="flex flex-col gap-stack-md md:pr-12">
          <div>
            <span className="inline-block px-4 py-2 bg-pastel-blue text-on-secondary-container rounded-full font-label-caps text-label-caps mb-stack-sm uppercase tracking-widest">
              Contact Me
            </span>
            <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-stack-sm">
              Got a Project? Lets Talk!
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              I'm currently available for freelance work and new opportunities. Reach out and
              let's create something serene and impactful.
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-subtle flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="font-meta text-meta text-outline">Email</p>
                <a
                  className="font-headline-md text-[24px] font-semibold text-primary hover:text-accent-magenta transition-colors"
                  href="mailto:hello@nero.com"
                >
                  hello@nero.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0_20px_60px_rgba(5,5,25,0.03)] border border-surface-variant relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-pastel-pink rounded-full blur-[80px] opacity-50 pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-pastel-blue rounded-full blur-[80px] opacity-50 pointer-events-none" />
          <form className="relative z-10 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="name">
                Name
              </label>
              <input
                className="w-full bg-surface-subtle border-none rounded-lg px-4 py-4 font-body-md text-on-surface focus:ring-0 input-glow transition-shadow outline-none"
                id="name"
                placeholder="Jason Doe"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="email">
                Email
              </label>
              <input
                className="w-full bg-surface-subtle border-none rounded-lg px-4 py-4 font-body-md text-on-surface focus:ring-0 input-glow transition-shadow outline-none"
                id="email"
                placeholder="hello@example.com"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full bg-surface-subtle border-none rounded-lg px-4 py-4 font-body-md text-on-surface focus:ring-0 input-glow transition-shadow outline-none resize-none"
                id="message"
                placeholder="Tell me about your project..."
                rows={4}
              />
            </div>
            <button
              className="mt-4 w-full md:w-auto self-start px-8 py-4 bg-primary-container text-on-error rounded-full font-label-caps text-label-caps hover:scale-[1.02] transition-transform duration-200 shadow-[0_10px_40px_rgba(29,29,51,0.1)] flex items-center justify-center gap-2"
              type="submit"
            >
              Send Message
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
