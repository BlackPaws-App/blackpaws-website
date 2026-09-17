import svgPaths from "./svg-hwmizm4k00";
import imgTeamPictures from "./d78815dcb9091c70add28c10b69a85b0caf3f2a0.png";
import imgTeamPictures1 from "./5b2d3deb2a6cc6eaab065a60fbba474d6e858e7c.png";
import imgImageByyH9ZcSaS0BJaw52WDgBgG6SVmW6K from "../imports/DesktopBlackPaws/Workshop.png";
import imgImageBQtMOnQ84Rsv8DlqSg3FXm9XYkItCm from "../imports/DesktopBlackPaws/Technical review.png";
import imgImageCvmIu2RUvCunWp1JZvXwiDhaRuiekk from "src/imports/DesktopBlackPaws/Requirement analysis.png";
import imgPawLp1 from "./edd1ff5c29b79700a1bf3845eb45ca13f78c5da3.png";
import imgAirbnbLogoBeloSvg from "./2c3c453d609e5336d8cf009029bed004bef443a1.png";
import imgGreenerwave from "./aa5e01b71ec2b7ec6634f335f3a6c5edf8e36b71.png";
import imgBouyguesTelecom from "./53d539168883ca6096ecfff24d5bd45c0b209b88.png";
import imgLogoDepartementAude2015Svg1 from "./7558ed895aaa3f206abdc81f180261131959d71e.png";
import imgLogoFdj1 from "./e9d8fbcd7e51387b2ba46b8738f0ca34531df45c.png";
import imgMeaSource from "./1369928fd1fd63d411cd19122f2c67ec818c4ca4.png";
import imgStoreEng11 from "./4a4da4a72a3ff6f5602e1935ba9d62a5d339ede6.png";
import imgTeamPictures2 from "./650bd3a8dba6af5c7935c6f0e0bbbea690a922db.png";
import imgTeamPictures3 from "./61c1321b27f28067d4ed20756a59d46ad88bff3d.png";
import imgTeamPictures4 from "./25efe6edb86156aa9b6de4baeddbf318a324340a.png";
import imgTeamPictures5 from "./13debabd2b2842a53ebe3f207cce685018ced9e8.png";
import imgTeamPictures6 from "./15143885bfb42ab242974258e673e5d966dbaa69.png";
type TeamCardsProps = {
  className?: string;
  property1?: "big-team-card" | "small-team-card";
};

function TeamCards({ className, property1 = "big-team-card" }: TeamCardsProps) {
  const isSmallTeamCard = property1 === "small-team-card";
  return (
    <div className={className || `bg-[rgba(179,201,245,0.4)] relative rounded-[48px] ${isSmallTeamCard ? "h-[389px] w-[300px]" : "h-[400px] w-[930px]"}`}>
      <div className="flex flex-row items-end size-full">
        <div className={`content-stretch flex items-end justify-between pl-[48px] pr-[40px] pt-[10px] relative size-full ${isSmallTeamCard ? "pb-[40px]" : "pb-[48px]"}`}>
          <div className={`absolute bottom-0 h-[430px] right-0 rounded-br-[48px] ${isSmallTeamCard ? "rounded-bl-[48px] w-[300px]" : "w-[360px]"}`} data-name="team-pictures">
            <div className={`absolute inset-0 overflow-hidden pointer-events-none rounded-br-[48px] ${isSmallTeamCard ? "rounded-bl-[48px]" : ""}`}>
              <img alt="" className={`absolute h-full max-w-none top-0 ${isSmallTeamCard ? "left-[-37.34%] w-[143.33%]" : "left-[-14.28%] w-[119.44%]"}`} src={isSmallTeamCard ? imgTeamPictures1 : imgTeamPictures} />
            </div>
          </div>
          <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(67,43,96,0)] h-[196px] left-0 right-0 rounded-bl-[48px] rounded-br-[48px] to-[rgba(67,43,96,0.8)]" data-name="linear" />
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-end leading-[normal] min-w-px not-italic relative text-white" data-name="Info">
            <p className={`relative shrink-0 w-full ${isSmallTeamCard ? 'font-["Operetta_8:Medium",sans-serif] text-[16px]' : 'font-["Operetta_8:Bold",sans-serif] text-[42px]'}`}>{isSmallTeamCard ? "Prénom nom" : "Prénom Nom"}</p>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
              <p className="font-['Brother_1816:ExtraBold',sans-serif] relative shrink-0 text-[18px] uppercase w-full">Poste</p>
              <p className={`font-["Forma_DJR_Micro:Regular",sans-serif] relative shrink-0 w-full ${isSmallTeamCard ? "text-[16px]" : "text-[22px]"}`}>Pseudo</p>
            </div>
          </div>
          <div className="relative shrink-0 size-[32px]" data-name="LinkedIn_icon 1">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <g clipPath="url(#clip0_0_356)" id="LinkedIn_icon 1">
                <path d={svgPaths.p35db0c80} fill="white" id="Subtract" />
              </g>
              <defs>
                <clipPath id="clip0_0_356">
                  <rect fill="white" height="32" width="32" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
type ApporachCardProps = {
  className?: string;
  approachCard?: "Focus" | "Unfocus";
};

function ApporachCard({ className, approachCard = "Focus" }: ApporachCardProps) {
  return (
    <div className={className || "max-w-[930px] relative rounded-[32px] w-[930px]"} style={approachCard === "Unfocus" ? { backgroundImage: "linear-gradient(90deg, rgba(231, 193, 207, 0.2) 0%, rgba(231, 193, 207, 0.2) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" } : { backgroundImage: "linear-gradient(90deg, rgba(231, 193, 207, 0.4) 0%, rgba(231, 193, 207, 0.4) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] p-[40px] relative size-full">
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Title">
            <div className="h-[61px] relative shrink-0 w-[143px]" data-name="Number">
              <p className="[word-break:break-word] absolute font-['Brother_1816:Bold',sans-serif] leading-[normal] left-0 not-italic text-[#432b60] text-[38px] top-0 uppercase whitespace-nowrap">00</p>
              <div className="absolute bg-[#432b60] h-[6px] left-[71px] top-[27.5px] w-[72px]" />
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Forma_DJR_Micro:Bold',sans-serif] leading-[0] min-w-px not-italic relative text-[#432b60] text-[0px] uppercase">
              <span className="font-['Brother_1816:Bold',sans-serif] leading-[normal] text-[38px]">Title Part1,</span>
              <span className="font-['Brother_1816:Bold',sans-serif] leading-[normal] text-[38px]">{` `}</span>
              <span className="font-['Operetta_8:Regular_Italic',sans-serif] leading-[normal] text-[38px]">Part2</span>
            </p>
          </div>
          <div className="[word-break:break-word] font-['Fondamento:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#432b60] text-[0px] w-full">
            <p className="font-['Brother_1816:ExtraBold',sans-serif] leading-[28px] mb-[6px] text-[18px] uppercase">Sous-titre</p>
            <p className="font-['Forma_DJR_Micro:Regular',sans-serif] leading-[28px] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type CollapseProps = {
  className?: string;
  dots?: boolean;
  line?: boolean;
  openClose?: "close" | "open";
  type?: "desktop";
};

function Collapse({ className, dots = true, line = true, openClose = "open", type = "desktop" }: CollapseProps) {
  const isDesktopAndClose = type === "desktop" && openClose === "close";
  return (
    <div className={className || "max-w-[930px] relative w-[930px]"}>
      <div className={`max-w-[inherit] size-full ${isDesktopAndClose ? "overflow-clip rounded-[inherit]" : "content-stretch flex flex-col items-start relative"}`}>
        {type === "desktop" && openClose === "open" && (
          <div className="content-stretch flex flex-col gap-[24px] items-center overflow-clip relative shrink-0 w-full" data-name="Consulting">
            <div className="h-[123px] relative rounded-[48px] shrink-0 w-full" data-name="Consulting collapse">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-between pr-[48px] relative size-full">
                  <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center min-w-px relative" data-name="titleBlock">
                    {line && <div className="bg-[#432b60] h-[6px] relative shrink-0 w-[52px]" />}
                    <p className="[word-break:break-word] font-['Operetta_8:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[42px] whitespace-nowrap">Consulting</p>
                  </div>
                  <div className="flex h-[12px] items-center justify-center relative shrink-0 w-[23.657px]">
                    <div className="-scale-y-100 flex-none rotate-90">
                      <div className="h-[23.657px] relative w-[12px]">
                        <div className="absolute inset-[-8.45%_-16.67%_-8.45%_-23.74%]">
                          <svg className="block size-full" fill="none" height="27.6573" preserveAspectRatio="none" viewBox="0 0 16.8491 27.6573" width="16.8491">
                            <path d={svgPaths.p148717b0} id="Vector 6" stroke="#432B60" strokeLinecap="round" strokeOpacity="0.2" strokeWidth="4" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[22px] w-full">Strategic guidance to transform your vision into actionable roadmaps and technical specifications.</p>
            <div className="content-stretch flex flex-col gap-[32px] items-center py-[24px] relative shrink-0 w-full" data-name="Body">
              <div className="relative shrink-0 w-full" data-name="Text">
                <div className="content-stretch flex flex-col gap-[16px] items-start px-[150px] relative size-full">
                  <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="rowBlock">
                    <div className="relative shrink-0 size-[90px]" data-name="image-ByyH9ZcSaS0bJaw52WDgBgG6SVmW6k">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageByyH9ZcSaS0BJaw52WDgBgG6SVmW6K} />
                    </div>
                    <div className="[word-break:break-word] flex-[1_0_0] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[0] min-w-px not-italic relative text-[#432b60] text-[0px]">
                      <p className="font-['Forma_DJR_Micro:Bold',sans-serif] leading-[normal] mb-[8px] text-[16px]">Workshops</p>
                      <p className="leading-[normal] text-[16px]">Organization of workshops and seminars with key stakeholders involved in the creation of your product in order to align different visions.</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="rowBlock">
                    <div className="relative shrink-0 size-[90px]" data-name="image-BQtMOnQ84Rsv8DlqSG3fXm9XYkITCm">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageBQtMOnQ84Rsv8DlqSg3FXm9XYkItCm} />
                    </div>
                    <div className="[word-break:break-word] flex-[1_0_0] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[0] min-w-px not-italic relative text-[#432b60] text-[0px]">
                      <p className="font-['Forma_DJR_Micro:Bold',sans-serif] leading-[normal] mb-[8px] text-[16px]">Technical review</p>
                      <p className="leading-[normal] text-[16px]">Audit of your product and proposals for concrete improvements in the short, medium, and long term.</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="rowBlock">
                    <div className="relative shrink-0 size-[90px]" data-name="image-CvmIu2rUVCunWp1JZvXWIDhaRuiekk">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCvmIu2RUvCunWp1JZvXwiDhaRuiekk} />
                    </div>
                    <div className="[word-break:break-word] flex-[1_0_0] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[0] min-w-px not-italic relative text-[#432b60] text-[0px]">
                      <p className="font-['Forma_DJR_Micro:Bold',sans-serif] leading-[normal] mb-[8px] text-[16px]">Requirement analysis</p>
                      <p className="leading-[normal] text-[16px]">{`Before launching production, study the technical and functional feasibility of the product's ambitions in order to create a roadmap that will be followed and ensure development without any unpleasant surprises.`}</p>
                    </div>
                  </div>
                </div>
              </div>
              {dots && (
                <div className="h-[38px] relative shrink-0 w-[34px]" data-name="Dots">
                  <svg className="absolute block inset-0 size-full" fill="none" height="38" preserveAspectRatio="none" viewBox="0 0 34 38" width="34">
                    <g id="Dots">
                      <circle cx="3" cy="19" fill="#E7C1CF" id="Ellipse 2" r="3" />
                      <circle cx="17" cy="19" fill="#432B60" fillOpacity="0.2" id="Ellipse 1" r="3" />
                      <circle cx="31" cy="19" fill="#432B60" fillOpacity="0.2" id="Ellipse 3" r="3" />
                    </g>
                  </svg>
                </div>
              )}
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
            <div className="bg-[rgba(67,43,96,0.2)] h-[2px] relative shrink-0 w-full" />
          </div>
        )}
        {isDesktopAndClose && (
          <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] relative size-full">
            <div className="h-[100px] relative rounded-[48px] shrink-0 w-full" data-name="Design collapse">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-between pr-[48px] relative size-full">
                  <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center min-w-px relative" data-name="titleBlock">
                    {line && <div className="bg-[#432b60] h-[6px] relative shrink-0 w-[52px]" />}
                    <p className="[word-break:break-word] font-['Operetta_8:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[42px] whitespace-nowrap">Consulting</p>
                  </div>
                  <div className="flex h-[12px] items-center justify-center relative shrink-0 w-[23.657px]">
                    <div className="-rotate-90 -scale-y-100 flex-none">
                      <div className="h-[23.657px] relative w-[12px]">
                        <div className="absolute inset-[-8.45%_-16.67%_-8.45%_-23.74%]">
                          <svg className="block size-full" fill="none" height="27.6573" preserveAspectRatio="none" viewBox="0 0 16.8491 27.6573" width="16.8491">
                            <path d={svgPaths.p148717b0} id="Vector 6" stroke="#432B60" strokeLinecap="round" strokeOpacity="0.2" strokeWidth="4" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(67,43,96,0.2)] h-[2px] relative shrink-0 w-full" />
          </div>
        )}
      </div>
    </div>
  );
}
type VerbatimsProps = {
  className?: string;
  verbatims?: "Default";
};

function Verbatims({ className, verbatims = "Default" }: VerbatimsProps) {
  return (
    <div className={className || "max-w-[930px] relative w-[930px]"}>
      <div className="flex flex-col items-end max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[33px] items-end max-w-[inherit] relative size-full">
          <div className="content-stretch flex gap-[33px] items-center min-w-[300px] relative shrink-0 w-full" data-name="Carrousel">
            <div className="h-[39px] relative shrink-0 w-[20px]">
              <div className="absolute inset-[-2.56%_-5%_-2.56%_-7.16%]">
                <svg className="block size-full" fill="none" height="41" preserveAspectRatio="none" viewBox="0 0 22.4325 41" width="22.4325">
                  <path d={svgPaths.p38dd8c00} id="Vector 5" stroke="#B3C9F5" strokeLinecap="round" strokeOpacity="0.4" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Forma_DJR_Micro:Light_Italic',sans-serif] leading-[normal] min-w-px not-italic relative text-[#432b60] text-[52px] text-center">Une verbatim trop cool ici</p>
            <div className="flex items-center justify-center relative shrink-0">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[39px] relative w-[20px]">
                  <div className="absolute inset-[-2.56%_-5%_-2.56%_-7.16%]">
                    <svg className="block size-full" fill="none" height="41" preserveAspectRatio="none" viewBox="0 0 22.4325 41" width="22.4325">
                      <path d={svgPaths.p38dd8c00} id="Vector 6" stroke="#B3C9F5" strokeLinecap="round" strokeOpacity="0.4" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#432b60] text-[0px] text-right w-full">
            <p className="font-['Forma_DJR_Micro:Bold',sans-serif] leading-[normal] mb-[8px] text-[16px]">Nom Prénom</p>
            <p className="leading-[normal] text-[16px]">Poste de la personne citée</p>
          </div>
        </div>
      </div>
    </div>
  );
}
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
  blackPawsLogo?: "Default";
};

function BlackPawsLogoWhite({ className, blackPawsLogo = "Default" }: BlackPawsLogoWhiteProps) {
  return (
    <div className={className || "overflow-clip relative size-[85px]"}>
      <div className="absolute h-[62.213px] left-[3.56px] top-[11.52px] w-[78.484px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="62.2135" preserveAspectRatio="none" viewBox="0 0 78.4838 62.2135" width="78.4838">
          <g id="Group 21">
            <path d={svgPaths.pa38b540} fill="white" id="Union" />
            <path d={svgPaths.p26e2f80} fill="white" id="Union_2" />
            <path d={svgPaths.pcca200} fill="white" id="Union_3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="NAV">
      <Navbar className="h-[54px] relative shrink-0 w-[450px]" />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Header">
      <BlackPawsLogoWhite className="overflow-clip relative shrink-0 size-[85px]" />
      <Nav />
    </div>
  );
}

function Tagline() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start max-w-[930px] relative shrink-0 w-full" data-name="Tagline">
      <p className="[word-break:break-word] font-['Operetta_8:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[52px] text-shadow-[0px_0px_48px_rgba(67,43,96,0.3)] text-white w-[min-content]">BlackPaws turn your ideas into powerful, tailor-made web and mobile apps.</p>
      <p className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] max-w-[648px] min-w-full not-italic relative shrink-0 text-[28px] text-white w-[min-content] whitespace-pre-wrap">{`From strategy to design and development,  we create high-performance digital experiences.`}</p>
      <div className="bg-[rgba(231,193,207,0.3)] h-[54px] relative rounded-[48px] shrink-0" data-name="primaryButton">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[16px] items-center justify-center px-[48px] relative size-full">
            <p className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[22px] whitespace-nowrap">Let’s talk</p>
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

function Hero() {
  return (
    <div className="relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(180deg, rgb(182, 183, 232) 78.305%, rgba(182, 183, 232, 0) 130.65%), linear-gradient(-60.279672560497175deg, rgb(255, 211, 188) 0.79646%, rgba(255, 211, 188, 0) 70.87%), linear-gradient(119.43780752289369deg, rgba(67, 43, 96, 0.2) 0%, rgba(67, 43, 96, 0) 80.874%)" }} data-name="HERO">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[167.593px] items-start pb-[271px] pt-[32.407px] px-[170px] relative size-full">
          <div className="absolute h-[626px] left-[635px] max-h-[627.0178833007812px] max-w-[616px] top-[194px] w-[615px]" data-name="paw_lp 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPawLp1} />
          </div>
          <Header />
          <Tagline />
        </div>
      </div>
    </div>
  );
}

function Calque() {
  return (
    <div className="absolute contents inset-0" data-name="Calque 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="31.9992" preserveAspectRatio="none" viewBox="0 0 184 31.9992" width="184">
        <g id="Group">
          <path d={svgPaths.p2f99200} fill="#0F0F0F" id="Vector" />
          <path d={svgPaths.p770eb00} fill="#0F0F0F" id="Vector_2" />
          <path d={svgPaths.p2e99dd80} fill="#0F0F0F" id="Vector_3" />
          <path d={svgPaths.p2903e700} fill="#0F0F0F" id="Vector_4" />
          <path d={svgPaths.p2759bd00} fill="#0F0F0F" id="Vector_5" />
          <path d={svgPaths.p8b31580} fill="#0F0F0F" id="Vector_6" />
          <path d={svgPaths.p1ff25e80} fill="#3D6E58" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function GekomedLogoColor() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-[184px]" data-name="Gekomed_logo_color">
      <Calque />
    </div>
  );
}

function Logos() {
  return (
    <div className="relative shrink-0 w-full" data-name="LOGOS">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[52px] items-center justify-center px-[170px] relative size-full">
          <div className="h-[54px] relative shrink-0 w-[174px]" data-name="Airbnb_Logo_Bélo.svg">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAirbnbLogoBeloSvg} />
          </div>
          <div className="h-[64px] relative shrink-0 w-[166px]" data-name="Greenerwave">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGreenerwave} />
          </div>
          <div className="h-[74px] relative shrink-0 w-[200px]" data-name="Bouygues_Télécom">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBouyguesTelecom} />
          </div>
          <div className="h-[59px] relative shrink-0 w-[180px]" data-name="Logo_Département_Aude_2015.svg 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoDepartementAude2015Svg1} />
          </div>
          <div className="h-[59px] relative shrink-0 w-[163.713px]" data-name="LOGO_FDJ 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[192.88%] left-[-16.71%] max-w-none top-[-46.44%] w-[133.43%]" src={imgLogoFdj1} />
            </div>
          </div>
          <div className="h-[88px] relative shrink-0 w-[99px]" data-name="mea-source">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[150.64%] left-[-68.05%] max-w-none top-[-25.32%] w-[236.09%]" src={imgMeaSource} />
            </div>
          </div>
          <GekomedLogoColor />
        </div>
      </div>
    </div>
  );
}

function ImageBlock() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[390px] left-1/2 overflow-clip top-1/2 w-[950px]" data-name="imageBlock">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[822.745px] left-1/2 top-1/2 w-[950px]" data-name="store-eng1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStoreEng11} />
      </div>
      <div className="absolute bg-gradient-to-t from-[#432b60] h-[390px] left-[0.04px] mix-blend-multiply right-0 to-[30.246%] to-[rgba(67,43,96,0)] top-0" data-name="Bottom dark gradient" />
      <div className="absolute bg-gradient-to-t from-[#54648e] h-[390px] left-[0.02px] mix-blend-hard-light right-[0.02px] to-[#ffd8e4] top-0" data-name="Pink fllter" />
    </div>
  );
}

function TagBlock() {
  return (
    <div className="bg-[#432b60] content-stretch flex items-center justify-center overflow-clip px-[21px] py-[11px] relative rounded-[40px] shrink-0" data-name="tagBlock">
      <p className="[word-break:break-word] font-['Brother_1816:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white uppercase whitespace-nowrap">TAG 1</p>
    </div>
  );
}

function TagBlock1() {
  return (
    <div className="bg-[#432b60] content-stretch flex items-center justify-center overflow-clip px-[21px] py-[11px] relative rounded-[40px] shrink-0" data-name="tagBlock">
      <p className="[word-break:break-word] font-['Brother_1816:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white uppercase whitespace-nowrap">TAG 2</p>
    </div>
  );
}

function TagBlock2() {
  return (
    <div className="bg-[#432b60] content-stretch flex items-center justify-center overflow-clip px-[21px] py-[11px] relative rounded-[40px] shrink-0" data-name="tagBlock">
      <p className="[word-break:break-word] font-['Brother_1816:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white uppercase whitespace-nowrap">TAG 3</p>
    </div>
  );
}

function Tags() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="tags">
      <TagBlock />
      <TagBlock1 />
      <TagBlock2 />
    </div>
  );
}

function ProjectHeaderBlock() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="projectHeaderBlock">
      <Tags />
      <p className="[word-break:break-word] font-['Forma_DJR_Micro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[32px] whitespace-nowrap">→</p>
    </div>
  );
}

function TitleBlock() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-white w-[113px]" data-name="titleBlock">
      <p className="font-['Operetta_8:Medium',sans-serif] relative shrink-0 text-[18px] w-full">Project title</p>
      <p className="font-['Brother_1816:ExtraBold',sans-serif] relative shrink-0 text-[12px] uppercase w-full">Client or brand</p>
    </div>
  );
}

function ProjectInfosBlock() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="projectInfosBlock">
      <TitleBlock />
      <div className="relative shrink-0 size-[48px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="48" preserveAspectRatio="none" viewBox="0 0 48 48" width="48">
          <circle cx="24" cy="24" fill="white" id="Ellipse 5" r="24" />
        </svg>
      </div>
    </div>
  );
}

function ImageBlock1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[390px] left-1/2 overflow-clip top-1/2 w-[950px]" data-name="imageBlock">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[822.745px] left-1/2 top-1/2 w-[950px]" data-name="store-eng1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStoreEng11} />
      </div>
      <div className="absolute bg-gradient-to-t from-[#432b60] h-[390px] left-[0.04px] mix-blend-multiply right-0 to-[30.246%] to-[rgba(67,43,96,0)] top-0" data-name="Bottom dark gradient" />
      <div className="absolute bg-gradient-to-t from-[#54648e] h-[390px] left-[0.02px] mix-blend-hard-light right-[0.02px] to-[#ffd8e4] top-0" data-name="Pink fllter" />
    </div>
  );
}

function TagBlock3() {
  return (
    <div className="bg-[#432b60] content-stretch flex items-center justify-center overflow-clip px-[21px] py-[11px] relative rounded-[40px] shrink-0" data-name="tagBlock">
      <p className="[word-break:break-word] font-['Brother_1816:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white uppercase whitespace-nowrap">TAG 1</p>
    </div>
  );
}

function TagBlock4() {
  return (
    <div className="bg-[#432b60] content-stretch flex items-center justify-center overflow-clip px-[21px] py-[11px] relative rounded-[40px] shrink-0" data-name="tagBlock">
      <p className="[word-break:break-word] font-['Brother_1816:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white uppercase whitespace-nowrap">TAG 2</p>
    </div>
  );
}

function TagBlock5() {
  return (
    <div className="bg-[#432b60] content-stretch flex items-center justify-center overflow-clip px-[21px] py-[11px] relative rounded-[40px] shrink-0" data-name="tagBlock">
      <p className="[word-break:break-word] font-['Brother_1816:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white uppercase whitespace-nowrap">TAG 3</p>
    </div>
  );
}

function Tags1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="tags">
      <TagBlock3 />
      <TagBlock4 />
      <TagBlock5 />
    </div>
  );
}

function ProjectHeaderBlock1() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="projectHeaderBlock">
      <Tags1 />
      <p className="[word-break:break-word] font-['Forma_DJR_Micro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[32px] whitespace-nowrap">→</p>
    </div>
  );
}

function TitleBlock1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-white w-[113px]" data-name="titleBlock">
      <p className="font-['Operetta_8:Medium',sans-serif] relative shrink-0 text-[18px] w-full">Project title</p>
      <p className="font-['Brother_1816:ExtraBold',sans-serif] relative shrink-0 text-[12px] uppercase w-full">Client or brand</p>
    </div>
  );
}

function ProjectInfosBlock1() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="projectInfosBlock">
      <TitleBlock1 />
      <div className="relative shrink-0 size-[48px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="48" preserveAspectRatio="none" viewBox="0 0 48 48" width="48">
          <circle cx="24" cy="24" fill="white" id="Ellipse 5" r="24" />
        </svg>
      </div>
    </div>
  );
}

function ImageBlock2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[390px] left-1/2 overflow-clip top-1/2 w-[950px]" data-name="imageBlock">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[822.745px] left-1/2 top-1/2 w-[950px]" data-name="store-eng1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStoreEng11} />
      </div>
      <div className="absolute bg-gradient-to-t from-[#432b60] h-[390px] left-[0.04px] mix-blend-multiply right-0 to-[30.246%] to-[rgba(67,43,96,0)] top-0" data-name="Bottom dark gradient" />
      <div className="absolute bg-gradient-to-t from-[#54648e] h-[390px] left-[0.02px] mix-blend-hard-light right-[0.02px] to-[#ffd8e4] top-0" data-name="Pink fllter" />
    </div>
  );
}

function TagBlock6() {
  return (
    <div className="bg-[#432b60] content-stretch flex items-center justify-center overflow-clip px-[21px] py-[11px] relative rounded-[40px] shrink-0" data-name="tagBlock">
      <p className="[word-break:break-word] font-['Brother_1816:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white uppercase whitespace-nowrap">TAG 1</p>
    </div>
  );
}

function TagBlock7() {
  return (
    <div className="bg-[#432b60] content-stretch flex items-center justify-center overflow-clip px-[21px] py-[11px] relative rounded-[40px] shrink-0" data-name="tagBlock">
      <p className="[word-break:break-word] font-['Brother_1816:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white uppercase whitespace-nowrap">TAG 2</p>
    </div>
  );
}

function TagBlock8() {
  return (
    <div className="bg-[#432b60] content-stretch flex items-center justify-center overflow-clip px-[21px] py-[11px] relative rounded-[40px] shrink-0" data-name="tagBlock">
      <p className="[word-break:break-word] font-['Brother_1816:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white uppercase whitespace-nowrap">TAG 3</p>
    </div>
  );
}

function Tags2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="tags">
      <TagBlock6 />
      <TagBlock7 />
      <TagBlock8 />
    </div>
  );
}

function ProjectHeaderBlock2() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="projectHeaderBlock">
      <Tags2 />
      <p className="[word-break:break-word] font-['Forma_DJR_Micro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[32px] whitespace-nowrap">→</p>
    </div>
  );
}

function TitleBlock2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-white w-[113px]" data-name="titleBlock">
      <p className="font-['Operetta_8:Medium',sans-serif] relative shrink-0 text-[18px] w-full">Project title</p>
      <p className="font-['Brother_1816:ExtraBold',sans-serif] relative shrink-0 text-[12px] uppercase w-full">Client or brand</p>
    </div>
  );
}

function ProjectInfosBlock2() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="projectInfosBlock">
      <TitleBlock2 />
      <div className="relative shrink-0 size-[48px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="48" preserveAspectRatio="none" viewBox="0 0 48 48" width="48">
          <circle cx="24" cy="24" fill="white" id="Ellipse 5" r="24" />
        </svg>
      </div>
    </div>
  );
}

function Projects1() {
  return (
    <div className="content-start flex flex-wrap gap-[24px_30px] items-start justify-center max-w-[930px] relative shrink-0 w-full" data-name="PROJECTS">
      <div className="h-[390px] max-w-[930px] relative rounded-[48px] shrink-0 w-[930px]" data-name="projectCard">
        <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-between max-w-[inherit] p-[32px] relative size-full">
            <ImageBlock />
            <ProjectHeaderBlock />
            <ProjectInfosBlock />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[390px] min-w-[360px] relative rounded-[48px]" data-name="projectCard">
        <div className="flex flex-col justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-between min-w-[inherit] p-[32px] relative size-full">
            <ImageBlock1 />
            <ProjectHeaderBlock1 />
            <ProjectInfosBlock1 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[390px] min-w-[360px] relative rounded-[48px]" data-name="projectCard">
        <div className="flex flex-col justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-between min-w-[inherit] p-[32px] relative size-full">
            <ImageBlock2 />
            <ProjectHeaderBlock2 />
            <ProjectInfosBlock2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-center justify-center overflow-clip px-[170px] relative shrink-0 w-[1280px]" data-name="PROJECTS">
      <p className="[word-break:break-word] font-['Operetta_8:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#432b60] text-[42px] w-[min-content]">Projects</p>
      <Projects1 />
      <div className="bg-[#b3c9f5] h-[54px] relative rounded-[48px] shrink-0" data-name="secondaryButton">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[16px] items-center justify-center px-[48px] relative size-full">
            <p className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[22px] text-center whitespace-nowrap">See more projects</p>
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

function Verbatims1() {
  return (
    <div className="relative shrink-0 w-full" data-name="VERBATIMS">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[170px] relative size-full">
          <Verbatims className="max-w-[930px] relative shrink-0 w-[930px]" />
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <div className="relative shrink-0 w-full" data-name="SERVICES">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[170px] relative size-full">
          <Collapse className="max-w-[930px] relative shrink-0 w-[930px]" />
          <Collapse className="max-w-[930px] relative shrink-0 w-full" openClose="close" />
          <Collapse className="max-w-[930px] relative shrink-0 w-full" openClose="close" />
          <Collapse className="max-w-[930px] relative shrink-0 w-full" openClose="close" />
        </div>
      </div>
    </div>
  );
}

function Approach() {
  return (
    <div className="relative shrink-0 w-full" data-name="APPROACH">
      <div className="content-stretch flex flex-col gap-[48px] items-start px-[170px] relative size-full">
        <p className="[word-break:break-word] font-['Operetta_8:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[42px] w-full">Our approach</p>
        <p className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[32px] w-full">A proven process on +50 projects that ensures yours will be delivered on time, on budget, and exceeds expectations.</p>
        <ApporachCard className="max-w-[930px] relative rounded-[32px] shrink-0 w-full" />
        <ApporachCard approachCard="Unfocus" className="max-w-[930px] relative rounded-[32px] shrink-0 w-full" />
        <ApporachCard approachCard="Unfocus" className="max-w-[930px] relative rounded-[32px] shrink-0 w-full" />
        <ApporachCard approachCard="Unfocus" className="max-w-[930px] relative rounded-[32px] shrink-0 w-full" />
        <ApporachCard approachCard="Unfocus" className="max-w-[930px] relative rounded-[32px] shrink-0 w-full" />
      </div>
    </div>
  );
}

function Linear() {
  return <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(67,43,96,0)] h-[196px] left-0 right-0 rounded-bl-[48px] rounded-br-[48px] to-[rgba(67,43,96,0.8)]" data-name="linear" />;
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <p className="font-['Brother_1816:ExtraBold',sans-serif] relative shrink-0 text-[18px] uppercase w-full">Poste</p>
      <p className="font-['Forma_DJR_Micro:Regular',sans-serif] relative shrink-0 text-[22px] w-full">Pseudo</p>
    </div>
  );
}

function Info() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-end leading-[normal] min-w-px not-italic relative text-white" data-name="Info">
      <p className="font-['Operetta_8:Bold',sans-serif] relative shrink-0 text-[42px] w-full">Prénom Nom</p>
      <Title />
    </div>
  );
}

function LinkedInIcon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="LinkedIn_icon 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g clipPath="url(#clip0_0_356)" id="LinkedIn_icon 1">
          <path d={svgPaths.p35db0c80} fill="white" id="Subtract" />
        </g>
        <defs>
          <clipPath id="clip0_0_356">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Linear1() {
  return <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(67,43,96,0)] h-[196px] left-0 right-0 rounded-bl-[48px] rounded-br-[48px] to-[rgba(67,43,96,0.8)]" data-name="linear" />;
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <p className="font-['Brother_1816:ExtraBold',sans-serif] relative shrink-0 text-[18px] uppercase w-full">Poste</p>
      <p className="font-['Forma_DJR_Micro:Regular',sans-serif] relative shrink-0 text-[16px] w-full">Pseudo</p>
    </div>
  );
}

function Info1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-end leading-[normal] min-w-px not-italic relative text-white" data-name="Info">
      <p className="font-['Operetta_8:Medium',sans-serif] relative shrink-0 text-[16px] w-full">Prénom nom</p>
      <Title1 />
    </div>
  );
}

function LinkedInIcon1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="LinkedIn_icon 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g clipPath="url(#clip0_0_356)" id="LinkedIn_icon 1">
          <path d={svgPaths.p35db0c80} fill="white" id="Subtract" />
        </g>
        <defs>
          <clipPath id="clip0_0_356">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Linear2() {
  return <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(67,43,96,0)] h-[196px] left-0 right-0 rounded-bl-[48px] rounded-br-[48px] to-[rgba(67,43,96,0.8)]" data-name="linear" />;
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <p className="font-['Brother_1816:ExtraBold',sans-serif] relative shrink-0 text-[18px] uppercase w-full">Poste</p>
      <p className="font-['Forma_DJR_Micro:Regular',sans-serif] relative shrink-0 text-[16px] w-full">Pseudo</p>
    </div>
  );
}

function Info2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-end leading-[normal] min-w-px not-italic relative text-white" data-name="Info">
      <p className="font-['Operetta_8:Medium',sans-serif] relative shrink-0 text-[16px] w-full">Prénom nom</p>
      <Title2 />
    </div>
  );
}

function LinkedInIcon2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="LinkedIn_icon 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g clipPath="url(#clip0_0_356)" id="LinkedIn_icon 1">
          <path d={svgPaths.p35db0c80} fill="white" id="Subtract" />
        </g>
        <defs>
          <clipPath id="clip0_0_356">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Linear3() {
  return <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(67,43,96,0)] h-[196px] left-0 right-0 rounded-bl-[48px] rounded-br-[48px] to-[rgba(67,43,96,0.8)]" data-name="linear" />;
}

function Title3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <p className="font-['Brother_1816:ExtraBold',sans-serif] relative shrink-0 text-[18px] uppercase w-full">Poste</p>
      <p className="font-['Forma_DJR_Micro:Regular',sans-serif] relative shrink-0 text-[16px] w-full">Pseudo</p>
    </div>
  );
}

function Info3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-end leading-[normal] min-w-px not-italic relative text-white" data-name="Info">
      <p className="font-['Operetta_8:Medium',sans-serif] relative shrink-0 text-[16px] w-full">Prénom nom</p>
      <Title3 />
    </div>
  );
}

function LinkedInIcon3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="LinkedIn_icon 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g clipPath="url(#clip0_0_356)" id="LinkedIn_icon 1">
          <path d={svgPaths.p35db0c80} fill="white" id="Subtract" />
        </g>
        <defs>
          <clipPath id="clip0_0_356">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Linear4() {
  return <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(67,43,96,0)] h-[196px] left-0 right-0 rounded-bl-[48px] rounded-br-[48px] to-[rgba(67,43,96,0.8)]" data-name="linear" />;
}

function Title4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <p className="font-['Brother_1816:ExtraBold',sans-serif] relative shrink-0 text-[18px] uppercase w-full">Poste</p>
      <p className="font-['Forma_DJR_Micro:Regular',sans-serif] relative shrink-0 text-[16px] w-full">Pseudo</p>
    </div>
  );
}

function Info4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-end leading-[normal] min-w-px not-italic relative text-white" data-name="Info">
      <p className="font-['Operetta_8:Medium',sans-serif] relative shrink-0 text-[16px] w-full">Prénom nom</p>
      <Title4 />
    </div>
  );
}

function LinkedInIcon4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="LinkedIn_icon 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g clipPath="url(#clip0_0_356)" id="LinkedIn_icon 1">
          <path d={svgPaths.p35db0c80} fill="white" id="Subtract" />
        </g>
        <defs>
          <clipPath id="clip0_0_356">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Linear5() {
  return <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(67,43,96,0)] h-[196px] left-0 right-0 rounded-bl-[48px] rounded-br-[48px] to-[rgba(67,43,96,0.8)]" data-name="linear" />;
}

function Title5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <p className="font-['Brother_1816:ExtraBold',sans-serif] relative shrink-0 text-[18px] uppercase w-full">Poste</p>
      <p className="font-['Forma_DJR_Micro:Regular',sans-serif] relative shrink-0 text-[16px] w-full">Pseudo</p>
    </div>
  );
}

function Info5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-end leading-[normal] min-w-px not-italic relative text-white" data-name="Info">
      <p className="font-['Operetta_8:Medium',sans-serif] relative shrink-0 text-[16px] w-full">Prénom nom</p>
      <Title5 />
    </div>
  );
}

function LinkedInIcon5() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="LinkedIn_icon 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g clipPath="url(#clip0_0_356)" id="LinkedIn_icon 1">
          <path d={svgPaths.p35db0c80} fill="white" id="Subtract" />
        </g>
        <defs>
          <clipPath id="clip0_0_356">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TeamBlock() {
  return (
    <div className="content-start flex flex-wrap gap-[40px_16px] items-start justify-center relative shrink-0 w-full" data-name="teamBlock">
      <div className="bg-[rgba(179,201,245,0.4)] h-[400px] relative rounded-[48px] shrink-0 w-[930px]" data-name="team-cards">
        <div className="flex flex-row items-end size-full">
          <div className="content-stretch flex items-end pb-[48px] pl-[48px] pr-[40px] pt-[10px] relative size-full">
            <div className="absolute bottom-0 h-[430px] right-0 rounded-br-[48px] w-[360px]" data-name="team-pictures">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-br-[48px]">
                <img alt="" className="absolute h-full left-[-14.28%] max-w-none top-0 w-[119.44%]" src={imgTeamPictures} />
              </div>
            </div>
            <Linear />
            <Info />
            <LinkedInIcon />
          </div>
        </div>
      </div>
      <TeamCards className="bg-[rgba(179,201,245,0.4)] h-[389px] relative rounded-[48px] shrink-0 w-[300px]" property1="small-team-card" />
      <div className="bg-[rgba(179,201,245,0.4)] h-[389px] relative rounded-[48px] shrink-0 w-[300px]" data-name="team-cards">
        <div className="flex flex-row items-end size-full">
          <div className="content-stretch flex items-end justify-between pb-[40px] pl-[48px] pr-[40px] pt-[10px] relative size-full">
            <div className="absolute bottom-0 h-[430px] right-0 rounded-bl-[48px] rounded-br-[48px] w-[300px]" data-name="team-pictures">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[48px] rounded-br-[48px]">
                <img alt="" className="absolute h-full left-[-39.49%] max-w-none top-0 w-[143.33%]" src={imgTeamPictures2} />
              </div>
            </div>
            <Linear1 />
            <Info1 />
            <LinkedInIcon1 />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(179,201,245,0.4)] h-[389px] relative rounded-[48px] shrink-0 w-[300px]" data-name="team-cards">
        <div className="flex flex-row items-end size-full">
          <div className="content-stretch flex items-end justify-between pb-[40px] pl-[48px] pr-[40px] pt-[10px] relative size-full">
            <div className="absolute bottom-0 h-[430px] right-0 rounded-bl-[48px] rounded-br-[48px] w-[300px]" data-name="team-pictures">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[48px] rounded-br-[48px] size-full" src={imgTeamPictures3} />
            </div>
            <Linear2 />
            <Info2 />
            <LinkedInIcon2 />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(179,201,245,0.4)] h-[389px] relative rounded-[48px] shrink-0 w-[300px]" data-name="team-cards">
        <div className="flex flex-row items-end size-full">
          <div className="content-stretch flex items-end justify-between pb-[40px] pl-[48px] pr-[40px] pt-[10px] relative size-full">
            <div className="absolute bottom-0 h-[430px] right-0 rounded-bl-[48px] rounded-br-[48px] w-[300px]" data-name="team-pictures">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[48px] rounded-br-[48px] size-full" src={imgTeamPictures4} />
            </div>
            <Linear3 />
            <Info3 />
            <LinkedInIcon3 />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(179,201,245,0.4)] h-[389px] relative rounded-[48px] shrink-0 w-[300px]" data-name="team-cards">
        <div className="flex flex-row items-end size-full">
          <div className="content-stretch flex items-end justify-between pb-[40px] pl-[48px] pr-[40px] pt-[10px] relative size-full">
            <div className="absolute bottom-0 h-[430px] right-0 rounded-bl-[48px] rounded-br-[48px] w-[300px]" data-name="team-pictures">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[48px] rounded-br-[48px]">
                <img alt="" className="absolute h-full left-[-30.58%] max-w-none top-0 w-[143.33%]" src={imgTeamPictures5} />
              </div>
            </div>
            <Linear4 />
            <Info4 />
            <LinkedInIcon4 />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(179,201,245,0.4)] h-[389px] relative rounded-[48px] shrink-0 w-[300px]" data-name="team-cards">
        <div className="flex flex-row items-end size-full">
          <div className="content-stretch flex items-end justify-between pb-[40px] pl-[48px] pr-[40px] pt-[10px] relative size-full">
            <div className="absolute bottom-0 h-[430px] right-0 rounded-bl-[48px] rounded-br-[48px] w-[300px]" data-name="team-pictures">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[48px] rounded-br-[48px]">
                <img alt="" className="absolute h-full left-[-33.36%] max-w-none top-0 w-[143.33%]" src={imgTeamPictures6} />
              </div>
            </div>
            <Linear5 />
            <Info5 />
            <LinkedInIcon5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Team() {
  return (
    <div className="relative shrink-0 w-full" data-name="TEAM">
      <div className="content-stretch flex flex-col gap-[20px] items-start px-[170px] relative size-full">
        <p className="[word-break:break-word] font-['Operetta_8:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[42px] w-full">Who are we?</p>
        <p className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[32px] w-full">Our collective of independent experts</p>
        <TeamBlock />
      </div>
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
        <g clipPath="url(#clip0_0_262)" id="Octicons-mark-github 1">
          <path clipRule="evenodd" d={svgPaths.p4fe4000} fill="#432B60" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_262">
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

export default function DesktopBlackPaws() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[52px] items-center relative size-full" data-name="Desktop -BlackPaws">
      <Hero />
      <Logos />
      <Projects />
      <Verbatims1 />
      <Services />
      <Approach />
      <Team />
      <Footer />
    </div>
  );
}