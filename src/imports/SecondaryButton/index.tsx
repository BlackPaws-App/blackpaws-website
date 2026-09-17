import svgPaths from "./svg-6z1u9kgzps";

export default function SecondaryButton() {
  return (
    <div className="bg-[#b3c9f5] relative rounded-[48px] size-full" data-name="secondaryButton">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[48px] relative size-full">
          <p className="[word-break:break-word] font-['Forma_DJR_Micro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#432b60] text-[22px] text-center whitespace-nowrap">See more projects</p>
          <div className="flex h-[8px] items-center justify-center relative shrink-0 w-[15.772px]">
            <div className="-rotate-90 flex-none">
              <div className="h-[15.772px] relative w-[8px]" data-name="Arrow down">
                <div className="absolute inset-[-6.34%_-12.5%_-6.34%_-17.81%]">
                  <svg className="block size-full" fill="none" height="17.7716" preserveAspectRatio="none" viewBox="0 0 10.4246 17.7716" width="10.4246">
                    <path d={svgPaths.p36a85e80} id="Arrow down" stroke="#432B60" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}