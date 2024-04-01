$(document).ready(function () {

	const clipboard = new ClipboardJS('.btnClip');

	clipboard.on('success', function(e) {

		const id = '#' + e.trigger.getAttribute('id');
		const tooltip = bootstrap.Tooltip.getInstance(id);
		
		e.trigger.setAttribute('data-bs-original-title','Copiado');
		e.trigger.classList.add('btn-success');
		tooltip.show();
		
	});
});

function SwalMensaje(title, text, icon, url) {
    swal.fire({
	  title: title,
	  text: text,
	  icon: icon,
	  confirmButtonText: 'OK',
	  timer: 1500,
	  timerProgressBar: true
	}).then((result) => {

		//window.location =  url
		//window.location.reload();
	});
}

function GenerarHashHmac(){
	
		let inputData = $("#inputData").val();
        $.ajax({
            url: './hash-hmac.php',
            type: 'post',
            dataType: 'json',
            data: {"data": inputData},
            success: function(data) {

				if(data){
					setTimeout(function () {

						let div = '<div class="input-group col-12 mb-2"><span class="btn-primary badge d-flex align-items-center">';
						
						$('.card-data').html("");
						$('.card-data').append(div +'MD5</span><span class="form-control" id="md5">'+ data.md5 +'</span>'
						+'<button class="input-group-text btnClip" id="btnMD5" data-clipboard-text="'+ data.md5 +'" data-bs-toggle="tooltip" data-bs-title="Copiar"><i class="fa-regular fa-copy"></i></button></div>');
						
						$('.card-data').append(div +'SHA1</span><span class="form-control" id="sha1">'+ data.sha1 +'</span>'
						+'<button class="input-group-text btnClip" id="btnSHA1" data-clipboard-text="'+ data.sha1 +'" data-bs-toggle="tooltip" data-bs-title="Copiar"><i class="fa-regular fa-copy"></i></button></div>');
						
						$('.card-data').append(div +'SHA256</span><span class="form-control" id="sha256">'+ data.sha256 +'</span>'
						+'<button class="input-group-text btnClip" id="btnSHA256" data-clipboard-text="'+ data.sha256 +'" data-bs-toggle="tooltip" data-bs-title="Copiar"><i class="fa-regular fa-copy"></i></button></div>');
						
						$('.card-data').append(div +'SHA512</span><span class="form-control" id="sha512">'+ data.sha512 +'</span>'
						+'<button class="input-group-text btnClip" id="btnSHA512" data-clipboard-text="'+ data.sha512 +'" data-bs-toggle="tooltip" data-bs-title="Copiar"><i class="fa-regular fa-copy"></i></button></div>');
						
						$('.card-data').append(div +'WHIRLPOOL</span><span class="form-control" id="whirlpool">'+ data.whirlpool +'</span>'
						+'<button class="input-group-text btnClip" id="btnWHIRLPOOL" data-clipboard-text="'+ data.whirlpool +'" data-bs-toggle="tooltip" data-bs-title="Copiar"><i class="fa-regular fa-copy"></i></button></div>');

					}, 100);
					
					setTimeout(function () {
						const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
						const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
					}, 500);
	
					//SwalMensaje('Hash Generados', 'Se han generado los Hash HMAC.', 'success');
				}else{
					SwalMensaje('Hash no Generados', 'No se han generado los Hash HMAC.', 'error');
				}
            },
            error: function(jqXHR, status, error) {
				SwalMensaje('Error', 'Error al intentar de generar los Hash HMAC.', 'error');
            }
        });
	
}