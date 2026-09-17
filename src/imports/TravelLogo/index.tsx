import svgPaths from "./svg-w2lpq9gsny";

function Group() {
  return (
    <div className="absolute h-[64.673px] left-[52.1px] top-[17.66px] w-[45.803px]">
      <div className="absolute inset-[0_0_-1.25%_0]">
        <svg className="block size-full" fill="none" height="65.4798" preserveAspectRatio="none" viewBox="0 0 45.8034 65.4798" width="45.8034">
          <g id="Group 2">
            <rect fill="white" height="52.8997" id="Rectangle 1" rx="4.67711" stroke="#25465F" strokeWidth="1.6128" width="44.1906" x="0.806398" y="0.806398" />
            <g id="Vector 1">
              <path d={svgPaths.p188307c0} fill="white" />
              <path d={svgPaths.p1d08b80} fill="#25465F" />
            </g>
            <path d={svgPaths.p32f61400} fill="white" id="Vector 2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Lala() {
  return (
    <div className="absolute h-[12.411px] left-[60.21px] top-[40.23px] w-[32.971px]" data-name="lala !">
      <svg className="absolute block inset-0 size-full" fill="none" height="12.4107" preserveAspectRatio="none" viewBox="0 0 32.971 12.4107" width="32.971">
        <g id="lala !">
          <path d={svgPaths.p32e8ff80} fill="#25465F" id="Vector" />
          <path d={svgPaths.p10b52700} fill="#25465F" id="Vector_2" />
          <path d={svgPaths.p210e6a00} fill="#25465F" id="Vector_3" />
          <path d={svgPaths.p1adc6200} fill="#25465F" id="Vector_4" />
          <path d={svgPaths.p2f890b00} fill="#25465F" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Oh() {
  return (
    <div className="absolute h-[15.786px] left-[62.56px] top-[22.92px] w-[23.934px]" data-name="oh">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.7863" preserveAspectRatio="none" viewBox="0 0 23.9339 15.7863" width="23.9339">
        <g id="oh">
          <path d={svgPaths.p2ae1fb80} fill="#25465F" id="Vector" />
          <path d={svgPaths.p133ffb00} fill="#25465F" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[60.21px] top-[22.92px]">
      <Lala />
      <Oh />
    </div>
  );
}

function OhlalaBleu() {
  return (
    <div className="absolute contents left-[52.1px] top-[17.66px]" data-name="Ohlala_bleu">
      <Group />
      <div className="absolute flex h-[12.619px] items-center justify-center left-[72.7px] top-[54.8px] w-[11.157px]">
        <div className="flex-none rotate-[-54.84deg]">
          <div className="h-[5.51px] relative w-[11.554px]" data-name="Path">
            <svg className="absolute block inset-0 size-full" fill="none" height="5.50956" preserveAspectRatio="none" viewBox="0 0 11.5539 5.50956" width="11.5539">
              <path d={svgPaths.p34bd0800} fill="#25465F" id="Path" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[12.619px] items-center justify-center left-[68.06px] mix-blend-multiply top-[54.8px] w-[11.157px]">
        <div className="-scale-y-100 flex-none rotate-[-125.16deg]">
          <div className="h-[5.51px] relative w-[11.554px]" data-name="Path">
            <svg className="absolute block inset-0 size-full" fill="none" height="5.50956" preserveAspectRatio="none" viewBox="0 0 11.5539 5.50956" width="11.5539">
              <g id="Path" style={{ mixBlendMode: "multiply" }}>
                <path d={svgPaths.p34bd0800} fill="#0C7B91" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <Group1 />
    </div>
  );
}

export default function TravelLogo() {
  return (
    <div className="relative size-full" data-name="Travel_logo">
      <OhlalaBleu />
    </div>
  );
}