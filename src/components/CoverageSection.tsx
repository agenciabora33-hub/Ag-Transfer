import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Navigation, ArrowRight, ExternalLink, Star, ChevronRight, Zap, Building2, Mountain } from 'lucide-react';
import { COMPANY_NAP, POPULAR_ROUTES, buildWhatsAppUrl } from '../data/companyData';
import { CITIES_SERVED } from '../data/cityData';

export const CoverageSection: React.FC = () => {
  return (
    <section id="cobertura" className="py-24 bg-[#F8FAFC] border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14"
        >
          <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase block mb-2">
            Localização & Abrangência Geográfica (GEO)
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D0A27] tracking-tight text-balance">
            Atendimento em Caxias do Sul, Serra Gaúcha e Conexões
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed text-pretty">
            Localizada estrategicamente na{' '}
            <strong className="text-[#0D0A27] font-semibold">
              Av. Salgado Filho, 3451 (Bairro Salgado Filho, Caxias do Sul - RS, CEP 95098-420)
            </strong>
            , a AG Transfer atende com agilidade Caxias do Sul, Bento Gonçalves, Farroupilha, Flores da Cunha, Gramado, Canela, Nova Petrópolis, Garibaldi, Porto Alegre e toda a Região Sul.
          </p>
        </motion.div>

        {/* Two-Column Grid: Popular Routes Table + Physical Location NAP Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Routes Table */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 overflow-hidden shadow-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-[#0D0A27]">Rotas Executivas Frequentes</h3>
                <p className="text-xs text-slate-500">Estimativas médias calculadas para veículos privativos</p>
              </div>
              <span className="text-xs text-[#0284C7] font-bold font-mono tabular-nums bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-100">
                {POPULAR_ROUTES.length} Conexões Principais
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase text-[11px] tracking-wider">
                    <th className="pb-3 pr-4">Origem / Destino</th>
                    <th className="pb-3 px-3">Tempo Médio</th>
                    <th className="pb-3 px-3">Distância</th>
                    <th className="pb-3 pl-3 text-right">Ação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {POPULAR_ROUTES.map((route, idx) => (
                    <tr key={idx} className="hover:bg-sky-50/50 transition-colors group">
                      <td className="py-3.5 pr-4">
                        <div className="font-bold text-[#0D0A27] group-hover:text-[#0284C7] transition-colors">
                          {route.origin} → {route.destination}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5 font-medium">
                          {route.highlight}
                        </div>
                      </td>
                      <td className="py-3.5 px-3 whitespace-nowrap font-mono tabular-nums text-[#0284C7] font-semibold">
                        {route.estimatedTime}
                      </td>
                      <td className="py-3.5 px-3 whitespace-nowrap font-mono tabular-nums text-slate-600 font-medium">
                        {route.distance}
                      </td>
                      <td className="py-3.5 pl-3 text-right whitespace-nowrap">
                        <a
                          href={buildWhatsAppUrl({
                            service: `Transfer: ${route.origin} para ${route.destination}`,
                            origin: route.origin,
                            destination: route.destination,
                          })}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-[#0284C7] text-slate-700 hover:text-white border border-slate-200 hover:border-[#0284C7] text-xs font-semibold transition-colors shadow-xs"
                        >
                          <span>Cotar</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
              <span>* Tempos podem variar de acordo com o fluxo do tráfego ou condições climáticas da serra.</span>
              <span className="text-[#0284C7] font-semibold">Rotas personalizadas para todo o Brasil sob consulta</span>
            </div>
          </motion.div>

          {/* Physical NAP & Google Maps Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 relative overflow-hidden shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284C7] shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0D0A27]">Sede Operacional</h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-xs text-[#0284C7] font-semibold">Caxias do Sul / RS</span>
                    <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">24 Horas</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 mb-6">
                <div>
                  <span className="block text-[#0D0A27] font-semibold">Endereço Físico (NAP):</span>
                  <span>{COMPANY_NAP.fullAddress}</span>
                </div>
                <div>
                  <span className="block text-[#0D0A27] font-semibold">Reputação Google Business Profile:</span>
                  <a
                    href={COMPANY_NAP.gbpUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#0284C7] font-bold hover:underline mt-0.5"
                  >
                    <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                    <span>5.0 Estrelas (+200 avaliações)</span>
                  </a>
                </div>
                <div>
                  <span className="block text-[#0D0A27] font-semibold">Telefone / WhatsApp:</span>
                  <span className="font-mono tabular-nums text-slate-800 font-bold">{COMPANY_NAP.phone}</span>
                </div>
                <div>
                  <span className="block text-[#0D0A27] font-semibold">Google Place ID:</span>
                  <span className="font-mono text-[11px] text-slate-400">{COMPANY_NAP.googlePlaceId}</span>
                </div>
              </div>

              <div className="space-y-2">
                <a
                  href={COMPANY_NAP.gbpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs font-semibold transition-colors shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>Traçar Rota no Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={COMPANY_NAP.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#0D0A27] via-[#0A2540] to-[#0284C7] hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-[0.98]"
                >
                  <span>Chamar no WhatsApp 24h</span>
                </a>
              </div>
            </div>

            {/* Coverage Regions list with links */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 text-xs text-slate-600 shadow-xs">
              <span className="font-bold text-[#0D0A27] block mb-2">Cidades com Atendimento Prioritário:</span>
              <div className="flex flex-wrap gap-2 text-slate-600 font-medium">
                {CITIES_SERVED.map((c, i) => (
                  <React.Fragment key={c.id}>
                    <Link
                      to={`/cidades/${c.slug}`}
                      className="hover:text-[#0284C7] hover:underline font-semibold text-slate-700"
                    >
                      {c.name}
                    </Link>
                    {i < CITIES_SERVED.length - 1 && <span className="text-slate-300">·</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

        {/* Dedicated City Hub (SEO / GEO / SXO Hub) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="pt-8 border-t border-slate-200"
        >
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] block mb-1">
              Páginas Dedicadas por Cidade (SEO & GEO)
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0D0A27]">
              Conheça Nossa Operação Executiva em Cada Cidade Atendida
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Acesse a página específica da sua cidade de destino para conferir distâncias, rotas recomendadas, atrativos turísticos, perfil geográfico e respostas às dúvidas mais frequentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CITIES_SERVED.map((c) => (
              <Link
                key={c.id}
                to={`/cidades/${c.slug}`}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-[#0284C7] hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0284C7] bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100">
                      <MapPin className="w-3 h-3" />
                      {c.name}
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {c.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#0D0A27] group-hover:text-[#0284C7] transition-colors mb-1.5">
                    Transfer Executivo em {c.name}
                  </h4>

                  <p className="text-xs text-slate-500 line-clamp-2 mb-3 leading-relaxed">
                    {c.description}
                  </p>

                  <div className="space-y-1 text-[11px] text-slate-500 pt-2 border-t border-slate-100 mb-4">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Do Aeroporto POA:</span>
                      <strong className="text-slate-700">{c.distanceFromPoa.split('(')[0]}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Do Aeroporto CXJ:</span>
                      <strong className="text-[#0284C7]">{c.distanceFromCxj.split('(')[0]}</strong>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 text-xs font-bold text-[#0284C7]">
                  <span>Ver Página Completa de {c.name}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
