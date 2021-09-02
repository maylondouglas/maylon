"use strict"
/*exc4. Uma loja utiliza o código V para pagamentos à vista e P para pagamentos a prazo. Escreva um programa que 
receba o código e o valor de 15 vendas. Calcule e mostre: 
a. O valor total das vendas à vista; 
b. O valor total das vendas a prazo; 
c. O valor total das vendas efetuadas; 
*/

function exec04(){
    let contaVendaAvista = 0, contVendaAprazo = 0,somaVenda = 0,qtVendaAprazo = 0, qtVendaAvista = 0;  
    

    let i = 1;
    do{
        let codVenda =   String(prompt('Informe a venda (P - a prazo) (V - a vista).:'));
        
        while (codVenda != 'P' && codVenda != 'p' && codVenda != 'V' && codVenda != 'v'){
             codVenda =   String(prompt('Informe a venda (P - a prazo) (V - a vista).:'));
        }

        let valorVenda = Number(prompt('Informe o valor da venda..................:'));
        if(codVenda == 'P'|| codVenda == 'p'){
            contVendaAprazo++;
            qtVendaAprazo += valorVenda;
        }
        if (codVenda == 'V' || codVenda == 'v'){
            contaVendaAvista++;
            qtVendaAvista += valorVenda;
        }

        somaVenda += valorVenda;


        i++;
    }while (i <= 2);

    console.log('Valor total das vendas a prazo ......:',qtVendaAprazo);
    console.log('\nValor total das vendas a vista ......:',qtVendaAvista);
    console.log('\nValor total  de todas as vendas  ....:',somaVenda);

}
exec04();



