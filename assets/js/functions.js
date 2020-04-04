// Função para o consumo da API, que realiza o cálculo da hipotenusa
function fetchHipotenusa(data) {
        const header = new Headers({
            "Content-Type": "application/json"
          });
            const URL = 'https://atlas-231814.appspot.com/calcula';
            fetch(URL, {
                method: 'post',
                body: JSON.stringify(data),
                headers: header
            })
                .then(resposta => resposta.json())
                .then(data => showResp(data))
                .catch(erro => console.error(erro));
}

// Função para retorno do resultado no input da hipotenusa
function showResp(resp) {
    document.getElementById('hip').value = resp.hip.toFixed(2);
}

const cat_op = document.getElementById('cat_op')
const cat_adj = document.getElementById('cat_adj')
const hip = document.getElementById('hip')
      
// Realização de Destaque no texto do desenho do triangulo
cat_op.onmouseover = () => addHighlight(cat_op)
cat_op.onmouseout = () => removeHighlight(cat_op)
cat_adj.onmouseover = () => addHighlight(cat_adj)
cat_adj.onmouseout = () => removeHighlight(cat_adj)
hip.onmouseover = () => addHighlight(hip)
hip.onmouseout = () => removeHighlight(hip)

function addHighlight(id) {
    const text = document.getElementById(`${id.name}_text`)
    text.classList.add('highlight')
}

function removeHighlight(id) {
    const text = document.getElementById(`${id.name}_text`)
    text.classList.remove('highlight')
}