import svgPaths from "./svg-c7ll9dcmvs";

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[61px] items-center relative shrink-0 w-[900px]">
      <p className="[word-break:break-word] font-['Brother_1816:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[40px] whitespace-nowrap">03</p>
      <div className="bg-[#432b60] h-[6px] relative shrink-0 w-[72px]" />
      <p className="[word-break:break-word] font-['Forma_DJR_Micro:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#432b60] text-[0px] uppercase w-[748px]">
        <span className="font-['Brother_1816:Bold',sans-serif] leading-[normal] text-[40px]">Production and</span>
        <span className="font-['Operetta_8:Regular_Italic',sans-serif] leading-[normal] text-[40px]">{` validation`}</span>
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Forma_DJR_Micro:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#432b60] text-[0px] uppercase w-[748px]">
        <span className="font-['Brother_1816:Light',sans-serif] leading-[normal] text-[40px]">Production of</span>
        <span className="font-['Operetta_8:Regular_Italic',sans-serif] leading-[normal] text-[40px]">{` `}</span>
        <span className="font-['Operetta_8:Extra_Light_Italic',sans-serif] leading-[normal] text-[40px]">Components</span>
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] h-[61px] items-center relative shrink-0 w-[900px]">
      <p className="[word-break:break-word] font-['Forma_DJR_Micro:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#432b60] text-[0px] uppercase whitespace-nowrap">
        <span className="font-['Brother_1816:Light',sans-serif] leading-[normal] text-[40px]">Milestone validation</span>
        <span className="font-['Operetta_8:Regular_Italic',sans-serif] leading-[normal] text-[40px]">{` `}</span>
        <span className="font-['Operetta_8:Extra_Light_Italic',sans-serif] leading-[normal] text-[40px]">workshops</span>
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start px-[20px] relative shrink-0">
      <Frame1 />
      <Frame2 />
      <div className="[word-break:break-word] font-['Fondamento:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#432b60] text-[22px] w-[900px]">
        <p className="font-['Brother_1816:ExtraBold',sans-serif] leading-[28px] mb-[6px] uppercase">BlackPaws secret sauce</p>
        <p className="font-['Forma_DJR_Micro:Regular',sans-serif] leading-[28px]">Our experts work in-house or alongside your teams to produce the necessary elements: user research, user flows, wireframes, mock-ups, technical architecture, back-end and front-end development, user testing, etc.</p>
      </div>
      <Frame3 />
      <div className="[word-break:break-word] font-['Fondamento:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#432b60] text-[22px] w-[900px]">
        <p className="font-['Brother_1816:ExtraBold',sans-serif] leading-[28px] mb-0 uppercase">We build together, as a team!</p>
        <p className="font-['Forma_DJR_Micro:Regular',sans-serif] leading-[28px]">{`At each stage, we correct, adjust, and validate together. You share your constraints, and we propose solutions! You give your approval at the end of each stage before moving on to the next. It's a solid, well-established process that allows you to remain calm throughout the project and ensure that decisions are sustainable for the future.`}</p>
      </div>
    </div>
  );
}

export default function Component04TravailEnChambre() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center overflow-clip px-[20px] py-[40px] relative rounded-[32px] size-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 188, 194, 0.2) 0%, rgba(255, 188, 194, 0.2) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="04 - Travail en chambre">
      <div className="h-[89.988px] relative shrink-0 w-[23.927px]">
        <div className="absolute inset-[-1.57%_-8.36%_-2.22%_-8.36%]">
          <svg className="block size-full" fill="none" height="93.4021" preserveAspectRatio="none" viewBox="0 0 27.9273 93.4021" width="27.9273">
            <path d={svgPaths.p271ffbf0} fill="#7892C5" id="Vector 1" />
          </svg>
        </div>
      </div>
      <Frame />
      <div className="h-[92.856px] relative shrink-0 w-[24.69px]">
        <div className="absolute inset-[-2.15%_-8.1%_-1.52%_-8.1%]">
          <svg className="block size-full" fill="none" height="96.2702" preserveAspectRatio="none" viewBox="0 0 28.69 96.2702" width="28.69">
            <path d={svgPaths.p1054bc00} fill="#7892C5" id="Vector 2" />
          </svg>
        </div>
      </div>
    </div>
  );
}