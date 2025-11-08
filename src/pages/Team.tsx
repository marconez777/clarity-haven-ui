import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Gabriel Lopes",
      role: "Fundador do Instituto Sanapta",
      initials: "GL",
      image: "",
      description: `Graduado em Medicina pela Faculdade de Ciências Médicas da Santa Casa de São Paulo (Turma XL).
Residência Médica em Psiquiatria pela Faculdade de Ciências Médicas da Santa Casa de São Paulo.
Curso de Formação em Acupuntura e Medicina Tradicional Chinesa (MTC) da Associação Médica Brasileira de Acupuntura, com estágio clínico no Hospital do Servidor Público Estadual (IAMSPE).
Residência Médica em Psiquiatria da Infância e Adolescência pela USP.
Formação em Psicoterapia Analítico Funcional pelo Instituto Paradigma.
Mestrado em Psiconeuroimunologia pela Universidad de Salamanca – Espanha (em andamento).
Experiência clínica: TDAH, Transtornos de Ansiedade, Transtornos de Humor. Atende principalmente infância, adolescentes e adultos até 65 anos.

21 anos de experiência.`
    },
    {
      name: "Dra. Ana Carolina Sato",
      role: "Co-fundadora do Instituto Sanapta",
      initials: "AS",
      image: "",
      description: `Graduada em Medicina pela UNIFESP – Escola Paulista de Medicina
Residência Médica em Pediatria pela UNIFESP – Escola Paulista de Medicina
Residência Médica em Medicina do Adolescente pela UNIFESP – Escola Paulista de Medicina
Título de Especialista pela Sociedade Brasileira de Pediatria.
Pós-graduada com especialização em Acupuntura pelo Center-AO, também vinculado a UNIFESP.
Título de Especialista em Acupuntura pela Associação Médica Brasileira de Acupuntura.
Idealizadora do método SATO de acupuntura médica (Sistema de Acupuntura com Tratamento Orientado), terapia que agrega a teoria da medicina chinesa às práticas modernas como psiconeuroimunologia, barra de access, medicina emocional, medicina holística, florais de Bach, aromaterapia, mindfulness e biomagnetismo, possuindo certificação em todas as modalidades.
Atualmente é mestranda em Psiconeuroimunologia pela Universidad de Salamanca na Espanha.
Atende desde crianças recém-nascidas a idosos.
Grande experiência com crianças com problemas neurológicos, paralisia cerebral, autismo. Atende gestantes e mulheres em fase de fertilização com resultados animadores.
21 anos de experiência em medicina chinesa.`
    },
    {
      name: "Dra. Vanessa Olivers",
      role: "Neuropsicóloga",
      initials: "VO",
      image: "",
      description: `Neuropsicóloga formada pelo Instituto de Psiquiatria do Hospital das Clínicas de São Paulo (Ipq- HC-FMUSP) com ênfase em avaliação neuropsicológica e expertise na avaliação e diagnósticos diferencial de TDAH em adolescentes e adultos, bem como de todas as suas comorbidades conhecidas. Atendimento a saúde mental em psicoterapia psicodinâmica.
Psicóloga clínica de adolescentes e adultos com maior experiência em TDAH e suas comorbidades.
A importância da avaliação neuropsicológica está não só no fato de ser o exame mais importante para confirmar o diagnóstico de TDAH, mas principalmente para nortear o tratamento da própria terapia, realizada em nossa clínica. Coordenadora do setor de avaliação diagnóstica em neuropsicologia do Instituto Sanapta.`
    },
    {
      name: "Wladimir Martins",
      role: "Psicólogo CRP 36.438/6",
      initials: "WM",
      image: "",
      description: `Especialização na teoria Psicodramática (EPP) e mestrado em violência como estratégia de convivência (Assédio moral). Atendimento de adultos e casais. Larga experiência na academia e como docente.`
    },
    {
      name: "Michelle Ribeiro Teixeira",
      role: "Psicóloga",
      initials: "MT",
      image: "",
      description: `Psicóloga com atuação na abordagem Terapia Cognitivo Comportamental. Pós-graduada em Medicina Integrativa pelo Hospital Israelita Albert Einstein, e também em Psicologia Positiva pela PUC e com MBA em Desenvolvimento Humano de Líderes pela FGV. Formação em Fundamentos em Coaching pela New York University, em Terapia Cognitiva Narrativa e Focada na Compaixão, e Psicologia e Psiquiatria Positiva na Prática Clínica pelo Instituto de Psiquiatria da FMUSP.`
    },
    {
      name: "Sofia Hamoui",
      role: "Psicóloga",
      initials: "SH",
      image: "",
      description: `Formada em Psicologia pela Pontifícia Universidade Católica de São Paulo. Realiza a Qualificação Avançada em Análise do Comportamento Aplicada à infância, adolescência e parentalidade no Centro Paradigma Ciências do Comportamento e Pós-graduação em Transtornos Alimentares (Ambulim) no Instituto de Psiquiatria do Hospital das Clínicas da FMUSP. Atua com crianças, jovens e adultos, orientada pela Análise do Comportamento.`
    },
    {
      name: "Philippe Albert Dalle Molle Benhayon",
      role: "Psicólogo",
      initials: "PB",
      image: "",
      description: `Psicólogo formado pela PUC-SP, pós-graduado em psicologia da saúde com ênfase em psiconcologia pelo Instituto do Câncer do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo(HCFMUSP – Icesp). Atua como psicólogo clínico propondo uma psicoterapia com olhar pautado pela fenomenologia existencial, tem experiência com casos de Saúde Mental e Dependência Química.`
    },
    {
      name: "Laura",
      role: "Educadora Física",
      initials: "LA",
      image: "",
      description: `Sólida formação em Educação Física e diversas especializações. Sua maior capacitação, interesse e experiência é em saúde mental dentro da educação física, com foco em treinar o corpo com técnicas específicas para manter a saúde mental o mais saudável possível, dependendo de cada transtorno psiquiátrico.
Constantemente buscando atualizar e aprimorar seus conhecimentos, Laura cria sempre treinamentos personalizados e adaptáveis, garantindo um serviço de qualidade e exclusivo aos seus clientes, com resultados visíveis e duradouros.`
    }
  ];

  return (
    <>
      <Helmet>
        <title>Nossa Equipe - Instituto Sanapta | Profissionais Especializados em Saúde Mental</title>
        <meta
          name="description"
          content="Conheça a equipe multidisciplinar do Instituto Sanapta: psiquiatras, psicólogos, neuropsicóloga e profissionais especializados em TDAH, ansiedade e depressão."
        />
        <meta name="keywords" content="equipe médica, psiquiatras, psicólogos, neuropsicologia, TDAH, saúde mental, Instituto Sanapta" />
        <link rel="canonical" href="https://institutosanapta.com/equipe" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
        <Navigation />
        <Breadcrumbs items={[{ label: "Nossa Equipe" }]} />
        
        {/* Hero Section */}
        <section className="pt-8 pb-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nossa Equipe
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Nossa equipe é composta por profissionais que atuam de forma integrada, para o melhor tratamento do paciente e somos especializados no atendimento integral (visão ampla), integrado (profissionais alinhados) e integrativo (abordagem médica ampla, não restrita somente ao diagnóstico, mas com uma visão ampla de saúde) dos pacientes com TDAH, Ansiedade e Depressão. Atendemos pacientes a partir de 3 anos de idade, com equipe qualificada para esta faixa etária.
            </p>
            <p className="text-lg text-foreground font-medium">
              Somos: Dois psiquiatras, seis psicólogos, uma neuropsicóloga, uma equipe de ATs (acompanhantes terapêuticos), uma acupunturista e médica integrativa, uma equipe de personal trainers e um nutricionista.
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-[var(--shadow-hover)] transition-shadow duration-300">
                  <CardHeader className="bg-primary/5 pb-6">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <Avatar className="h-32 w-32 border-4 border-background shadow-lg">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-center md:text-left flex-1">
                        <CardTitle className="text-2xl md:text-3xl mb-2">
                          {member.name}
                        </CardTitle>
                        <p className="text-primary font-semibold text-lg">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Team;
