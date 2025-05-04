"use client";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  return (
    <section id="Products" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Paket Jasuke Nyoss"
          paragraph="Pilih paket yang sesuai dengan kebutuhan Anda. Nikmati Jasuke Ori dan Jasuke Crunch dalam ukuran Regular atau Large."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
          {/* Regular Package */}
          <PricingBox
            packageName="Paket Regular"
            duration=""
            price=" 10.000"
            subtitle="Ukuran ideal untuk Anda yang ingin menikmati Jasuke dalam porsi standar."
          >
            <OfferList text="Jasuke Ori" status="active" />
            <OfferList text="Jasuke Crunch" status="active" />
            <OfferList text="Kemasan Praktis" status="active" />
            <OfferList text="Support Pelanggan" status="active" />
            <Image
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.mV3pE6ySeUgEXwddrB-wOAHaE7%3Fpid%3DApi&f=1&ipt=3824b47dd339ffa9f7cc2f134caf436dda8ac81d99ce41853cb228aaa9b36cd1&ipo=images"
              alt="Paket Regular"
              width={500}
              height={300}
              className="mt-4 rounded-md"
            />
          </PricingBox>

          {/* Large Package */}
          <PricingBox
            packageName="Paket Large"
            price=" 15.000"
            duration=""
            subtitle="Ukuran lebih besar untuk Anda yang ingin menikmati lebih banyak Jasuke."
          >
            <OfferList text="Jasuke Ori" status="active" />
            <OfferList text="Jasuke Crunch" status="active" />
            <OfferList text="Kemasan Menarik" status="active" />
            <OfferList text="Support Pelanggan Prioritas" status="active" />
            <Image
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.ZrBRdq0qOm9bFrELscfNTAHaE8%3Fpid%3DApi&f=1&ipt=8135c7163fff715e31998f9ef564abca968035bfc315bf3c6228233ac528ee1c&ipo=images"
              alt="Paket Large"
              width={500}
              height={300}
              className="mt-4 rounded-md"
            />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
