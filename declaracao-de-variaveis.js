/*
** VAR, LET E CONST
*/
function iniciarTime(iniciaJogoEmMN) {
    var time = 'Messi e amigos';
    var cidade = 'em fortaleza';
    if (iniciaJogoEmMN) {
        cidade = 'em Morada nova';
    }
    /* time = 'Ronaldo e amigos';
         {{ [ts] Cannot assign to 'time' because it is a constant or a read-only property. }}*/
    console.log(time + " v\u00E3o jogar " + cidade);
}
iniciarTime(true);
