import svgPaths from "./svg-lp82fqla5m";
import imgLogoDepartementAude2015Svg1 from "./7558ed895aaa3f206abdc81f180261131959d71e.png";
import imgPaysCathareHeader2 from "./07b520834633ef8a41d86ef107c3db341e201b41.png";
import imgImageS8FapvHhvmg8XHldh4MExJJeUu0Ie11 from "../imports/ProjectPageTemplate/Contexte.png";
import imgPaysCathareContext1 from "./3de189da9d9dc08ee321ea122859c1e52e43750b.png";
import imgImageQud9Qbfzrz2Zym6Av1Vo3HYmCbUAq11 from "../imports/ProjectPageTemplate/Besoin.png";
import imgPaysCathareNeed1 from "./c9cf790126795d1d731546779374b69ee20e2243.png";
import imgImageGY5MF4INjvyxNpHsvXfGMbzE9RBzQk1 from "../imports/ProjectPageTemplate/Solution.png";
import imgPaysCathareSolution1 from "./d165cb3f8fe7dfa59d20702ebae849df11fb421f.png";
import { imgPaysCathareHeader1 } from "./svg-47hqa";
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

function Header() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[1060px]" data-name="Header">
      <BlackPawsLogoWhite className="overflow-clip relative shrink-0 size-[85px]" />
      <Nav />
    </div>
  );
}

function ProjectSubtitle() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative shrink-0 w-full" data-name="Project subtitle">
      <div className="flex h-[4px] items-center justify-center relative shrink-0 w-[50px]">
        <div className="flex-none rotate-90">
          <div className="bg-[#432b60] h-[50px] relative w-[4px]" />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[22px] whitespace-nowrap">Project subtitle</p>
    </div>
  );
}

function TagBlock() {
  return (
    <div className="bg-[rgba(231,193,207,0.2)] content-stretch flex items-center justify-center overflow-clip px-[21px] py-[11px] relative rounded-[40px] shrink-0" data-name="tagBlock">
      <p className="[word-break:break-word] font-['Brother_1816:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[12px] text-center uppercase whitespace-nowrap">Tag1</p>
    </div>
  );
}

function TagBlock1() {
  return (
    <div className="bg-[rgba(231,193,207,0.2)] content-stretch flex items-center justify-center overflow-clip px-[21px] py-[11px] relative rounded-[40px] shrink-0" data-name="tagBlock">
      <p className="[word-break:break-word] font-['Brother_1816:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[12px] text-center uppercase whitespace-nowrap">Tag2</p>
    </div>
  );
}

function TagBlock2() {
  return (
    <div className="bg-[rgba(231,193,207,0.2)] content-stretch flex items-center justify-center overflow-clip px-[21px] py-[11px] relative rounded-[40px] shrink-0" data-name="tagBlock">
      <p className="[word-break:break-word] font-['Brother_1816:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[12px] text-center uppercase whitespace-nowrap">Tag3</p>
    </div>
  );
}

function Tags() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-name="tags">
      <TagBlock />
      <TagBlock1 />
      <TagBlock2 />
    </div>
  );
}

function TagsLogo() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Tags & logo">
      <Tags />
      <div className="h-[42.758px] relative shrink-0 w-[130px]" data-name="Logo_Département_Aude_2015.svg 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoDepartementAude2015Svg1} />
      </div>
    </div>
  );
}

function ProjectTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start px-[170px] relative shrink-0 w-full" data-name="PROJECT TITLE">
      <p className="[word-break:break-word] font-['Operetta_8:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[42px] text-shadow-[0px_0px_48px_rgba(67,43,96,0.3)] w-full">Project title</p>
      <ProjectSubtitle />
      <TagsLogo />
    </div>
  );
}

function Cover() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="COVER">
      <div className="col-1 h-[350px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[1280px_350px] ml-0 mt-0 relative row-1 w-[1280px]" style={{ maskImage: `url("${imgPaysCathareHeader1}")` }} data-name="PaysCathare_header 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPaysCathareHeader2} />
      </div>
      <div className="bg-gradient-to-t col-1 from-[#54648e] h-[350px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[1280px_350px] mix-blend-hard-light ml-0 mt-0 relative row-1 to-[#ffd8e4] w-[1280px]" style={{ maskImage: `url("${imgPaysCathareHeader1}")` }} />
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col gap-[93px] h-[832px] items-center overflow-clip pb-[12px] pt-[32px] relative shrink-0 w-full" data-name="HERO">
      <Header />
      <ProjectTitle />
      <Cover />
    </div>
  );
}

function ContextTitle() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="contextTitle">
      <div className="relative shrink-0 size-[100px]" data-name="image-S8fapvHHVMG8xHldh4MExJJeUU0IE1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageS8FapvHhvmg8XHldh4MExJJeUu0Ie11} />
      </div>
      <p className="[word-break:break-word] font-['Operetta_8:Regular_Italic',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[38px] uppercase whitespace-nowrap">Context</p>
    </div>
  );
}

function ContextImage() {
  return (
    <div className="h-[350px] overflow-clip relative rounded-[48px] shrink-0 w-[400px]" data-name="contextImage">
      <div className="absolute h-[350px] left-0 top-0 w-[400px]" data-name="PaysCathare_context 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPaysCathareContext1} />
      </div>
    </div>
  );
}

function ContextContent() {
  return (
    <div className="content-stretch flex gap-[32px] items-start pb-[48px] relative shrink-0 w-full" data-name="contextContent">
      <div aria-hidden className="absolute border-[rgba(67,43,96,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <ContextImage />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Forma_DJR_Micro:Regular',sans-serif] h-[352px] leading-[normal] min-w-px not-italic relative text-[#432b60] text-[16px]">{`BlackPaws developed an immersive Travel Guide app for Cathar Country, commissioned by the region and Small Bang to enhance tourism through an innovative digital experience. Awarded Best Mobile & Tablet Application at the 2020 Communication Awards, the app offers visitors engaging, educational content to explore the region’s history, monuments, and landmarks. Available on iOS and Android, it features over 20 iconic sites—including Carcassonne and Peyrepertuse Castle—while also helping travelers plan their stay with maps of cultural sites, local cuisine, accommodations, and regional events.`}</p>
    </div>
  );
}

function Context() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Context">
      <ContextTitle />
      <ContextContent />
    </div>
  );
}

function NeedTitle() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="needTitle">
      <div className="relative shrink-0 size-[100px]" data-name="image-QUD9QBFZRZ2ZYM6AV1VO3hYmCbUAq1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageQud9Qbfzrz2Zym6Av1Vo3HYmCbUAq11} />
      </div>
      <p className="[word-break:break-word] font-['Operetta_8:Regular_Italic',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[38px] uppercase whitespace-nowrap">Need</p>
    </div>
  );
}

function NeedImage() {
  return (
    <div className="h-[350px] overflow-clip relative rounded-[48px] shrink-0 w-[400px]" data-name="needImage">
      <div className="absolute h-[350px] left-0 top-0 w-[400px]" data-name="PaysCathare_need 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPaysCathareNeed1} />
      </div>
    </div>
  );
}

function NeedContent() {
  return (
    <div className="content-stretch flex gap-[32px] items-start pb-[48px] relative shrink-0 w-full" data-name="needContent">
      <div aria-hidden className="absolute border-[rgba(67,43,96,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] min-w-px not-italic relative text-[#432b60] text-[16px]">The app offers tourists an immersive way to explore historic sites through augmented reality walks, interactive maps, and rich educational content. Developed by a multidisciplinary team of experts, it features fact sheets, audio guides, and interactive visuals that bring history to life. Fully accessible offline, the experience focuses on interactivity—placing visitors at the heart of the sites and allowing them to discover heritage as if they were living in the past.</p>
      <NeedImage />
    </div>
  );
}

function Need() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Need">
      <NeedTitle />
      <NeedContent />
    </div>
  );
}

function SolutionTitle() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="solutionTitle">
      <div className="relative shrink-0 size-[100px]" data-name="image-gY5mF4iNJVYXNpHsvXfGMbzE9rBZQk 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageGY5MF4INjvyxNpHsvXfGMbzE9RBzQk1} />
      </div>
      <p className="[word-break:break-word] font-['Operetta_8:Regular_Italic',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[38px] uppercase whitespace-nowrap">Solution</p>
    </div>
  );
}

function SolutionImage() {
  return (
    <div className="h-[350px] overflow-clip relative rounded-[48px] shrink-0 w-[400px]" data-name="solutionImage">
      <div className="absolute h-[350px] left-0 top-0 w-[400px]" data-name="PaysCathare_solution 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPaysCathareSolution1} />
      </div>
    </div>
  );
}

function SolutionContent() {
  return (
    <div className="content-stretch flex gap-[32px] items-start pb-[48px] relative shrink-0 w-full" data-name="solutionContent">
      <div aria-hidden className="absolute border-[rgba(67,43,96,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <SolutionImage />
      <div className="[word-break:break-word] flex-[1_0_0] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[0] min-w-px not-italic relative text-[#432b60] text-[16px]">
        <p className="leading-[normal] mb-0">The application was developed by BlackPaws teams in React-Native for seamless hybrid deployment on iOS and Android stores, without additional development.</p>
        <p className="leading-[normal]">It is also a hybrid application at the cutting edge of mobile technology, as it incorporates a genuine Serious Game, the magic monocle, developed in collaboration with the Kilosorus studio.</p>
      </div>
    </div>
  );
}

function Context1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Context">
      <SolutionTitle />
      <SolutionContent />
    </div>
  );
}

function ProjectContent() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center px-[90px] relative shrink-0 w-full" data-name="projectContent">
      <Context />
      <Need />
      <Context1 />
    </div>
  );
}

function ProjectDescription() {
  return (
    <div className="relative shrink-0 w-full" data-name="projectDescription">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[60px] items-center px-[170px] relative size-full">
          <div className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#432b60] text-[22px] w-full">
            <p className="leading-[normal] mb-0">Cathar Country, the guide supports you all throughout your stay in Aude and immerses you in the heart of Cathar Country.</p>
            <p className="leading-[normal]">Thanks to the interactive map, you can prepare your stay: choose the accommodation, outdoor activities, restaurants and wine estates to discover!</p>
          </div>
          <ProjectContent />
          <div className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#432b60] text-[0px] w-full">
            <p className="leading-[normal] mb-0 text-[22px]">Since its launch in 2019, the app has been downloaded more than 20,000 times. It has a rating of 4.7/5 on the Apple Store and has received very positive feedback from users. An innovation that will appeal to history buffs and the whole family!</p>
            <p className="text-[22px]">
              <span className="leading-[normal]">{`To try it out for yourself, just go to: `}</span>
              <a className="cursor-pointer leading-[normal]" href="https://www.payscathare.org/les-applis" target="_blank">
                <span href="https://www.payscathare.org/les-applis" target="_blank">{`https://www.payscathare.org/les-applis`}</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CtAs() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="CTAs">
      <div className="bg-[rgba(231,193,207,0.3)] h-[54px] relative rounded-[48px] shrink-0" data-name="primaryButton">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[16px] items-center justify-center px-[48px] relative size-full">
            <p className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[22px] whitespace-nowrap">Discover our services</p>
          </div>
        </div>
      </div>
      <div className="bg-[#b3c9f5] h-[54px] relative rounded-[48px] shrink-0" data-name="secondaryButton">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[16px] items-center justify-center px-[48px] relative size-full">
            <p className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[22px] text-center whitespace-nowrap">Let’s talk</p>
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

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[167.312px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-0 relative w-[19.166px]">
            <div className="absolute inset-[-7.36px_-5.22%]">
              <svg className="block size-full" fill="none" height="14.7279" preserveAspectRatio="none" viewBox="0 0 21.1655 14.7279" width="21.1655">
                <path d={svgPaths.p1005b100} fill="#E7C1CF" id="Vector 9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Brother_1816:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e7c1cf] text-[16px] uppercase whitespace-nowrap">{` Previous project`}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Brother_1816:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e7c1cf] text-[16px] uppercase whitespace-nowrap">Next project</p>
      <div className="h-0 relative shrink-0 w-[19.166px]">
        <div className="absolute inset-[-7.36px_-5.22%]">
          <svg className="block size-full" fill="none" height="14.7279" preserveAspectRatio="none" viewBox="0 0 21.1655 14.7279" width="21.1655">
            <path d={svgPaths.p1005b100} fill="#E7C1CF" id="Vector 8" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PreviousNext() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1060px]" data-name="Previous / Next">
      <Frame />
      <Frame1 />
    </div>
  );
}

function ContactBlock() {
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
        <g clipPath="url(#clip0_0_79)" id="Octicons-mark-github 1">
          <path clipRule="evenodd" d={svgPaths.p4fe4000} fill="#432B60" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_79">
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
      <ContactBlock />
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

export default function ProjectPageTemplate() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[60px] items-center relative size-full" data-name="Project page - Template">
      <Hero />
      <ProjectDescription />
      <CtAs />
      <PreviousNext />
      <Footer />
    </div>
  );
}