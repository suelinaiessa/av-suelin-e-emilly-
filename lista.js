Document.querySelectorAll('#lista-itens li').forEach(function(item)
{item.addEventListener('click',function (){
document.getElementById ('mensagem-item'). text.Content = This.getAttribute
('data-mensagem'); });
});
