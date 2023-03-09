// About us Tab

let aboutUs = {
  Anexos: `<div class="flex box-view-container">
            <div class="col-xs-3 box-view-nome">
              <h3>Requerimento</h3>
            </div>

            <div class="col-xs-9 box-view-doc">
              <a href="#">
                <svg
                  width="14"
                  height="17"
                  viewBox="0 0 14 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 13V7H0L7 0L14 7H10V13H4ZM0 17V15H14V17H0Z"
                    fill="#344767"
                  />
                </svg>
                documento.pdf
              </a>

              <p>01/03/2023</p>
            </div>
          </div>`,
  Despachos: `<div class="flex box-view-container">
            <div class="col-xs-5 box-processo-nome">
              <h3>Despacho 2</h3>
              <p><strong>Data:</strong> 01/03/2023 às 13:30h</p>
              <p><strong>Nome do Servidor:</strong> Ariane de Souza Barbosa</p>
              <p><strong>Função:</strong> Teste</p>
              <p><strong>Unidade:</strong> UFITASRS</p>
            </div>
            <div class="col-xs-7 box-processo-doc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                vitae pellentesque sapien, nec mollis odio. Nunc vitae
                scelerisque eros, eu ornare tortor. Donec bibendum sapien neque,
                ut vehicula tellus convallis ac. Curabitur commodo lectus odio,
                sed condimentum neque facilisis eu. Vivamus in consectetur leo.
                Sed sollicitudin dolor sit amet sapien faucibus, sed lacinia
                nisi tempor. Nunc finibus elit vel porttitor sodales. Ut
                bibendum enim ac consequat varius. Maecenas eleifend molestie
                magna, eu placerat ante fermentum at.
              </p>
            </div>
          </div>`,
  Documentos: `
          <div class="flex box-view-container">
            <div class="col-xs-6 box-documentos-nome">
              <h3>Ordem de Serviço</h3>
            </div>
            <div class="box-documentos-doc">
              <a href="#"
                ><svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.160034 11.5V5.50003H8.16003V0.660034L16 8.50003L8.16003 16.34V11.5H0.160034Z"
                    fill="#344767"
                  /></svg
              ></a>
            </div>
          </div>`,
};

var about_tags = document.getElementsByClassName("single-tab");

for (var a = 0; a < about_tags.length; a++) {
  about_tags[a].onclick = function () {
    var selecionado = this.innerHTML;

    document.getElementById("box-view-processo").innerHTML =
      aboutUs[selecionado];
  };
}
