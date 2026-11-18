import { useState, useEffect } from 'react';

const purpose = 'Generamos valor para el propietario en el corto y en el largo plazo.';

const stages = [
  { title: 'Diagnóstico', desc: 'El hotel y su mercado.' },
  { title: 'Estrategia', desc: 'Potencial, metas y prioridades.' },
  { title: 'Ejecución', desc: 'Operación diaria y resultados.' },
  { title: 'Control financiero', desc: 'Presupuesto, flujo y sostenibilidad.' },
  { title: 'Mejora continua', desc: 'Procesos más simples con apoyo de tecnología.' },
];

const pillars = [
  {
    title: 'Centricidad en la Continuidad',
    shortLines: ['Centricidad en', 'la Continuidad'],
    desc: 'Preservamos la identidad del hotel y lo preparamos para la siguiente generación.',
    angle: -90, // Arriba
  },
  {
    title: 'Centricidad en el Valor del activo',
    shortLines: ['Centricidad en el', 'Valor del activo'],
    desc: 'Mantenimiento y reinversión planeados para conservar y aumentar el valor del inmueble.',
    angle: 0, // Derecha
  },
  {
    title: 'Centricidad en los Clientes',
    shortLines: ['Centricidad en', 'los Clientes'],
    desc: 'Satisfacción medida y atendida, porque un huésped que regresa reduce el costo de venta.',
    angle: 90, // Abajo
  },
  {
    title: 'Centricidad en el Talento',
    shortLines: ['Centricidad en', 'el Talento'],
    desc: 'Gerentes capaces de leer indicadores, decidir y responder por sus resultados.',
    angle: 180, // Izquierda
  },
];

const ownerData = {
  title: 'Centricidad en el Propietario',
  desc: 'Todas las decisiones operativas, comerciales y financieras convergen en un único fin: proteger su patrimonio y maximizar su utilidad.',
};

export const OwnerCentricity = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedPillar, setSelectedPillar] = useState('owner'); // 'owner' o índice 0-3

  // Animación automática de las 5 etapas
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activePillarInfo =
    selectedPillar === 'owner' ? ownerData : pillars[selectedPillar];

  return (
    <section
      aria-labelledby="oc-title"
      className="bg-[#151617] py-24 lg:py-32 overflow-hidden border-y border-[#767980]/20 text-[#F8F9FA]"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-10">
        
        {/* =========================================
            COLUMNA IZQUIERDA: Textos Originales + Lista de 5 Etapas
        ============================================= */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-[#CF6343]"></div>
            <span className="text-[#CF6343] text-xs font-bold tracking-[0.2em] uppercase">
              Modelo de gestión
            </span>
          </div>

          <h2
            id="oc-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F8F9FA] mb-4 leading-tight tracking-tight"
          >
            El propietario al centro
          </h2>

          <p className="text-xl sm:text-2xl font-serif italic text-[#CF6343] mb-6 leading-snug">
            {purpose}
          </p>

          <p className="text-[#F8F9FA]/85 text-base sm:text-lg font-light mb-10 leading-relaxed">
            Cinco etapas ordenan la gestión. Cuatro pilares la sostienen, alrededor de los intereses del propietario.
          </p>

          {/* Lista Vertical Sincronizada de las 5 Etapas */}
          <ol
            aria-label="Etapas de gestión"
            className="space-y-5 border-l border-[#767980]/30 pl-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {stages.map((stage, i) => {
              const isActive = i === activeStage;
              return (
                <li
                  key={stage.title}
                  onClick={() => setActiveStage(i)}
                  onMouseEnter={() => setActiveStage(i)}
                  className="relative cursor-pointer group transition-all duration-300"
                >
                  {/* Indicador circular en la línea */}
                  <span
                    className={`absolute -left-[30px] top-1.5 w-3 h-3 rounded-full border transition-all duration-300 ${
                      isActive
                        ? 'border-[#CF6343] bg-[#CF6343] shadow-[0_0_12px_rgba(207,99,67,0.9)] scale-110'
                        : 'border-[#9CA3AF] bg-[#151617] group-hover:border-[#CF6343]'
                    }`}
                  />

                  <div className="flex items-baseline gap-3">
                    <span
                      className={`text-sm font-bold tracking-[0.14em] uppercase transition-colors duration-300 ${
                        isActive
                          ? 'text-[#CF6343]'
                          : 'text-[#F8F9FA]/80 group-hover:text-white'
                      }`}
                    >
                      0{i + 1} · {stage.title}
                    </span>
                  </div>

                  <p
                    className={`text-base font-light mt-1 transition-all duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-[#F8F9FA]/60 group-hover:text-[#F8F9FA]/85'
                    }`}
                  >
                    {stage.desc}
                  </p>
                </li>
              );
            })}
          </ol>

          <p className="mt-10 text-xs text-[#F8F9FA]/60 uppercase tracking-[0.18em]">
            Pase el cursor sobre cada etapa o pilar para ver el detalle.
          </p>
        </div>

        {/* =========================================
            COLUMNA DERECHA: Diagrama Orbital (5 Etapas + 4 Pilares + Propietario)
        ============================================= */}
        <div
          className="w-full lg:w-7/12 flex flex-col items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative w-full max-w-[640px] aspect-square">
            
            {/* Órbitas y Líneas SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 600">
              {/* Órbita exterior punteada (5 Etapas) */}
              <circle
                cx="300"
                cy="300"
                r="252"
                fill="none"
                stroke="rgba(248, 249, 250, 0.16)"
                strokeWidth="1.2"
                strokeDasharray="5 6"
              />
              {/* Órbita intermedia (4 Pilares) */}
              <circle
                cx="300"
                cy="300"
                r="165"
                fill="none"
                stroke="rgba(207, 99, 67, 0.25)"
                strokeWidth="1.2"
              />

              {/* Líneas radiales dinámicas hacia las 5 etapas */}
              {stages.map((_, i) => {
                const angle = (i * 72 - 90) * (Math.PI / 180);
                const isActive = i === activeStage;
                return (
                  <line
                    key={`line-stage-${i}`}
                    x1="300"
                    y1="300"
                    x2={300 + Math.cos(angle) * 252}
                    y2={300 + Math.sin(angle) * 252}
                    stroke={isActive ? '#CF6343' : 'rgba(248, 249, 250, 0.12)'}
                    strokeWidth={isActive ? 2 : 1}
                    className="transition-all duration-500"
                  />
                );
              })}
            </svg>

            {/* NÚCLEO CENTRAL: Centricidad en el Propietario */}
            <button
              type="button"
              onClick={() => setSelectedPillar('owner')}
              onMouseEnter={() => setSelectedPillar('owner')}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[35%] rounded-full border-2 flex flex-col items-center justify-center text-center p-4 z-20 transition-all duration-300 cursor-pointer ${
                selectedPillar === 'owner'
                  ? 'bg-[#26282B] border-[#CF6343] shadow-[0_0_40px_rgba(207,99,67,0.3)]'
                  : 'bg-[#1E2022] border-[#CF6343]/60 hover:border-[#CF6343]'
              }`}
            >
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-[#CF6343] mb-1">
                Núcleo
              </span>
              <span className="font-serif text-base sm:text-xl lg:text-2xl font-bold text-white leading-tight">
                Centricidad en <br /> el Propietario
              </span>
            </button>

            {/* ANILLO INTERMEDIO: Los 4 Pilares */}
            {pillars.map((pillar, idx) => {
              const rad = (pillar.angle * Math.PI) / 180;
              const radiusPct = 27.5; // 165 / 600
              const left = `${50 + Math.cos(rad) * radiusPct}%`;
              const top = `${50 + Math.sin(rad) * radiusPct}%`;
              const isSelected = selectedPillar === idx;

              return (
                <button
                  key={pillar.title}
                  type="button"
                  onClick={() => setSelectedPillar(idx)}
                  onMouseEnter={() => setSelectedPillar(idx)}
                  style={{ left, top, transform: 'translate(-50%, -50%)' }}
                  className={`absolute z-20 px-3.5 py-2.5 rounded-md border text-center transition-all duration-300 cursor-pointer shadow-lg ${
                    isSelected
                      ? 'bg-[#2C2E32] border-[#CF6343] text-white shadow-[0_0_24px_rgba(207,99,67,0.35)] scale-105'
                      : 'bg-[#1E2022] border-[#9CA3AF]/45 text-white hover:border-[#CF6343]'
                  }`}
                >
                  <span className="block font-serif text-xs sm:text-sm font-medium leading-snug whitespace-nowrap">
                    {pillar.shortLines[0]} <br />
                    <span className={isSelected ? 'text-[#CF6343] italic font-semibold' : 'text-[#E5E7EB]'}>
                      {pillar.shortLines[1]}
                    </span>
                  </span>
                </button>
              );
            })}

            {/* ÓRBITA EXTERIOR: Las 5 Etapas Numeradas (1 a 5) */}
            {stages.map((stage, i) => {
              const rad = (i * 72 - 90) * (Math.PI / 180);
              const radiusPct = 42; // 252 / 600
              const left = `${50 + Math.cos(rad) * radiusPct}%`;
              const top = `${50 + Math.sin(rad) * radiusPct}%`;
              const isActive = i === activeStage;

              return (
                <div
                  key={`orbit-stage-${stage.title}`}
                  onClick={() => setActiveStage(i)}
                  onMouseEnter={() => setActiveStage(i)}
                  style={{ left, top, transform: 'translate(-50%, -50%)' }}
                  className="absolute z-30 flex flex-col items-center cursor-pointer group"
                >
                  {/* Círculo numerado */}
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center font-sans text-sm sm:text-base font-bold transition-all duration-500 shadow-md ${
                      isActive
                        ? 'bg-[#CF6343] border-[#CF6343] text-white shadow-[0_0_24px_rgba(207,99,67,0.75)] scale-110'
                        : 'bg-[#1E2022] border-[#9CA3AF]/60 text-white group-hover:border-[#CF6343]'
                    }`}
                  >
                    {i + 1}
                  </div>

                  {/* Etiqueta con alto contraste debajo del círculo */}
                  <span
                    className={`mt-2 px-3 py-1 rounded-md border text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em] whitespace-nowrap transition-all duration-300 shadow-md ${
                      isActive
                        ? 'bg-[#2C2E32] border-[#CF6343] text-white'
                        : 'bg-[#1E2022] border-[#9CA3AF]/40 text-[#F8F9FA]/95 group-hover:border-[#CF6343]/70'
                    }`}
                  >
                    {stage.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Tarjeta inferior con el detalle exacto del Pilar o Núcleo seleccionado */}
          <div className="w-full max-w-[640px] mt-8 bg-[#1E2022] border border-[#9CA3AF]/30 p-6 sm:p-7 rounded-md shadow-xl transition-all duration-300">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#CF6343]">
                {selectedPillar === 'owner' ? 'Propósito Central' : 'Pilar Estratégico'}
              </span>
              <span className="text-xs uppercase tracking-[0.15em] text-[#D1D5DB]">
                Etapa activa: 0{activeStage + 1} · {stages[activeStage].title}
              </span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl text-white mb-2">
              {activePillarInfo.title}
            </h4>
            <p className="text-base text-[#F8F9FA]/90 font-light leading-relaxed">
              {activePillarInfo.desc}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};