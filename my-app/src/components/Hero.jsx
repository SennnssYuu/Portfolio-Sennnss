export default function Hero() {
  return (
    <section
      className="w-full px-gutter py-section-v-mobile md:py-section-v max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-16 relative"
      id="home"
    >
      <div className="flex-1 space-y-stack-md z-10">
        <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary">
          Hey, I'm a digital product designer.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          Hi, I'm Jason a freelance web designer from San-Francisco. I help brands turn their
          ideas into high quality products.
        </p>
        <div className="pt-8">
          <p className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase">
            Join my newsletter and get free strategy!
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md">
            <input
              className="flex-1 bg-surface-subtle border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-fixed outline-none text-on-surface"
              placeholder="Your email address"
              type="email"
            />
            <button
              className="bg-primary-container text-on-primary font-label-caps text-label-caps px-6 py-3 rounded-full hover:scale-105 transition-transform duration-200 whitespace-nowrap"
              type="submit"
            >
              Explore
            </button>
          </form>
        </div>
      </div>
      <div className="flex-1 relative w-full flex justify-center md:justify-end">
        <div className="relative w-full max-w-md aspect-[3/4] md:aspect-square bg-pastel-yellow rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(29,29,51,0.05)]">
          <img
            className="w-full h-full object-cover object-center absolute inset-0"
            alt="Portrait of Jason, a digital product designer"
            src="https://lh3.googleusercontent.com/aida/AEtjO1XS1NB35SqzOe6N1-qy_ODa_YzoUyzOVmXDF1fTSvqBBypVRyhK2nUM-TA3jZqqXH3C7oq6d6d5qE395ZTvY1ninNAxkQQaTKRcLV3xYfn-IsucEv4KSqMOTbOrALLgcSvtk1kG6MqCNLdddE9YoHXvk0NiOuSRa3rRBcMaG-xpfmL0_vMaTIlMsAlF6CZfUtUVnzWVQ5SiqybtM5SekDJd9JU1Pt9IpDCNQf8kV9i2yIik1eaFeSZocig"
          />
        </div>
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-pastel-blue rounded-full blur-2xl opacity-60 -z-10" />
        <div className="absolute -top-8 -right-8 w-40 h-40 bg-pastel-pink rounded-full blur-2xl opacity-60 -z-10" />
      </div>
    </section>
  );
}
