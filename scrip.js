<script>
        function sumar() {
            var numero1 = parseFloat(document.getElementById('numero1').value);
            var numero2 = parseFloat(document.getElementById('numero2').value);
            var resultado = numero1 + numero2;
            document.getElementById('resultado').innerHTML = "Resultado: " + resultado;
        }

        function restar() {
            var numero1 = parseFloat(document.getElementById('numero1').value);
            var numero2 = parseFloat(document.getElementById('numero2').value);
            var resultado = numero1 - numero2;
            document.getElementById('resultado').innerHTML = "Resultado: " + resultado;
        }
    </script>
