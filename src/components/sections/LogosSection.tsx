import imgAirbnb from '@imports/2c3c453d609e5336d8cf009029bed004bef443a1.png';
import imgGreenerwave from '@imports/aa5e01b71ec2b7ec6634f335f3a6c5edf8e36b71.png';
import imgBouygues from '@imports/53d539168883ca6096ecfff24d5bd45c0b209b88.png';
import imgAude from '@imports/7558ed895aaa3f206abdc81f180261131959d71e.png';
import imgFdj from '@imports/e9d8fbcd7e51387b2ba46b8738f0ca34531df45c.png';
import imgMea from '@imports/1369928fd1fd63d411cd19122f2c67ec818c4ca4.png';

const logos = [
  { src: imgAirbnb, alt: 'Airbnb', w: 174, h: 54 },
  { src: imgGreenerwave, alt: 'Greenerwave', w: 166, h: 64 },
  { src: imgBouygues, alt: 'Bouygues Télécom', w: 200, h: 74 },
  { src: imgAude, alt: "Département de l'Aude", w: 180, h: 59 },
  { src: imgFdj, alt: 'FDJ', w: 164, h: 59 },
  { src: imgMea, alt: 'MEA Source', w: 209, h: 185 },
];

export default function LogosSection() {
  return (
    <section
      aria-label="Clients et partenaires"
      className="w-full overflow-hidden py-4 group"
    >
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 16s linear infinite;
          animation-play-state: paused;
        }
        .group:hover .marquee-track {
          animation-play-state: running;
        }
      `}</style>

      <div
        className="marquee-track flex items-center"
        style={{ width: 'max-content' }}
        aria-hidden="true"
      >
        {[...logos, ...logos].map(({ src, alt, w, h }, i) => (
          <div
            key={`${alt}-${i}`}
            className="flex items-center justify-center px-12 shrink-0"
            style={{ height: 88 }}
          >
            <img
              src={src}
              alt={i < logos.length ? alt : ''}
              width={w}
              height={h}
              loading="lazy"
              className="object-contain"
              style={{ maxHeight: 88, maxWidth: w, ...(alt === 'MEA Source' ? { marginLeft: -70, marginRight: -70 } : {}) }}
            />
          </div>
        ))}
      </div>

      {/* Accessible static list hidden visually */}
      <ul className="sr-only">
        {logos.map(({ alt }) => (
          <li key={alt}>{alt}</li>
        ))}
      </ul>
    </section>
  );
}
