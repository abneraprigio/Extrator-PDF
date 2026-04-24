try {
    // Tenta acessar o objeto de aplicação do PDF.js
    const viewerApp = window.PDFViewerApplication || window.frames[0].PDFViewerApplication;
    
    if (viewerApp) {
        viewerApp.download();
        console.log("Download iniciado pelo objeto da aplicação!");
    } else {
        // Se não achar o objeto, força a impressão que gera o PDF
        window.print();
    }
} catch (e) {
    console.error("Erro ao tentar acesso direto, tentando comando de impressão...");
    window.print();
}