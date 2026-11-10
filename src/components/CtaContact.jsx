import { FadeIn } from './FadeIn';
import { Link } from 'react-router-dom';

export const CtaContact = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#2E2F32] mt-auto border-t border-[#767980]/20">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          
          <div className="max-w-3xl">
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-[#CF6343] block mb-4">
              Liderazgo Institucional
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F8F9FA] leading-tight mb-4 tracking-tight">
              Los resultados se protegen <br className="hidden sm:block" />
              <span className="italic text-[#767980] font-light">con el talento correcto.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#F8F9FA]/70 font-light leading-relaxed">
              Detrás de cada margen de rentabilidad hay especialistas tomando decisiones estratégicas todos los días. Conecte directamente con nuestro comité directivo para analizar su propiedad.
            </p>
          </div>
          
          <div className="flex-shrink-0 w-full lg:w-auto">
            <Link 
              to="/contacto" 
              className="block text-center w-full bg-[#CF6343] hover:bg-[#963E27] px-8 py-4 sm:py-5 text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-white transition-colors duration-300 shadow-md"
            >
              Hablar con dirección
            </Link>
          </div>

        </FadeIn>
      </div>
    </section>
  );
};