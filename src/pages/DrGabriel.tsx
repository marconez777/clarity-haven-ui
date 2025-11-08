import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import drGabrielImage from "@/assets/doctors/gabriel-lopes-sobre.jpg";

const DrGabriel = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Dr. Gabriel Lopes - Psiquiatra | CRM/SP 131.339</title>
        <meta 
          name="description" 
          content="Conheça o Dr. Gabriel Lopes, psiquiatra especializado em TDAH, adultos e infância. CRM/SP 131.339. Formação pela Santa Casa e HC-USP." 
        />
        <meta name="keywords" content="dr gabriel lopes, psiquiatra, TDAH, psiquiatria infantil, psiquiatra são paulo" />
      </Helmet>

      <Navigation />
      <Breadcrumbs items={[{ label: "Dr. Gabriel Lopes" }]} />

      <main className="pt-4">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4">
              Dr. Gabriel Lopes
            </h1>
            
            <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto mt-12">
              {/* Image */}
              <div className="relative">
                <img 
                  src={drGabrielImage} 
                  alt="Dr. Gabriel Lopes - Psiquiatra"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              {/* Doctoralia Widget */}
              <div className="flex justify-center items-start">
                <iframe 
                  frameBorder="0" 
                  scrolling="no" 
                  allowTransparency={true}
                  data-id="pnh0yj0mfi" 
                  title="Docplanner Booking Widget" 
                  src="https://widgets.doctoralia.com.br/doctor/widget/certificate/gabriel-lopes?customUtm=null&id=pnh0yj0mfi&header=null&content=null&fullwidth=null&referer=https%3A%2F%2Fdrgabriel.med.br%2Fdr-gabriel-lopes%2F&hide_branding=true&widget_position=bottom&opinion=false&saasonly=false&expand_calendar=false" 
                  style={{ border: "none", overflow: "hidden", width: "245px", height: "284px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content Section with Tabs */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">
              Navegue pelo conteúdo
            </h2>

            <Tabs defaultValue="conheca" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="conheca">Me conheça melhor</TabsTrigger>
                <TabsTrigger value="formacao">Minha formação</TabsTrigger>
                <TabsTrigger value="consulta">Como é minha consulta</TabsTrigger>
              </TabsList>

              <TabsContent value="conheca" className="space-y-6">
                <div className="prose prose-lg max-w-none text-foreground">
                  <p className="text-lg leading-relaxed mb-6">
                    Primeiro de tudo, obrigado pelo seu tempo. Afinal, você poderia estar fazendo outras coisas e está aqui, não é mesmo? Espero de coração que seja útil e proveitoso para você.
                  </p>

                  <div className="bg-secondary/10 p-6 rounded-lg my-8">
                    <p className="text-sm text-muted-foreground mb-2">CRM/SP: 131.339</p>
                    <p className="font-semibold">Médico Psiquiatra de Adultos (RQE – CREMESP: 48295)</p>
                    <p className="font-semibold">Psiquiatria da infância e adolescência (RQE – CREMESP: 48295-1)</p>
                  </div>

                  <p className="text-lg leading-relaxed mb-6">
                    Mas antes de ser um acadêmico da área da medicina e da psiquiatria, sou humano. E como humano é que pretendo conseguir ajudar a quem me procura. Como diria Jung:
                  </p>

                  <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 italic text-xl">
                    "Conheça todas as teorias, domine todas as técnicas, mas ao tocar uma alma humana, seja apenas outra alma humana".
                  </blockquote>

                  <p className="text-lg leading-relaxed mb-6">
                    E é assim que sempre tento ser no meu cotidiano. O mais empático possível com qualquer paciente que me procure. Quem tem dor, emocional ou física, tem pressa. E tento ser o mais assertivo possível no tratamento, para ajudar da melhor forma.
                  </p>

                  <h3 className="text-2xl font-bold text-primary mt-12 mb-4">QUEM SOU EU?</h3>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Olá, sou o Dr. Gabriel M. Lopes, psiquiatra com vasta experiência e especializado no atendimento a adultos e crianças. Possuo um destaque na área de Transtorno de Déficit de Atenção e Hiperatividade (TDAH), mas minha atuação abrange a totalidade da psiquiatria. Meu registro no CRM/SP é 131.339 e adquiri minha formação em Medicina pela prestigiosa Faculdade de Medicina da Santa Casa de São Paulo. Continuei minha jornada acadêmica fazendo Residência Médica em Psiquiatria nesta mesma instituição e um aprofundamento em Psiquiatria da Infância e Adolescência no reconhecido Hospital das Clínicas da Universidade de São Paulo (USP). Adicionalmente, sou um Psicoterapeuta formado em Análise do Comportamento pelo Instituto Paradigma.
                  </p>

                  <p className="text-lg leading-relaxed mb-6">
                    Durante minha carreira, acumulei uma rica bagagem de experiências clínicas que me proporcionam segurança para atender a uma ampla gama de demandas psiquiátricas. Vale salientar que, mesmo com essa extensa abrangência, opto por não atender a idosos acima de 65 anos, pois acredito que a psiquiatria geriátrica é uma especialidade que requer um conhecimento distinto. Contudo, tenho a satisfação de encaminhar esses pacientes para colegas altamente qualificados.
                  </p>

                  <p className="text-lg leading-relaxed mb-6">
                    Mesmo com um foco significativo em TDAH, minha prática não se limita a este campo. Atendo a uma diversidade de condições, sempre buscando o melhor para meus pacientes, desde aqueles que sofrem de ansiedade e depressão até aqueles que lutam contra transtornos mais complexos. Meu compromisso como psiquiatra é fazer mais do que tratar sintomas; é compreender o indivíduo por trás deles.
                  </p>

                  <p className="text-lg leading-relaxed mb-6">
                    Em termos de minha abordagem de tratamento, acredito firmemente que um pouco de humanidade é tão importante quanto a competência técnica. Isto é evidente em minha filosofia de trabalho, resumida pela citação de Jung, "Conheça todas as teorias, domine todas as técnicas, mas ao tocar uma alma humana, seja apenas outra alma humana". Esse é o norte de minha prática, seja ao tratar de TDAH ou de qualquer outra condição psiquiátrica.
                  </p>

                  <p className="text-lg leading-relaxed mb-6">
                    Minha dedicação constante a melhorar e atualizar meus conhecimentos e habilidades é parte integrante da minha filosofia de trabalho. Estou sempre me atualizando através de congressos nacionais, internacionais e cursos diversos de aperfeiçoamento. Atualmente, estou envolvido em pesquisas em várias áreas de ponta na psiquiatria, incluindo o uso de fitocanabinóides na prática médica, psiquiatria do estilo de vida e psiconeuroimunologia.
                  </p>

                  <p className="text-lg leading-relaxed mb-6">
                    Em meu consultório, cada paciente é valorizado e compreendido, seja qual for sua luta ou desafio. Cada detalhe do tratamento será explicado, incluindo medicamentos, possíveis efeitos colaterais e o tempo esperado para a melhora. Nossa meta é entender os sintomas, traçar uma linha do tempo para entender a evolução do quadro e estabelecer corretamente o diagnóstico para, então, discutir todas as opções terapêuticas disponíveis.
                  </p>

                  <p className="text-lg leading-relaxed mb-6">
                    Se você está em busca de um psiquiatra experiente e acolhedor, que atende a uma ampla gama de condições psiquiátricas, incluindo TDAH, estou aqui para ajudar. Espero ter a oportunidade de contribuir para o seu bem-estar e ajudá-lo em sua jornada. Como afirmou Jung, para alcançar uma alma humana, é preciso ser outra alma humana.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="formacao" className="space-y-6">
                <div className="prose prose-lg max-w-none text-foreground">
                  <h3 className="text-2xl font-bold text-primary mb-4">Formação Acadêmica</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-secondary/10 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-2">Graduação em Medicina</h4>
                      <p>Faculdade de Medicina da Santa Casa de São Paulo</p>
                    </div>

                    <div className="bg-secondary/10 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-2">Residência Médica em Psiquiatria</h4>
                      <p>Santa Casa de São Paulo</p>
                    </div>

                    <div className="bg-secondary/10 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-2">Especialização em Psiquiatria da Infância e Adolescência</h4>
                      <p>Hospital das Clínicas da Universidade de São Paulo (HC-USP)</p>
                    </div>

                    <div className="bg-secondary/10 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-2">Formação em Psicoterapia</h4>
                      <p>Análise do Comportamento - Instituto Paradigma</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-primary mt-12 mb-4">Áreas de Atuação e Pesquisa</h3>
                  
                  <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>Transtorno de Déficit de Atenção e Hiperatividade (TDAH)</li>
                    <li>Transtornos de Ansiedade</li>
                    <li>Transtornos Depressivos</li>
                    <li>Psiquiatria da Infância e Adolescência</li>
                    <li>Uso de Fitocanabinóides na prática médica</li>
                    <li>Psiquiatria do Estilo de Vida</li>
                    <li>Psiconeuroimunologia</li>
                  </ul>

                  <p className="text-lg leading-relaxed mt-8">
                    Minha dedicação constante a melhorar e atualizar meus conhecimentos e habilidades é parte integrante da minha filosofia de trabalho. Estou sempre me atualizando através de congressos nacionais, internacionais e cursos diversos de aperfeiçoamento.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="consulta" className="space-y-6">
                <div className="prose prose-lg max-w-none text-foreground">
                  <h3 className="text-2xl font-bold text-primary mb-4">Mas como é o Dr Gabriel na Consulta?</h3>
                  
                  <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 italic text-xl">
                    "Procuro ser sempre um ser humano atento ao sofrimento de outro ser humano."
                  </blockquote>

                  <h4 className="text-xl font-bold text-primary mt-8 mb-4">No tratamento e acompanhamento</h4>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    O tratamento é explicado em detalhes. Se incluir medicação, qual medicação, qual efeito colateral, quanto tempo para esperarmos uma melhora.
                  </p>

                  <p className="text-lg leading-relaxed mb-6">
                    Após a consulta, principalmente após as primeiras consultas, me disponho a manter o acompanhamento por Whatsapp, caso necessário, para dúvidas ou orientações.
                  </p>

                  <h4 className="text-xl font-bold text-primary mt-8 mb-4">Na consulta empatia e atenção</h4>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Na consulta, presencial ou on-line, o meu foco é, única e exclusivamente, o paciente que está em consulta. O objetivo é entender os sintomas e traçar uma linha do tempo para entender a evolução do quadro e estabelecer corretamente o diagnóstico para então discutir contigo todas as opções terapêuticas disponíveis, medicamentosas ou não.
                  </p>

                  <p className="text-lg leading-relaxed mb-6">
                    Durante a consulta, muitas vezes, alguns sintomas que muitas vezes são comuns e que os pacientes muitas vezes nem percebem são levantadas e checadas. Às vezes nestes momentos os familiares entram na consulta junto com o paciente para obtenção de dados adicionais de história.
                  </p>

                  <p className="text-lg leading-relaxed mb-6">
                    Assim, com a coleta de dados e confirmações e refutações de hipóteses, o diagnóstico é construído com a participação ativa do paciente, eventualmente com uso de alguns questionários, e normalmente são pedidos exames para descartar doenças clínicas que podem causar sintomas psiquiátricos.
                  </p>

                  <p className="text-lg leading-relaxed mb-6">
                    Sempre irei tentar ajudar de todas as formas que estiverem ao meu alcance, porém sempre dentro dos limites éticos e profissionais. Procurando estar em contato com profissionais de minha equipe, variados, inovadores, referências nacionais e internacionais, para justamente tentar abranger todo tipo de demanda que surgir tanto para um diagnóstico preciso, quanto para o tratamento eficaz.
                  </p>

                  <p className="text-lg leading-relaxed mb-6">
                    Muitas vezes é necessário incluir profissionais qualificados em diversas áreas, bem como inovações no tratamento e nas ferramentas diagnósticas.
                  </p>

                  <p className="text-lg leading-relaxed font-semibold mb-6">
                    Esse foi o norte e o objetivo de fundar o Instituto Sanapta, com a minha equipe.
                  </p>

                  <div className="bg-primary/10 p-6 rounded-lg mt-8">
                    <h4 className="text-xl font-bold text-primary mb-4">Informações complementares</h4>
                    <p className="text-lg leading-relaxed">
                      Ter segurança e confiança na consulta e no psiquiatra fazem parte do tratamento. Por isso seguem estes artigos complementares para que você se sinta mais a vontade em entrar em contato.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default DrGabriel;
