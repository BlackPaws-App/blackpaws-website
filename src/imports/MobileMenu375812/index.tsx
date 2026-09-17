import svgPaths from "./svg-eg5dizboo";

function Group() {
  return (
    <div className="absolute h-[39.627px] left-[2.27px] top-[7.34px] w-[49.991px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="39.6273" preserveAspectRatio="none" viewBox="0 0 49.9908 39.6273" width="49.9908">
        <g id="Group 21">
          <path d={svgPaths.pdb28c80} fill="white" id="Union" />
          <path d={svgPaths.p761fb80} fill="white" id="Union_2" />
          <path d={svgPaths.p377b8600} fill="white" id="Union_3" />
        </g>
      </svg>
    </div>
  );
}

function Close() {
  return (
    <button className="block cursor-pointer relative shrink-0 size-[60px]" data-name="close">
      <svg className="absolute block inset-0 size-full" fill="none" height="60" preserveAspectRatio="none" viewBox="0 0 60 60" width="60">
        <g id="close">
          <path d={svgPaths.p10f42400} fill="white" id="Union" />
        </g>
      </svg>
    </button>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex h-[60.412px] items-center justify-between relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[54.141px]" data-name="BlackPaws_logo white">
        <Group />
      </div>
      <Close />
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Operetta_8:Bold',sans-serif] gap-[16px] items-start leading-[normal] not-italic px-[4.953px] relative shrink-0 text-[42px] text-shadow-[0px_0px_48px_rgba(67,43,96,0.3)] text-white w-full">
      <p className="relative shrink-0 w-full">Team</p>
      <p className="relative shrink-0 w-full">Our approach</p>
      <p className="relative shrink-0 w-full">Services</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[58.391px] items-center relative shrink-0 w-full">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[98px] items-start relative shrink-0 w-full">
      <Frame3 />
      <div className="bg-[rgba(231,193,207,0.3)] h-[54px] relative rounded-[48px] shrink-0" data-name="primaryButton">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[16px] items-center justify-center px-[48px] relative size-full">
            <p className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[22px] text-white whitespace-nowrap">Contact us</p>
            <div className="h-0 relative shrink-0 w-[14.084px]" data-name="Arrow right">
              <div className="absolute inset-[-7.36px_-7.1%_-7.36px_0]">
                <svg className="block size-full" fill="none" height="14.7279" preserveAspectRatio="none" viewBox="0 0 15.0845 14.7279" width="15.0845">
                  <path d={svgPaths.p1b2b3080} fill="white" id="Arrow right" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OcticonsMarkGithub() {
  return (
    <div className="h-[21.84px] relative shrink-0 w-[21px]" data-name="Octicons-mark-github 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="21.84" preserveAspectRatio="none" viewBox="0 0 21 21.84" width="21">
        <g clipPath="url(#clip0_0_14)" id="Octicons-mark-github 1">
          <path clipRule="evenodd" d={svgPaths.p4fe4000} fill="white" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
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
        <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">GitHub</p>
      </div>
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[30px]" />
    </div>
  );
}

function Address() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Address">
      <p className="[word-break:break-word] col-1 font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] ml-[27.38px] mt-[3px] not-italic relative row-1 text-[16px] text-white w-[172.41px]">122 Rue Amelot, 75011 Paris, France</p>
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[24px]" data-name="place">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 16 20" width="16">
            <path d={svgPaths.p2fcac600} fill="white" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[25.168px] items-start relative shrink-0 w-[199.785px]">
      <Social />
      <Address />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[rgba(67,43,96,0.9)] content-stretch flex flex-col gap-[202px] items-start overflow-clip pb-[34.256px] pl-[34.062px] pr-[27.033px] pt-[19.196px] relative shrink-0 w-[375px]" data-name="Frame">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

export default function MobileMenu() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center px-[42px] relative size-full" data-name="Mobile menu - 375*812">
      <Frame />
    </div>
  );
}