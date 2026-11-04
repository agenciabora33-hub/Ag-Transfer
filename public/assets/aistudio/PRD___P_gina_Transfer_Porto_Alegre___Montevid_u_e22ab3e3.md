# PRD — Página "Transfer Porto Alegre → Montevidéu"

**Cliente:** AG Transfer & Transporte Executivo LTDA. (https://ag-transfer.vercel.app/) **Elaborado por:** Agência Bora Digital Strategy · Novembro/2026 **Status:** Pronto para desenvolvimento (itens marcados com \[CONFIRMAR\] dependem do cliente)

## 1. Resumo executivo

Criar uma página de destino (landing page) dentro do site da AG Transfer dedicada ao serviço de transfer privativo **Porto Alegre (aeroporto Salgado Filho) → Montevidéu**, para capturar a demanda de busca gerada pela final da CONMEBOL Libertadores 2026 (Palmeiras x Estudiantes), que será em **28/11/2026, às 17h (Brasília, GMT-3), no Estádio Centenário, em Montevidéu**.

A premissa: torcedores e viajantes de todo o Brasil que desembarcam em Porto Alegre vão pesquisar "transfer Porto Alegre Montevidéu", "como ir de Porto Alegre para Montevidéu" e variações. A página precisa aparecer nessas buscas, convencer rápido e converter em contato por WhatsApp/cotação.

**Prazo crítico:** hoje é 04/11/2026. Faltam 24 dias para a final. A página deve estar publicada e indexada em até 5 dias, para dar tempo de ranquear e rodar anúncios.

## 2. Diagnóstico do site atual

**Limitação da inspeção:** o HTML retornado pela home expõe apenas os metadados; o corpo da página é montado por JavaScript e não ficou visível na leitura. Os pontos abaixo vêm dos metadados do site. Recomenda-se que o cliente confirme textos, fotos e frota.

**O que o site comunica hoje**

- Razão social: AG Transfer & Transporte Executivo LTDA.
- Posicionamento: transporte executivo e transfer premium na Serra Gaúcha, com foco em Gramado, Canela e Bento Gonçalves (Vale dos Vinhedos).
- Serviços: transfers aeroportuários (POA e CXJ), passeios VIP e tours.
- Atendimento 24h.
- Localização de referência: Caxias do Sul/RS (meta geo).
- Idioma: pt-BR.

**Pontos fortes técnicos**

- Canonical, robots com index/follow, Open Graph e Twitter Card configurados.
- Verificação do Google Search Console e do Bing Webmaster, além de chave IndexNow já presentes (indexação rápida de novas páginas é viável).
- Logo 512x512 em PNG.

**Lacunas e riscos para esta página**

- Todo o posicionamento é Serra Gaúcha. Uma rota internacional é uma extensão de serviço: a página precisa explicar quem é a AG e por que ela pode fazer a rota (confiança).
- Conteúdo renderizado só por JavaScript é arriscado para SEO. **A nova página deve entregar o conteúdo principal no HTML** (pré-renderizado/SSR/estático).
- Não há, nos metadados, referência a Montevidéu, Uruguai ou transporte internacional.

## 3. Contexto da oportunidade

| Item | Dado |
| --- | --- |
| Evento | Final da CONMEBOL Libertadores 2026 |
| Confronto | Palmeiras x Estudiantes |
| Data/hora | 28/11/2026, 17h (Brasília, GMT-3) |
| Local | Estádio Centenário, Montevidéu, Uruguai |
| Rota | Aeroporto Salgado Filho (POA) → Montevidéu |
| Distância aproximada | cerca de 800 a 850 km, conforme o caminho (via Jaguarão/Rio Branco ou via Chuí) \[CONFIRMAR com a operação\] |
| Tempo estimado | 10 a 12 h de estrada, mais a passagem pela fronteira \[CONFIRMAR com a operação\] |

Observação: o Uruguai está no mesmo fuso de Brasília na data do jogo, o que simplifica a comunicação de horários.

## 4. Objetivos e métricas

**Objetivo de negócio:** gerar reservas e pedidos de cotação do transfer POA → Montevidéu (e retorno) até 27/11.

**Metas sugeridas (ajustar com o cliente)**

- Página indexada no Google e no Bing em até 72 h após a publicação.
- Taxa de clique no WhatsApp de pelo menos 8% das sessões.
- Pelo menos 3 variações de busca relacionadas à rota com impressões no Search Console na primeira semana.
- Tempo de resposta do WhatsApp inferior a 5 minutos no horário de pico.

**Métricas a acompanhar (GA4)**

- Sessões por origem (orgânico, anúncio, direto, social).
- Cliques em WhatsApp, cliques em telefone, envios do formulário.
- Rolagem até o FAQ e até o formulário.

## 5. Público e intenção de busca

**Personas**

1. **Torcedor individual ou casal** que pousa em POA e precisa chegar a Montevidéu sem alugar carro.
2. **Grupo de amigos/família (3 a 15 pessoas)**: busca van ou micro-ônibus com preço fechado por veículo.
3. **Torcedor com pouco tempo**: precisa de garantia de chegada antes do jogo e de volta depois dele.
4. **Executivo/convidado de empresa ou patrocinador**: busca conforto e pontualidade.

**Intenções de busca (palavras-chave-alvo)**

- Principais: transfer Porto Alegre Montevidéu; transfer aeroporto Porto Alegre Montevidéu; traslado Porto Alegre Montevidéu.
- Evento: transfer final Libertadores Montevidéu; como ir de Porto Alegre para Montevidéu final Libertadores; transporte torcedor Palmeiras Montevidéu.
- Pergunta: quanto custa ir de Porto Alegre a Montevidéu de van; quanto tempo de Porto Alegre a Montevidéu; precisa de passaporte para ir ao Uruguai.
- Operacionais: van Porto Alegre Montevidéu; transfer privativo Porto Alegre Uruguai; transfer ida e volta Montevidéu.

## 6. Escopo da página

**URL sugerida:** `/transfer-porto-alegre-montevideu` **Navegação:** link no menu ("Transfer Montevidéu") e banner/atalho na home durante a campanha.

**Dentro do escopo**

- Página única, mobile first, em pt-BR, com formulário de cotação e botão de WhatsApp.
- SEO técnico e dados estruturados.
- Rastreamento de conversões.
- Banner de entrada na home apontando para a página.

**Fora do escopo (fase 2, opcional)**

- Versão em espanhol (/es) para público uruguaio e argentino.
- Pagamento online.
- Outras rotas internacionais.

## 7. Estrutura e conteúdo da página

Os textos abaixo são a proposta de copy. Itens entre colchetes são dados do cliente.

### 7.1 Título (H1)

**Transfer de Porto Alegre a Montevidéu: do aeroporto ao Estádio Centenário**

### 7.2 Seção 1 — Hero

- Subtítulo: "Transfer privativo, com motorista profissional, saindo do Aeroporto Salgado Filho direto para Montevidéu. Ideal para quem vai assistir à final da Libertadores no dia 28/11."
- Botões: **Pedir cotação no WhatsApp** (principal) e **Preencher o formulário** (secundário).
- Selos de confiança: atendimento 24h · veículos \[CONFIRMAR\] · motoristas experientes · reserva confirmada por escrito.

### 7.3 Seção 2 — Por que reservar um transfer privativo

- Sem depender de conexões, filas ou horários de ônibus.
- Recebimento no desembarque, com acompanhamento do seu voo \[CONFIRMAR se o serviço oferece\].
- Preço fechado por veículo, dividido entre o grupo.
- Saída no seu horário, com planejamento para chegar com folga antes do jogo.
- Opção de ida e volta.

### 7.4 Seção 3 — Como funciona (3 passos)

1. Você informa data, horário do voo, número de passageiros e bagagens.
2. A AG Transfer envia a cotação e confirma a reserva.
3. O motorista espera você no aeroporto de Porto Alegre e segue para Montevidéu.

### 7.5 Seção 4 — Sobre a rota

- Saída: Aeroporto Internacional Salgado Filho (POA), Porto Alegre/RS.
- Destino: Montevidéu, Uruguai (hotel, endereço ou região do Estádio Centenário).
- Distância e tempo: "Cerca de \[800–850\] km e \[10–12\] horas de viagem, mais o tempo de passagem pela fronteira." \[CONFIRMAR\]
- Dica de planejamento: "Quem pousa em Porto Alegre em cima da hora corre o risco de não chegar ao jogo. Planeje a saída com antecedência e fale com a nossa equipe sobre o melhor horário."

### 7.6 Seção 5 — Opções de veículo e passageiros

Tabela editável: Carro executivo (até \[X\] passageiros) · Van (\[X\] passageiros) · Micro-ônibus (\[X\] passageiros). Preço: "Sob consulta" ou valores a partir de \[CONFIRMAR\]. Não publicar valores sem a confirmação do cliente.

### 7.7 Seção 6 — Documentos e fronteira (informativo)

- Orientar o passageiro a verificar a documentação aceita para entrada no Uruguai (RG ou passaporte, conforme as regras vigentes do Mercosul) e as exigências para menores de idade.
- Incluir link para a fonte oficial (Polícia Federal e governo do Uruguai) \[CONFIRMAR URLs\].
- Evitar afirmar regras de forma definitiva sem fonte oficial.

### 7.8 Seção 7 — Perguntas frequentes (FAQ)

1. **Quanto custa o transfer de Porto Alegre a Montevidéu?** O valor depende do veículo, do número de passageiros e da data. Peça uma cotação pelo WhatsApp.
2. **Quanto tempo dura a viagem?** Em média \[10–12\] horas, mais a fronteira. \[CONFIRMAR\]
3. **Vocês buscam no aeroporto de Porto Alegre?** Sim, o motorista aguarda no desembarque. \[CONFIRMAR\]
4. **Dá tempo de chegar para a final se eu pousar na manhã de 28/11?** Depende do horário do voo; consulte nossa equipe antes de comprar a passagem e programe a chegada com folga.
5. **Vocês fazem a volta depois do jogo?** \[CONFIRMAR\]
6. **Posso levar bagagem?** Informe a quantidade na cotação para escolhermos o veículo.
7. **Que documentos preciso?** Consulte a seção de documentos e as fontes oficiais.
8. **Como reservo?** Pelo WhatsApp ou pelo formulário desta página.
9. **Posso dividir o valor entre amigos?** Sim, o valor é por veículo.

### 7.9 Seção 8 — Formulário de cotação

Campos: nome · WhatsApp · data e horário do voo (chegada em POA) · número de voo \[opcional\] · número de passageiros · número de malas · destino em Montevidéu · precisa de volta? (sim/não, data) · observações. Botão: "Receber minha cotação". Mensagem de sucesso com link para o WhatsApp.

### 7.10 Seção 9 — CTA final e rodapé

Repetir o botão de WhatsApp. Rodapé com razão social, contatos e links do site. Aviso: "A AG Transfer é uma empresa independente de transporte e não tem vínculo com a CONMEBOL, com os clubes ou com a organização do evento. Não vendemos ingressos."

**Mensagem pré-preenchida do WhatsApp:** "Olá! Quero uma cotação de transfer Porto Alegre → Montevidéu. Data: \_\_ · Passageiros: \_\_ · Voo chega às: \_\_."

## 8. SEO técnico

- **Title (até 60 caracteres):** Transfer Porto Alegre Montevidéu | Final Libertadores 2026
- **Meta description (até 155 caracteres):** Transfer privativo do aeroporto de Porto Alegre a Montevidéu. Van e carro executivo, atendimento 24h. Peça sua cotação no WhatsApp.
- **Canonical:** https://ag-transfer.vercel.app/transfer-porto-alegre-montevideu
- **Robots:** index, follow, max-snippet:-1, max-image-preview:large.
- **Open Graph/Twitter:** título, descrição, imagem 1200x630 própria da página.
- **Hierarquia:** um único H1; H2 por seção; palavras-chave de forma natural.
- **Dados estruturados (JSON-LD):** Service (provider = organização AG Transfer, areaServed Porto Alegre e Montevidéu), FAQPage (as perguntas da seção 7.8), BreadcrumbList.
- **Links internos:** a home e a página de transfers aeroportuários apontam para a nova página, com âncora "transfer Porto Alegre Montevidéu".
- **Sitemap e indexação:** incluir no sitemap.xml; solicitar indexação no Google Search Console; enviar a URL pelo IndexNow e pelo Bing Webmaster.
- **Performance:** LCP abaixo de 2,5 s no mobile; imagens WebP com dimensões definidas e lazy loading abaixo da dobra.
- **Observação de marca:** usar "Libertadores 2026" e os nomes dos clubes apenas de forma descritiva, sem logotipos, escudos ou imagens oficiais.

## 9. Requisitos funcionais

1. Botão fixo de WhatsApp no mobile, com mensagem pré-preenchida.
2. Formulário com validação e envio por \[e-mail/Formspree/serviço do site — CONFIRMAR\].
3. Eventos GA4: `click_whatsapp`, `click_phone`, `form_submit`, `scroll_faq`.
4. Conversões do Google Ads configuradas para WhatsApp e formulário.
5. Banner na home: "Final da Libertadores: transfer Porto Alegre → Montevidéu".
6. Página acessível (contraste, texto alternativo, foco visível).

## 10. Design e UX

- Seguir a identidade visual atual do site (logo, cores e tipografia).
- Mobile first: a maior parte do tráfego virá de celular.
- Hero com foto real da frota ou imagem própria. Não usar imagens com direitos de terceiros do evento.
- CTA visível sem rolagem e repetido ao longo da página.
- Texto curto, escaneável, sem blocos longos.

## 11. Conformidade e riscos

| Risco | Ação |
| --- | --- |
| Autorização para transporte internacional de passageiros | Confirmar com o cliente a habilitação da empresa e dos veículos (órgãos brasileiros e uruguaios competentes, seguro e documentação do veículo) antes de publicar qualquer promessa de serviço. Não publicar a página sem essa confirmação. |
| Uso de marcas do evento e dos clubes | Linguagem apenas descritiva, sem logotipos, sem sugerir parceria oficial e sem venda de ingressos. |
| Informações de fronteira desatualizadas | Direcionar o passageiro às fontes oficiais e revisar o texto antes do evento. |
| Preço e tempo de viagem | Só publicar o que o cliente confirmar. |
| Pico de demanda | Definir limite de reservas por data e equipe de atendimento no WhatsApp. |
| Indexação lenta | Publicar logo, usar IndexNow, Search Console e Bing. |

## 12. Distribuição e mídia (apoio à página)

- **Google Ads (Pesquisa):** campanha com as palavras-chave da seção 5, localização Brasil (foco em quem pesquisa a partir de Porto Alegre e das cidades de origem), extensões de chamada e de WhatsApp, orçamento diário a definir.
- **Google Business Profile:** publicação sobre a rota e link para a página.
- **Redes sociais:** posts e stories com contagem regressiva até 28/11 e link para a página.
- **Parcerias:** divulgar a rota para hotéis, agências e grupos de torcedores, se o cliente tiver contatos.

## 13. Cronograma sugerido

| Data | Entrega |
| --- | --- |
| 04–05/11 | Aprovação do PRD e coleta dos dados do cliente |
| 06–08/11 | Desenvolvimento e revisão da página |
| 09/11 | Publicação, indexação e GA4 |
| 10/11 | Início da campanha no Google Ads |
| 10–27/11 | Monitoramento diário, ajustes de copy e de lances |
| 28/11 | Final: atendimento reforçado |

## 14. Critérios de aceite

- Página publicada na URL definida, com conteúdo no HTML.
- Title, meta description, canonical, Open Graph e JSON-LD validados.
- Formulário e WhatsApp funcionando no celular e no desktop.
- Eventos GA4 e conversões registrados em teste.
- URL enviada ao Google Search Console, ao Bing e ao IndexNow.
- Todos os itens \[CONFIRMAR\] resolvidos ou removidos.

## 15. Informações pendentes do cliente

1. Habilitação e autorizações para a rota internacional.
2. Frota disponível, capacidade e fotos reais.
3. Valores ou faixa de preço por veículo, ida e volta.
4. Tempo e rota operacionais (Jaguarão ou Chuí) e política de paradas.
5. Se atende pontos específicos em Montevidéu e se faz a volta no pós-jogo.
6. Número de WhatsApp oficial e horário de atendimento.
7. Limite de reservas por data.

## 16. Prompt para o Google AI Studio

"Atue como desenvolvedor front-end sênior. No projeto existente do site da AG Transfer (https://ag-transfer.vercel.app/), crie uma nova página estática em /transfer-porto-alegre-montevideu seguindo o PRD acima. Requisitos: conteúdo principal no HTML (sem depender de JavaScript para renderizar), mobile first, identidade visual igual à do site, H1 único, title e meta description conforme a seção 8, canonical, Open Graph, JSON-LD (Service, FAQPage, BreadcrumbList), formulário de cotação com os campos da seção 7.9, botão fixo de WhatsApp com mensagem pré-preenchida, eventos GA4 da seção 9, link no menu e banner na home. Entregue o código por arquivo, pronto para commit no GitHub e deploy na Vercel, e atualize o sitemap.xml."
