# PDF Downloader & Print Fallback

Este script em JavaScript fornece uma solução robusta para descarregar documentos PDF em aplicações web, oferecendo uma alternativa de impressão caso o download direto não seja possível.

## 📋 Descrição

O código foi desenhado para interagir preferencialmente com o **PDF.js** (o visualizador de PDF padrão de muitos navegadores e sistemas). Ele tenta acionar o método nativo de download da aplicação e, caso encontre restrições ou o objeto não esteja disponível, recorre à função de impressão do sistema.

## 🚀 Como Funciona

O fluxo de execução segue estes passos:
1. **Tentativa de Acesso:** Procura pelo objeto `PDFViewerApplication` no contexto global ou no primeiro `iframe`.
2. **Download Direto:** Se encontrado, executa o método `.download()`.
3. **Fallback (Contingência):** Se o objeto não existir ou se ocorrer um erro de permissão (como CORS), o script dispara o `window.print()`.

## 💻 Código para Implementação

```javascript
/**
 * Tenta descarregar o PDF via API do visualizador
 * ou abre a janela de impressão como fallback.
 */
try {
    // Tenta aceder ao objeto de aplicação do PDF.js (Global ou Iframe)
    const viewerApp = window.PDFViewerApplication || window.frames[0].PDFViewerApplication;
    
    if (viewerApp) {
        viewerApp.download();
        console.log("Download iniciado pelo objeto da aplicação!");
    } else {
        // Fallback: força a impressão para permitir "Guardar como PDF"
        window.print();
    }
} catch (e) {
    console.error("Erro ao aceder ao viewer, a tentar comando de impressão...", e);
    window.print();
}
