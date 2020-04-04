// Validação client side dos valores do formulário

function validateForm (event, form) {
    event.preventDefault();
    document.querySelectorAll('.invalid-feedback').forEach(e => {e.style.display = "none"})
    const inputCatOp = form.cat_op.value
    const inputCatAdj = form.cat_adj.value
    if (inputCatOp && inputCatAdj) {
        if (inputCatAdj > 0) {
            if(inputCatOp > 0) {
                const data = {
                    "cat_op": parseInt(inputCatOp),
                    "cat_adj": parseInt(inputCatAdj)
                }
            fetchHipotenusa(data)
            }
            else {
                document.getElementById('feedbackCatOp').style.display = "block"; 
            }
        }
        else {
            document.getElementById('feedbackCatAdj').style.display = "block"; 
        }  
    }
    else {
        document.getElementById('feedbackHip').style.display = "block";
    }
}