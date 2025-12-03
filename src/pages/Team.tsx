import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, MessageCircle } from "lucide-react";
import { handleWhatsAppClick } from "@/hooks/useConversionTracking";

// Import all doctor images
import drGabriel from "@/assets/doctors/dr-gabriel.png";
import draAnaSato from "@/assets/doctors/Dra-Ana-Carolina-Sato.png";
import draStelaBersan from "@/assets/doctors/dra-stela-bersan-faustino.png";
import drJulioCesar from "@/assets/doctors/dr-julio-cesar-scaled.png";
import vanessaOliveira from "@/assets/doctors/vanessa-oliveira-da-silva.png";
import wladimirMartins from "@/assets/doctors/corpo-clinico-wladimir.png";
import philippeBenhayon from "@/assets/doctors/philippe-albert-dalle-molle-benhayon.png";
import israelBusto from "@/assets/doctors/israel-adolfo-mirando-busto.png";
import lauraSilva from "@/assets/doctors/laura-jessica-siqueira-da-silva.png";

interface TeamMember {
  name: string;
  registration: string;
  specialty: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Gabriel M. Lopes",
    registration: "CRM-SP: 131.339 / RQE: 48295",
    specialty: "Psiquiatra",
    image: drGabriel,
    description: "Formado em Medicina pela prestigiosa Faculdade de Medicina da Santa Casa de São Paulo, o Dr. Gabriel M. Lopes deu continuidade na sua jornada acadêmica fazendo Residência Médica em Psiquiatria nesta mesma instituição e um aprofundamento em Psiquiatria da Infância e Adolescência no reconhecido Hospital das Clínicas da Universidade de São Paulo (USP). O Dr. Gabriel também é Psicoterapeuta formado em Análise do Comportamento pelo Instituto Paradigma. Atualmente o psiquiatra Dr. Gabriel M. lidera o Instituto Sanapta, uma clínica multiprofissional, que tem como objetivo principal olhar para o ser humana de forma ampla e integrada. O instituto conta com profissionais renomados e de diversas especialidades, o que permite personalizar os tratamentos de acordo com a necessidade de cada paciente, olhando-o como um todo."
  },
  {
    name: "Dra. Ana Carolina Sato",
    registration: "CRM-SP 124689 / RQE 36190",
    specialty: "Acupuntura integrativa",
    image: draAnaSato,
    description: "Dra. Ana Carolina Sato é graduada em Medicina pela UNIFESP – Escola Paulista de Medicina, ela traz uma vasta experiência com residências médicas em Pediatria e Medicina do Adolescente, ambas realizadas na UNIFESP. Além de seu título de Especialista pela Sociedade Brasileira de Pediatria, a Dra. Sato é uma especialista em Acupuntura, com uma pós-graduação pelo Center-AO, vinculado à UNIFESP, e o título de Especialista em Acupuntura pela Associação Médica Brasileira de Acupuntura. Depois de muitos anos de estudo, realiza hoje acupuntura médica integrativa, uma combinação única que une a medicina chinesa com práticas modernas, como laserpuntura, fotobiomodulação, psiconeuroimunologia, medicina emocional e medicina holística. A Dra Ana Sato possui ampla experiência em tratar diversas condições, sendo altamente capacitada no atendimento de bebês, gestantes e adultos que queiram buscar a saúde de forma mais completa. Com uma carreira de 21 anos dedicados à medicina chinesa, a Dra. Sato é uma profissional altamente experiente e qualificada, oferecendo cuidados de saúde personalizado e diversificados. Atualmente é mestranda e pesquisadora em psiconeuroimunologia pela Universidad de Salamanca na Espanha e co-fundadora do instituto Sanapta onde desenvolve seu trabalho com equipe multidisciplinar."
  },
  {
    name: "Dra. Stela Bersan Faustino",
    registration: "CRM SP 248292",
    specialty: "Psiquiatra",
    image: draStelaBersan,
    description: "Médica formada pela Universidade Estadual de Santa Cruz, em especialização em Psiquiatria pela Faculdade de Ciências Médicas da Santa Casa de São Paulo. Atua com dedicação ao cuidado integral em saúde mental, com experiência tanto em contextos de urgência quanto em seguimento clínico de médio e longo prazo. Sua abordagem valoriza a escuta atenta, o vínculo terapêutico e o uso responsável da psicofarmacologia, sempre considerando a singularidade de cada paciente. Complementa sua formação com estudos avançados em Psicofarmacologia Clínica pelo Instituto de Ciências Biomédicas da USP (ICB-USP). Já integrou grupos de estudos em Cuidados Paliativos e ligas acadêmicas de Farmacologia Clínica, além de ter atuado em projetos de saúde comunitária com foco em promoção de bem-estar. É também bacharela em Comunicação Social pela ECA-USP, o que fortalece seu olhar sobre a importância da linguagem, da escuta e da qualidade da relação entre profissional e paciente como elementos centrais no processo de cuidado."
  },
  {
    name: "Dr. Julio Cesar",
    registration: "CRP 06/130364",
    specialty: "Psicólogo Analista do Comportamento",
    image: drJulioCesar,
    description: "Atendimento clínico de crianças, adolescentes e adultos e especializado em Transtorno do Espectro Autista e outros atrasos do desenvolvimento."
  },
  {
    name: "Vanessa Oliveira da Silva",
    registration: "CRP 06/161343",
    specialty: "Neuropsicóloga",
    image: vanessaOliveira,
    description: "Neuropsicóloga formada pelo Instituto de Psiquiatria do Hospital das Clínicas de São Paulo (Ipq-HC-FMUSP) com ênfase em avaliação neuropsicológica e expertise na avaliação e diagnósticos diferencial de TDAH em adolescentes e adultos, bem como de todas as suas comorbidades conhecidas. Atendimento a saúde mental em psicoterapia psicodinâmica. Psicóloga clínica de adolescentes e adultos com maior experiência em TDAH e suas comorbidades."
  },
  {
    name: "Wladimir Martins",
    registration: "CRP 36.438/6",
    specialty: "Psicólogo Clínico",
    image: wladimirMartins,
    description: "Especialização na teoria Psicodramática (EPP) e mestrado em violência como estratégia de convivência (Assédio moral). Atendimento de adultos e casais. Larga experiência na academia e como docente."
  },
  {
    name: "Philippe Albert Dalle Molle Benhayon",
    registration: "CRP 06/152007",
    specialty: "Psicólogo Clínico",
    image: philippeBenhayon,
    description: "O Dr. Philippe é Psicólogo formado pela PUC-SP, pós-graduado em psicologia da saúde com ênfase em psiconcologia pelo Instituto do Câncer do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (HCFMUSP – Icesp). Atua como psicólogo clínico propondo uma psicoterapia com olhar pautado pela fenomenologia existencial, tem experiência com casos de Saúde Mental e Dependência Química."
  },
  {
    name: "Israel Adolfo Mirando Busto",
    registration: "CRN 21752",
    specialty: "Nutricionista Esportivo",
    image: israelBusto,
    description: "Nutricionista Esportivo Especialista em Fisiologista do Exercício, Especialista em Treinamento Desportivo, Especialista em Fisiologia da Alimentação e Especialista em Comportamento Alimentar."
  },
  {
    name: "Laura Jessica Siqueira da Silva",
    registration: "CREFITO 133524G/SP",
    specialty: "Educadora Física",
    image: lauraSilva,
    description: "Sólida formação em Educação Física e diversas especializações. Sua maior capacitação, interesse e experiência é em saúde mental dentro da educação física, com foco em treinar o corpo com técnicas específicas para manter a saúde mental o mais saudável possível, dependendo de cada transtorno psiquiátrico. Constantemente buscando atualizar e aprimorar seus conhecimentos, Laura cria sempre treinamentos personalizados e adaptáveis, garantindo um serviço de qualidade e exclusivo aos seus clientes, com resultados visíveis e duradouros."
  }
];

const Team = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Instituto Sanapta",
    "description": "Equipe multidisciplinar de profissionais de saúde mental em São Paulo",
    "medicalSpecialty": ["Psychiatry", "Psychology", "Acupuncture", "Nutrition"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "addressCountry": "BR"
    }
  };

  return (
    <>
      <Helmet>
        <title>Nossa Equipe | Instituto Sanapta - Profissionais de Saúde Mental em SP</title>
        <meta 
          name="description" 
          content="Conheça nossa equipe multidisciplinar de psiquiatras, psicólogos, neuropsicólogos e outros profissionais especializados em saúde mental no Instituto Sanapta." 
        />
        <meta name="keywords" content="equipe médica, psiquiatra São Paulo, psicólogo, neuropsicólogo, Instituto Sanapta" />
        <link rel="canonical" href="https://institutosanapta.com.br/equipe" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navigation />
      <Breadcrumbs items={[{ label: "Nossa Equipe" }]} />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nossa Equipe
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              O Instituto Sanapta conta com uma equipe multidisciplinar de profissionais altamente qualificados, 
              dedicados a oferecer um cuidado integral e personalizado em saúde mental.
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-20 md:space-y-32">
              {teamMembers.map((member, index) => {
                const isFounder = index === 0 || index === 1;
                const photoSize = isFounder 
                  ? 'w-72 h-72 md:w-96 md:h-96' 
                  : 'w-56 h-56 md:w-72 md:h-72';
                
                return (
                <article 
                  key={member.name}
                  className="grid md:grid-cols-2 gap-8 md:gap-16 items-center"
                >
                  {/* Photo */}
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="relative w-fit mx-auto">
                      {/* Decorative ring */}
                      <div className={`absolute inset-0 mx-auto rounded-full border-2 border-dashed border-primary/30 -translate-x-2 -translate-y-2 ${photoSize}`} />
                      <img
                        src={member.image}
                        alt={`Foto de ${member.name}`}
                        className={`rounded-full object-cover object-top border-4 border-primary/20 shadow-xl relative z-10 ${photoSize}`}
                      />
                      {/* Accent dot */}
                      <div className={`absolute w-6 h-6 bg-primary rounded-full z-20 shadow-lg ${isFounder ? 'bottom-6 right-6' : 'bottom-4 right-4'}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                    <div className={`flex flex-wrap items-center gap-3 mb-3 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        {member.name}
                      </h2>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                        {member.specialty}
                      </Badge>
                    </div>
                    
                    <p className={`flex items-center gap-2 text-primary font-medium mb-5 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                      <Award className="w-4 h-4 flex-shrink-0" />
                      {member.registration}
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {member.description}
                    </p>
                    
                    <Button 
                      size="lg"
                      onClick={() => handleWhatsAppClick(`team_${member.name.toLowerCase().replace(/\s+/g, '_')}`)}
                      className="gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Agendar sua consulta
                    </Button>
                  </div>
                </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Agende sua consulta
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Nossa equipe está pronta para ajudar você a cuidar da sua saúde mental. 
              Entre em contato e agende uma consulta com o profissional mais adequado para suas necessidades.
            </p>
            <Button 
              size="lg" 
              onClick={() => handleWhatsAppClick('team_cta_section')}
              className="gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Fale conosco pelo WhatsApp
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Team;
