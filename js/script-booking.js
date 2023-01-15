// JavaScript Document
var nz_quantity = document.getElementById('nzQ').value;
var ausM_quantity = document.getElementById('ausMQ').value;
var ausP_quantity = document.getElementById('ausPQ').value;
addEventListener('change', subtotal);

function subtotal()
{
	if(nz_quantity > 0)
		{
			var nz_subtotal = nz_quantity * 9450.00;
			document.getElementById("p").innerHTML = nz_subtotal;
		}
	if(ausM_quantity > 0)
		{
			var ausM_subtotal = ausM_quantity * 9450.00;
			document.getElementById("ausM_subtotal").innerHTML = ausM_subtotal;
		}
	if(ausP_quantity > 0)
		{
			var ausP_subtotal = ausP_quantity * 9450.00;
			document.getElementById("p").innerHTML = ausP_subtotal;
		}
}