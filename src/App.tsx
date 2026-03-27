import { useEffect, useState } from "react";

const tacticalFont = '"Teko", "Bebas Neue", sans-serif';

const headerLogo =
  "https://th.bing.com/th/id/OIP.D0ASJWRsTOhz4imCJIymaQAAAA?w=145&h=150&c=7&r=0&o=7&pid=1.7&rm=3";

const heroLogo = "/tna-armory-logo-web-transparent-removebg-preview.png";

const partners = [
  {
    name: "Byrna",
    logo: "https://th.bing.com/th/id/OIP.xotQZBTwnX2yDjaPSjT_wgHaBe?w=307&h=70&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    name: "LAPG",
    logo: "https://th.bing.com/th/id/OIP.7ybl4qjs8Gt1R2qMMjTA9QHaCS?w=336&h=108&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    name: "Right to Bear Insurance",
    logo: "https://tse4.mm.bing.net/th/id/OIP.9TWnLKDAPxY1OiQW0yd9hAHaD5?pid=ImgDet&w=206&h=108&c=7&o=7&rm=3",
  },
  {
    name: "High Desert Defensive Solutions",
    logo: "https://th.bing.com/th/id/OIP.y1_sZqTydH92bg_7Rij2NwHaHa?w=178&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    name: "StopBox",
    logo: "https://th.bing.com/th/id/OIP.ME96qxwtx9DXQjYywFtaqgAAAA?w=281&h=72&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    name: "Dealer Brand 1",
    logo: "https://th.bing.com/th/id/OIP.A-Zuh6FSlVZlb5mpVl12lQHaHa?w=173&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    name: "Dealer Brand 2",
    logo: "https://th.bing.com/th/id/OIP.k3-AMRWBrwLII3IHyq4tOQHaCI?w=329&h=100&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    name: "Dealer Brand 3",
    logo: "https://th.bing.com/th/id/OIP.erFGGNchX2zoxyqunr9BOwHaCQ?w=338&h=106&c=7&r=0&o=7&pid=1.7&rm=3",
  },
];

const dealerStrip = [...partners, ...partners];

const services = [
  "Firearm Sales",
  "Gunsmith Services",
  "Cleaning & Maintenance",
  "Transfers & Trade-Ins",
  "Tactical Gear",
  "Defensive Equipment",
];

const gallery: { name: string; image: string }[] = [
  {
    name: "Store Interior",
    image: "public/inside.jpg",
  },
  {
    name: "Featured Firearms",
    image: "public/featured firearms.jpg",
  },
  {
    name: "Tactical Gear Display",
    image: "public/tactical display.jpg",
  },
];

const storefrontPhoto =
  "public/store front.jpg";

const merch = [
  {
    name: "Hoodie",
    image:
      "public/hoodie.jpg",
  },
  {
    name: "Shirt",
    image:
      "public/shirt.jpg",
  },
  {
    name: "Hat",
    image:
      "public/hat.jpg",
  },
  {
    name: "Patch on Vest",
    image:
      "public/patch.jpg",
  },
  {
    name: "Gun Box",
    image:
      "public/box.jpg",
  },
  {
    name: "T&A Armory Truck",
    image:
      "public/truck.jpg",
  },
];

const reviews = [
  {
    name: "Stew",
    text: "Great customer service and a solid tactical selection.",
    rating: 5,
  },
  {
    name: "Nick",
    text: "Helpful, knowledgeable, and easy to work with.",
    rating: 5,
  },
  {
    name: "Amber",
    text: "Clean store, great gear, and friendly staff.",
    rating: 5,
  },
];

const hours = [
  "Monday – Friday: 4:30 PM – 8:00 PM",
  "Flex Friday: 9:00 AM – 6:00 PM",
  "Saturday: 9:00 AM – 6:00 PM",
];

const address = ["1615 N Down Suite B", "Ridgecrest, CA 93555"];

const currentGuns = [
  { name: "Tisas PX-9", price: "$690", image: "public/tisas.png" },
  { name: "PSA AR15", price: "$1050", image: "public/psa 2.png" },
  { name: "Canik Mete MC9 Prime", price: "$700", image: "public/prime 2.png" },
  { name: "Remington 1100", price: "$720", image: "public/1100 2.png" },
  { name: "Taurus 856", price: "$450", image: "public/856 2.png" },
  { name: "Ruger 10/22", price: "$400", image: "public/1022 2.png" },
  { name: "Smith & Wesson 1950", price: "$1750", image: "public/1950 2.png" },
  { name: "Anschutz 64", price: "$950", image: "public/64 2.png" },
  { name: "Smith & Wesson k22", price: "$712", image: "public/k22 2.png" },
  { name: "Pedersoli 1854", price: "$1650", image: "public/1874 2.png" },
  { name: "Smith & Wesson 25-2", price: "$1162", image: "public/25-2 2.png" },
  { name: "Smith & Wesson 35-1", price: "$1051", image: "public/35-1 2.png" },
];

function TnaArmoryWebsite() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [ageVerified, setAgeVerified] = useState(false);
  const [selectedGun, setSelectedGun] = useState<string | null>(null);
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryPhone, setInquiryPhone] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");

  useEffect(() => {
    const move = (e: globalThis.MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const closeInquiry = () => {
    setSelectedGun(null);
    setInquiryName("");
    setInquiryPhone("");
    setInquiryEmail("");
  };




  

  

  return (
    <>
      {!ageVerified && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-[1.75rem] border border-[#e6cf86]/25 bg-[#10150e] p-6 text-center shadow-2xl shadow-black/40 sm:p-8">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#e6cf86]">
              Age Verification
            </div>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em] text-white sm:text-4xl">
              21+ Only
            </h2>
            <p className="mt-4 text-base leading-7 text-[#e8e2d2]">
              By entering this website, you confirm that you are 21 years of age or older.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={() => setAgeVerified(true)}
                className="rounded-xl bg-[#e6cf86] px-6 py-3 text-sm font-black uppercase tracking-[0.1em] text-black transition hover:brightness-110"
              >
                I Am 21+
              </button>
              <a
                href="https://www.google.com"
                className="rounded-xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:bg-white/15"
              >
                Exit Site
              </a>
            </div>
          </div>
        </div>
      )}

      <div style={{ fontFamily: tacticalFont }} className="min-h-screen bg-[#1c2518] text-[#f6f1e4]">
        {selectedGun && (
          <div className="fixed inset-0 z-[210] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
            <div className="w-full max-w-2xl rounded-[1.75rem] border border-white/10 bg-[#10150e] p-6 shadow-2xl shadow-black/40 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#e6cf86]">
                    Inquire About This Gun
                  </div>
                  <h2 className="mt-2 text-3xl font-black uppercase tracking-[-0.04em] text-white sm:text-4xl">
                    {selectedGun}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={closeInquiry}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-black uppercase tracking-[0.1em] text-white hover:bg-white/10"
                >
                  Close
                </button>
              </div>

              <div className="mt-6 grid gap-4">
                <input
                  type="text"
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  placeholder="Your Name"
                  className="rounded-xl border border-white/10 bg-[#11180f] px-4 py-3 text-white placeholder:text-white/40"
                />
                <input
                  type="tel"
                  value={inquiryPhone}
                  onChange={(e) => setInquiryPhone(e.target.value)}
                  placeholder="Phone Number"
                  className="rounded-xl border border-white/10 bg-[#11180f] px-4 py-3 text-white placeholder:text-white/40"
                />
                <input
                  type="email"
                  value={inquiryEmail}
                  onChange={(e) => setInquiryEmail(e.target.value)}
                  placeholder="Email Address"
                  className="rounded-xl border border-white/10 bg-[#11180f] px-4 py-3 text-white placeholder:text-white/40"
                />
              </div>

              <form
                action="https://formsubmit.co/info@tnaarmory.com"
                method="POST"
                className="mt-6 grid gap-4"
              >
                <input type="hidden" name="_subject" value={`Gun Inquiry - ${selectedGun}`} />
                <input type="hidden" name="gun" value={selectedGun ?? ""} />

                <input
                  type="text"
                  name="name"
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  placeholder="Your Name"
                  required
                  className="rounded-xl border border-white/10 bg-[#11180f] px-4 py-3 text-white"
                />

                <input
                  type="tel"
                  name="phone"
                  value={inquiryPhone}
                  onChange={(e) => setInquiryPhone(e.target.value)}
                  placeholder="Phone Number"
                  required
                  className="rounded-xl border border-white/10 bg-[#11180f] px-4 py-3 text-white"
                />

                <input
                  type="email"
                  name="email"
                  value={inquiryEmail}
                  onChange={(e) => setInquiryEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="rounded-xl border border-white/10 bg-[#11180f] px-4 py-3 text-white"
                />

                <button
                  type="submit"
                  className="rounded-xl bg-[#e6cf86] px-6 py-3 text-sm font-black uppercase tracking-[0.1em] text-black hover:brightness-110"
                >
                  Send Inquiry
                </button>
              </form>

              <p className="mt-4 text-sm leading-6 text-[#d5d9c2]">
                This sends directly to info@tnaarmory.com from your website.
              </p>
            </div>
          </div>
        )}
        <style>{`
          @keyframes dealer-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>

        <div className="fixed inset-0 -z-30 bg-gradient-to-b from-[#3d4f36] via-[#1c2518] to-[#10150e]" />
        <div className="fixed inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:28px_28px] opacity-20" />
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(185,204,145,0.16),transparent_30%)]" />

        <div
          className="pointer-events-none fixed z-[100] hidden md:block"
          style={{ left: cursor.x - 20, top: cursor.y - 20 }}
        >
          <div className="relative h-10 w-10 rounded-full border border-[#d9c98b]/70">
            <div className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-[#d9c98b]" />
            <div className="absolute bottom-0 left-1/2 h-3 w-px -translate-x-1/2 bg-[#d9c98b]" />
            <div className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-[#d9c98b]" />
            <div className="absolute right-0 top-1/2 h-px w-3 -translate-y-1/2 bg-[#d9c98b]" />
            <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9c98b]" />
          </div>
        </div>

        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#12180f]/95 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <img
                src={headerLogo}
                alt="T&A Armory logo"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <div className="text-lg font-black uppercase tracking-[0.14em] sm:text-xl">
                  T&A Armory LLC
                </div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#d5d9c2] sm:text-xs">
                  Veteran Owned &amp; Operated
                </div>
              </div>
            </div>

            <nav className="hidden gap-5 text-xs font-bold uppercase tracking-[0.12em] text-[#e7e2d0] lg:flex">
              <a href="#dealers" className="hover:text-white">Dealers</a>
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#gallery" className="hover:text-white">Gallery</a>
              <a href="#merch" className="hover:text-white">Merch</a>
              <a href="#reviews" className="hover:text-white">Reviews</a>
              <a href="#current-guns" className="hover:text-white">Current Guns</a>
              <a href="#gunsmith" className="hover:text-white">Gunsmith</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
          </div>
        </header>

        <main>
          <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <img
                src={heroLogo}
                alt="T&A Armory background"
                className="h-full max-h-[560px] w-full object-contain opacity-20 grayscale mix-blend-multiply brightness-[0.8] contrast-[1.1]"
              />
            </div>

            <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <h1 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-5xl md:text-7xl">
                  Built with grit.
                  <br />
                  Ready for action.
                </h1>

                <p className="mt-5 max-w-2xl text-lg leading-7 text-[#e8e2d2] sm:text-xl">
                  Firearms, tactical gear, transfers, and hands-on service for the Ridgecrest community.
                </p>

                <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
                  <a
                    href="tel:+17605901992"
                    className="rounded-xl bg-[#e6cf86] px-5 py-3 text-xs font-black uppercase tracking-[0.1em] text-black transition hover:brightness-110 sm:px-6 sm:text-sm"
                  >
                    Call (760) 590-1992
                  </a>
                  <a
                    href="mailto:info@tnaarmory.com"
                    className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-xs font-black uppercase tracking-[0.1em] text-white transition hover:bg-white/15 sm:px-6 sm:text-sm"
                  >
                    Email Us
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Veteran Owned",
                    "Authorized Dealers",
                    "Transfers Available",
                    "Tactical Gear",
                    "Ridgecrest, CA",
                  ].map((badge) => (
                    <div
                      key={badge}
                      className="rounded-full border border-[#e6cf86]/25 bg-[#151d13] px-3 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-[#f1d98d]"
                    >
                      {badge}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-[#202c1c]/80 p-5 shadow-2xl shadow-black/30 sm:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[#556f4b] bg-[#556f4b]/20 p-5">
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#d7ddc7]">Primary Phone</div>
                    <a href="tel:+17605901992" className="mt-2 block text-lg font-black sm:text-xl">(760) 590-1992</a>
                  </div>
                  <div className="rounded-2xl border border-[#6f8455] bg-[#6f8455]/20 p-5">
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#d7ddc7]">Secondary Phone</div>
                    <a href="tel:+17605762578" className="mt-2 block text-lg font-black sm:text-xl">(760) 576-2578</a>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#d7ddc7]">Email</div>
                    <a href="mailto:info@tnaarmory.com" className="mt-2 block break-all text-lg font-black sm:text-xl">info@tnaarmory.com</a>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#d7ddc7]">Hours</div>
                    <div className="mt-2 space-y-1 text-sm font-semibold text-[#f0ecdf] sm:text-base">
                      {hours.map((item) => (
                        <div key={item}>{item}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="dealers" className="px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0f140d]/85 p-4 sm:p-5">
              <div className="mb-4">
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#d5d9c2]">
                  Authorized Brands
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#12180f] py-5">
                <div
                  className="flex min-w-max items-center gap-8 px-6"
                  style={{ animation: "dealer-scroll 28s linear infinite" }}
                >
                  {dealerStrip.map((partner, index) => (
                    <div
                      key={`${partner.name}-${index}`}
                      className="group relative flex min-w-[210px] items-center justify-center overflow-hidden rounded-xl border border-[#6f6a55]/40 bg-[linear-gradient(180deg,rgba(65,68,60,0.92)_0%,rgba(28,31,26,0.98)_100%)] px-6 py-4 transition-all duration-300 hover:border-[#e6cf86]/45 hover:shadow-[0_0_18px_rgba(230,207,134,0.28)]"
                    >
                      <div className="pointer-events-none absolute inset-[1px] rounded-[10px] border border-white/5" />
                      <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[#e6cf86]/35 to-transparent" />
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="relative z-10 max-h-16 max-w-full object-contain mix-blend-lighten drop-shadow-[0_0_10px_rgba(255,255,255,0.08)] transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-6 rounded-[1.75rem] border border-white/10 bg-[#10170f]/88 p-6 sm:p-8 md:grid-cols-[1.05fr_0.95fr] md:p-10">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#11180f]">
                <img
                  src={storefrontPhoto}
                  alt="T&A Armory storefront"
                  className="h-full min-h-[320px] w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#e6cf86]">
                  Visit The Armory
                </div>
                <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.05em] sm:text-4xl md:text-5xl">
                  See The Shop.
                  <br />
                  Gear Up In Person.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-[#e8e2d2] sm:text-lg">
                  Stop by T&A Armory in Ridgecrest for firearms, tactical gear, transfers, and hands-on service from a veteran-owned local shop built for real customers.
                </p>

                <div className="mt-6 space-y-2 text-sm font-bold uppercase tracking-[0.12em] text-[#d5d9c2] sm:text-base">
                  {address.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                  <div>(760) 590-1992</div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="tel:+17605901992"
                    className="rounded-xl bg-[#e6cf86] px-5 py-3 text-xs font-black uppercase tracking-[0.1em] text-black transition hover:brightness-110 sm:px-6 sm:text-sm"
                  >
                    Call The Shop
                  </a>
                  <a
                    href="#gallery"
                    className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-xs font-black uppercase tracking-[0.1em] text-white transition hover:bg-white/15 sm:px-6 sm:text-sm"
                  >
                    View Gallery
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-white/10 bg-white/5 p-6 sm:p-8 md:p-10">
              <h2 className="text-3xl font-black uppercase tracking-[-0.05em] sm:text-4xl md:text-5xl">Services</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                  <div
                    key={service}
                    className={`rounded-xl border p-5 ${
                      index % 3 === 0
                        ? "border-[#556f4b] bg-[#556f4b]/15"
                        : index % 3 === 1
                          ? "border-[#6f8455] bg-[#6f8455]/15"
                          : "border-[#d9c98b]/20 bg-[#d9c98b]/10"
                    }`}
                  >
                    <div className="text-lg font-black uppercase leading-6">{service}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="gallery" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-white/10 bg-[#202c1c]/70 p-6 sm:p-8 md:p-10">
              <h2 className="text-3xl font-black uppercase tracking-[-0.05em] sm:text-4xl md:text-5xl">Gallery</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
                {gallery.map((item) => (
                  <div key={item.name} className="overflow-hidden rounded-2xl border border-white/10 bg-[#263420]">
                    <div className="h-52 overflow-hidden sm:h-56">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-4 text-sm font-black uppercase tracking-[0.08em]">
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="merch" className="px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-white/10 bg-white/5 p-6 sm:p-8 md:p-10">
              <h2 className="text-3xl font-black uppercase tracking-[-0.05em] sm:text-4xl md:text-5xl">Merchandise</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {merch.map((item) => (
                  <div key={item.name} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#263420]">
                    <div className="h-[420px] w-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4 text-center text-sm font-black uppercase tracking-[0.08em]">
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="reviews" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-white/10 bg-[#202c1c]/70 p-6 sm:p-8 md:p-10">
              <h2 className="text-3xl font-black uppercase tracking-[-0.05em] sm:text-4xl md:text-5xl">Google Reviews</h2>
              <div className="mt-8 grid gap-4 lg:grid-cols-3 sm:gap-6">
                {reviews.map((review) => (
                  <div key={review.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <div className="text-lg text-[#efe2ae]">{"★".repeat(review.rating)}</div>
                    <div className="mt-4 text-base leading-7 text-[#f1edde]">{review.text}</div>
                    <div className="mt-5 text-sm font-black uppercase tracking-[0.08em] text-[#d7ddc7]">{review.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="current-guns" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-white/10 bg-[#202c1c]/70 p-6 sm:p-8 md:p-10">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#e6cf86]">
                    In Stock Now
                  </div>
                  <h2 className="text-3xl font-black uppercase tracking-[-0.05em] sm:text-4xl md:text-5xl">
                    Current Guns
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-6 text-[#d5d9c2] sm:text-base">
                  Add your current in-stock firearms here with a picture and price for each one.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 sm:gap-6">
                {currentGuns.map((gun, index) => (
                  <div
                    key={`${gun.name}-${index}`}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-[#263420]"
                  >
                    <div className="h-64 overflow-hidden bg-black/25">
                      <img
                        src={gun.image}
                        alt={gun.name}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-5 text-center">
                      <div className="text-base font-black uppercase tracking-[0.08em] sm:text-lg">
                        {gun.name}
                      </div>
                      <div className="mt-2 text-2xl font-black text-[#e6cf86]">
                        {gun.price}
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedGun(gun.name)}
                        className="mt-4 rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:bg-white/15"
                      >
                        Make Inquiry
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="gunsmith" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-5xl rounded-[1.75rem] border border-white/10 bg-[#202c1c]/70 p-6 sm:p-8 md:p-10">
              <h2 className="text-3xl font-black uppercase tracking-[-0.05em] sm:text-4xl md:text-5xl">
                Gunsmith Inquiries
              </h2>

              <p className="mt-4 max-w-2xl text-[#e8e2d2]">
                Need gunsmith work or have questions about repairs, modifications, or maintenance? Send us the details and we will get back to you.
              </p>

              <form
                action="mailto:info@tnaarmory.com"
                method="POST"
                encType="text/plain"
                className="mt-8 grid gap-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="rounded-xl border border-white/10 bg-[#11180f] px-4 py-3 text-white"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="rounded-xl border border-white/10 bg-[#11180f] px-4 py-3 text-white"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="rounded-xl border border-white/10 bg-[#11180f] px-4 py-3 text-white"
                />

                <textarea
                  name="description"
                  placeholder="Describe the gunsmith work or issue"
                  rows={5}
                  required
                  className="rounded-xl border border-white/10 bg-[#11180f] px-4 py-3 text-white"
                />

                <button
                  type="submit"
                  className="rounded-xl bg-[#e6cf86] px-6 py-3 text-sm font-black uppercase tracking-[0.1em] text-black hover:brightness-110"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </section>

          <section id="contact" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-6 rounded-[1.75rem] border border-white/10 bg-[#202c1c]/70 p-6 sm:p-8 md:grid-cols-[1.05fr_0.95fr] md:p-10">
              <div>
                <h2 className="text-3xl font-black uppercase tracking-[-0.05em] sm:text-4xl md:text-5xl">Contact</h2>
                <div className="mt-7 flex flex-wrap gap-3 sm:gap-4">
                  <a href="tel:+17605901992" className="rounded-xl bg-[#e6cf86] px-5 py-3 text-xs font-black uppercase tracking-[0.1em] text-black sm:px-6 sm:text-sm">Call Primary</a>
                  <a href="mailto:info@tnaarmory.com" className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-xs font-black uppercase tracking-[0.1em] text-white sm:px-6 sm:text-sm">Email Us</a>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="space-y-4 text-[#f1edde]">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#d7ddc7]">Address</div>
                    <div className="mt-1 text-lg font-black leading-7">
                      {address.map((line) => (
                        <div key={line}>{line}</div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#d7ddc7]">Primary Phone</div>
                    <a href="tel:+17605901992" className="mt-1 block text-lg font-black">(760) 590-1992</a>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#d7ddc7]">Secondary Phone</div>
                    <a href="tel:+17605762578" className="mt-1 block text-lg font-black">(760) 576-2578</a>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#d7ddc7]">Email</div>
                    <a href="mailto:info@tnaarmory.com" className="mt-1 block break-all text-lg font-black">info@tnaarmory.com</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 bg-[#0f140d] px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
            <div>
              <div className="text-xl font-black uppercase tracking-[0.12em]">T&A Armory LLC</div>
              <div className="mt-3 space-y-1 text-sm text-[#d5d9c2]">
                <div>1615 N Down Suite B</div>
                <div>Ridgecrest, CA 93555</div>
              </div>
            </div>

            <div>
              <div className="text-sm font-bold uppercase tracking-[0.14em] text-[#e6cf86]">Contact</div>
              <div className="mt-3 space-y-2 text-sm text-[#d5d9c2]">
                <div>(760) 590-1992</div>
                <div>(760) 576-2578</div>
                <div>info@tnaarmory.com</div>
              </div>
            </div>

            <div>
              <div className="text-sm font-bold uppercase tracking-[0.14em] text-[#e6cf86]">Hours</div>
              <div className="mt-3 space-y-1 text-sm text-[#d5d9c2]">
                {hours.map((h) => (
                  <div key={h}>{h}</div>
                ))}
              </div>

              <div className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-[#e6cf86]">Follow</div>
              <div className="mt-2 flex gap-3 text-sm text-[#d5d9c2]">
                <a href="https://www.facebook.com/tnaarmory/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
                <a href="https://www.instagram.com/tnaarmory" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
                <a href="#" className="hover:text-white">Google</a>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center text-xs text-[#9aa18d]">
            © {new Date().getFullYear()} T&A Armory LLC • Veteran Owned &amp; Operated
          </div>
        </footer>
      </div>
    </>
  );
}

export default function App() {
  return <TnaArmoryWebsite />;
}
