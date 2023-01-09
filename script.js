function gerarPdf(){
  var arquivoEnviado = document.getElementById("anexo").files;

  if (arquivoEnviado.length > 0){
    var arquivoCarregado = arquivoEnviado[0];
    var lerArquivo = new FileReader();
    lerArquivo.onload = function(arquivoCarregadoEvento){
      var srcDados = arquivoCarregadoEvento.target.result;

      window.jsPDF = window.jspdf.jsPDF;
      var novaImagem = document.createElement('img');
      novaImagem.src = srcDados;
      document.getElementById("receberImagem").innerHTML = novaImagem.outerHTML;

      var doc = new jsPDF();
      doc.text('Arquivo Enviado', 15, 20);
      doc.addImage(srcDados, 'JPEG', 15, 40,);
      doc.save('Relatorio.pdf');
    }

  }
  lerArquivo.readAsDataURL(arquivoCarregado);
}