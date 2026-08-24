const projects = [
  {
    title: "Mobile App Design",
    tag: "UI/UX",
    tagBg: "bg-surface-container",
    href: "/projects/mobile",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1Uexdd9Q5PtrAMa6mo_8JvpHP_7dt_gTboxGeEHYWHrG1G5QajppcabW49SPk0-ry5cde8BUA005-8LcCHtmmmGAsh0mu95T21jZVHPPPv6RLh169WBJmxFa0OSUSROCK6sulnuxAch9jYxiEAsUTnhXybgV3vwPN26eS5TsznEOOzdM5xVmH-NLkAEEXZgz1HHeFEbKDJi8wiBVdzBiISX6MfqFjD1p_n1NYTMhyHy7cytfdvE_XRDlgk",
  },
  {
    title: "Food Application",
    tag: "Product Design",
    tagBg: "bg-pastel-yellow",
    href: "/projects/food",
    mtClass: "mt-0 md:mt-12",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1XZktQ19IWo_QskIXyOLayRReWuG1yNPv4QzMjSOtSRrOrKyuPZCmxd5FePGufZo5hyCfPMtpq_-u0UiK_FPW-oqfWNyy3-IOFXh7RT-OnvX62nIIkrKKFFnMCryMD2km1QBmsEQ1D50hdIa-y7MIf9nJOJqTG_y3mAgOy9-orqFdcvFqWgUvVXMstbH5iWV5a4GEM52o0tirwP6Ad57kEYJ6zkHb-fZuQGkBCNE_CjQcA1Dj2h_E08k_Q",
  },
  {
    title: "Music UI Challenge",
    tag: "Concept",
    tagBg: "bg-pastel-blue",
    href: "/projects/music",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1WC4bXs0kqsJkZ1HisDVHszjNBtS7nYwrs25x1KSyTeA8KLGN6CC0kdLVMUEXbr0W2Iv_b7qtSKpjhdmeTDvtuqbM_mqvmvIryMZxTLF0_6ACHNCLFS2uZhbuukD2hJCnN7SUahMLafkM-5c26oqL7KAqsLUtyXwpVZURvf4k2fIZ9zZglqrY_4UiAPbZn2BanqMO6FBaXZmrFmAhKTS23Y5vMW0wfnZWMJMr0DMg7m1DqBwNi6Y7C9GZk",
  },
  {
    title: "Dashboard UX",
    tag: "Web App",
    tagBg: "bg-surface-container",
    href: "/projects/dashboard-ux",
    mtClass: "mt-0 md:mt-12",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1XDgYKcnGwQDheRiPzz8loH2yNw2hByoGlq2hMuIKDzoBo78T49TaqbVrblsubBcWRLiR5npWP1H4agOg5C5Lfy9ZERKac-O9Kwu6bEKVOUbwjdGgy7aTCZFAn5SQ1TcvuTtEOznnd9n2SR1Ad4uG9Jn_0_L7Mxl9oD8QU6FNYhsAYBTTLWUTcSuDYZEn4SHolKuT6BMz3YySUN-esquQImiILbLqrggVj5bRQGsAOkcZJ7QL7LdsI7zNg",
  },
  {
    title: "Platform Development",
    tag: "Development",
    tagBg: "bg-pastel-pink",
    href: "/projects/platform",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1WEMzy54XXaczR67rZ9K0CqsrMr9mrDuu0Fnv76K2C8LgNN3TICRwx_7lEvqxg1tYF73WkEupn2kW0TdBGdmZzoZvl1IXjTaK0hYuhEdFaCSZ08-a_wv_BaODgTaGC2Ryuis6c6GqMGUSdOTHRhGRzrW20cmISqxybfFbSMtTibuPfR7ijkJTzn3OqJHmBwx4YVThMzW8rhhLGy8Br1I1uhe_yOl09SMp4ikl_Ju2cTsjB8lfgXfqBx4wU",
  },
  {
    title: "Financial Manager App",
    tag: "Fintech",
    tagBg: "bg-tertiary-fixed",
    href: "/projects/financial-manager-app",
    mtClass: "mt-0 md:mt-12",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1U4WoCM0TGe5l8HzgR4gN-NBuiVFZVk9e0wvlPZYZZiNcZrsGhAfvzQyqybEcm6_OAizIvTEq3wuRpuTXrqWOupynpCzfczojwwb9YbYHXJHZDoB4RSaNYBnQwxOn3EUjvXXuTiBy6d3NZB5xOl0Ef7hXitioNpFAq66EZGDQiS-Dhtggb2gMEdalGy-th3LivH5FXu7-aiOa96YSC9DCLhPhUolGOhj-ufL_L3u3tBuM_kpiOamnD-Pw",
  },
];

export default function Works() {
  return (
    <div
      className="flex-grow pt-section-v-mobile md:pt-section-v pb-section-v-mobile md:pb-section-v px-gutter max-w-container-max mx-auto w-full"
      id="works"
    >
      <section className="mb-section-v-mobile md:mb-section-v text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-stack-md">
        <div>
          <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-widest block mb-stack-sm">
            PORTFOLIO
          </span>
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary">
            All Creative Works
          </h1>
        </div>
        <a
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pastel-pink text-accent-magenta hover:scale-[1.02] transition-transform duration-200 font-label-caps uppercase tracking-widest text-label-caps"
          href="https://dribbble.com"
        >
          <span className="bg-accent-magenta text-white px-2 py-0.5 rounded-full text-[10px] mr-2">
            NEW
          </span>
          Discover all projects on Dribbble
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {projects.map((project) => (
          <article key={project.title} className={`group cursor-pointer ${project.mtClass || ""}`}>
            <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-6 bg-surface-subtle">
              <img
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={project.image}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
            </div>
            <div className="flex flex-col gap-2">
              <span
                className={`font-label-caps text-label-caps uppercase text-on-surface-variant ${project.tagBg} px-3 py-1 rounded-full w-fit`}
              >
                {project.tag}
              </span>
              <h3 className="font-headline-md text-headline-md text-primary group-hover:text-accent-magenta transition-colors">
                {project.title}
              </h3>
              <a
                className="font-meta text-meta text-outline group-hover:text-primary transition-colors flex items-center gap-1 mt-2"
                href={project.href}
              >
                See on Dribbble
                <span className="material-symbols-outlined text-sm">north_east</span>
              </a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
