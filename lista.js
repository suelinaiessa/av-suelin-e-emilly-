Document.querySelectorAll('#lista-itens li').forEach(function(item)
{item.addEventListener('click',function (){
document.getElementById ('mensagem-item'). text.Content = This.getAttribute
('data-mensagem'); });
});
document.querySelectorAll('#lista-itens li').forEach(function(item) {
    item.addEventListener('click', function() {
        document.getElementById('mensagem-item').textContent = this.getAttribute
        ('data-mensagem')
        document.getElementById('imagem-item').src = this.getAttribute('data-imagem');
        document.getElementById('imagem-item').style.display = 'block'; 
        document.getElementById('descricao-item').textContent = this.getAttribute
    ('data-descricao');
});
});