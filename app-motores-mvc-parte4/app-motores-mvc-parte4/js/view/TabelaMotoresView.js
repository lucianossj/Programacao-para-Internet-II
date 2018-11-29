class TabelaMotoresView{
    constructor(seletor){
        this.tabelamotores = document.querySelector(seletor);
    }

    montarTabela(motores){
        var str=`
        <table>
            <tr>
                <th>Nome</th>
                <th>Imagem</th>
                <th>Descrição</th>
                <th>Uso</th>
            </tr>
    
        ${motores.map(function(motor){
            return `
            <tr>
                <td>${motor.nome}</td>
                <td>${motor.imagem}</td>
                <td>${motor.descricao}</td>
                <td>${motor.uso}</td>
            </tr>
            `;
        }).join("")}
        
        </table>`;
    
        console.log(str);
        this.tabelamotores.innerHTML = str;
    }
}