import imgImageSxKrXPq5Lwl3Yt1N6RhzLkBsy0Suxp from "./71b72c14027fdb7ecf421eba8cb451cd2750bdc8.png";
import imgImageGngLsMOruOXjdF1Rtx2AjfpU3YzrIs1 from "./85240cb9b090b34d6f9a053f5a52223b573f244d.png";
import imgImage3JynLpogg5ZknunPaBpdOpEjJmZn5R from "./e4f34542a47f0780d4849110c2d01669882aab36.png";
import svgPaths from "./svg-6j4zn71xm4";
type NavbarProps = {
  className?: string;
  navbar?: "Default";
};

function Navbar({ className, navbar = "Default" }: NavbarProps) {
  return (
    <div className={className || "h-[54px] relative w-[450px]"}>
      <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <div className="bg-[#b3c9f5] content-stretch flex flex-col gap-[50px] items-center justify-center overflow-clip py-[48px] relative rounded-[50px] size-full" data-name="Navigation">
            <div className="flex h-[38px] items-center justify-center relative shrink-0 w-[19px]">
              <div className="-rotate-90 flex-none">
                <p className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] not-italic relative text-[#432b60] text-[16px] text-center whitespace-nowrap">Team</p>
              </div>
            </div>
            <div className="flex h-[97px] items-center justify-center relative shrink-0 w-[19px]">
              <div className="-rotate-90 flex-none">
                <p className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] not-italic relative text-[#432b60] text-[16px] text-center whitespace-nowrap">Our approach</p>
              </div>
            </div>
            <div className="flex h-[62px] items-center justify-center relative shrink-0 w-[19px]">
              <div className="-rotate-90 flex-none">
                <p className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] not-italic relative text-[#432b60] text-[16px] text-center whitespace-nowrap">Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type BlackPawsLogoWhiteProps = {
  className?: string;
  blackPawsLogo?: "BlackPaws logo2";
};

function BlackPawsLogoWhite({ className, blackPawsLogo = "BlackPaws logo2" }: BlackPawsLogoWhiteProps) {
  return (
    <div className={className || "overflow-clip relative size-[85px]"}>
      <div className="absolute h-[62.213px] left-[3.56px] top-[11.52px] w-[78.484px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="62.2135" preserveAspectRatio="none" viewBox="0 0 78.4838 62.2135" width="78.4838">
          <g id="Group 21">
            <path d={svgPaths.pa38b540} fill="#432B60" id="Union" />
            <path d={svgPaths.p26e2f80} fill="#432B60" id="Union_2" />
            <path d={svgPaths.pcca200} fill="#432B60" id="Union_3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[880px]" data-name="NAV">
      <Navbar className="h-[54px] relative shrink-0 w-[450px]" />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[1060px]" data-name="Header">
      <BlackPawsLogoWhite className="overflow-clip relative shrink-0 size-[85px]" />
      <Nav />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col h-[150px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Header">
      <Header1 />
    </div>
  );
}

function PageTitle() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[normal] not-italic relative shrink-0 text-[#432b60] w-full" data-name="pageTitle">
      <p className="font-['Operetta_8:Bold',sans-serif] min-w-full relative shrink-0 text-[52px] w-[min-content]">Let’s talk!</p>
      <p className="font-['Forma_DJR_Micro:Regular',sans-serif] relative shrink-0 text-[28px] w-[540px]">Tell us about your project and how we can help you create the best product!</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[#432b60] w-[220px]">
      <p className="font-['Forma_DJR_Micro:Bold',sans-serif] relative shrink-0 text-[22px] w-full">{`Contact email `}</p>
      <p className="font-['Forma_DJR_Micro:Regular',sans-serif] relative shrink-0 text-[16px] w-full">contact@blackpaws.fr</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[100px]" data-name="image-SxKrXPq5Lwl3YT1N6RhzLkBSY0suxp">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSxKrXPq5Lwl3Yt1N6RhzLkBsy0Suxp} />
      </div>
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#432b60] w-[132px]">
      <p className="font-['Forma_DJR_Micro:Bold',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[22px] w-[min-content]">Address</p>
      <div className="font-['Forma_DJR_Micro:Regular',sans-serif] leading-[0] relative shrink-0 text-[16px] whitespace-nowrap">
        <p className="leading-[normal] mb-0">122 Rue Amelot</p>
        <p className="leading-[normal]">75011 Paris, France</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[100px]" data-name="image-3JYNLpogg5zknunPABpdOpEjJmZN5R">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3JynLpogg5ZknunPaBpdOpEjJmZn5R} />
      </div>
      <Frame2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[16px] whitespace-nowrap">Our Github︎</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <p className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] not-italic relative text-[#432b60] text-[24px] whitespace-nowrap">↖</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[132px]">
      <p className="[word-break:break-word] font-['Forma_DJR_Micro:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#432b60] text-[22px] w-[min-content]">Social</p>
      <Frame6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[100px]" data-name="image-GNGLsMOruOXjdF1rtx2ajfpU3YzrIS 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageGngLsMOruOXjdF1Rtx2AjfpU3YzrIs1} />
      </div>
      <Frame5 />
    </div>
  );
}

function ContactBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-[388px]" data-name="contactBlock">
      <Frame1 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function InputText() {
  return (
    <div className="content-stretch flex items-center py-[8px] relative shrink-0 w-full" data-name="Input text">
      <div aria-hidden className="absolute border-[#b3c9f5] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8fa1c4] text-[16px] whitespace-nowrap">I have a wonderful project!</p>
    </div>
  );
}

function LabelInput() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Label + input">
      <p className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[22px] whitespace-nowrap">Subject</p>
      <InputText />
    </div>
  );
}

function InputText1() {
  return (
    <div className="content-stretch flex items-center py-[8px] relative shrink-0 w-full" data-name="Input text">
      <div aria-hidden className="absolute border-[#b3c9f5] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8fa1c4] text-[16px] whitespace-nowrap">name.firstname@company.com</p>
    </div>
  );
}

function LabelInput1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Label + input">
      <p className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[22px] whitespace-nowrap">Email</p>
      <InputText1 />
    </div>
  );
}

function InputText2() {
  return (
    <div className="content-stretch flex h-[200px] items-start py-[8px] relative shrink-0 w-full" data-name="Input text">
      <div aria-hidden className="absolute border-[#b3c9f5] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8fa1c4] text-[16px] whitespace-nowrap">Describe your project and needs in a few words</p>
    </div>
  );
}

function LabelInput2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Label + input">
      <p className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[22px] whitespace-nowrap">Message</p>
      <InputText2 />
    </div>
  );
}

function FormBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-[460px]" data-name="formBlock">
      <LabelInput />
      <LabelInput1 />
      <LabelInput2 />
      <div className="bg-[#b3c9f5] h-[54px] relative rounded-[48px] shrink-0" data-name="secondaryButton">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[16px] items-center justify-center px-[48px] relative size-full">
            <p className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[22px] text-center whitespace-nowrap">Send message</p>
            <div className="h-0 relative shrink-0 w-[14.084px]" data-name="Arrow right">
              <div className="absolute inset-[-7.36px_-7.1%_-7.36px_0]">
                <svg className="block size-full" fill="none" height="14.7279" preserveAspectRatio="none" viewBox="0 0 15.0845 14.7279" width="15.0845">
                  <path d={svgPaths.p1b2b3080} fill="#432B60" id="Arrow right" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentBlock() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="contentBlock">
      <ContactBlock />
      <FormBlock />
    </div>
  );
}

function LetsTalk() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-[1060px]" data-name="Let's talk!">
      <PageTitle />
      <ContentBlock />
    </div>
  );
}

function ContactBlock1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[400px]" data-name="contactBlock">
      <p className="[word-break:break-word] font-['Operetta_8:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#432b60] text-[42px] w-[min-content]">Bring your project to life together?</p>
      <p className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#432b60] text-[22px] w-[min-content]">{`Let's discuss how we can help you create exceptional experiences.`}</p>
      <div className="bg-[rgba(231,193,207,0.3)] h-[54px] relative rounded-[48px] shrink-0" data-name="primaryButton">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[16px] items-center justify-center px-[48px] relative size-full">
            <p className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[22px] whitespace-nowrap">{`Brief us on your project `}</p>
            <div className="h-0 relative shrink-0 w-[14.084px]" data-name="Arrow right">
              <div className="absolute inset-[-7.36px_-7.1%_-7.36px_0]">
                <svg className="block size-full" fill="none" height="14.7279" preserveAspectRatio="none" viewBox="0 0 15.0845 14.7279" width="15.0845">
                  <path d={svgPaths.p1b2b3080} fill="#432B60" id="Arrow right" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SitePlanBlock() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Forma_DJR_Micro:Regular',sans-serif] gap-[16px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 text-[#432b60] text-[22px] w-full" data-name="sitePlanBlock">
      <p className="relative shrink-0 w-full">Our services</p>
      <p className="relative shrink-0 w-full">Team</p>
      <p className="relative shrink-0 w-full">Our approach</p>
    </div>
  );
}

function Address() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Address">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="place">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 16 20" width="16">
            <path d={svgPaths.p2fcac600} fill="#432B60" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[16px] whitespace-nowrap">122 Rue Amelot, 75011 Paris, France</p>
    </div>
  );
}

function OcticonsMarkGithub() {
  return (
    <div className="h-[21.84px] relative shrink-0 w-[21px]" data-name="Octicons-mark-github 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="21.84" preserveAspectRatio="none" viewBox="0 0 21 21.84" width="21">
        <g clipPath="url(#clip0_0_72)" id="Octicons-mark-github 1">
          <path clipRule="evenodd" d={svgPaths.p4fe4000} fill="#432B60" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_72">
            <rect fill="white" height="21.84" width="21" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Social() {
  return (
    <div className="h-[38px] relative rounded-[30px] shrink-0" data-name="Social">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip px-[16px] relative rounded-[inherit] size-full">
        <OcticonsMarkGithub />
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#432b60] text-[14px] whitespace-nowrap">GitHub</p>
      </div>
      <div aria-hidden className="absolute border border-[#432b60] border-solid inset-0 pointer-events-none rounded-[30px]" />
    </div>
  );
}

function AddressBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[12.832px] items-start relative shrink-0 w-full" data-name="addressBlock">
      <Address />
      <Social />
    </div>
  );
}

function PlanBlock() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="planBlock">
      <SitePlanBlock />
      <AddressBlock />
    </div>
  );
}

function FooterContent() {
  return (
    <div className="content-stretch flex gap-[200px] items-start relative shrink-0 w-full" data-name="footerContent">
      <ContactBlock1 />
      <PlanBlock />
    </div>
  );
}

function LegalNotice() {
  return (
    <div className="h-[17px] relative shrink-0 w-[279px]" data-name="Legal notice">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Forma_DJR_Micro:Regular',sans-serif] leading-[0] left-[139.5px] not-italic text-[#432b60] text-[14px] text-center top-0 whitespace-nowrap">
        <span className="leading-[normal]">{`BlackPaws® - All rights reserved - `}</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid font-['Forma_DJR_Micro:Bold',sans-serif] leading-[normal] underline">Legal notice</span>
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-gradient-to-b from-[rgba(231,193,207,0)] relative shrink-0 to-[#e7c1cf] w-full" data-name="FOOTER">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center pb-[16px] pt-[42px] px-[170px] relative size-full">
          <FooterContent />
          <LegalNotice />
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-center relative size-full" data-name="Contact page">
      <Header />
      <LetsTalk />
      <Footer />
    </div>
  );
}