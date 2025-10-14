import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade do site de Pedro Canedo.',
}

export default function PrivacidadePage() {
  return (
    <div className="container py-12 md:py-20 max-w-4xl">
      <h1 className="text-4xl font-bold tracking-tighter mb-8">Política de Privacidade</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
        <p className="text-muted-foreground">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>

        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Informações Coletadas</h2>
          <p>
            Este site coleta informações mínimas necessárias para seu funcionamento:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Formulário de Contato:</strong> Nome, email, assunto e mensagem que você 
              fornece voluntariamente ao entrar em contato.
            </li>
            <li>
              <strong>Analytics:</strong> Dados anônimos de navegação para melhorar a experiência 
              do site (páginas visitadas, tempo de permanência, origem do acesso).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Uso das Informações</h2>
          <p>As informações coletadas são utilizadas para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Responder suas mensagens enviadas pelo formulário de contato</li>
            <li>Melhorar o conteúdo e a experiência do site</li>
            <li>Análises estatísticas de uso do site</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Compartilhamento de Dados</h2>
          <p>
            Seus dados pessoais <strong>não são vendidos, alugados ou compartilhados</strong> com 
            terceiros, exceto quando necessário para prestação de serviços (exemplo: provedor de email).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Cookies e Tecnologias Similares</h2>
          <p>
            Este site utiliza cookies essenciais para seu funcionamento e cookies de analytics para 
            entender como os visitantes utilizam o site. Você pode desabilitar cookies nas configurações 
            do seu navegador.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Segurança</h2>
          <p>
            Implementamos medidas de segurança adequadas para proteger suas informações contra 
            acesso não autorizado, alteração, divulgação ou destruição.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Seus Direitos</h2>
          <p>Você tem o direito de:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Solicitar acesso aos seus dados pessoais</li>
            <li>Solicitar correção de dados incorretos</li>
            <li>Solicitar exclusão dos seus dados</li>
            <li>Retirar seu consentimento a qualquer momento</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Links Externos</h2>
          <p>
            Este site pode conter links para sites externos. Não nos responsabilizamos pelas 
            práticas de privacidade de sites de terceiros.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Alterações nesta Política</h2>
          <p>
            Esta política de privacidade pode ser atualizada periodicamente. Recomendamos revisar 
            esta página regularmente para se manter informado.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Contato</h2>
          <p>
            Para questões sobre esta política de privacidade ou para exercer seus direitos, 
            entre em contato através do email:{' '}
            <a href="mailto:devpedrocanedo@gmail.com" className="text-primary hover:underline">
              devpedrocanedo@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}

