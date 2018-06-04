/*
** VAR, LET E CONST
*/

function iniciarTime(iniciaJogoEmMN: boolean){

    const time: String = 'Messi e amigos';
    let cidade: String = 'em fortaleza';

    if(iniciaJogoEmMN){
        cidade = 'em Morada nova';
    }

   /* time = 'Ronaldo e amigos'; 
        {{ [ts] Cannot assign to 'time' because it is a constant or a read-only property. }}*/

    console.log(`${time} vão jogar ${cidade}`);
}

iniciarTime(true);