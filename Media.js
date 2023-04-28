var Media, n1, n2, n3, n4;

n1 = prompt ('Digite a primeira nota :');
n2 = prompt ('Digite a segunda nota :');
n3 = prompt ('Digigte a terceira nota :');
n4 = prompt ('Digite a quarta nota :');

n1 = eval (n1);
n2 = eval (n2);
n3 = eval (n3);
n4 = eval (n4);

media = (n1 + n2 + n3 + n4)/4; 
alert (`Sua média é : ${media}`);

if (media >= 6)
{
    alert ("Você está Aprovado!");
}

else {
    if (media <= 5) {
        alert ("Você está Reprovado!");
    }

    else {
        alert ("Você está de Recuperação!"); 
    }
}

