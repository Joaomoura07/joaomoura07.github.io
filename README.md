---
tags: [criado-por-ia]
---

# Portfólio pessoal

Portfólio profissional e acadêmico de **joaomoura**, em português brasileiro. HTML5, CSS3 e JavaScript puro, sem dependências de produção, backend, rastreamento, fontes externas ou etapa de build. Preparado para um repositório pessoal `joaomoura.github.io`.

O nome exibido é `joaomoura`. A conta GitHub confirmada é [joaomoura](https://github.com/joaomoura), com repositório pessoal `joaomoura.github.io`. Todo o restante é um placeholder explícito: não há experiências, qualificações ou contatos inventados.

## Arquivos

```text
portfolio-pessoal/
├── index.html                 # Conteúdo, links e metadados
├── style.css                  # Layout, temas, responsividade e impressão
├── script.js                  # Tema persistente e ano automático
├── 404.html                   # Página de erro para GitHub Pages
├── README.md
├── .gitignore
├── .nojekyll                  # Publica os arquivos estáticos sem Jekyll
├── assets/
│   ├── images/
│   │   ├── profile.jpg        # Placeholder de foto; substitua pela sua
│   │   └── social-preview.png # Imagem de compartilhamento; personalize
│   └── favicon/
│       ├── favicon.svg
│       ├── favicon.ico
│       ├── favicon-32x32.png
│       └── apple-touch-icon.png
└── files/
    └── curriculo.pdf          # PDF válido, identificado como MODELO
```

As pastas `projects/`, `assets/icons/` e `assets/images/projects/` não são necessárias inicialmente. Crie-as apenas ao adicionar páginas, ícones ou imagens de projetos.

## Como executar localmente

No terminal, entre na pasta que contém `index.html`. Depois de clonar o repositório:

```bash
cd joaomoura.github.io
python3 -m http.server 8000
```

Em ambientes que usam o comando `python`, execute `python -m http.server 8000`.

Abra [http://localhost:8000](http://localhost:8000). Para parar o servidor, use `Ctrl+C`. Se a porta estiver ocupada, escolha outra, por exemplo `8001`.

Também é possível abrir `index.html` diretamente. O conteúdo, as imagens e os links relativos funcionam sem servidor; alguns navegadores podem restringir o armazenamento da preferência de tema em URLs `file://`. Um servidor local é preferível para os testes. A página 404 usa caminhos a partir da raiz do domínio e deve ser testada pelo servidor.

## Personalização

### Uma única fonte de conteúdo

Edite **`index.html`**. Os comentários `ALTERE AQUI`, `LINKS`, `PROJETOS`, `CONTATO` e `OPCIONAL` identificam os blocos. Os dados não são gerados com JavaScript: isso mantém o site legível sem scripts e evita manter HTML e `data.js` duplicados.

Use a busca global para localizar:

| Campo | O que substituir |
| --- | --- |
| `joaomoura` | Nome já confirmado; só altere se desejar |
| `SEU TÍTULO PROFISSIONAL` | Seu título real, também nos metadados |
| `SUA BIO PROFISSIONAL` | Introdução e apresentação completa |
| `SEUS INTERESSES E OBJETIVOS` | Temas, tecnologias e objetivos reais |
| `SEU EMAIL` / `SEU_EMAIL` | Email visível e endereço dos links `mailto:` |
| `GITHUB_URL`, `LINKEDIN_URL` | URLs completas, iniciadas por `https://` |
| `EMPRESA`, `CARGO`, `PERÍODO`, `CIDADE / REMOTO` | Experiências reais |
| `UNIVERSIDADE`, `CURSO`, `GRAU`, `SITUAÇÃO` | Formação acadêmica |
| `Projeto 01` até `Projeto 06`, `DESCRIÇÃO`, `ANO` | Projetos, resultados e datas |
| `TECNOLOGIA`, `LINGUAGEM`, `FERRAMENTA` | Somente conhecimentos reais |
| `NOME DA CERTIFICAÇÃO`, `INSTITUIÇÃO EMISSORA`, `DATA` | Certificações e datas |
| `joaomoura` | Usuário GitHub já configurado no canonical, Open Graph e Twitter Cards |

Apague blocos que não se aplicam a você. Não é preciso preencher todas as seções.

### Foto, currículo e imagem social

- Substitua `assets/images/profile.jpg` por sua foto, de preferência quadrada, com cerca de 480×480 pixels. Mantenha o caminho ou atualize o `src`. Troque o `alt` por `Foto de joaomoura` e remova o `figcaption` de placeholder. O CSS exibe a imagem em 144×144 com `object-fit: cover`.
- Substitua `files/curriculo.pdf` pelo seu currículo real. O arquivo incluído é um **modelo com placeholders**, não um currículo final. Depois de trocar, altere `PDF · modelo` para `PDF` no link do topo. O PDF abre em nova aba com `rel="noopener noreferrer"`.
- Personalize `assets/images/social-preview.png` (1200×630) e os textos `og:image:alt` e `twitter:image:alt`. Os favicons incluídos usam o monograma `jm`; podem ser substituídos pelos mesmos nomes.

### Links sociais e contato

O link do GitHub já está configurado no topo e no contato. LinkedIn, email e demais links ainda não configurados ficam **comentados no HTML**. Isso evita destinos quebrados, emails inválidos e links sem função. Para habilitar:

1. Encontre o bloco `LINKS` no cabeçalho e o bloco `CONTATO` no final.
2. Substitua os placeholders pelos endereços reais.
3. Remova `<!--` e `-->` em torno **apenas dos links preenchidos**; preserve ou exclua os demais exemplos.
4. No contato, substitua o parágrafo `SEU EMAIL` pelo bloco configurado.

Exemplo de estrutura, para preencher antes de usar:

```html
<a href="GITHUB_URL" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
<a href="mailto:SEU_EMAIL">Enviar email ↗</a>
```

O topo e o contato têm links independentes: atualize ambos. Links opcionais como Lattes, ORCID, Google Scholar e outros podem ser adicionados no mesmo formato. Não use `href="#"` para simular um destino.

### Experiência, formação e projetos

Cada item é um `<article>`. Duplique ou remova um bloco inteiro para adicionar ou retirar conteúdo. Os seis projetos já possuem exemplos comentados de links GitHub e demo. Configure cada URL antes de descomentar. Não há limite de seis projetos.

O primeiro projeto inclui um exemplo de imagem opcional. Para usá-lo, crie `assets/images/projects/`, adicione o arquivo, atualize o caminho, escreva um `alt` descritivo e ajuste `width`/`height` para as dimensões reais. Use WebP/AVIF quando possível e mantenha `loading="lazy"` para imagens abaixo da primeira tela.

### Tecnologias, certificações e seções opcionais

As tecnologias são agrupadas em Linguagens, Backend, Frontend e Ferramentas; edite os itens e remova categorias que não se apliquem. Certificações aceitam instituição, data, link e ID da credencial opcional.

Pesquisa e Prêmios estão completas como estrutura, mas começam ocultas com o atributo HTML `hidden`, inclusive sem JavaScript. Para exibir:

```html
<section id="pesquisa" class="content-section" aria-labelledby="pesquisa-titulo">
```

Remova somente `hidden`, preencha o conteúdo e ative os links configurados. Pesquisa suporta título, autores, conferência/revista, ano, DOI, PDF e código. Prêmios suporta nome, instituição, ano e descrição. Se quiser, adicione links na navegação com `href="#pesquisa"` e `href="#premios"`.

### Aparência, tema e idioma

As variáveis no início de `style.css` controlam cores e largura máxima (840px). A fonte é a stack do sistema, sem downloads. O layout usa espaçamento, divisórias e numeração discreta de seções.

O botão de tema percorre **Sistema → Claro → Escuro → Sistema**. Preferências manuais ficam no `localStorage`, chave `portfolio-theme`. Voltar a Sistema remove a preferência salva; mudanças do tema do sistema passam a ser acompanhadas automaticamente. Se storage for bloqueado, o botão ainda funciona durante a visita. O script executa antes do CSS para aplicar a escolha salva antes da primeira pintura.

Sem JavaScript, a página segue `prefers-color-scheme`, a navegação e todo o conteúdo continuam funcionando, o botão fica oculto e o rodapé mostra o nome sem ano. Não há ano fixo no HTML.

Uma futura versão em inglês pode ser criada traduzindo o HTML e mudando `lang`, metadados e rótulos do botão em `script.js`. Internacionalização não foi adicionada.

## GitHub Pages

### Passo 1 — Criar o repositório

Crie um repositório **público e vazio**, sem README, licença ou `.gitignore` gerados pelo GitHub, chamado:

```text
joaomoura.github.io
```

O nome do repositório corresponde à conta confirmada, em minúsculas. O GitHub Pages está disponível para repositórios públicos no plano gratuito. Não é necessário contratar servidor ou banco de dados.

### Passo 2 — Enviar somente os arquivos do site

O `<head>` já usa `https://joaomoura.github.io/`. Revise os demais placeholders e execute os comandos apenas na pasta que contém os arquivos do site, para que `index.html` fique na raiz do repositório:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/joaomoura/joaomoura.github.io.git
git push -u origin main
```

Esses comandos são para um repositório local novo. Se ele já existir, confira `git status` e `git remote -v` antes de repetir a configuração. Autentique-se no GitHub pelo mecanismo de sua preferência; não coloque tokens nos arquivos do site.

### Passo 3 — Habilitar Pages

No repositório, abra **Settings → Pages → Build and deployment**:

1. Em **Source**, escolha **Deploy from a branch**.
2. Selecione a branch **main**.
3. Selecione a pasta **/(root)**.
4. Clique em **Save**.

O `.nojekyll` vazio está incluído para publicar os arquivos estáticos sem processamento Jekyll. Não é necessário instalar dependências, gerar `dist/` ou escrever um workflow de build.

### Passo 4 — Conferir a publicação

Após a implantação indicada em **Pages** ou **Actions**, o endereço será:

```text
https://joaomoura.github.io/
```

A atualização pode levar até dez minutos. Confira a página, navegação, tema, currículo, foto, favicons e compartilhamento. A `404.html` da raiz será usada automaticamente pelo GitHub para URLs inexistentes.

Os assets da página principal usam caminhos relativos. A 404 usa caminhos a partir de `/`, apropriados ao site pessoal pedido. Se futuramente publicar em `joaomoura.github.io/outro-repositorio/`, adapte os caminhos da 404 e os metadados para essa subpasta.

Documentação oficial: [criar um site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), [configurar a fonte de publicação](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) e [configurar uma página 404](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site).

### Atualizações futuras

Depois de editar e conferir localmente:

```bash
git add .
git commit -m "Atualiza portfolio"
git push
```

## Domínio personalizado — opcional

Para usar futuramente um domínio como `meunome.dev`, `meunome.com` ou `meunome.com.br`:

1. Registre o domínio e verifique a titularidade conforme a orientação do GitHub.
2. Em **Settings → Pages → Custom domain**, informe o domínio e salve.
3. Configure o DNS no provedor. Um subdomínio como `www` usa CNAME apontando para `joaomoura.github.io`, sem protocolo ou caminho. Para o domínio raiz, siga os registros A/ALIAS/ANAME atuais da documentação oficial.
4. Aguarde a validação e habilite **Enforce HTTPS** quando disponível.
5. Atualize canonical, `og:url`, `og:image` e `twitter:image` para o domínio novo.

Na publicação por branch, o GitHub pode criar um arquivo `CNAME` por commit; use `git pull` antes de continuar editando localmente. Nenhum domínio ou arquivo `CNAME` foi configurado neste projeto.

Consulte [gerenciar um domínio personalizado](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Acessibilidade e comportamento

- HTML semântico, um `h1` e hierarquia de títulos; `lang="pt-BR"`.
- Link “Pular para o conteúdo”, foco visível, navegação por teclado e áreas clicáveis de pelo menos 44px de altura.
- Navegação móvel que quebra linhas naturalmente, sem menu dependente de JavaScript.
- Temas com cores de alto contraste e respeito a `prefers-reduced-motion`.
- Imagens com `alt`, dimensões explícitas e foto otimizada.
- Pesquisa e prêmios ocultos de forma nativa até sua configuração.
- Estilos de impressão com fundo branco, texto preto, URLs externas e ocultação dos controles.
- Ano automático; sem formulários, cookies ou requisições para terceiros.

## Verificação antes de publicar

1. Abra a página nas larguras 375, 768, 1024 e 1440px; confirme que nada exige rolagem horizontal.
2. Use Tab, Shift+Tab e Enter para testar o link de salto, a navegação, o currículo e o tema. Verifique também zoom de 200%.
3. Teste Sistema, Claro e Escuro; recarregue a página após uma escolha manual e volte a Sistema.
4. Desabilite JavaScript e confirme que conteúdo, âncoras, imagens e PDF permanecem disponíveis.
5. Abra o currículo e confira as imagens. Ative apenas links sociais e projetos já configurados.
6. Confira erros no console, todas as âncoras e cada link externo. Links `_blank` devem manter `rel="noopener noreferrer"`.
7. Revise `<title>`, descrições, autor, canonical, Open Graph e Twitter Cards. URLs de compartilhamento precisam ser públicas e absolutas.
8. Teste impressão e abra `/404.html`. O servidor simples Python não redireciona erros para essa página; teste uma rota inexistente no GitHub Pages após publicar.
9. No Chrome DevTools, rode Lighthouse em uma janela sem extensões para medir Performance, Accessibility, Best Practices e SEO. A meta é 90+; resultados dependem do conteúdo final, ambiente e hospedagem.

Este projeto foi preparado para GitHub Pages, mas a publicação real depende da criação/configuração do seu repositório. Nenhuma conta ou implantação é configurada automaticamente.

### Verificação realizada em 22/09/2026

Lighthouse **13.5.0**, perfil mobile, em Chrome isolado e servidor HTTP local:

| Categoria | Resultado |
| --- | --- |
| Performance | 100/100 |
| Accessibility | 100/100 |
| Best Practices | 100/100 |
| SEO | 100/100 |

Foram verificadas as larguras de 375, 768, 1024 e 1440px nos dois temas, sem overflow horizontal. O axe-core não apontou violações nas verificações automatizadas de acessibilidade em claro e escuro. Também passaram os testes de navegação por teclado, foco, âncoras, recursos HTTP, arquivo PDF válido, tema persistido, mudança do tema do sistema, storage bloqueado, texto a 200%, página sem JavaScript, impressão e redução de movimento. Nenhum erro inesperado de console foi observado; o teste da 404 produz a resposta de erro esperada.

A 404 foi conferida diretamente e em uma rota aninhada simulando a entrega do GitHub Pages. A implantação pública ainda não foi realizada. As notas do Lighthouse medem esta versão local com placeholders, não garantem o mesmo resultado após trocar conteúdo ou publicar; refaça a medição no endereço final. Auditoria automática também não substitui toda a avaliação manual de acessibilidade.

## Referência

A [página de Itamar Rocha](https://itamarrocha.github.io/) foi consultada como referência de organização e leitura. A implementação, os estilos e os assets deste projeto são próprios; textos, imagens, código e identidade da referência não foram reutilizados.
