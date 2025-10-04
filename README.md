# Painel Digital

Este projeto consiste no desenvolvimento de um painel digital para gerenciamento do fluxo de pacientes em salas de espera. A aplicação foi desenvolvida seguindo o conceito de **Single Page Application (SPA)**, alternando entre dois estados visuais principais:

1.  **Estado Padrão:** Exibe um vídeo principal, ancorado via YouTube, no centro da tela.
2.  **Estado em Chamada:** Exibe as informações da senha e local de atendimento em destaque no centro da tela, enquanto o vídeo é reduzido e movido para um canto.

**Tecnologias Utilizadas:** HTML, CSS, JavaScript e Angular.

---

## 1. Instruções para Execução Local

Este projeto foi gerado a partir do Angular CLI (versão 20.3.3).

**Pré-requisito:**
- Node.js: v22.20 (mínimo v20.19)

Para iniciar o projeto localmente:

1.  **Instale as dependências:**
    ```bash
    npm install
    ```
2.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run ng serve
    ```

O projeto poderá ser acessado em `http://localhost:4200/`.

---

## 2. Implementação

A solução atende aos seguintes requisitos listados nos Critérios de Aceite:

| ID         | Critério                        | Detalhes                                                                                                                                                                   |
| :--------- | :------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **REQ_01** | Aplicação de Página Única (SPA) | O projeto consiste em apenas uma tela, na qual os estados (`emChamada` e `Padrão`) mudam dinamicamente.                                                                    |
| **REQ_02** | Animação Suave                  | A transição do vídeo e da chamada em destaque utiliza classes de transição do CSS/Tailwind para um movimento que não seja abrupto.                                         |
| **REQ_03** | Simulação da Chamada            | O evento de nova chamada é disparado através do método `simularNovaChamada()` associado a um botão posicionado no canto superior direito da coluna que exibe as chamadas . |
| **REQ_04** | Timer de Retorno Automático     | O "Estado de Chamada" é ativado por **15 segundos**, utilizando um `setTimeout()`. Após o timer, a aplicação retorna ao "Estado Padrão".                                   |
| **REQ_05** | Reprodução de Vídeo             | O player de vídeo está configurado para reprodução em loop e com som ativo.                                                                                                |
| **REQ_06** | Atualização do Histórico        | A cada nova chamada, a chamada anterior é adicionada ao topo.                                                                                                              |
| **REQ_07** | Código Limpo e Organizado       | O código segue a estrutura modular do Angular, utiliza o `CommonModule` e possui **comentários** explicativos sobre a lógica de controle de estado e simulação de dados.   |
| **REQ_08** | Suporte a Playlist              | O componente do player aceita a configuração de uma playlist do YouTube.                                                                                                   |
| **REQ_09** | Responsividade                  | A aplicação se adapta a diferentes viewports, respeitando o tamanho mínimo de 1366 x 768px.                                                                                |

---
