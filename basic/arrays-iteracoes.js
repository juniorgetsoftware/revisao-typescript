var notasAlunos = [10, 8, 5, 7, 9];
//INDICES - IN
for (var i in notasAlunos) {
    console.log(i);
}
notasAlunos.forEach(function (a) { return console.log(a); });
//VALORES - OF
for (var _i = 0, notasAlunos_1 = notasAlunos; _i < notasAlunos_1.length; _i++) {
    var nota = notasAlunos_1[_i];
    console.log(nota);
}
