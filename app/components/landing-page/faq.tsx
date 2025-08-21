import { title } from "process";

export default function Faq() {
  const faqItems = [
    {
      title: "Como funciona a criação do perfil e links no LinkaWeb?",
      description: "Com o LinkaWeb você pode criar um perfil profissional e uma página de links em poucos minutos. Nossa plataforma oferece templates personalizáveis e uma interface fácil de usar para que você possa mostrar seu trabalho e organizar seus links de maneira eficiente."
    },
    {
      title: "Há um período de teste gratuito?",
      description: "Sim! Oferecemos um teste gratuito de 7 dias, sem compromisso. Isso permite que você explore todas as funcionalidades da nossa plataforma antes de decidir por uma assinatura."
    },
    {
      title: "Posso personalizar o design do meu perfil?",
      description: "Sim! Com o LinkaWeb, você pode personalizar cores, fontes e o layout do seu perfil, garantindo que ele reflita a sua marca pessoal."
    },
    {
      title: "Preciso de habilidades técnicas para usar a plataforma?",
      description: "Não! Nossa plataforma foi desenvolvida para ser simples e intuitiva, então não é necessário conhecimento técnico. Você pode criar e personalizar seu perfil e links sem complicações."
    },
    {
      title: "O que acontece se eu cancelar minha assinatura?",
      description: "Você pode cancelar sua assinatura a qualquer momento. Seu portfólio e página de links ficarão disponíveis até o final do período pago, mas após isso, as funcionalidades premium serão desativadas."
    },
    {
      title: "Posso compartilhar meu perfil em redes sociais?",
      description: "Sim! Você pode compartilhar seu perfil em diversas redes sociais com um link personalizado, facilitando a divulgação do seu trabalho e a conexão com novos negócios."
    }
  ];
  return (
    <div className="my-20 flex flex-col items-center gap-16">
      <h3 className="text-4xl font-bold text-white">Dúvidas Frequentes</h3>
      <div className="flex gap-3">
        <div className="flex flex-col gap-3">
          {faqItems.slice(0, Math.ceil(faqItems.length / 2)).map((item) => (
            <FAQItem
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {faqItems.slice(Math.ceil(faqItems.length / 2)).map((item) => (
            <FAQItem
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function FAQItem({title, description}: {title: string, description: string}) {
  return (
    <div className="w-[351px] h-min flex flex-col gap-3 p-5 rounded-2xl border border-border-primary bg-background-primary">
      <p className="font-bold text-white">{title}</p>
      <p className="text-content-body">{description}</p>
    </div>
  )
}